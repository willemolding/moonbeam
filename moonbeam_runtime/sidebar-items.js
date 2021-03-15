initSidebarItems({"constant":[["BLOCKS_PER_DAY",""],["GAS_PER_SECOND","Current approximation of the gas/s consumption considering EVM execution over compiled WASM (on 4.4Ghz CPU). Given the 500ms Weight, from which 75% only are used for transactions, the total EVM execution gas limit is: GAS_PER_SECOND * 0.500 * 0.75 ~= 15_000_000."],["GLMR",""],["MAXIMUM_BLOCK_WEIGHT","Maximum weight per block"],["VERSION","This runtime version."],["WASM_BINARY",""],["WASM_BINARY_BLOATY",""],["WEIGHT_PER_GAS","Approximate ratio of the amount of Weight per Gas. u64 works for approximations because Weight is a very small unit compared to gas."],["WEIGHT_PER_SECOND",""]],"enum":[["Call",""],["Event",""],["OriginCaller",""]],"fn":[["native_version","The version information used to identify this runtime when compiled natively."]],"macro":[["construct_runtime","Construct a runtime, with the given name and the given modules."],["parameter_types","Create new implementations of the `Get` trait."]],"mod":[["api",""],["opaque","Opaque types. These are used by the CLI to instantiate machinery that don't need to know the specifics of the runtime. They can then be made to be agnostic over specific formats of data like extrinsics, allowing for them to continue syncing the network through upgrades to even the core datastructures."]],"struct":[["BlockGasLimit",""],["BlockHashCount",""],["BlockLength","We allow for 5 MB blocks."],["BlockWeights","We allow for one half second of compute with a 6 second average block time. These values are dictated by Polkadot for the parachain."],["BlocksPerRound","Moonbeam starts a new round every hour (600 * block_time)"],["BondDuration","Reward payments and validator exit requests are delayed by 2 hours (2 * 600 * block_time)"],["CooloffPeriod",""],["EnactmentPeriod",""],["EthereumFindAuthor",""],["ExistentialDeposit",""],["FastTrackVotingPeriod",""],["GenesisConfig",""],["IdentityFee","Implementor of `WeightToFeePolynomial` that maps one unit of weight to one unit of fee."],["InstantAllowed",""],["LaunchPeriod",""],["MaxFee","The maximum percent a validator can take off the top of its rewards is 50%"],["MaxLocks",""],["MaxNominatorsPerValidator","Maximum 10 nominators per validator"],["MaxProposals",""],["MaxValidators","Maximum 8 valid block authors at any given time"],["MaxValidatorsPerNominator","Maximum 8 validators per nominator (same as MaxValidators)"],["MaxVotes",""],["MaximumSchedulerWeight",""],["MinNominatorStk","Minimum stake required to be reserved to be a nominator is 5"],["MinValidatorStk","Minimum stake required to be reserved to be a validator is 1_000"],["MinimumDeposit",""],["MinimumPeriod",""],["MoonbeamGasWeightMapping",""],["Origin",""],["PalletInfo","Provides an implementation of `PalletInfo` to provide information about the pallet setup in the runtime."],["Perbill","A fixed point representation of a number in the range [0, 1]."],["Permill","A fixed point representation of a number in the range [0, 1]."],["PhantomData","Zero-sized type used to mark things that \"act like\" they own a `T`."],["PreimageByteDeposit",""],["Runtime",""],["RuntimeApi",""],["RuntimeApiImpl","Implements all runtime apis for the client side."],["SS58Prefix",""],["TransactionByteFee",""],["TransactionConverter",""],["Version",""],["VotingPeriod",""]],"trait":[["BuildStorage","Complex storage builder stuff."],["FindAuthor","A trait for finding the author of a block header based on the `PreRuntime` digests contained within it."],["Get","A trait for querying a single value from a type."],["Randomness",""],["StorageValue","A trait for working with macro-generated storage values under the substrate storage API."]],"type":[["AccountId","Some way of identifying an account on the chain. We intentionally make it equivalent to the public key of our transaction signing scheme."],["AccountIndex","The type for looking up accounts. We don't expect more than 4 billion of them, but you never know..."],["Address","The address format for describing accounts."],["AuthorFilter",""],["AuthorInherent",""],["Balance","Balance of an account."],["Balances",""],["BalancesConfig",""],["Block","Block type as expected by this runtime."],["BlockId","BlockId type as expected by this runtime."],["BlockNumber","An index to a block."],["CheckedExtrinsic","Extrinsic type that has already been checked."],["ConsensusEngineId","Consensus engine unique ID."],["Democracy",""],["DemocracyConfig",""],["DigestItem","Digest item type."],["EVM",""],["EVMConfig",""],["Ethereum",""],["EthereumChainId",""],["EthereumChainIdConfig",""],["EthereumConfig",""],["Executive","Executive: handles dispatch to the various modules."],["Hash","A hash of some data used by the chain."],["Header","Block header type as expected by this runtime."],["Index","Index of a transaction in the chain."],["ParachainInfo",""],["ParachainInfoConfig",""],["ParachainSystem",""],["RandomnessCollectiveFlip",""],["Scheduler",""],["SchedulerConfig",""],["Signature","Alias to 512-bit hash when used in the context of a transaction signature on the chain."],["SignedBlock","A Block signed with a Justification"],["SignedExtra","The SignedExtension to the basic transaction logic."],["Stake",""],["StakeConfig",""],["Sudo",""],["SudoConfig",""],["System",""],["SystemConfig",""],["Timestamp",""],["TransactionPayment",""],["UncheckedExtrinsic","Unchecked extrinsic type as expected by this runtime."],["Utility",""],["Weight","Numeric range of a transaction weight."]]});