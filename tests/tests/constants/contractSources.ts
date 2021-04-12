import { AbiItem } from "web3-utils";

export const contractSources = {
  // simple incremental count contract to test contract with state changes
  TEST_CONTRACT_INCR: `
    pragma solidity >=0.8.0;
    
    contract Test3 {
        uint public count;
    
        constructor() public {
            count = 0;
        }
    
        function incr() public {
            count=count+1;
        }
    }`,
  // infinite loop call
  INFINITE_CONTRACT: `
    pragma solidity >=0.8.0;
    
    contract test {
        function infinite(uint a) public pure returns(uint d) {while (true) {}}
    }`,
  // infinite loop call with variable alocation
  INFINITE_CONTRACT_VAR: `
    pragma solidity >=0.8.0;
    
    contract test {
        function infinite(uint a) public pure returns(uint d) {while (true) {data=data+1;}}
    }`,
  // definite loop call with variable alocation
  FINITE_LOOP_CONTRACT: `
    pragma solidity >=0.8.0;
    
    contract Test4 {
        uint public count;
    
        constructor() public {
            count = 0;
        }
    
        function incr(uint n) public {
            uint i=0;
            while (i<n) {
                count=count+1;
                i+=1;
            }
        }
    }`,
};
