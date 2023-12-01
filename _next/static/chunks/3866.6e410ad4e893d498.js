"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3866],{50020:function(e,r,t){var n=t(59499),o=t(4730),a=t(91655),i=t(61953),s=t(29630),c=(t(67294),t(34220)),l=t(41024),u=t(85893),d=["minVal","maxVal","percentVariant","hyphenVariant"];function p(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function x(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?p(Object(t),!0).forEach((function(r){(0,n.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}r.Z=function(e){var r=e.minVal,t=e.maxVal,n=e.percentVariant,p=e.hyphenVariant,v=(0,o.Z)(e,d),m=(0,c.HT)(),h=m.ghoLoadingData,b=m.ghoReserveData;if(h)return(0,u.jsx)(a.Z,{width:70,height:24});var y=null!==r&&void 0!==r?r:b.ghoBorrowAPYWithMaxDiscount,f=null!==t&&void 0!==t?t:b.ghoVariableBorrowAPY,g=Number((100*y).toFixed(2))===Number((100*f).toFixed(2));return(0,u.jsx)(i.Z,{sx:{display:"flex",alignItems:"center",justifyContent:"center"},children:g?(0,u.jsx)(l.B,x({compact:!0,percent:!0,value:y,visibleDecimals:2,variant:null!==n&&void 0!==n?n:"h3","data-cy":"apy"},v)):(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(l.B,x({compact:!0,value:100*y,visibleDecimals:2,variant:null!==n&&void 0!==n?n:"h3","data-cy":"apy-gho-from"},v)),(0,u.jsx)(s.Z,{variant:null!==p&&void 0!==p?p:"secondary16",color:"text.secondary",sx:{mx:.5},children:"-"}),(0,u.jsx)(l.B,x({compact:!0,percent:!0,value:f,visibleDecimals:2,variant:null!==n&&void 0!==n?n:"h3","data-cy":"apy-gho-till"},v))]})})}},99552:function(e,r,t){t.d(r,{B:function(){return h}});var n=t(90116),o=t(49501),a=t(61953),i=t(29630),s=t(72389),c=t(34220),l=t(97563),u=t(50020),d=t(41024),p=t(68861),x=t(14463),v=t(72667),m=t(85893),h=function(e){var r=e.value,t=e.useApyRange,h=e.rangeValues,b=void 0===h?[0,0]:h,y=e.ghoRoute,f=e.stkAaveBalance,g=e.userQualifiesForDiscount,j=e.onMoreDetailsClick,w=e.withTokenIcon,A=void 0!==w&&w,S=e.forceShowTooltip,D=void 0!==S&&S,T=e.variant,O=void 0===T?"secondary14":T,B=e.color,k=void 0===B?void 0:B,P=(0,c.HT)().ghoReserveData,Z=Number(f),C=Z>=P.ghoMinDiscountTokenBalanceForDiscount,I=(0,m.jsx)(m.Fragment,{}),E=g||D;return E&&(I=(0,m.jsx)(a.Z,{sx:{py:4,px:6,fontSize:"12px",lineHeight:"16px",a:{fontSize:"12px",lineHeight:"16px",fontWeight:500}},children:(0,m.jsxs)(i.Z,{variant:"subheader2",children:[(0,m.jsx)(o.cC,{id:"Estimated compounding interest, including discount for Staking {0}AAVE in Safety Module.",values:{0:C?(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(d.B,{variant:"subheader2",value:Z,visibleDecimals:2})," "]}):null}})," ",(0,m.jsx)(p.rU,{onClick:j,href:y,underline:"always",variant:"subheader2",children:(0,m.jsx)(o.cC,{id:"Learn more"})})]})})),(0,m.jsx)(a.Z,{sx:{display:"flex",flexDirection:"column",alignItems:{xs:"flex-end",xsm:"center"},justifyContent:"center",textAlign:"center",flex:"2 1 auto"},children:"-1"!==r.toString()?(0,m.jsx)(s.Z,{enterTouchDelay:0,leaveTouchDelay:0,placement:"top",title:I,arrow:E,PopperComponent:l.E,children:(0,m.jsxs)(a.Z,{sx:function(){return{display:"flex",alignItems:"center"}},children:[A&&(0,m.jsx)(v.T1,{symbol:"stkAAVE",sx:{height:14,width:14,mr:1}}),t?(0,m.jsx)(u.Z,{percentVariant:O,hyphenVariant:O,minVal:Math.min.apply(Math,(0,n.Z)(b)),maxVal:Math.max.apply(Math,(0,n.Z)(b)),color:k}):(0,m.jsx)(d.B,{value:r,percent:!0,variant:O,color:k,"data-cy":"apy"})]})}):(0,m.jsx)(x.J,{variant:"secondary14",color:"text.secondary"})})}},75437:function(e,r,t){t.d(r,{x:function(){return d},n:function(){return p}});var n=t(59499),o=t(49501),a=t(57609),i=t(68861),s=t(58527),c=t(85893);function l(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function u(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?l(Object(t),!0).forEach((function(r){(0,n.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var d=(0,c.jsx)(o.cC,{id:"Interest rate that is determined by YieldLend Governance. This rate may be changed over time depending on the need for the GHO supply to contract/expand. <0>Learn more</0>",components:{0:(0,c.jsx)(i.rU,{href:"https://docs.gho.xyz/concepts/how-gho-works/interest-rate-discount-model#interest-rate-model",underline:"always"})}}),p=function(e){return(0,c.jsx)(s.G,u(u({event:{eventName:a.vh.TOOL_TIP,eventParams:{tooltip:"GHO APY"}}},e),{},{children:d}))}},14463:function(e,r,t){t.d(r,{J:function(){return c}});var n=t(59499),o=t(29630),a=(t(67294),t(85893));function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){(0,n.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var c=function(e){return(0,a.jsx)(o.Z,s(s({},e),{},{children:"\u2014"}))}},54423:function(e,r,t){t.r(r),t.d(r,{DebtSwitchModal:function(){return Pe}});var n=t(59499),o=t(49501),a=t(67294),i=t(31959),s=t(8195),c=t(94635),l=t(90116),u=t(17674),d=t(75331),p=t(1279),x=t(21046),v=t(52358),m=t(80227),h=t(9144),b=t(29630),y=t(81645),f=t(61953),g=t(63366),j=t(87462),w=t(86010),A=t(94780),S=t(81719),D=t(78884),T=t(36622),O=t(34867);function B(e){return(0,O.Z)("MuiListSubheader",e)}(0,t(1588).Z)("MuiListSubheader",["root","colorPrimary","colorInherit","gutters","inset","sticky"]);var k=t(85893);const P=["className","color","component","disableGutters","disableSticky","inset"],Z=(0,S.ZP)("li",{name:"MuiListSubheader",slot:"Root",overridesResolver:(e,r)=>{const{ownerState:t}=e;return[r.root,"default"!==t.color&&r[`color${(0,T.Z)(t.color)}`],!t.disableGutters&&r.gutters,t.inset&&r.inset,!t.disableSticky&&r.sticky]}})((({theme:e,ownerState:r})=>(0,j.Z)({boxSizing:"border-box",lineHeight:"48px",listStyle:"none",color:(e.vars||e).palette.text.secondary,fontFamily:e.typography.fontFamily,fontWeight:e.typography.fontWeightMedium,fontSize:e.typography.pxToRem(14)},"primary"===r.color&&{color:(e.vars||e).palette.primary.main},"inherit"===r.color&&{color:"inherit"},!r.disableGutters&&{paddingLeft:16,paddingRight:16},r.inset&&{paddingLeft:72},!r.disableSticky&&{position:"sticky",top:0,zIndex:1,backgroundColor:(e.vars||e).palette.background.paper})));var C=a.forwardRef((function(e,r){const t=(0,D.Z)({props:e,name:"MuiListSubheader"}),{className:n,color:o="default",component:a="li",disableGutters:i=!1,disableSticky:s=!1,inset:c=!1}=t,l=(0,g.Z)(t,P),u=(0,j.Z)({},t,{color:o,component:a,disableGutters:i,disableSticky:s,inset:c}),d=(e=>{const{classes:r,color:t,disableGutters:n,inset:o,disableSticky:a}=e,i={root:["root","default"!==t&&`color${(0,T.Z)(t)}`,!n&&"gutters",o&&"inset",!a&&"sticky"]};return(0,A.Z)(i,B,r)})(u);return(0,k.jsx)(Z,(0,j.Z)({as:a,className:(0,w.default)(d.root,n),ref:r,ownerState:u},l))})),I=t(61702),E=t(70794),R=t(99552),M=t(25935),F=t(41024),Y=t(68861),N=t(72667),U=t(69331),G=t(53601),V=t(20644),H=t(50029),L=t(87794),W=t.n(L),_=t(74119),q=t(46930),z=t(77537),Q=t(20301),$=t(8656),X=t(59286),J=t(69125),K=t(34220),ee=t(93608),re=t(99730),te=t(80854),ne=t(56371),oe=t(70267),ae=t(89291),ie=t(19419),se=t(32113),ce=t(39771),le=t(31001),ue=t(67489),de=t(94671);function pe(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function xe(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?pe(Object(t),!0).forEach((function(r){(0,n.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):pe(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var ve,me=function(e){var r=e.amountToSwap,t=e.amountToReceive,n=e.isWrongNetwork,i=e.sx,c=e.poolReserve,l=e.targetReserve,p=e.isMaxSelected,x=e.loading,v=e.blocked,m=e.buildTxFn,h=e.currentRateMode,b=(0,$.Yh)((function(e){return[e.getCreditDelegationApprovedAmount,e.currentMarketData,e.generateApproveDelegation,e.estimateGasLimit,e.addTransaction,e.debtSwitch,e.walletApprovalMethodPreference,e.generateCreditDelegationSignatureRequest]})),y=(0,u.Z)(b,8),f=y[0],g=y[1],j=y[2],w=y[3],A=y[4],S=y[5],D=y[6],T=y[7],O=(0,s.vR)(),B=O.approvalTxState,P=O.mainTxState,Z=O.loadingTxns,C=O.setMainTxState,I=O.setTxError,E=O.setGasLimit,R=O.setLoadingTxns,M=O.setApprovalTxState,F=(0,z.Z)(),Y=F.sendTx,N=F.signTxData,U=(0,ie.n)(),G=U.refetchPoolData,V=U.refetchIncentiveData,L=U.refetchGhoData,q=(0,a.useState)(!1),Q=q[0],X=q[1],J=(0,a.useState)(),K=J[0],ee=J[1],re=(0,a.useState)(!1),pe=re[0],ve=re[1],me=(0,a.useState)(),he=me[0],be=me[1],ye=g.v3;(0,a.useEffect)((function(){var e=D===se.n.PERMIT;ve(e)}),[D]);var fe=function(){var e=(0,H.Z)(W().mark((function e(){var r,n,o,a,i,s,c,u,p;return W().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!Q||!K){e.next=29;break}if(r=(0,_.sm)(t,l.decimals,.25),!pe||!ye){e.next=15;break}return o=Math.floor(Date.now()/1e3+3600).toString(),e.next=7,T({underlyingAsset:l.variableDebtTokenAddress,deadline:o,amount:r,spender:null!==(n=g.addresses.DEBT_SWITCH_ADAPTER)&&void 0!==n?n:""});case 7:return a=e.sent,e.next=10,N(a);case 10:i=e.sent,be({signature:i,deadline:o,amount:r}),M({txHash:ae.Z,loading:!1,success:!0}),e.next=29;break;case 15:return c=j({debtTokenAddress:l.variableDebtTokenAddress,delegatee:null!==(s=g.addresses.DEBT_SWITCH_ADAPTER)&&void 0!==s?s:"",amount:r}),M(xe(xe({},B),{},{loading:!0})),e.next=19,w(c);case 19:return c=e.sent,e.next=22,Y(c);case 22:return u=e.sent,e.next=25,u.wait(1);case 25:M({txHash:u.hash,loading:!1,success:!0}),A(u.hash,{action:d.UQ.approval,txState:"success",asset:l.variableDebtTokenAddress,amount:r,assetName:"varDebt"+l.name,spender:g.addresses.DEBT_SWITCH_ADAPTER}),I(void 0),je(!0);case 29:e.next=36;break;case 31:e.prev=31,e.t0=e.catch(0),p=(0,ce.WG)(e.t0,ce.aD.GAS_ESTIMATION,!1),I(p),B.success||M({txHash:void 0,loading:!1});case 36:case"end":return e.stop()}}),e,null,[[0,31]])})));return function(){return e.apply(this,arguments)}}(),ge=function(){var e=(0,H.Z)(W().mark((function e(){var r,t,o,a;return W().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,C(xe(xe({},P),{},{loading:!0})),e.next=4,m();case 4:return r=e.sent,t=S({poolReserve:c,targetReserve:l,currentRateMode:h,amountToReceive:(0,ne.parseUnits)(r.inputAmount,l.decimals).toString(),amountToSwap:(0,ne.parseUnits)(r.outputAmount,c.decimals).toString(),isMaxSelected:p,txCalldata:r.swapCallData,augustus:r.augustus,signatureParams:he,isWrongNetwork:n}),e.next=8,w(t);case 8:return t=e.sent,e.next=11,Y(t);case 11:return o=e.sent,e.next=14,o.wait(1);case 14:C({txHash:o.hash,loading:!1,success:!0}),A(o.hash,{action:"debtSwitch",txState:"success",previousState:r.outputAmount+(2===h?" variable"+c.symbol:" stable"+c.symbol),newState:r.inputAmount+" variable"+l.symbol}),oe.queryClient.invalidateQueries({queryKey:le.B.pool}),L&&L(),G&&G(),V&&V(),e.next=27;break;case 22:e.prev=22,e.t0=e.catch(0),a=(0,ce.WG)(e.t0,ce.aD.GAS_ESTIMATION,!1),I(a),C({txHash:void 0,loading:!1});case 27:case"end":return e.stop()}}),e,null,[[0,22]])})));return function(){return e.apply(this,arguments)}}(),je=(0,a.useCallback)(function(){var e=(0,H.Z)(W().mark((function e(r){var n,o,a;return W().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(void 0!==(n=K)&&!r){e.next=9;break}return R(!0),e.next=5,f({debtTokenAddress:l.variableDebtTokenAddress,delegatee:null!==(o=g.addresses.DEBT_SWITCH_ADAPTER)&&void 0!==o?o:""});case 5:n=e.sent,ee(n),e.next=11;break;case 9:X(!1),M({});case 11:n&&(a=(0,de.iv)({approvedAmount:n.amount,amount:t,signedAmount:"0"}),X(a),a&&M({})),R(!1);case 13:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),[K,R,f,l.variableDebtTokenAddress,g.addresses.DEBT_SWITCH_ADAPTER,M,t]);return(0,a.useEffect)((function(){"0"!==r&&(K?K.debtTokenAddress!==l.variableDebtTokenAddress&&je(!0):je())}),[r,K,je,l.variableDebtTokenAddress]),(0,a.useEffect)((function(){var e=0;e=Number(te.eB[d.UQ.borrow].recommended),Q&&!B.success&&(e+=Number(de.Fi)),E(e.toString())}),[Q,B,E]),(0,k.jsx)(ue.B,{mainTxState:P,approvalTxState:B,isWrongNetwork:n,preparingTransactions:Z,handleAction:ge,requiresAmount:!0,amount:r,handleApproval:function(){return fe()},requiresApproval:Q,actionText:(0,k.jsx)(o.cC,{id:"Switch"}),actionInProgressText:(0,k.jsx)(o.cC,{id:"Switching"}),sx:i,fetchingData:x,errorParams:{loading:!1,disabled:v||!(null!==B&&void 0!==B&&B.success),content:(0,k.jsx)(o.cC,{id:"Switch"}),handleClick:ge},blocked:v,tryPermit:ye})},he=t(91655),be=t(75437),ye=t(92391),fe=t(58527),ge=(0,k.jsx)(y.Z,{color:"primary",sx:{fontSize:"14px",mx:1},children:(0,k.jsx)(m.Z,{})}),je=function(e){var r,t,n=e.switchSource,a=e.switchTarget,i=e.toAmount,s=e.fromAmount,c=e.loading,l=e.sourceBalance,u=e.sourceBorrowAPY,d=e.targetBorrowAPY,x=e.showAPYTypeChange,v=e.ghoData,g=e.currentMarket,j=(0,p.hE)(l).minus((0,p.hE)(s)),w=(0,p.hE)(a.variableBorrows).plus((0,p.hE)(i)),A=(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(he.Z,{variant:"rectangular",height:20,width:100,sx:{borderRadius:"4px"}}),(0,k.jsx)(he.Z,{variant:"rectangular",height:15,width:80,sx:{borderRadius:"4px",marginTop:"4px"}})]}),S=0,D=null===v||void 0===v?void 0:v.ghoApyRange;return"GHO"===a.reserve.symbol&&v&&(S=(0,J.li)(v.ghoVariableBorrowApy,v.userCurrentBorrowBalance+v.inputAmount,v.userGhoAvailableToBorrowAtDiscount,v.ghoBorrowAPYWithMaxDiscount),D&&(D=[D[0],S])),(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(ye.X,{caption:(0,k.jsx)(o.cC,{id:"Borrow apy"}),captionVariant:"description",mb:4,children:(0,k.jsx)(f.Z,{sx:{display:"flex",alignItems:"center"},children:c?(0,k.jsx)(he.Z,{variant:"rectangular",height:20,width:100,sx:{borderRadius:"4px"}}):(0,k.jsxs)(k.Fragment,{children:["GHO"===n.reserve.symbol&&v?(0,k.jsx)(R.B,{useApyRange:!1,rangeValues:v.ghoApyRange,variant:"main14",color:"text.secondary",value:v.userCurrentBorrowApy,"data-cy":"apyType",stkAaveBalance:v.userDiscountTokenBalance,ghoRoute:Y.Z6.reserveOverview(null!==(r=n.underlyingAsset)&&void 0!==r?r:"",g)+"/#discount",forceShowTooltip:!0,withTokenIcon:v.qualifiesForDiscount,userQualifiesForDiscount:v.qualifiesForDiscount}):(0,k.jsx)(F.B,{value:u,variant:"secondary14",percent:!0}),ge,"GHO"===a.reserve.symbol&&v?(0,k.jsx)(R.B,{useApyRange:v.qualifiesForDiscount&&!v.inputAmount,rangeValues:0===v.inputAmount?v.ghoApyRange:D,variant:"main14",color:"text.secondary",value:0===v.inputAmount?v.userBorrowApyAfterMaxSwitch:S,"data-cy":"apyType",stkAaveBalance:v.userDiscountTokenBalance,ghoRoute:Y.Z6.reserveOverview(null!==(t=a.underlyingAsset)&&void 0!==t?t:"",g)+"/#discount",forceShowTooltip:!0,withTokenIcon:v.qualifiesForDiscount,userQualifiesForDiscount:v.qualifiesForDiscount}):(0,k.jsx)(F.B,{value:d,variant:"secondary14",percent:!0})]})})}),x&&(0,k.jsx)(ye.X,{caption:(0,k.jsxs)(h.Z,{direction:"row",children:[(0,k.jsx)(o.cC,{id:"APY type"}),(0,k.jsx)(fe.G,{children:(0,k.jsx)(o.cC,{id:"You can only switch to tokens with variable APY types. After this transaction, you may change the variable rate to a stable one if available."})})]}),captionVariant:"description",mb:4,children:(0,k.jsx)(f.Z,{sx:{display:"flex",alignItems:"center",flexWrap:"wrap",justifyContent:"flex-end"},children:c?(0,k.jsx)(he.Z,{variant:"rectangular",height:20,width:100,sx:{borderRadius:"4px"}}):(0,k.jsxs)(f.Z,{sx:{display:"flex",alignItems:"center"},children:["GHO"===n.reserve.symbol?(0,k.jsx)(be.n,{text:(0,k.jsx)(o.cC,{id:"Fixed"}),typography:"secondary14"}):(0,k.jsx)(b.Z,{variant:"secondary14",children:(0,k.jsx)(o.cC,{id:"Stable"})}),(0,k.jsx)(y.Z,{color:"primary",sx:{fontSize:"14px",mx:1},children:(0,k.jsx)(m.Z,{})}),"GHO"===a.reserve.symbol?(0,k.jsx)(be.n,{text:(0,k.jsx)(o.cC,{id:"Fixed"}),typography:"secondary14"}):(0,k.jsx)(b.Z,{variant:"secondary14",children:(0,k.jsx)(o.cC,{id:"Variable"})})]})})}),(0,k.jsx)(V.aE,{incentives:n.reserve.aIncentivesData,symbol:n.reserve.symbol,futureIncentives:n.reserve.aIncentivesData,futureSymbol:n.reserve.symbol,loading:c}),(0,k.jsx)(ye.X,{caption:(0,k.jsx)(o.cC,{id:"Borrow balance after switch"}),captionVariant:"description",mb:4,align:"flex-start",children:(0,k.jsxs)(f.Z,{sx:{textAlign:"right"},children:[(0,k.jsx)(f.Z,{sx:{display:"flex",flexDirection:"column",alignItems:"flex-end",justifyContent:"center"},children:c?A:(0,k.jsxs)(k.Fragment,{children:[(0,k.jsxs)(f.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,k.jsx)(N.T1,{symbol:n.reserve.iconSymbol,sx:{mr:2,ml:4,fontSize:"16px"}}),(0,k.jsx)(F.B,{value:j.toString(),variant:"secondary14",compact:!0})]}),(0,k.jsx)(F.B,{value:j.multipliedBy((0,p.hE)(n.reserve.priceInUSD)).toString(),variant:"helperText",compact:!0,symbol:"USD",symbolsColor:"text.secondary",color:"text.secondary"})]})}),(0,k.jsx)(f.Z,{sx:{display:"flex",flexDirection:"column",alignItems:"flex-end",justifyContent:"center"},mt:2,children:c?A:(0,k.jsxs)(k.Fragment,{children:[(0,k.jsxs)(f.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,k.jsx)(N.T1,{symbol:a.reserve.iconSymbol,sx:{mr:2,ml:4,fontSize:"16px"}}),(0,k.jsx)(F.B,{value:w.toString(),variant:"secondary14",compact:!0})]}),(0,k.jsx)(F.B,{value:w.multipliedBy((0,p.hE)(a.reserve.priceInUSD)).toString(),variant:"helperText",compact:!0,symbol:"USD",symbolsColor:"text.secondary",color:"text.secondary"})]})})]})})]})};function we(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function Ae(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?we(Object(t),!0).forEach((function(r){(0,n.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):we(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}!function(e){e[e.INSUFFICIENT_LIQUIDITY=0]="INSUFFICIENT_LIQUIDITY"}(ve||(ve={}));var Se=function(e){var r=e.poolReserve,t=e.userReserve,n=e.isWrongNetwork,i=e.currentRateMode,c=(0,K.HT)(),g=c.reserves,j=c.user,w=c.ghoReserveData,A=c.ghoUserData,S=(0,q.f)(),D=S.currentChainId,T=S.currentNetworkConfig,O=(0,z.Z)().currentAccount,B=(0,s.vR)(),P=B.gasLimit,Z=B.mainTxState,C=B.txError,I=B.setTxError,R=(0,$.Yh)((function(e){return[e.displayGho,e.currentMarket,e.ghoUserDataFetched,e.ghoUserQualifiesForDiscount]})),Y=(0,u.Z)(R,4),L=Y[0],te=Y[1],ne=Y[2],oe=Y[3],ae=g.filter((function(e){return e.underlyingAsset!==r.underlyingAsset&&"0"!==e.availableLiquidity&&(0,X.hF)(e,j)})).map((function(e){return{address:e.underlyingAsset,symbol:e.symbol,iconSymbol:e.iconSymbol,variableApy:e.variableBorrowAPY,priceInUsd:e.priceInUSD}}));ae=[].concat((0,l.Z)(ae.filter((function(e){return"GHO"===e.symbol}))),(0,l.Z)(ae.filter((function(e){return"GHO"!==e.symbol}))));var ie=(0,a.useState)(""),se=ie[0],ce=ie[1],le=(0,a.useRef)(""),ue=(0,a.useState)(ae[0]),de=ue[0],pe=ue[1],xe=(0,a.useState)("0.1"),he=xe[0],be=xe[1],ye=j.userReservesData.find((function(e){return e.underlyingAsset===de.address})),fe=i===d.tk.Variable?t.variableBorrows:t.stableBorrows,ge="-1"===se,we=ge?fe:se,Se=function(e){var r=e.chainId,t=e.max,n=e.maxSlippage,o=e.skip,i=e.swapIn,s=e.swapOut,c=e.userAddress,l=(0,a.useState)("0"),u=l[0],d=l[1],x=(0,a.useState)("0"),v=x[0],m=x[1],h=(0,a.useState)("0"),b=h[0],y=h[1],f=(0,a.useState)("0"),g=f[0],j=f[1],w=(0,a.useState)(),A=w[0],S=w[1],D=(0,a.useState)(!1),T=D[0],O=D[1],B=(0,a.useState)(""),k=B[0],P=B[1],Z=(0,a.useMemo)((function(){return{underlyingAsset:i.underlyingAsset,decimals:i.decimals,supplyAPY:i.supplyAPY,amount:i.amount,variableBorrowAPY:i.variableBorrowAPY}}),[i.amount,i.decimals,i.supplyAPY,i.underlyingAsset,i.variableBorrowAPY]),C=(0,a.useMemo)((function(){return{underlyingAsset:s.underlyingAsset,decimals:s.decimals,supplyAPY:s.supplyAPY,amount:s.amount,variableBorrowAPY:s.variableBorrowAPY}}),[s.amount,s.decimals,s.supplyAPY,s.underlyingAsset,s.variableBorrowAPY]),I=(0,a.useCallback)((function(){return(0,_.wP)(Z,C,r,c,t)}),[r,t,Z,C,c]);return(0,a.useEffect)((function(){if(!o){var e=function(){var e=(0,H.Z)(W().mark((function e(){var r,t,o;return W().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(Z.underlyingAsset&&C.underlyingAsset&&C.amount&&"0"!==C.amount&&!isNaN(+C.amount)){e.next=7;break}return d("0"),m("0"),y("0"),j("0"),S(void 0),e.abrupt("return");case 7:return O(!0),e.prev=8,e.next=11,I();case 11:r=e.sent,P(""),S(r),t=new p.rh(r.srcAmount).multipliedBy(1+n/100).toFixed(0),d((0,p.Fv)(t,r.srcDecimals)),y((0,p.Fv)(r.destAmount,r.destDecimals)),m(r.srcUSD),j(r.destUSD),e.next=26;break;case 21:e.prev=21,e.t0=e.catch(8),console.error(e.t0),o=(0,_.aE)(e.t0.message),P(o);case 26:return e.prev=26,O(!1),e.finish(26);case 29:case"end":return e.stop()}}),e,null,[[8,21,26,29]])})));return function(){return e.apply(this,arguments)}}(),r=setTimeout((function(){e()}),400);return function(){clearTimeout(r)}}}),[o,Z.underlyingAsset,Z.amount,C.underlyingAsset,C.amount,I,n]),{outputAmount:b,outputAmountUSD:g,inputAmount:u,inputAmountUSD:v,loading:T,error:k,buildTxFn:function(){var e=(0,H.Z)(W().mark((function e(){return W().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(A){e.next=2;break}throw new Error("Route required to build transaction");case 2:return e.abrupt("return",(0,_._n)(A,i,s,r,c,n));case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()}}({chainId:T.underlyingChainId||D,userAddress:O,swapOut:Ae(Ae({},r),{},{amount:le.current}),swapIn:Ae(Ae({},ye.reserve),{},{amount:"0"}),max:ge,skip:Z.loading||!1,maxSlippage:Number(he)}),Be=Se.inputAmount,ke=Se.outputAmount,Pe=Se.outputAmountUSD,Ze=Se.error,Ce=Se.loading,Ie=Se.buildTxFn,Ee=Ce&&"0"===Pe,Re=(0,p.hE)(x.Bz.toString()),Me="0";L({symbol:ye.reserve.symbol,currentMarket:te})?Me=w.aaveFacilitatorRemainingCapacity.toString():(Re="0"===ye.reserve.borrowCap?(0,p.hE)(x.Bz.toString()):(0,p.hE)(Number(ye.reserve.borrowCap)).minus((0,p.hE)(ye.reserve.totalDebt)),Me=ye.reserve.formattedAvailableLiquidity);var Fe=E.Z.max(E.Z.min(Me,Re),0),Ye=Number(we)*Number(r.priceInUSD),Ne=Number(Be)*Number(de.priceInUsd),Ue=Ne-Ye,Ge=0===Number(j.availableBorrowsUSD)||Ue>Number(j.availableBorrowsUSD),Ve=void 0;(0,E.Z)(Be).gt(Fe)&&(Ve=ve.INSUFFICIENT_LIQUIDITY);var He=function(){return Ve===ve.INSUFFICIENT_LIQUIDITY?(0,k.jsx)(o.cC,{id:"There is not enough liquidity for the target asset to perform the switch. Try lowering the amount."}):null};if(Z.success)return(0,k.jsx)(ee.R,{customAction:(0,k.jsxs)(h.Z,{gap:3,children:[(0,k.jsx)(b.Z,{variant:"description",color:"text.primary",children:(0,k.jsx)(o.cC,{id:"You've successfully switched borrow position."})}),(0,k.jsxs)(h.Z,{direction:"row",alignItems:"center",justifyContent:"center",gap:1,children:[(0,k.jsx)(N.T1,{symbol:r.iconSymbol,sx:{mx:1}}),(0,k.jsx)(F.B,{value:le.current,compact:!0,variant:"subheader1"}),r.symbol,(0,k.jsx)(y.Z,{color:"primary",sx:{fontSize:"14px",mx:1},children:(0,k.jsx)(m.Z,{})}),(0,k.jsx)(N.T1,{symbol:ye.reserve.iconSymbol,sx:{mx:1}}),(0,k.jsx)(F.B,{value:Be,compact:!0,variant:"subheader1"}),ye.reserve.symbol]})]})});var Le,We=!1;if(g.some((function(e){return"GHO"===e.symbol}))){var _e=Number(fe)*Number(r.priceInUSD)+A.userGhoBorrowBalance,qe=(0,J.li)(w.ghoVariableBorrowAPY,A.userGhoBorrowBalance,A.userGhoAvailableToBorrowAtDiscount,w.ghoBorrowAPYWithMaxDiscount),ze=(0,J.li)(w.ghoVariableBorrowAPY,_e,A.userGhoAvailableToBorrowAtDiscount,w.ghoBorrowAPYWithMaxDiscount),Qe=ne?[qe,ze]:void 0;We=oe(fe),Le={qualifiesForDiscount:We,ghoApyRange:Qe,userBorrowApyAfterMaxSwitch:ze,userDiscountTokenBalance:A.userDiscountTokenBalance,inputAmount:Number(we),targetAmount:Number(Be),userCurrentBorrowApy:qe,ghoVariableBorrowApy:w.ghoVariableBorrowAPY,userGhoAvailableToBorrowAtDiscount:A.userGhoAvailableToBorrowAtDiscount,ghoBorrowAPYWithMaxDiscount:w.ghoBorrowAPYWithMaxDiscount,userCurrentBorrowBalance:A.userGhoBorrowBalance}}return(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(G.W,{value:we,onChange:function(e){var r="-1"===e;le.current=r?fe:e,ce(e),I(void 0)},usdValue:Ye.toString(),symbol:r.symbol,assets:[{balance:fe,address:r.underlyingAsset,symbol:r.symbol,iconSymbol:r.iconSymbol}],maxValue:fe,inputTitle:(0,k.jsx)(o.cC,{id:"Borrowed asset amount"}),balanceText:(0,k.jsx)(a.Fragment,{children:(0,k.jsx)(o.cC,{id:"Borrow balance"})}),isMaxSelected:ge}),(0,k.jsxs)(f.Z,{sx:{padding:"18px",pt:"14px",display:"flex",justifyContent:"space-between"},children:[(0,k.jsx)(y.Z,{sx:{fontSize:"18px !important"},children:(0,k.jsx)(v.Z,{})}),(0,k.jsx)(M.B,{loading:Ee,outputAmountUSD:Ne.toString(),inputAmountUSD:Ye.toString()})]}),(0,k.jsx)(G.W,{value:Be,onSelect:pe,usdValue:Ne.toString(),symbol:de.symbol,assets:ae,inputTitle:(0,k.jsx)(o.cC,{id:"Switch to"}),balanceText:(0,k.jsx)(o.cC,{id:"Supply balance"}),disableInput:!0,loading:Ee,selectOptionHeader:(0,k.jsx)(De,{}),selectOption:function(e){var r,t;return"GHO"===e.symbol?(0,k.jsx)(Oe,{asset:e,ghoApyRange:null===(r=Le)||void 0===r?void 0:r.ghoApyRange,userBorrowApyAfterMaxSwitch:null===(t=Le)||void 0===t?void 0:t.userBorrowApyAfterMaxSwitch,userDiscountTokenBalance:A.userDiscountTokenBalance,currentMarket:te,qualifiesForDiscount:We}):(0,k.jsx)(Te,{asset:e})}}),Ze&&!Ee&&(0,k.jsx)(b.Z,{variant:"helperText",color:"error.main",children:Ze}),!Ze&&void 0!==Ve&&(0,k.jsx)(b.Z,{variant:"helperText",color:"error.main",children:(0,k.jsx)(He,{})}),(0,k.jsx)(V.m6,{gasLimit:P,slippageSelector:(0,k.jsx)(Q.n,{selectedSlippage:he,setSlippage:function(e){I(void 0),be(e)}}),children:(0,k.jsx)(je,{switchSource:t,switchTarget:ye,toAmount:Be,fromAmount:""===we?"0":we,loading:Ee,sourceBalance:fe,sourceBorrowAPY:i===d.tk.Variable?r.variableBorrowAPY:r.stableBorrowAPY,targetBorrowAPY:ye.reserve.variableBorrowAPY,showAPYTypeChange:i===d.tk.Stable||"GHO"===t.reserve.symbol||"GHO"===ye.reserve.symbol,ghoData:Le,currentMarket:te})}),C&&(0,k.jsx)(re.f,{txError:C}),Ge&&(0,k.jsx)(U.v,{severity:"error",sx:{mt:4},children:(0,k.jsx)(b.Z,{variant:"caption",children:(0,k.jsx)(o.cC,{id:"Insufficient collateral to cover new borrow position. Wallet must have borrowing power remaining to perform debt switch."})})}),(0,k.jsx)(me,{isMaxSelected:ge,poolReserve:r,amountToSwap:ke,amountToReceive:Be,isWrongNetwork:n,targetReserve:ye.reserve,symbol:r.symbol,blocked:void 0!==Ve||""!==Ze||Ge,loading:Ce,buildTxFn:Ie,currentRateMode:i===d.tk.Variable?2:1})]})},De=function(){return(0,k.jsx)(C,{sx:function(e){return{borderBottom:"1px solid ".concat(e.palette.divider),mt:-1}},children:(0,k.jsxs)(h.Z,{direction:"row",sx:{py:4},gap:14,children:[(0,k.jsx)(b.Z,{variant:"subheader2",children:(0,k.jsx)(o.cC,{id:"Select an asset"})}),(0,k.jsx)(b.Z,{variant:"subheader2",children:(0,k.jsx)(o.cC,{id:"Borrow APY"})})]})})},Te=function(e){var r=e.asset;return(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(N.T1,{aToken:r.aToken,symbol:r.iconSymbol||r.symbol,sx:{fontSize:"22px",mr:1}}),(0,k.jsx)(I.Z,{sx:{mr:6},children:r.symbol}),(0,k.jsxs)(f.Z,{sx:{display:"flex",flexDirection:"column",alignItems:"end"},children:[(0,k.jsx)(F.B,{value:r.variableApy,percent:!0,variant:"main14",color:"text.secondary"}),(0,k.jsx)(b.Z,{variant:"helperText",color:"text.secondary",children:(0,k.jsx)(o.cC,{id:"Variable rate"})})]})]})},Oe=function(e){var r,t=e.ghoApyRange,n=e.asset,a=e.userBorrowApyAfterMaxSwitch,i=e.userDiscountTokenBalance,s=e.currentMarket,c=e.qualifiesForDiscount;return(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(N.T1,{aToken:n.aToken,symbol:n.iconSymbol||n.symbol,sx:{fontSize:"22px",mr:1}}),(0,k.jsx)(I.Z,{sx:{mr:6},children:n.symbol}),(0,k.jsxs)(f.Z,{sx:{display:"flex",flexDirection:"column",alignItems:"end"},children:[(0,k.jsx)(R.B,{useApyRange:c,rangeValues:t,variant:"main14",color:"text.secondary",value:null!==a&&void 0!==a?a:-1,"data-cy":"apyType",stkAaveBalance:i,ghoRoute:Y.Z6.reserveOverview(null!==(r=null===n||void 0===n?void 0:n.address)&&void 0!==r?r:"",s)+"/#discount",forceShowTooltip:!0,withTokenIcon:c,userQualifiesForDiscount:c}),(0,k.jsx)(b.Z,{variant:"helperText",color:"text.secondary",children:(0,k.jsx)(o.cC,{id:"Fixed rate"})})]})]})};function Be(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function ke(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?Be(Object(t),!0).forEach((function(r){(0,n.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Be(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var Pe=function(){var e=(0,s.vR)(),r=e.type,t=e.close,n=e.args;return(0,k.jsx)(i.P,{open:r===s.w8.DebtSwitch,setOpen:t,children:(0,k.jsx)(c.A,{title:(0,k.jsx)(o.cC,{id:"Switch borrow position"}),underlyingAsset:n.underlyingAsset,hideTitleSymbol:!0,children:function(e){return(0,k.jsx)(Se,ke(ke({},e),{},{currentRateMode:n.currentRateMode}))}})})}},99730:function(e,r,t){t.d(r,{f:function(){return l}});var n=t(49501),o=t(61953),a=t(29630),i=t(69331),s=t(67916),c=t(85893),l=function(e){var r=e.txError;return(0,c.jsxs)(o.Z,{children:[(0,c.jsx)(s.Q,{txError:r}),"MetaMask Message Signature: User denied message signature."!==r.rawError.message&&"MetaMask Tx Signature: User denied transaction signature."!==r.rawError.message&&(0,c.jsx)(o.Z,{sx:{pt:4},children:(0,c.jsx)(i.v,{severity:"info",children:(0,c.jsxs)(a.Z,{variant:"description",children:[" ",(0,c.jsx)(n.cC,{id:"Tip: Try increasing slippage or reduce input amount"})]})})})]})}},59286:function(e,r,t){t.d(r,{nG:function(){return c},BC:function(){return l},hF:function(){return u}});var n=t(75331),o=t(1279),a=t(70794),i=t(21046),s=t(87385);function c(e,r,t){var c,l,u,d,p=e.availableLiquidityUSD,x=a.Z.min(r.availableBorrowsUSD,p),v="0"===e.borrowCap?(0,o.hE)(i.Bz.toString()):(0,o.hE)(Number(e.borrowCap)).minus((0,o.hE)(e.totalDebt)),m=a.Z.max(a.Z.min(e.formattedAvailableLiquidity,v),0),h=(0,o.hE)((null===r||void 0===r?void 0:r.availableBorrowsMarketReferenceCurrency)||0).div(e.formattedPriceInMarketReferenceCurrency),b=a.Z.min(h,m);t===n.tk.Stable&&(b=a.Z.min(b,(0,o.hE)(e.formattedAvailableLiquidity).multipliedBy(.25)));var y=b.gte(h)||"0"!==r.totalBorrowsMarketReferenceCurrency&&x.lt(p)||x.eq(p)&&"0"!==e.totalDebt||e.borrowCapUSD&&"0"!==e.totalDebt&&x.gte(p)||r.isInIsolationMode&&"0"!==(null===(c=r.isolatedReserve)||void 0===c?void 0:c.isolationModeTotalDebt)&&(0,o.hE)((null===(l=r.isolatedReserve)||void 0===l?void 0:l.debtCeiling)||"0").minus((null===(u=r.isolatedReserve)||void 0===u?void 0:u.isolationModeTotalDebt)||"0").shiftedBy(-((null===(d=r.isolatedReserve)||void 0===d?void 0:d.debtCeilingDecimals)||0)).multipliedBy("0.99").lt(r.availableBorrowsUSD)?b.multipliedBy("0.99"):b;return(0,s.$w)(y.toString(10),e.decimals)}function l(e,r){var t,n,c,l,u=(0,o.hE)((null===e||void 0===e?void 0:e.availableBorrowsMarketReferenceCurrency)||0),d="0"===r.borrowCap?(0,o.hE)(i.Bz.toString()):(0,o.hE)(Number(r.borrowCap)).minus((0,o.hE)(r.totalDebt)),p=a.Z.min(u,d),x="0"!==e.totalBorrowsMarketReferenceCurrency||r.borrowCapUSD&&"0"!==r.totalDebt&&p.gte(d)||e.isInIsolationMode&&"0"!==(null===(t=e.isolatedReserve)||void 0===t?void 0:t.isolationModeTotalDebt)&&(0,o.hE)((null===(n=e.isolatedReserve)||void 0===n?void 0:n.debtCeiling)||"0").minus((null===(c=e.isolatedReserve)||void 0===c?void 0:c.isolationModeTotalDebt)||"0").shiftedBy(-((null===(l=e.isolatedReserve)||void 0===l?void 0:l.debtCeilingDecimals)||0)).multipliedBy("0.99").lt(e.availableBorrowsUSD)?p.multipliedBy("0.99"):p;return(0,s.$w)(x.toString(10),18)}function u(e,r){var t=e.borrowingEnabled,n=e.isActive,o=e.borrowableInIsolation,a=e.eModeCategoryId,i=e.isFrozen,s=e.isPaused;return!(!t||!n||i||s)&&((null===r||void 0===r||!r.isInEmode||a===r.userEmodeCategoryId)&&!(null!==r&&void 0!==r&&r.isInIsolationMode&&!o))}},52358:function(e,r,t){var n=t(67294);const o=n.forwardRef((function(e,r){return n.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor","aria-hidden":"true",ref:r},e),n.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M19 14l-7 7m0 0l-7-7m7 7V3"}))}));r.Z=o},10822:function(e,r,t){var n=t(67294);const o=n.forwardRef((function(e,r){return n.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor","aria-hidden":"true",ref:r},e),n.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M5 15l7-7 7 7"}))}));r.Z=o}}]);