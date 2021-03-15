(function() {var implementors = {};
implementors["account"] = [{"text":"impl Sync for EthereumSignature","synthetic":true,"types":[]},{"text":"impl Sync for EthereumSigner","synthetic":true,"types":[]}];
implementors["author_inherent"] = [{"text":"impl&lt;T&gt; Sync for Module&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Sync for InherentDataProvider","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Sync for Error&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Sync for Call&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Config&gt;::AccountId: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Sync for InherentError","synthetic":true,"types":[]}];
implementors["moonbeam"] = [{"text":"impl Sync for Extensions","synthetic":true,"types":[]},{"text":"impl Sync for ExtensionsFork","synthetic":true,"types":[]},{"text":"impl Sync for Executor","synthetic":true,"types":[]},{"text":"impl Sync for BuildSpecCommand","synthetic":true,"types":[]},{"text":"impl Sync for ExportGenesisStateCommand","synthetic":true,"types":[]},{"text":"impl Sync for ExportGenesisWasmCommand","synthetic":true,"types":[]},{"text":"impl Sync for RunCmd","synthetic":true,"types":[]},{"text":"impl Sync for Cli","synthetic":true,"types":[]},{"text":"impl Sync for RelayChainCli","synthetic":true,"types":[]},{"text":"impl Sync for Subcommand","synthetic":true,"types":[]},{"text":"impl Sync for Sealing","synthetic":true,"types":[]},{"text":"impl Sync for MockValidationDataInherentDataProvider","synthetic":true,"types":[]},{"text":"impl&lt;C, P, A&gt; Sync for FullDeps&lt;C, P, A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;C: Send + Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;P: Send + Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;A as ChainApi&gt;::Block: Block,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;&lt;A as ChainApi&gt;::Block as Block&gt;::Extrinsic: Send + Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;&lt;A as ChainApi&gt;::Block as Block&gt;::Hash: Send + Sync,&nbsp;</span>","synthetic":true,"types":[]}];
implementors["moonbeam_rpc_core_txpool"] = [{"text":"impl Sync for Summary","synthetic":true,"types":[]},{"text":"impl Sync for Transaction","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Sync for TxPoolResult&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Sync,&nbsp;</span>","synthetic":true,"types":[]}];
implementors["moonbeam_rpc_txpool"] = [{"text":"impl&lt;B, C, P&gt; Sync for TxPool&lt;B, C, P&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;C: Send + Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;P: Send + Sync,&nbsp;</span>","synthetic":true,"types":[]}];
implementors["moonbeam_runtime"] = [{"text":"impl Sync for BlockHashCount","synthetic":true,"types":[]},{"text":"impl Sync for Version","synthetic":true,"types":[]},{"text":"impl Sync for BlockWeights","synthetic":true,"types":[]},{"text":"impl Sync for BlockLength","synthetic":true,"types":[]},{"text":"impl Sync for SS58Prefix","synthetic":true,"types":[]},{"text":"impl Sync for MinimumPeriod","synthetic":true,"types":[]},{"text":"impl Sync for MaxLocks","synthetic":true,"types":[]},{"text":"impl Sync for ExistentialDeposit","synthetic":true,"types":[]},{"text":"impl Sync for TransactionByteFee","synthetic":true,"types":[]},{"text":"impl Sync for MoonbeamGasWeightMapping","synthetic":true,"types":[]},{"text":"impl Sync for MaximumSchedulerWeight","synthetic":true,"types":[]},{"text":"impl Sync for LaunchPeriod","synthetic":true,"types":[]},{"text":"impl Sync for VotingPeriod","synthetic":true,"types":[]},{"text":"impl Sync for FastTrackVotingPeriod","synthetic":true,"types":[]},{"text":"impl Sync for EnactmentPeriod","synthetic":true,"types":[]},{"text":"impl Sync for CooloffPeriod","synthetic":true,"types":[]},{"text":"impl Sync for MinimumDeposit","synthetic":true,"types":[]},{"text":"impl Sync for MaxVotes","synthetic":true,"types":[]},{"text":"impl Sync for MaxProposals","synthetic":true,"types":[]},{"text":"impl Sync for PreimageByteDeposit","synthetic":true,"types":[]},{"text":"impl Sync for InstantAllowed","synthetic":true,"types":[]},{"text":"impl Sync for TransactionConverter","synthetic":true,"types":[]},{"text":"impl&lt;F&gt; Sync for EthereumFindAuthor&lt;F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Sync for BlockGasLimit","synthetic":true,"types":[]},{"text":"impl Sync for BlocksPerRound","synthetic":true,"types":[]},{"text":"impl Sync for BondDuration","synthetic":true,"types":[]},{"text":"impl Sync for MaxValidators","synthetic":true,"types":[]},{"text":"impl Sync for MaxNominatorsPerValidator","synthetic":true,"types":[]},{"text":"impl Sync for MaxValidatorsPerNominator","synthetic":true,"types":[]},{"text":"impl Sync for MaxFee","synthetic":true,"types":[]},{"text":"impl Sync for MinValidatorStk","synthetic":true,"types":[]},{"text":"impl Sync for MinNominatorStk","synthetic":true,"types":[]},{"text":"impl Sync for Runtime","synthetic":true,"types":[]},{"text":"impl !Sync for Origin","synthetic":true,"types":[]},{"text":"impl Sync for PalletInfo","synthetic":true,"types":[]},{"text":"impl Sync for GenesisConfig","synthetic":true,"types":[]},{"text":"impl Sync for RuntimeApi","synthetic":true,"types":[]},{"text":"impl Sync for Event","synthetic":true,"types":[]},{"text":"impl Sync for OriginCaller","synthetic":true,"types":[]},{"text":"impl Sync for Call","synthetic":true,"types":[]},{"text":"impl Sync for SessionKeys","synthetic":true,"types":[]},{"text":"impl&lt;Block:&nbsp;BlockT, C:&nbsp;CallApiAt&lt;Block&gt;&gt; Sync for RuntimeApiImpl&lt;Block, C&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;C::StateBackend: StateBackend&lt;HashFor&lt;Block&gt;&gt;,&nbsp;</span>","synthetic":false,"types":[]}];
implementors["pallet_author_filter"] = [{"text":"impl&lt;T&gt; Sync for Pallet&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Sync for _GeneratedPrefixForStorageEligibleRatio&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Sync for Half&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Sync for Event&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Config&gt;::AccountId: Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Config&gt;::BlockNumber: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Sync for Call&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Sync,&nbsp;</span>","synthetic":true,"types":[]}];
implementors["pallet_ethereum_chain_id"] = [{"text":"impl&lt;T&gt; Sync for Pallet&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Sync for GenesisConfig","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Sync for _GeneratedPrefixForStorageChainId&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Sync for Call&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Sync,&nbsp;</span>","synthetic":true,"types":[]}];
implementors["parachain_info"] = [{"text":"impl Sync for GenesisConfig","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Sync for Module&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Sync for Call&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Sync,&nbsp;</span>","synthetic":true,"types":[]}];
implementors["stake"] = [{"text":"impl&lt;Balance&gt; Sync for InflationInfo&lt;Balance&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Balance: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Sync for Range&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;AccountId, Balance&gt; Sync for Bond&lt;AccountId, Balance&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;AccountId: Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;Balance: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;AccountId, Balance&gt; Sync for ValidatorSnapshot&lt;AccountId, Balance&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;AccountId: Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;Balance: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;AccountId, Balance&gt; Sync for Validator&lt;AccountId, Balance&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;AccountId: Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;Balance: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;AccountId, Balance&gt; Sync for Nominator&lt;AccountId, Balance&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;AccountId: Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;Balance: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Sync for GenesisConfig&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Config&gt;::AccountId: Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;&lt;T as Config&gt;::Currency as Currency&lt;&lt;T as Config&gt;::AccountId&gt;&gt;::Balance: Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Config&gt;::Currency: Currency&lt;&lt;T as Config&gt;::AccountId&gt;,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Sync for Module&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Sync for ValidatorStatus","synthetic":true,"types":[]},{"text":"impl&lt;AccountId, Balance, BlockNumber&gt; Sync for RawEvent&lt;AccountId, Balance, BlockNumber&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;AccountId: Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;Balance: Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;BlockNumber: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Sync for Error&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Sync for Call&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Config&gt;::AccountId: Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;&lt;T as Config&gt;::Currency as Currency&lt;&lt;T as Config&gt;::AccountId&gt;&gt;::Balance: Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Config&gt;::Currency: Currency&lt;&lt;T as Config&gt;::AccountId&gt;,&nbsp;</span>","synthetic":true,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()