import { expect } from "chai";

import { describeWithMoonbeam } from "./util";
import { FIRST_CONTRACT_ADDRESS, GENESIS_ACCOUNT } from "./constants";
import { deployContractByName, getCompiled } from "./util/contracts";

describeWithMoonbeam("Moonbeam RPC (Contract Methods)", `simple-specs.json`, (context) => {
  let Test_Contract_ABI;
  before("create the contract", async function () {
    this.timeout(15000);
    Test_Contract_ABI = (await getCompiled("Test_Contract")).contract.abi;
    await deployContractByName(context.polkadotApi, context.web3, "Test_Contract");
  });

  it("get transaction by hash", async () => {
    const latestBlock = await context.web3.eth.getBlock("latest");
    expect(latestBlock.transactions.length).to.equal(1);

    const tx_hash = latestBlock.transactions[0];
    const tx = await context.web3.eth.getTransaction(tx_hash);
    expect(tx.hash).to.equal(tx_hash);
  });

  it("should return contract method result", async function () {
    const contract = new context.web3.eth.Contract(Test_Contract_ABI, FIRST_CONTRACT_ADDRESS, {
      from: GENESIS_ACCOUNT,
      gasPrice: "0x01",
    });

    expect(await contract.methods.multiply(3).call()).to.equal("21");
  });
  // Requires error handling
  it("should fail for missing parameters", async function () {
    const contract = new context.web3.eth.Contract(
      [{ ...Test_Contract_ABI[0], inputs: [] }],
      FIRST_CONTRACT_ADDRESS,
      {
        from: GENESIS_ACCOUNT,
        gasPrice: "0x01",
      }
    );
    await contract.methods
      .multiply()
      .call()
      .catch((err) =>
        expect(err.message).to.equal(
          `Returned error: VM Exception while processing transaction: revert`
        )
      );
  });

  // Requires error handling
  it("should fail for too many parameters", async function () {
    const contract = new context.web3.eth.Contract(
      [
        {
          ...Test_Contract_ABI[0],
          inputs: [
            { internalType: "uint256", name: "a", type: "uint256" },
            { internalType: "uint256", name: "b", type: "uint256" },
          ],
        },
      ],
      FIRST_CONTRACT_ADDRESS,
      {
        from: GENESIS_ACCOUNT,
        gasPrice: "0x01",
      }
    );
    await contract.methods
      .multiply(3, 4)
      .call()
      .catch((err) =>
        expect(err.message).to.equal(
          `Returned error: VM Exception while processing transaction: revert`
        )
      );
  });

  // Requires error handling
  it("should fail for invalid parameters", async function () {
    const contract = new context.web3.eth.Contract(
      [
        {
          ...Test_Contract_ABI[0],
          inputs: [
            {
              internalType: "address",
              name: "a",
              type: "address",
            },
          ],
        },
      ],
      FIRST_CONTRACT_ADDRESS,
      { from: GENESIS_ACCOUNT, gasPrice: "0x01" }
    );
    await contract.methods
      .multiply("0x0123456789012345678901234567890123456789")
      .call()
      .catch((err) =>
        expect(err.message).to.equal(
          `Returned error: VM Exception while processing transaction: revert`
        )
      );
  });
});
