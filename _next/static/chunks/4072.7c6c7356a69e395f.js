"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4072],{64072:function(n,t,r){r.r(t),r.d(t,{API_ETH_MOCK_ADDRESS:function(){return B.hP},AaveGovernanceService:function(){return w.d},BaseDebtToken:function(){return I.e},ChainId:function(){return y.a_},ChainIdToNetwork:function(){return y.qe},ChainlinkFeedsRegistry:function(){return c.Z0},DEFAULT_APPROVE_AMOUNT:function(){return B.zn},DEFAULT_DEADLINE:function(){return y.fc},DEFAULT_NULL_VALUE_ON_TX:function(){return B.k8},DebtSwitchAdapterService:function(){return U.h},DenominationAddresses:function(){return c.ar},Denominations:function(){return c.kX},ERC20Service:function(){return d.A},ERC20_2612Service:function(){return D.v},ExecutorType:function(){return m.t},FaucetService:function(){return P.H},GhoService:function(){return T.p},GovernancePowerDelegationTokenService:function(){return E.C},GovernanceVote:function(){return y._w},IncentivesController:function(){return f.u},IncentivesControllerV2:function(){return l.u},InterestRate:function(){return y.tk},LendingPool:function(){return h.f},LendingPoolBundle:function(){return p.k},MAX_UINT_AMOUNT:function(){return B.ke},PERMISSION:function(){return o.g},PERMISSION_MAP:function(){return o.Z},PermissionManager:function(){return e.Y},Pool:function(){return A.K},PoolBundle:function(){return g.D},ProposalState:function(){return m.r},ProtocolAction:function(){return y.UQ},SUPER_BIG_ALLOWANCE_NUMBER:function(){return B.Od},SURPLUS:function(){return B.zp},Stake:function(){return y.hj},StakingService:function(){return S.s},SynthetixService:function(){return _.K},UiIncentiveDataProvider:function(){return i.X},UiPoolDataProvider:function(){return u.I},UiStakeDataProvider:function(){return s.h},V3FaucetService:function(){return v.D},V3MigrationHelperService:function(){return k.a},WalletBalanceProvider:function(){return a.P},WithdrawAndSwitchAdapterService:function(){return C.i},augustusToAmountOffsetFromCalldata:function(){return B.mz},canBeEnsAddress:function(){return B.Nv},convertPopulatedTx:function(){return B.XH},decimalsToCurrencyUnits:function(){return B.t7},eEthereumTxType:function(){return y.ns},gasLimitRecommendations:function(){return B.eB},getLink:function(){return R},getProposalMetadata:function(){return O},getTxValue:function(){return B.oC},humanizeProposal:function(){return w.w},mintAmountsPerToken:function(){return B.Ry},synthetixProxyByChainId:function(){return _.U},uniswapEthAmount:function(){return B.JT},valueToWei:function(){return B.gU}});var e=r(49784),o=r(23286),i=r(10894),u=r(85167),a=r(58450),c=r(66215),s=r(9979),f=r(54154),l=r(92320),d=r(24243),h=r(94833),p=r(2862),P=r(39150),v=r(7575),S=r(36564),w=r(42737),m=r(33181),E=r(9908),A=r(50641),g=r(65172),_=r(84707),I=r(88423),T=r(14019),k=r(1194),D=r(91957),U=r(18353),C=r(21181),y=r(75331),L=r(56371),M=r(63144),N=r.n(M),F=r(48764).Buffer;function R(n,t){return`${t}/${n}`}const x={};async function O(n,t="https://cloudflare-ipfs.com/ipfs"){const r=n.startsWith("0x")?L.base58.encode(F.from(`1220${n.slice(2)}`,"hex")):n;if(x[r])return x[r];try{const n=await N()(R(r,t));if(!n.ok)throw Error("Fetch not working");const e=await n.json();if(!e.title)throw Error("Missing title field at proposal metadata.");if(!e.description)throw Error("Missing description field at proposal metadata.");if(!e.shortDescription)throw Error("Missing shortDescription field at proposal metadata.");return x[r]=Object.assign(Object.assign({},e),{ipfsHash:r}),x[r]}catch(e){return console.error(`@aave/contract-helpers: IPFS fetch Error: ${e}`),{ipfsHash:r,title:`Proposal - ${r}`,description:"Proposal with invalid metadata format or IPFS gateway is down",shortDescription:"Proposal with invalid metadata format or IPFS gateway is down",aip:0,author:"Proposal with invalid metadata format or IPFS gateway is down",discussions:"Proposal with invalid metadata format or IPFS gateway is down"}}}var B=r(80854)},63144:function(n){var t=self.fetch.bind(self);n.exports=t,n.exports.default=n.exports}}]);