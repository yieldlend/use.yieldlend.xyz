"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7076],{41024:function(e,r,n){n.d(r,{J:function(){return m},B:function(){return f}});var t=n(59499),o=n(4730),a=n(1279),i=n(29630),s=n(85893),c=["value","symbol","visibleDecimals","compact","percent","symbolsVariant","symbolsColor","roundDown","compactThreshold"];function l(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function u(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?l(Object(n),!0).forEach((function(r){(0,t.Z)(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}var d=["","K","M","B","T","P","E","Z","Y"],m=function(e){var r=e.value,n=e.visibleDecimals,t=void 0===n?2:n,o=e.roundDown,i=e.compactThreshold,s=(0,a.hE)(r),c=s.toFixed(0).length;i&&Number(r)<=i&&(c=0);var l=Math.min(Math.floor(c?(c-1)/3:0),d.length-1),u=d[l],m=(0,a.pV)(s,3*l).toNumber();return o&&(m=Math.trunc(Number(m)*Math.pow(10,t))/Math.pow(10,t)),{prefix:new Intl.NumberFormat("en-US",{maximumFractionDigits:t,minimumFractionDigits:t}).format(m),postfix:u}};function p(e){var r=e.value,n=e.visibleDecimals,t=e.roundDown,o=m({value:r,visibleDecimals:n,roundDown:t}),a=o.prefix,i=o.postfix;return(0,s.jsxs)(s.Fragment,{children:[a,i]})}function f(e){var r=e.value,n=e.symbol,t=e.visibleDecimals,a=e.compact,l=e.percent,d=e.symbolsVariant,m=e.symbolsColor,f=e.roundDown,b=e.compactThreshold,v=(0,o.Z)(e,c),x=l?100*Number(r):Number(r),y=null!==t&&void 0!==t?t:0;0===x?y=0:void 0===t&&(y=x>1||l||"USD"===n?2:7);var h=Math.pow(10,-y),g=0!==x&&Math.abs(x)<Math.abs(h),j=g?h:x,w=!1!==a&&(a||x>99999);return f&&!w&&(j=Math.trunc(Number(j)*Math.pow(10,y))/Math.pow(10,y)),(0,s.jsxs)(i.Z,u(u({},v),{},{sx:u({display:"inline-flex",flexDirection:"row",alignItems:"center",position:"relative"},v.sx),noWrap:!0,children:[g&&(0,s.jsx)(i.Z,{component:"span",sx:{mr:.5},variant:d||v.variant,color:m||"text.secondary",children:"<"}),"usd"===(null===n||void 0===n?void 0:n.toLowerCase())&&!l&&(0,s.jsx)(i.Z,{component:"span",sx:{mr:.5},variant:d||v.variant,color:m||"text.secondary",children:"$"}),w?(0,s.jsx)(p,{value:j,visibleDecimals:y,roundDown:f,compactThreshold:b}):new Intl.NumberFormat("en-US",{maximumFractionDigits:y,minimumFractionDigits:y}).format(j),l&&(0,s.jsx)(i.Z,{component:"span",sx:{ml:.5},variant:d||v.variant,color:m||"text.secondary",children:"%"}),"usd"!==(null===n||void 0===n?void 0:n.toLowerCase())&&"undefined"!==typeof n&&(0,s.jsx)(i.Z,{component:"span",sx:{ml:.5},variant:d||v.variant,color:m||"text.secondary",children:n})]}))}},72667:function(e,r,n){n.d(r,{Js:function(){return v},T1:function(){return g}});var t=n(83618),o=n(59499),a=n(4730),i=n(89722),s=n(61953),c=n(60082),l=n(67294),u=n(85893),d=["symbol","aToken"],m=["symbols","badgeSymbol"],p=["symbol"];function f(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function b(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?f(Object(n),!0).forEach((function(r){(0,o.Z)(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function v(e){var r=e.symbol,n=e.onImageGenerated,t=e.aToken,o=(0,l.useRef)(null),a=(0,l.useRef)(null),i=(0,l.useState)(!0),s=i[0],c=i[1];return(0,l.useEffect)((function(){var e;if(!s&&o.current&&null!==(e=o.current)&&void 0!==e&&e.contentDocument)if(t){var r,i,c,l,u=null===(r=o.current)||void 0===r||null===(i=r.contentDocument)||void 0===i||null===(c=i.childNodes)||void 0===c?void 0:c[0],d=u.getAttribute("width"),m=u.getAttribute("height"),p=u.getAttribute("viewBox");u.setAttribute("x",25),u.setAttribute("width",206),u.setAttribute("y",25),u.setAttribute("height",206),p||u.setAttribute("viewBox","0 0 ".concat(d," ").concat(m)),null===(l=a.current)||void 0===l||l.appendChild(u);var f=(new XMLSerializer).serializeToString(a.current);n("data:image/svg+xml;base64,".concat(window.btoa(unescape(encodeURIComponent(f)))))}else{var b,v=(new XMLSerializer).serializeToString(null===(b=o.current)||void 0===b?void 0:b.contentDocument);n("data:image/svg+xml;base64,".concat(window.btoa(unescape(encodeURIComponent(v)))))}}),[s,t]),(0,u.jsxs)("div",{style:{visibility:"hidden",height:0,width:0,overflow:"hidden"},children:[(0,u.jsx)("object",{style:{opacity:1},ref:o,id:"svg",data:"/icons/tokens/".concat(r.toLowerCase(),".svg"),onLoad:function(){return c(!1)}}),t&&(0,u.jsx)(x,{ref:a})]})}var x=(0,l.forwardRef)((function(e,r){var n=e.symbol;return(0,u.jsxs)("svg",{style:{position:"absolute",top:0,left:0,width:"100%",height:"100%"},ref:r,id:"Group_30952",width:"256",height:"256",viewBox:"0 0 256 256",children:[(0,u.jsxs)("defs",{id:"defs10",children:[(0,u.jsxs)("linearGradient",{id:"linear-gradient",x1:".843",x2:".206",y1:".135",y2:".886",gradientUnits:"objectBoundingBox",children:[(0,u.jsx)("stop",{offset:"0",stopColor:"#b6509e",id:"stop2"}),(0,u.jsx)("stop",{offset:"1",stopColor:"#2ebac6",id:"stop4"})]}),(0,u.jsx)("linearGradient",{id:"linear-gradient-2",x1:".907",x2:".163",y1:".227",y2:".853"})]}),(0,u.jsxs)("g",{id:"Group_29109",children:[(0,u.jsx)("path",{id:"Subtraction_108",fill:"url(#linear-gradient)",d:"M128 256a128.976 128.976 0 0 1-25.8-2.6 127.309 127.309 0 0 1-45.77-19.261 128.366 128.366 0 0 1-46.375-56.315A127.357 127.357 0 0 1 2.6 153.8a129.251 129.251 0 0 1 0-51.593 127.31 127.31 0 0 1 19.26-45.77 128.372 128.372 0 0 1 56.317-46.378A127.33 127.33 0 0 1 102.2 2.6a129.244 129.244 0 0 1 51.593 0 127.308 127.308 0 0 1 45.77 19.26 128.367 128.367 0 0 1 46.375 56.316A127.343 127.343 0 0 1 253.4 102.2a129.248 129.248 0 0 1 0 51.593 127.3 127.3 0 0 1-19.26 45.77 128.382 128.382 0 0 1-56.316 46.375A127.4 127.4 0 0 1 153.8 253.4 128.977 128.977 0 0 1 128 256zm0-242.287a115.145 115.145 0 0 0-23.033 2.322A113.657 113.657 0 0 0 64.1 33.232a114.622 114.622 0 0 0-41.4 50.283 113.7 113.7 0 0 0-6.659 21.452 115.4 115.4 0 0 0 0 46.065 113.66 113.66 0 0 0 17.2 40.866 114.627 114.627 0 0 0 50.282 41.407 113.75 113.75 0 0 0 21.453 6.658 115.381 115.381 0 0 0 46.065 0 113.609 113.609 0 0 0 40.866-17.2 114.622 114.622 0 0 0 41.393-50.278 113.741 113.741 0 0 0 6.659-21.453 115.4 115.4 0 0 0 0-46.065 113.662 113.662 0 0 0-17.2-40.865A114.619 114.619 0 0 0 172.485 22.7a113.74 113.74 0 0 0-21.453-6.659A115.145 115.145 0 0 0 128 13.714z"}),n&&(0,u.jsx)("image",{x:"25",y:"25",href:"/icons/tokens/".concat(n.toLowerCase(),".svg"),width:"206",height:"206"})]})]})}));function y(e){var r=e.symbol,n=e.aToken,t=(0,a.Z)(e,d);return(0,u.jsx)(i.Z,b(b({},t),{},{sx:b({display:"flex",position:"relative",borderRadius:"50%"},t.sx),children:n?(0,u.jsx)(x,{symbol:r}):(0,u.jsx)("img",{src:"/icons/tokens/".concat(r.toLowerCase(),".svg"),width:"100%",height:"100%",alt:"".concat(r," icon")})}))}function h(e){var r=e.symbols,n=e.badgeSymbol,t=(0,a.Z)(e,m);return n?(0,u.jsx)(c.Z,{badgeContent:(0,u.jsx)(y,{symbol:n,sx:{border:"1px solid #fff"},fontSize:"small"}),sx:{".MuiBadge-anchorOriginTopRight":{top:9}},children:r.map((function(e,r){return(0,l.createElement)(y,b(b({},t),{},{key:e,symbol:e,sx:b({ml:0===r?0:"calc(-1 * 0.5em)"},t.sx)}))}))}):(0,u.jsx)(s.Z,{sx:{display:"inline-flex",position:"relative"},children:r.map((function(e,r){return(0,l.createElement)(y,b(b({},t),{},{key:e,symbol:e,sx:b({ml:0===r?0:"calc(-1 * 0.5em)"},t.sx)}))}))})}function g(e){var r=e.symbol,n=(0,a.Z)(e,p),o=r.split("_");if(o.length>1){var i=(0,t.Z)(o),s=i[0],c=i.slice(1);return(0,u.jsx)(h,b(b({},n),{},{symbols:c,badgeSymbol:"/pools/"+s}))}return(0,u.jsx)(y,b({symbol:r},n))}x.displayName="ATokenIcon"},25146:function(e,r,n){n.r(r),n.d(r,{ClaimRewardsModal:function(){return z}});var t,o=n(67294),a=n(8195),i=n(31959),s=n(49501),c=n(75331),l=n(1279),u=n(29630),d=n(61953),m=n(41024),p=n(92391),f=n(72667),b=n(34220),v=n(46930),x=n(77537),y=n(48351),h=n(63491),g=n(67916),j=n(93608),w=n(20644),O=n(78944),k=n(10343),Z=n(50029),D=n(87794),C=n.n(D),P=n(89291),S=n(8656),T=n(67489),A=n(85893),N=function(e){var r=e.isWrongNetwork,n=e.blocked,t=e.selectedReward,o=(0,S.Yh)((function(e){return e.claimRewards})),a=(0,P.Q)({protocolAction:c.UQ.claimRewards,eventTxInfo:{assetName:t.symbol,amount:t.balance},tryPermit:!1,handleGetTxns:function(){var e=(0,Z.Z)(C().mark((function e(){return C().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",o({isWrongNetwork:r,blocked:n,selectedReward:t}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),skip:0===Object.keys(t).length||n,deps:[t]}),i=a.action,l=a.loadingTxns,u=a.mainTxState,d=a.requiresApproval;return(0,A.jsx)(T.B,{requiresApproval:d,blocked:n,preparingTransactions:l,mainTxState:u,handleAction:i,actionText:"all"===t.symbol?(0,A.jsx)(s.cC,{id:"Claim all"}):(0,A.jsx)(s.cC,{id:"Claim {0}",values:{0:t.symbol}}),actionInProgressText:(0,A.jsx)(s.cC,{id:"Claiming"}),isWrongNetwork:r})},I=n(4535),R=n(44373),E=n(55343),U=n(31538),B=n(92012),M=function(e){var r=e.rewards,n=e.selectedReward,t=e.setSelectedReward;return(0,A.jsxs)(E.Z,{sx:{mb:1,width:"100%"},children:[(0,A.jsx)(I.Z,{sx:{mb:1,color:"text.secondary"},children:(0,A.jsx)(s.cC,{id:"Reward(s) to claim"})}),(0,A.jsxs)(B.Z,{value:n,onChange:function(e){return t(e.target.value)},sx:{width:"100%",height:"44px",borderRadius:"6px",borderColor:"divider",outline:"none !important",color:"text.primary",".MuiOutlinedInput-input":{backgroundColor:"transparent"},"&:hover .MuiOutlinedInput-notchedOutline, .MuiOutlinedInput-notchedOutline":{borderColor:"divider",outline:"none !important",borderWidth:"1px"},"&.Mui-focused .MuiOutlinedInput-notchedOutline":{borderColor:"divider",borderWidth:"1px"},".MuiSelect-icon":{color:"text.primary"}},native:!1,renderValue:function(e){if("all"===e)return(0,A.jsx)(u.Z,{color:"text.primary",children:(0,A.jsx)(s.cC,{id:"Claim all rewards"})});var n=r.find((function(r){return r.symbol===e}));return(0,A.jsxs)(d.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,A.jsx)(f.T1,{symbol:n.symbol,sx:{mr:2,fontSize:"16px"}}),(0,A.jsx)(u.Z,{color:"text.primary",children:n.symbol})]})},children:[(0,A.jsx)(U.Z,{value:"all",children:(0,A.jsx)(u.Z,{variant:"subheader1",children:(0,A.jsx)(s.cC,{id:"Claim all rewards"})})}),(0,A.jsx)(R.Z,{}),r.map((function(e){return(0,A.jsx)(U.Z,{value:e.symbol,children:(0,A.jsxs)(d.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,A.jsx)(f.T1,{symbol:e.symbol,sx:{fontSize:"24px",mr:3}}),(0,A.jsx)(u.Z,{variant:"subheader1",sx:{mr:1},children:e.symbol}),(0,A.jsx)(u.Z,{component:"span",sx:{display:"inline-flex",alignItems:"center"},variant:"caption",color:"text.muted",children:"~"}),(0,A.jsx)(m.B,{value:Number(e.balanceUsd),variant:"caption",compact:!0,symbol:"USD",symbolsColor:"text.muted",color:"text.muted"})]})},"reward-token-".concat(e.symbol))}))]})]})};!function(e){e[e.NOT_ENOUGH_BALANCE=0]="NOT_ENOUGH_BALANCE"}(t||(t={}));var L=function(){var e=(0,a.vR)(),r=e.gasLimit,n=e.mainTxState,i=e.txError,Z=(0,b.HT)(),D=Z.user,C=Z.reserves,P=(0,v.f)(),S=P.currentChainId,T=P.currentMarketData,I=(0,x.Z)(),R=I.chainId,E=I.readOnlyModeAddress,U=(0,o.useState)("0"),B=U[0],L=U[1],z=(0,o.useState)("all"),_=z[0],F=z[1],H=(0,o.useState)([]),W=H[0],G=H[1],q=(0,o.useState)(),V=q[0],J=q[1],X=(0,y.Mo)(S);(0,o.useEffect)((function(){var e=[],r=Number(B),n=[];if(Object.keys(D.calculatedUserIncentives).forEach((function(t){var o=D.calculatedUserIncentives[t],a=(0,l.Fv)(o.claimableRewards,o.rewardTokenDecimals),i=0;if(!T.v3&&Number(a)>0)if(T.chainId===c.a_.mainnet){var s=C.find((function(e){return"AAVE"===e.symbol}));i=s?Number(s.priceInUSD):0}else C.forEach((function(e){e.isWrappedBaseAsset&&(i=Number(e.priceInUSD))}));else i=Number(o.rewardPriceFeed);var u=Number(a)*i;u>0&&(o.assets.forEach((function(e){-1===n.indexOf(e)&&n.push(e)})),e.push({assets:o.assets,incentiveControllerAddress:o.incentiveControllerAddress,symbol:o.rewardTokenSymbol,balance:a,balanceUsd:u.toString(),rewardTokenAddress:t}),r+=Number(u))})),1===e.length)F(e[0].symbol);else if(e.length>1&&!Q){var t={assets:n,incentiveControllerAddress:e[0].incentiveControllerAddress,symbol:"all",balance:"0",balanceUsd:r.toString(),rewardTokenAddress:""};F("all"),J(t)}G(e),L(r.toString())}),[]);var Y=void 0;"0"===B&&(Y=t.NOT_ENOUGH_BALANCE);var K=S!==R,Q="all"===_?V:W.find((function(e){return e.symbol===_}));return i&&i.blocking?(0,A.jsx)(h.D,{txError:i}):n.success?(0,A.jsx)(j.R,{action:(0,A.jsx)(s.cC,{id:"Claimed"}),amount:null===Q||void 0===Q?void 0:Q.balanceUsd}):(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(O.E,{title:"Claim rewards"}),K&&!E&&(0,A.jsx)(k.I,{networkName:X.name,chainId:S}),void 0!==Y&&(0,A.jsx)(u.Z,{variant:"helperText",color:"error.main",children:Y===t.NOT_ENOUGH_BALANCE?(0,A.jsx)(s.cC,{id:"Your reward balance is 0"}):null}),W.length>1&&(0,A.jsx)(M,{rewards:W,selectedReward:_,setSelectedReward:F}),Q&&(0,A.jsxs)(w.m6,{gasLimit:r,children:["all"===_&&(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(p.X,{caption:(0,A.jsx)(s.cC,{id:"Balance"}),captionVariant:"description",align:"flex-start",mb:"all"!==Q.symbol?0:4,children:(0,A.jsx)(d.Z,{sx:{display:"flex",flexDirection:"column",alignItems:"flex-end"},children:W.map((function(e){return(0,A.jsxs)(d.Z,{sx:{display:"flex",flexDirection:"column",alignItems:"flex-end",mb:4},children:[(0,A.jsxs)(d.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,A.jsx)(f.T1,{symbol:e.symbol,sx:{mr:1,fontSize:"16px"}}),(0,A.jsx)(m.B,{value:Number(e.balance),variant:"secondary14"}),(0,A.jsx)(u.Z,{ml:1,variant:"secondary14",children:e.symbol})]}),(0,A.jsx)(m.B,{value:Number(e.balanceUsd),variant:"helperText",compact:!0,symbol:"USD",color:"text.secondary"})]},"claim-".concat(e.symbol))}))})}),(0,A.jsx)(w.oD,{description:(0,A.jsx)(s.cC,{id:"Total worth"}),value:B})]}),"all"!==_&&(0,A.jsx)(w.XJ,{symbol:(0,A.jsx)(f.T1,{symbol:Q.symbol}),futureValue:Q.balance,futureValueUSD:Q.balanceUsd,description:(0,A.jsx)(s.cC,{id:"{0} Balance",values:{0:Q.symbol}})})]}),i&&(0,A.jsx)(g.Q,{txError:i}),(0,A.jsx)(N,{isWrongNetwork:K,selectedReward:null!==Q&&void 0!==Q?Q:{},blocked:void 0!==Y})]})},z=function(){var e=(0,a.vR)(),r=e.type,n=e.close;return(0,A.jsx)(i.P,{open:r===a.w8.ClaimRewards,setOpen:n,children:(0,A.jsx)(L,{})})}},80664:function(e,r,n){n.d(r,{P:function(){return p}});var t=n(80854),o=n(1279),a=n(81206),i=n(82403),s=n(70794),c=n(8656),l=n(48351),u=n(52369),d=n(45257),m=function(e){var r=(0,c.Yh)((function(e){return e.account})),n=(0,d._)(e,r),m=(0,u.T)(e),p=n.find((function(e){return e.isLoading}))||m.find((function(e){return e.isLoading}));return{walletBalances:m.map((function(r,c){var u;return function(e){var r=e.reservesHumanized,n=e.balances,c=e.marketData,u=(null===r||void 0===r?void 0:r.reservesData)||[],d=(null===r||void 0===r?void 0:r.baseCurrencyData)||{marketReferenceCurrencyDecimals:0,marketReferenceCurrencyPriceInUsd:"0",networkBaseTokenPriceInUsd:"0",networkBaseTokenPriceDecimals:0},m=!0;return{walletBalances:(null!==n&&void 0!==n?n:[]).reduce((function(e,r){var n=u.find((function(e){var n;return r.address===t.hP.toLowerCase()?e.symbol.toLowerCase()===(null===(n=l.m5[c.chainId].wrappedBaseAssetSymbol)||void 0===n?void 0:n.toLowerCase()):e.underlyingAsset.toLowerCase()===r.address}));return"0"!==r.amount&&(m=!1),n&&(e[r.address]={amount:(0,o.Fv)(r.amount,n.decimals),amountUSD:(0,a.Z)({amount:new s.O(r.amount),currencyDecimals:n.decimals,priceInMarketReferenceCurrency:n.priceInMarketReferenceCurrency,marketReferenceCurrencyDecimals:d.marketReferenceCurrencyDecimals,normalizedMarketReferencePriceInUsd:(0,o.Fv)(d.marketReferenceCurrencyPriceInUsd,i.$3)})}),e}),{}),hasEmptyWallet:m}}({reservesHumanized:r.data,balances:null===(u=n[c])||void 0===u?void 0:u.data,marketData:e[c]})})),isLoading:p}},p=function(e){var r=m([e]),n=r.walletBalances,t=r.isLoading;return{walletBalances:n[0].walletBalances,hasEmptyWallet:n[0].hasEmptyWallet,loading:t}}},52369:function(e,r,n){n.d(r,{T:function(){return c},J:function(){return l}});var t=n(59499),o=n(87669),a=n(31001),i=n(12987);function s(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}var c=function(e,r){var n=(0,i.z)().uiPoolService;return(0,o.h)({queries:e.map((function(e){return function(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?s(Object(n),!0).forEach((function(r){(0,t.Z)(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}({queryKey:a.B.poolReservesDataHumanized(e),queryFn:function(){return n.getReservesHumanized(e)},refetchInterval:a.g,meta:{}},r)}))})},l=function(e){return c([e])[0]}},45257:function(e,r,n){n.d(r,{_:function(){return c}});var t=n(59499),o=n(87669),a=(n(8656),n(31001)),i=n(12987);function s(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}var c=function(e,r,n){var c=(0,i.z)().poolTokensBalanceService;return(0,o.h)({queries:e.map((function(e){return function(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?s(Object(n),!0).forEach((function(r){(0,t.Z)(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}({queryKey:a.B.poolTokens(r,e),queryFn:function(){return c.getPoolTokensBalances(e,r)},enabled:!!r,refetchInterval:a.g},n)}))})}},31001:function(e,r,n){n.d(r,{B:function(){return o},g:function(){return a}});var t=n(90116),o={governance:["governance"],staking:["staking"],pool:["pool"],incentives:["incentives"],gho:["gho"],market:function(e){return[e.chainId,!!e.isFork,e.market]},user:function(e){return[e]},powers:function(e,r){return[].concat((0,t.Z)(o.governance),(0,t.Z)(o.user(e)),(0,t.Z)(o.market(r)),["powers"])},voteOnProposal:function(e,r,n){return[].concat((0,t.Z)(o.governance),(0,t.Z)(o.user(e)),(0,t.Z)(o.market(n)),[r,"voteOnProposal"])},votingPowerAt:function(e,r,n,a){return[].concat((0,t.Z)(o.governance),(0,t.Z)(o.user(e)),(0,t.Z)(o.market(a)),[r,n,"votingPowerAt"])},governanceTokens:function(e,r){return[].concat((0,t.Z)(o.governance),(0,t.Z)(o.user(e)),(0,t.Z)(o.market(r)),["governanceTokens"])},transactionHistory:function(e,r){return[].concat((0,t.Z)(o.user(e)),(0,t.Z)(o.market(r)),["transactionHistory"])},poolTokens:function(e,r){return[].concat((0,t.Z)(o.pool),(0,t.Z)(o.user(e)),(0,t.Z)(o.market(r)),["poolTokens"])},poolReservesDataHumanized:function(e){return[].concat((0,t.Z)(o.pool),(0,t.Z)(o.market(e)),["poolReservesDataHumanized"])},generalStakeUiData:function(e){return[].concat((0,t.Z)(o.staking),(0,t.Z)(o.market(e)),["generalStakeUiData"])},userStakeUiData:function(e,r){return[].concat((0,t.Z)(o.staking),(0,t.Z)(o.user(e)),(0,t.Z)(o.market(r)),["userStakeUiData"])},paraswapRates:function(e,r,n,a,i){return[].concat((0,t.Z)(o.user(i)),[e,r,n,a,"paraswapRates"])},gasPrices:function(e){return[e,"gasPrices"]},poolApprovedAmount:function(e,r,n){return[].concat((0,t.Z)(o.pool),(0,t.Z)(o.user(e)),(0,t.Z)(o.market(n)),[r,"poolApprovedAmount"])},approvedAmount:function(e,r,n,a){return[].concat((0,t.Z)(o.user(e)),(0,t.Z)(o.market(a)),[r,n,"approvedAmount"])}},a=6e4}}]);