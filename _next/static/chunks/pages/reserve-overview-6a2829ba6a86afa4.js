(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8219],{29822:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return Fe}});var t,s,i=r(49501),o=r(61953),a=r(29630),l=r(11163),c=r(67294),d=r(34637),x=r(59379),u=r(34220),h=r(43629),m=r(83550),p=r(17674),b=r(80854),v=r(75331),y=r(1279),j=r(82403),f=r(44373),g=r(9144),k=r(91655),w=r(70918),Z=r(90149),C=r(75084),T=r(62097),A=r(70794),S=r(29002),I=r(25563),E=r(41024),B=r(69331),O=r(3765),N=r(80664),_=r(8195),D=r(22454),P=r(77537),R=r(56707),M=r(81645),L=r(50029),F=r(87794),W=r.n(F),U=r(83454),V=r(8656),Y=r(57609),z=r(56365),G=r(31959),H=r(46930);function K(){return K=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e},K.apply(this,arguments)}var X=function(e){return c.createElement("svg",K({viewBox:"0 0 64 64",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),t||(t=c.createElement("path",{d:"M32 64c17.673 0 32-14.327 32-32C64 14.327 49.673 0 32 0 14.327 0 0 14.327 0 32c0 17.673 14.327 32 32 32Z",fill:"#1461DB"})),s||(s=c.createElement("path",{d:"m52.206 30.048-9.038-9.038-.017-.017-.036-.03a2.281 2.281 0 0 0-.183-.15 1.795 1.795 0 0 0-.137-.101c-.02-.015-.042-.027-.064-.04a2.454 2.454 0 0 0-3.28.544L25.393 35.274V22.75a2.483 2.483 0 0 0-4.965 0v12.524l-5.132-5.132a2.483 2.483 0 0 0-3.51 3.51l9.37 9.37c.059.06.121.116.186.168.063.05.129.1.194.15.339.218.726.352 1.127.388h.01c.081.008.162.012.242.012h.038c.067 0 .134-.003.2-.009h.05c.064-.007.128-.015.191-.028h.028c.07-.015.14-.031.209-.052h.012a2.298 2.298 0 0 0 .519-.228l.056-.033a2.38 2.38 0 0 0 .269-.191l.025-.022c.052-.045.105-.09.15-.14l14.253-14.264V41.26a2.483 2.483 0 0 0 4.965 0V28.735l4.816 4.825a2.482 2.482 0 0 0 3.51-3.512Z",fill:"#fff"})))},q=r(85893),$=r(83454),J=[{name:"Transak",makeLink:function(e){var n=e.cryptoSymbol,r=e.network,t=e.walletAddress;return"".concat($.env.NEXT_PUBLIC_TRANSAK_APP_URL,"/?apiKey=").concat($.env.NEXT_PUBLIC_TRANSAK_API_KEY,"&network=").concat(r.split(" ")[0],"&cryptoCurrencyCode=").concat(n,"&walletAddress=").concat(t,"&disableWalletAddressForm=true")},icon:(0,q.jsx)(X,{})}],Q=function(e){var n=e.cryptoSymbol,r=e.open,t=e.close,s=(0,P.Z)().currentAccount,l=(0,V.Yh)((function(e){return e.trackEvent})),c=(0,H.f)().currentNetworkConfig.name;return(0,q.jsxs)(G.P,{open:r,setOpen:t,children:[(0,q.jsx)(a.Z,{variant:"h2",children:(0,q.jsx)(i.cC,{id:"Buy Crypto with Fiat"})}),(0,q.jsx)(a.Z,{sx:{my:6},children:J.length&&1===J.length?(0,q.jsx)(i.cC,{id:"{0} on-ramp service is provided by External Provider and by selecting you agree to Terms of the Provider. Your access to the service might be reliant on the External Provider being operational.",values:{0:J[0].name}}):(0,q.jsx)(i.cC,{id:"Choose one of the on-ramp services"})}),(0,q.jsx)(o.Z,{children:J.map((function(e){var r=e.name,t=e.makeLink,a=e.icon;return(0,q.jsx)(C.Z,{variant:"outlined",size:"large",endIcon:(0,q.jsx)(M.Z,{children:(0,q.jsx)(z.Z,{})}),fullWidth:!0,sx:{px:4,"&:not(:first-of-type)":{mt:4}},href:t({cryptoSymbol:n,network:c,walletAddress:s}),target:"_blank",rel:"noopener",onClick:function(){return l(Y.vh.BUY_WITH_FIAT,{token:n,network:c,onrampname:J[0].name})},children:(0,q.jsxs)(o.Z,{sx:{display:"flex",flexGrow:1},children:[(0,q.jsx)(M.Z,{sx:{mr:2},children:a}),(0,q.jsx)(i.cC,{id:"{0}{name}",values:{0:1===J.length?"Continue with ":null,name:r}})]})},r)}))})]})},ee=function(e){var n=e.cryptoSymbol,r=e.networkMarketName,t=e.funnel,s=function(e,n){var r=(0,c.useState)(!1),t=r[0],s=r[1],i=U.env.NEXT_PUBLIC_FIAT_ON_RAMP;return(0,c.useEffect)((function(){"true"===i&&(0,L.Z)(W().mark((function r(){var t,i;return W().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t=U.env.NEXT_PUBLIC_TRANSAK_API_URL,r.prev=1,r.next=4,fetch("".concat(t,"/cryptocoverage/api/v1/public/partner/crypto-currencies?symbol=").concat(e,"&network=").concat(n));case 4:i=r.sent,s(i.ok),r.next=11;break;case 8:r.prev=8,r.t0=r.catch(1),s(!1);case 11:case"end":return r.stop()}}),r,null,[[1,8]])})))()}),[e,n]),{isAvailable:t}}(n,r),o=s.isAvailable,a=(0,c.useState)(null),l=a[0],d=a[1],x=Boolean(l),u=(0,V.Yh)((function(e){return e.trackEvent}));return o?(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(C.Z,{variant:"outlined",size:"small",onClick:function(e){u(Y.vh.OPEN_MODAL,{modal:"Buy crypto with fiat",assetName:n,funnel:t}),d(e.currentTarget)},startIcon:(0,q.jsx)(M.Z,{sx:{mr:-1},children:(0,q.jsx)(R.Z,{})}),children:(0,q.jsx)(i.cC,{id:"Buy {cryptoSymbol} with Fiat",values:{cryptoSymbol:n}})}),(0,q.jsx)(Q,{cryptoSymbol:n,open:x,close:function(){d(null)}})]}):null},ne=r(59286),re=r(94847),te=r(87385),se=r(81902),ie=r(25049),oe=r(68861),ae=r(32667),le=r(54373),ce=function(e){var n,r=e.reserve,t=(0,c.useState)(r.symbol),s=t[0],l=t[1],d=(0,P.Z)(),x=d.currentAccount,m=d.loading,k=(0,D.T)().isPermissionsLoading,w=(0,_.vR)(),Z=w.openBorrow,T=w.openSupply,S=(0,V.Yh)((function(e){return e.currentMarket})),E=(0,V.Yh)((function(e){return e.currentNetworkConfig})),O=(0,V.Yh)((function(e){return e.currentMarketData})),R=(0,u.HT)(),M=R.ghoReserveData,L=R.user,F=R.loading,W=R.marketReferencePriceInUsd,U=(0,N.P)(O),Y=U.walletBalances,z=U.loading,G=(0,V.Yh)((function(e){return[e.poolComputed.minRemainingBaseTokenBalance,e.displayGho]})),H=(0,p.Z)(G,2),K=H[0],X=H[1],$=E.baseAssetSymbol,J=Y[r.underlyingAsset];r.isWrappedBaseAsset&&s===$&&(J=Y[b.hP.toLowerCase()]);var Q="0",ee="0",se=X({symbol:r.symbol,currentMarket:S});if(se){var ie=(0,ne.BC)(L,r);Q=A.Z.min(ie,(0,y.hE)(M.aaveFacilitatorRemainingCapacity)).toString(),ee="0"}else{var ce;Q=(0,ne.nG)(r,L,v.tk.Variable).toString(),ee=(0,re.I)((null===(ce=J)||void 0===ce?void 0:ce.amount)||"0",r,r.underlyingAsset,K).toString()}var ye=(0,te.N4)(Q,r.formattedPriceInMarketReferenceCurrency,W).toString(),fe=function(e,n,r){return(0,y.hE)(e).multipliedBy(n).multipliedBy(r).shiftedBy(-j.$3).toString()}(ee,r.formattedPriceInMarketReferenceCurrency,W).toString(),ge=function(e){var n=e.balance,r=e.maxAmountToSupply,t=e.maxAmountToBorrow,s=e.reserve,o=(0,u.HT)(),l=o.user,c=o.eModes,d=(0,h.ov)(),x=d.supplyCap,m=d.borrowCap,b=d.debtCeiling,v=(0,V.Yh)((function(e){return[e.currentMarket,e.currentNetworkConfig,e.currentChainId,e.displayGho]})),y=(0,p.Z)(v,4),j=y[0],f=y[1],k=y[2],w=y[3],Z=(0,_.vR)().openFaucet,T=f.bridge,A=f.name,S=(0,ne.hF)(s,l),I="0"===(null===l||void 0===l?void 0:l.totalCollateralMarketReferenceCurrency),E=(null===l||void 0===l?void 0:l.isInIsolationMode)&&!s.borrowableInIsolation,O=(null===l||void 0===l?void 0:l.isInEmode)&&s.eModeCategoryId!==l.userEmodeCategoryId,N=w({symbol:s.symbol,currentMarket:j});return{disableSupplyButton:"0"===n||"0"===r||N,disableBorrowButton:!S||I||E||O||"0"===t,alerts:(0,q.jsxs)(g.Z,{gap:3,children:["0"===n&&!N&&(0,q.jsx)(q.Fragment,{children:f.isTestnet?(0,q.jsxs)(B.v,{sx:{mb:0},severity:"info",icon:!1,children:[(0,q.jsx)(i.cC,{id:"Your {networkName} wallet is empty. Get free test {0} at",values:{0:s.name,networkName:A}})," ",(0,q.jsx)(C.Z,{variant:"text",sx:{verticalAlign:"top"},onClick:function(){return Z(s.underlyingAsset)},disableRipple:!0,children:(0,q.jsx)(a.Z,{variant:"caption",children:(0,q.jsx)(i.cC,{id:"{networkName} Faucet",values:{networkName:A}})})})]}):(0,q.jsx)(le.K,{sx:{mb:0},name:A,bridge:T,icon:!1,chainId:k})}),("0"!==n||N)&&"0"===(null===l||void 0===l?void 0:l.totalCollateralMarketReferenceCurrency)&&(0,q.jsx)(B.v,{sx:{mb:0},severity:"info",icon:!1,children:(0,q.jsx)(i.cC,{id:"To borrow you need to supply any asset to be used as collateral."})}),E&&(0,q.jsx)(B.v,{sx:{mb:0},severity:"warning",icon:!1,children:(0,q.jsx)(i.cC,{id:"Collateral usage is limited because of Isolation mode."})}),O&&E&&(0,q.jsx)(B.v,{sx:{mb:0},severity:"info",icon:!1,children:(0,q.jsx)(i.cC,{id:"Borrowing is unavailable because you\u2019ve enabled Efficiency Mode (E-Mode) and Isolation mode. To manage E-Mode and Isolation mode visit your <0>Dashboard</0>.",components:{0:(0,q.jsx)(oe.rU,{href:oe.Z6.dashboard})}})}),O&&!E&&(0,q.jsx)(B.v,{sx:{mb:0},severity:"info",icon:!1,children:(0,q.jsx)(i.cC,{id:"Borrowing is unavailable because you\u2019ve enabled Efficiency Mode (E-Mode) for {0} category. To manage E-Mode categories visit your <0>Dashboard</0>.",values:{0:(0,ae.U)(c[l.userEmodeCategoryId].label)},components:{0:(0,q.jsx)(oe.rU,{href:oe.Z6.dashboard})}})}),!O&&E&&(0,q.jsx)(B.v,{sx:{mb:0},severity:"info",icon:!1,children:(0,q.jsx)(i.cC,{id:"Borrowing is unavailable because you\u2019re using Isolation mode. To manage Isolation mode visit your <0>Dashboard</0>.",components:{0:(0,q.jsx)(oe.rU,{href:oe.Z6.dashboard})}})}),"0"===r&&(null===x||void 0===x?void 0:x.determineWarningDisplay({supplyCap:x,icon:!1,sx:{mb:0}})),"0"===t&&(null===m||void 0===m?void 0:m.determineWarningDisplay({borrowCap:m,icon:!1,sx:{mb:0}})),s.isIsolated&&"0"!==n&&"0"!==(null===l||void 0===l?void 0:l.totalCollateralUSD)&&(null===b||void 0===b?void 0:b.determineWarningDisplay({debtCeiling:b,icon:!1,sx:{mb:0}}))]})}}({balance:(null===(n=J)||void 0===n?void 0:n.amount)||"0",maxAmountToSupply:ee.toString(),maxAmountToBorrow:Q.toString(),reserve:r}),ke=ge.disableSupplyButton,we=ge.disableBorrowButton,Ze=ge.alerts;if(!x&&!k)return(0,q.jsx)(me,{loading:m});if(F||z)return(0,q.jsx)(ue,{});var Ce=(0,I.hu)(S).market;return(0,q.jsxs)(he,{children:[r.isWrappedBaseAsset&&(0,q.jsx)(o.Z,{children:(0,q.jsx)(ve,{assetSymbol:r.symbol,baseAssetSymbol:$,selectedAsset:s,setSelectedAsset:l})}),(0,q.jsx)(je,{balance:J.amount,symbol:s,marketTitle:Ce.marketTitle}),r.isFrozen||r.isPaused?(0,q.jsx)(o.Z,{sx:{mt:3},children:r.isPaused?(0,q.jsx)(de,{}):(0,q.jsx)(xe,{})}):(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(f.Z,{sx:{my:6}}),(0,q.jsxs)(g.Z,{gap:3,children:[!se&&(0,q.jsx)(pe,{reserve:r,value:ee.toString(),usdValue:fe,symbol:s,disable:ke,onActionClicked:function(){r.isWrappedBaseAsset&&s===$?T(b.hP.toLowerCase(),S,r.name,"reserve",!0):T(r.underlyingAsset,S,r.name,"reserve",!0)}}),r.borrowingEnabled&&(0,q.jsx)(be,{reserve:r,value:Q.toString(),usdValue:ye,symbol:s,disable:we,onActionClicked:function(){Z(r.underlyingAsset,S,r.name,"reserve",!0)}}),Ze]})]})]})},de=function(){return(0,q.jsx)(B.v,{sx:{mb:0},severity:"error",icon:!0,children:(0,q.jsx)(i.cC,{id:"Because this asset is paused, no actions can be taken until further notice"})})},xe=function(){return(0,q.jsx)(B.v,{sx:{mb:0},severity:"error",icon:!0,children:(0,q.jsx)(i.cC,{id:"Since this asset is frozen, the only available actions are withdraw and repay which can be accessed from the <0>Dashboard</0>",components:{0:(0,q.jsx)(oe.rU,{href:oe.Z6.dashboard})}})})},ue=function(){var e=(0,q.jsxs)(g.Z,{children:[(0,q.jsx)(k.Z,{width:150,height:14}),(0,q.jsxs)(g.Z,{sx:{height:"44px"},direction:"row",justifyContent:"space-between",alignItems:"center",children:[(0,q.jsxs)(o.Z,{children:[(0,q.jsx)(k.Z,{width:100,height:14,sx:{mt:1,mb:2}}),(0,q.jsx)(k.Z,{width:75,height:12})]}),(0,q.jsx)(k.Z,{height:36,width:96})]})]});return(0,q.jsxs)(he,{children:[(0,q.jsxs)(g.Z,{direction:"row",gap:3,children:[(0,q.jsx)(k.Z,{width:42,height:42,sx:{borderRadius:"12px"}}),(0,q.jsxs)(o.Z,{children:[(0,q.jsx)(k.Z,{width:100,height:12,sx:{mt:1,mb:2}}),(0,q.jsx)(k.Z,{width:100,height:14})]})]}),(0,q.jsx)(f.Z,{sx:{my:6}}),(0,q.jsx)(o.Z,{children:(0,q.jsxs)(g.Z,{gap:3,children:[e,e]})})]})},he=function(e){var n=e.children;return(0,q.jsxs)(w.Z,{sx:{pt:4,pb:{xs:4,xsm:6},px:{xs:4,xsm:6}},children:[(0,q.jsx)(a.Z,{variant:"h3",sx:{mb:6},children:(0,q.jsx)(i.cC,{id:"Your info"})}),n]})},me=function(e){var n=e.loading;return(0,q.jsx)(w.Z,{sx:{pt:4,pb:{xs:4,xsm:6},px:{xs:4,xsm:6}},children:n?(0,q.jsx)(Z.Z,{}):(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(a.Z,{variant:"h3",sx:{mb:{xs:6,xsm:10}},children:(0,q.jsx)(i.cC,{id:"Your info"})}),(0,q.jsx)(a.Z,{sx:{mb:6},color:"text.secondary",children:(0,q.jsx)(i.cC,{id:"Please connect a wallet to view your personal information here."})}),(0,q.jsx)(O.p,{})]})})},pe=function(e){var n=e.reserve,r=e.value,t=e.usdValue,s=e.symbol,a=e.disable,l=e.onActionClicked;return(0,q.jsxs)(g.Z,{children:[(0,q.jsx)(ie.Y,{variant:"description",text:(0,q.jsx)(i.cC,{id:"Available to supply"}),capType:se.R.supplyCap,event:{eventName:Y.vh.TOOL_TIP,eventParams:{tooltip:"Available to supply: your info",asset:n.underlyingAsset,assetName:n.name}}}),(0,q.jsxs)(g.Z,{sx:{height:"44px"},direction:"row",justifyContent:"space-between",alignItems:"center",children:[(0,q.jsxs)(o.Z,{children:[(0,q.jsx)(ye,{value:r,symbol:s}),(0,q.jsx)(E.B,{value:t,variant:"subheader2",color:"text.muted",symbolsColor:"text.muted",symbol:"USD"})]}),(0,q.jsx)(C.Z,{sx:{height:"36px",width:"96px"},onClick:l,disabled:a,fullWidth:!1,variant:"contained","data-cy":"supplyButton",children:(0,q.jsx)(i.cC,{id:"Supply"})})]})]})},be=function(e){var n=e.reserve,r=e.value,t=e.usdValue,s=e.symbol,a=e.disable,l=e.onActionClicked;return(0,q.jsxs)(g.Z,{children:[(0,q.jsx)(ie.Y,{variant:"description",text:(0,q.jsx)(i.cC,{id:"Available to borrow"}),capType:se.R.borrowCap,event:{eventName:Y.vh.TOOL_TIP,eventParams:{tooltip:"Available to borrow: your info",asset:n.underlyingAsset,assetName:n.name}}}),(0,q.jsxs)(g.Z,{sx:{height:"44px"},direction:"row",justifyContent:"space-between",alignItems:"center",children:[(0,q.jsxs)(o.Z,{children:[(0,q.jsx)(ye,{value:r,symbol:s}),(0,q.jsx)(E.B,{value:t,variant:"subheader2",color:"text.muted",symbolsColor:"text.muted",symbol:"USD"})]}),(0,q.jsx)(C.Z,{sx:{height:"36px",width:"96px"},onClick:l,disabled:a,fullWidth:!1,variant:"contained","data-cy":"borrowButton",children:(0,q.jsx)(i.cC,{id:"Borrow"})})]})]})},ve=function(e){var n=e.assetSymbol,r=e.baseAssetSymbol,t=e.selectedAsset,s=e.setSelectedAsset;return(0,q.jsxs)(x.f,{color:"primary",value:t,exclusive:!0,onChange:function(e,n){return s(n)},sx:{mb:4},children:[(0,q.jsx)(d.Y,{value:n,children:(0,q.jsx)(a.Z,{variant:"buttonM",children:n})}),(0,q.jsx)(d.Y,{value:r,children:(0,q.jsx)(a.Z,{variant:"buttonM",children:r})})]})},ye=function(e){var n=e.value,r=e.symbol,t=e.children;return(0,q.jsxs)(g.Z,{direction:"row",alignItems:"center",gap:1,children:[(0,q.jsx)(E.B,{value:n,variant:"h4",color:"text.primary"}),(0,q.jsx)(a.Z,{variant:"buttonL",color:"text.secondary",children:r}),t]})},je=function(e){var n=e.balance,r=e.symbol,t=e.marketTitle,s=(0,T.Z)();return(0,q.jsxs)(g.Z,{direction:"row",gap:3,children:[(0,q.jsx)(o.Z,{sx:function(e){return{width:"42px",height:"42px",background:e.palette.background.surface,border:"0.5px solid ".concat(e.palette.background.disabled),borderRadius:"12px",display:"flex",alignItems:"center",justifyContent:"center"}},children:(0,q.jsx)(S.o,{sx:{stroke:"".concat(s.palette.text.secondary)}})}),(0,q.jsxs)(o.Z,{children:[(0,q.jsx)(a.Z,{variant:"description",color:"text.secondary",children:"Wallet balance"}),(0,q.jsx)(ye,{value:n,symbol:r,children:(0,q.jsx)(o.Z,{sx:{ml:2},children:(0,q.jsx)(ee,{cryptoSymbol:r,networkMarketName:t})})})]})]})},fe=r(61225),ge=r(5152),ke=(0,ge.default)((function(){return Promise.all([r.e(6147),r.e(7603),r.e(3409),r.e(6061),r.e(6623),r.e(7561)]).then(r.bind(r,17561)).then((function(e){return e.GhoReserveConfiguration}))}),{loadableGenerated:{webpack:function(){return[17561]}}}),we=(0,ge.default)((function(){return Promise.all([r.e(3409),r.e(906),r.e(6623),r.e(8588)]).then(r.bind(r,98588)).then((function(e){return e.ReserveConfiguration}))}),{loadableGenerated:{webpack:function(){return[98588]}}}),Ze=function(e){var n=e.reserve,r=(0,H.f)().currentMarket,t=(0,V.Yh)((function(e){return[e.displayGho]})),s=(0,p.Z)(t,1)[0],l=(0,T.Z)().breakpoints,c=(0,fe.Z)(l.down("xsm")),d=s({symbol:n.symbol,currentMarket:r});return(0,q.jsxs)(w.Z,{sx:{pt:4,pb:20,px:c?4:6},children:[(0,q.jsx)(o.Z,{sx:{display:"flex",alignItems:"center",gap:6,flexWrap:"wrap",mb:n.isFrozen||"AMPL"==n.symbol||"stETH"===n.symbol?"0px":"36px"},children:(0,q.jsx)(a.Z,{variant:"h3",children:(0,q.jsx)(i.cC,{id:"Reserve status & configuration"})})}),d?(0,q.jsx)(ke,{reserve:n}):(0,q.jsx)(we,{reserve:n})]})},Ce=r(96471),Te=r(74815),Ae=r(87369),Se=r(73812),Ie=r(31538),Ee=r(41528),Be=function(e){var n=e.downToSM,r=e.tooltipText,t=e.children;return(0,q.jsx)(Ee.y,{title:(0,q.jsx)(a.Z,{children:(0,q.jsx)(i.cC,{id:"{tooltipText}",values:{tooltipText:r}})}),children:(0,q.jsx)(o.Z,{sx:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},children:(0,q.jsx)(o.Z,{sx:{bgcolor:"#535047",width:n?"18px":"24px",height:n?"18px":"24px",borderRadius:"50%",display:"flex",justifyContent:"center",ml:"8px",border:"0.5px solid rgba(235, 235, 237, 0.12)"},children:t})})})},Oe=r(72667),Ne=function(e){var n=e.poolReserve,r=e.downToSM,t=e.switchNetwork,s=e.addERC20Token,l=e.currentChainId,d=e.connectedChainId,x=e.hideAToken,u=(0,c.useState)(null),h=u[0],m=u[1],p=(0,c.useState)(!1),b=p[0],v=p[1],y=(0,c.useState)(""),j=y[0],f=y[1],g=(0,c.useState)(""),k=g[0],w=g[1],Z=Boolean(h),C=(0,V.Yh)((function(e){return e.trackEvent})),T=function(){m(null)};return(0,c.useEffect)((function(){b&&l===d&&(s({address:n.underlyingAsset,decimals:n.decimals,symbol:n.symbol,image:/_/.test(n.iconSymbol)?void 0:j}),v(!1))}),[l,d,b,s,null===n||void 0===n?void 0:n.underlyingAsset,null===n||void 0===n?void 0:n.decimals,null===n||void 0===n?void 0:n.symbol,null===n||void 0===n?void 0:n.iconSymbol,j]),n?(0,q.jsxs)(q.Fragment,{children:[(null===n||void 0===n?void 0:n.symbol)&&!/_/.test(n.symbol)&&(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(Oe.Js,{symbol:n.iconSymbol,onImageGenerated:f,aToken:!1}),!x&&(0,q.jsx)(Oe.Js,{symbol:n.iconSymbol,onImageGenerated:w,aToken:!0})]}),(0,q.jsx)(o.Z,{onClick:function(e){m(e.currentTarget)},children:(0,q.jsx)(Be,{tooltipText:"Add token to wallet",downToSM:r,children:(0,q.jsx)(o.Z,{onClick:function(){C(Y.f9.ADD_TOKEN_TO_WALLET_DROPDOWN,{asset:n.underlyingAsset,assetName:n.name})},sx:{display:"inline-flex",alignItems:"center","&:hover":{".Wallet__icon":{opacity:"0 !important"},".Wallet__iconHover":{opacity:"1 !important"}},cursor:"pointer"},children:(0,q.jsx)(S.o,{sx:{width:"14px",height:"14px","&:hover":{stroke:"#F1F1F3"}}})})})}),(0,q.jsxs)(Se.Z,{anchorEl:h,open:Z,onClose:T,MenuListProps:{"aria-labelledby":"basic-button"},keepMounted:!0,"data-cy":"addToWaletSelector",children:[(0,q.jsx)(o.Z,{sx:{px:4,pt:3,pb:2},children:(0,q.jsx)(a.Z,{variant:"secondary12",color:"text.secondary",children:(0,q.jsx)(i.cC,{id:"Underlying token"})})}),(0,q.jsxs)(Ie.Z,{value:"underlying",divider:!0,onClick:function(){l!==d?t(l).then((function(){v(!0)})):(C(Y.f9.ADD_TO_WALLET,{type:"Underlying token",asset:n.underlyingAsset,assetName:n.name}),s({address:n.underlyingAsset,decimals:n.decimals,symbol:n.symbol,image:/_/.test(n.symbol)?void 0:j})),T()},children:[(0,q.jsx)(Oe.T1,{symbol:n.iconSymbol,sx:{fontSize:"20px"}}),(0,q.jsx)(a.Z,{variant:"subheader1",sx:{ml:3},noWrap:!0,"data-cy":"assetName",children:n.symbol})]},"underlying"),!x&&(0,q.jsxs)(o.Z,{children:[(0,q.jsx)(o.Z,{sx:{px:4,pt:3,pb:2},children:(0,q.jsx)(a.Z,{variant:"secondary12",color:"text.secondary",children:(0,q.jsx)(i.cC,{id:"YieldLend aToken"})})}),(0,q.jsxs)(Ie.Z,{value:"atoken",onClick:function(){l!==d?t(l).then((function(){v(!0)})):(C(Y.f9.ADD_TO_WALLET,{asset:n.underlyingAsset,assetName:n.name}),s({address:n.aTokenAddress,decimals:n.decimals,symbol:"a".concat(n.symbol),image:/_/.test(n.symbol)?void 0:k})),T()},children:[(0,q.jsx)(Oe.T1,{symbol:n.iconSymbol,sx:{fontSize:"20px"},aToken:!0}),(0,q.jsx)(a.Z,{variant:"subheader1",sx:{ml:3},noWrap:!0,"data-cy":"assetName",children:"a".concat(n.symbol)})]},"atoken")]})]})]}):null},_e=r(58527),De=function(){var e=(0,u.HT)(),n=e.ghoLoadingData,r=e.ghoReserveData,t=n,s=(0,T.Z)(),a=(0,fe.Z)(s.breakpoints.down("sm")),l=a?"main16":"main21",c=a?"secondary16":"secondary21";return(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(Ae.d,{title:(0,q.jsx)(i.cC,{id:"Total borrowed"}),loading:t,hideIcon:!0,children:(0,q.jsx)(E.B,{value:r.aaveFacilitatorBucketLevel,symbol:"USD",variant:l,symbolsVariant:c,symbolsColor:"#A5A8B6"})}),(0,q.jsx)(Ae.d,{title:(0,q.jsx)(i.cC,{id:"Available to borrow"}),loading:t,hideIcon:!0,children:(0,q.jsx)(E.B,{value:r.aaveFacilitatorRemainingCapacity,symbol:"USD",variant:l,symbolsVariant:c,symbolsColor:"#A5A8B6"})}),(0,q.jsx)(Ae.d,{title:(0,q.jsx)(_e.G,{text:(0,q.jsx)(i.cC,{id:"Price"}),children:(0,q.jsx)(i.cC,{id:"The YieldLend Protocol is programmed to always use the price of 1 GHO = $1. This is different from using market pricing via oracles for other crypto assets. This creates stabilizing arbitrage opportunities when the price of GHO fluctuates."})}),loading:t,hideIcon:!0,children:(0,q.jsx)(o.Z,{sx:{display:"inline-flex",alignItems:"center"},children:(0,q.jsx)(E.B,{value:1,symbol:"USD",variant:l,symbolsVariant:c,symbolsColor:"#A5A8B6"})})})]})},Pe=function(e){var n=e.underlyingAsset,r=(0,u.HT)(),t=r.reserves,s=r.loading,a=(0,H.f)().currentNetworkConfig,l=(0,V.Yh)((function(e){return e.trackEvent})),c=(0,T.Z)(),d=(0,fe.Z)(c.breakpoints.down("sm")),x=t.find((function(e){return e.underlyingAsset===n})),h=d?"main16":"main21",m=d?"secondary16":"secondary21";return(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(Ae.d,{title:(0,q.jsx)(i.cC,{id:"Reserve Size"}),loading:s,hideIcon:!0,children:(0,q.jsx)(E.B,{value:Math.max(Number(null===x||void 0===x?void 0:x.totalLiquidityUSD),0),symbol:"USD",variant:h,symbolsVariant:m,symbolsColor:"#A5A8B6"})}),(0,q.jsx)(Ae.d,{title:(0,q.jsx)(i.cC,{id:"Available liquidity"}),loading:s,hideIcon:!0,children:(0,q.jsx)(E.B,{value:Math.max(Number(null===x||void 0===x?void 0:x.availableLiquidityUSD),0),symbol:"USD",variant:h,symbolsVariant:m,symbolsColor:"#A5A8B6"})}),(0,q.jsx)(Ae.d,{title:(0,q.jsx)(i.cC,{id:"Utilization Rate"}),loading:s,hideIcon:!0,children:(0,q.jsx)(E.B,{value:null===x||void 0===x?void 0:x.borrowUsageRatio,percent:!0,variant:h,symbolsVariant:m,symbolsColor:"#A5A8B6"})}),(0,q.jsx)(Ae.d,{title:(0,q.jsx)(i.cC,{id:"Oracle price"}),loading:s,hideIcon:!0,children:(0,q.jsxs)(o.Z,{sx:{display:"inline-flex",alignItems:"center"},children:[(0,q.jsx)(E.B,{value:null===x||void 0===x?void 0:x.priceInUSD,symbol:"USD",variant:h,symbolsVariant:m,symbolsColor:"#A5A8B6"}),s?(0,q.jsx)(k.Z,{width:16,height:16,sx:{ml:1,background:"#535047"}}):(0,q.jsx)(Be,{tooltipText:"View oracle contract",downToSM:d,children:(0,q.jsx)(oe.rU,{onClick:function(){return l(Y.vh.EXTERNAL_LINK,{Link:"Oracle Price",oracle:null===x||void 0===x?void 0:x.priceOracle,assetName:x.name,asset:x.underlyingAsset})},href:a.explorerLinkBuilder({address:null===x||void 0===x?void 0:x.priceOracle}),sx:{display:"inline-flex",alignItems:"center",color:"#A5A8B6","&:hover":{color:"#F1F1F3"},cursor:"pointer"},children:(0,q.jsx)(M.Z,{sx:{fontSize:d?"12px":"14px"},children:(0,q.jsx)(z.Z,{})})})})]})})]})},Re=function(e){var n=e.poolReserve,r=e.downToSM,t=e.hideAToken,s=(0,c.useState)(null),l=s[0],d=s[1],x=(0,H.f)(),u=x.currentNetworkConfig,h=x.currentMarket,m=Boolean(l),p=(0,V.Yh)((function(e){return e.trackEvent}));if(!n)return null;var b=n.borrowingEnabled||Number(n.totalVariableDebt)>0,v=n.stableBorrowRateEnabled||Number(n.totalStableDebt)>0,y=b||v;return(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(o.Z,{onClick:function(e){p(Y.f9.RESERVE_TOKENS_DROPDOWN,{assetName:n.name,asset:n.underlyingAsset,aToken:n.aTokenAddress,market:h,variableDebtToken:n.variableDebtTokenAddress}),d(e.currentTarget)},children:(0,q.jsx)(Be,{tooltipText:"View token contracts",downToSM:r,children:(0,q.jsx)(o.Z,{sx:{display:"inline-flex",alignItems:"center",color:"#A5A8B6","&:hover":{color:"#F1F1F3"},cursor:"pointer"},children:(0,q.jsx)(M.Z,{sx:{fontSize:"14px"},children:(0,q.jsx)(z.Z,{})})})})}),(0,q.jsxs)(Se.Z,{anchorEl:l,open:m,onClose:function(){d(null)},MenuListProps:{"aria-labelledby":"basic-button"},keepMounted:!0,"data-cy":"addToWaletSelector",children:[(0,q.jsx)(o.Z,{sx:{px:4,pt:3,pb:2},children:(0,q.jsx)(a.Z,{variant:"secondary12",color:"text.secondary",children:(0,q.jsx)(i.cC,{id:"Underlying token"})})}),(0,q.jsxs)(Ie.Z,{onClick:function(){p(Y.f9.RESERVE_TOKEN_ACTIONS,{type:"Underlying Token",assetName:n.name,asset:n.underlyingAsset,aToken:n.aTokenAddress,market:h,variableDebtToken:n.variableDebtTokenAddress})},component:"a",href:u.explorerLinkBuilder({address:null===n||void 0===n?void 0:n.underlyingAsset}),target:"_blank",divider:!0,children:[(0,q.jsx)(Oe.T1,{symbol:n.iconSymbol,sx:{fontSize:"20px"}}),(0,q.jsx)(a.Z,{variant:"subheader1",sx:{ml:3},noWrap:!0,"data-cy":"assetName",children:n.symbol})]}),!t&&(0,q.jsxs)(o.Z,{children:[(0,q.jsx)(o.Z,{sx:{px:4,pt:3,pb:2},children:(0,q.jsx)(a.Z,{variant:"secondary12",color:"text.secondary",children:(0,q.jsx)(i.cC,{id:"YieldLend aToken"})})}),(0,q.jsxs)(Ie.Z,{component:"a",onClick:function(){p(Y.f9.RESERVE_TOKEN_ACTIONS,{type:"aToken",assetName:n.name,asset:n.underlyingAsset,aToken:n.aTokenAddress,market:h,variableDebtToken:n.variableDebtTokenAddress})},href:u.explorerLinkBuilder({address:null===n||void 0===n?void 0:n.aTokenAddress}),target:"_blank",divider:y,children:[(0,q.jsx)(Oe.T1,{symbol:n.iconSymbol,aToken:!0,sx:{fontSize:"20px"}}),(0,q.jsx)(a.Z,{variant:"subheader1",sx:{ml:3},noWrap:!0,"data-cy":"assetName",children:"a"+n.symbol})]})]}),y&&(0,q.jsx)(o.Z,{sx:{px:4,pt:3,pb:2},children:(0,q.jsx)(a.Z,{variant:"secondary12",color:"text.secondary",children:(0,q.jsx)(i.cC,{id:"YieldLend debt token"})})}),b&&(0,q.jsxs)(Ie.Z,{component:"a",href:u.explorerLinkBuilder({address:null===n||void 0===n?void 0:n.variableDebtTokenAddress}),target:"_blank",onClick:function(){p(Y.f9.RESERVE_TOKEN_ACTIONS,{type:"Variable Debt",assetName:n.name,asset:n.underlyingAsset,aToken:n.aTokenAddress,market:h,variableDebtToken:n.variableDebtTokenAddress})},children:[(0,q.jsx)(Oe.T1,{symbol:"default",sx:{fontSize:"20px"}}),(0,q.jsx)(a.Z,{variant:"subheader1",sx:{ml:3},noWrap:!0,"data-cy":"assetName",children:"Variable debt "+n.symbol})]}),v&&(0,q.jsxs)(Ie.Z,{component:"a",href:u.explorerLinkBuilder({address:null===n||void 0===n?void 0:n.stableDebtTokenAddress}),target:"_blank",onClick:function(){p(Y.f9.RESERVE_TOKEN_ACTIONS,{type:"Stable Debt",assetName:n.name,asset:n.underlyingAsset,aToken:n.aTokenAddress,market:h,variableDebtToken:n.variableDebtTokenAddress,stableDebtToken:n.stableDebtTokenAddress})},children:[(0,q.jsx)(Oe.T1,{symbol:"default",sx:{fontSize:"20px"}}),(0,q.jsx)(a.Z,{variant:"subheader1",sx:{ml:3},noWrap:!0,"data-cy":"assetName",children:"Stable debt "+n.symbol})]})]})]})},Me=function(e){var n=e.underlyingAsset,r=(0,l.useRouter)(),t=(0,u.HT)(),s=t.reserves,c=t.loading,d=(0,H.f)(),x=d.currentMarket,h=d.currentChainId,m=(0,P.Z)(),b=m.addERC20Token,v=m.switchNetwork,y=m.chainId,j=m.connected,g=(0,V.Yh)((function(e){return[e.displayGho]})),w=(0,p.Z)(g,1)[0],Z=(0,T.Z)(),A=(0,fe.Z)(Z.breakpoints.down("sm")),S=s.find((function(e){return e.underlyingAsset===n})),I=A?"main16":"main21",E=function(){return(0,q.jsx)(o.Z,{mr:3,sx:{mr:3,display:"flex",alignItems:"center",justifyContent:"center"},children:c?(0,q.jsx)(k.Z,{variant:"circular",width:40,height:40,sx:{background:"#535047"}}):(0,q.jsx)("img",{src:"/icons/tokens/".concat(S.iconSymbol.toLowerCase(),".svg"),width:"40px",height:"40px",alt:""})})},B=function(){return c?(0,q.jsx)(k.Z,{width:60,height:28,sx:{background:"#535047"}}):(0,q.jsx)(a.Z,{variant:I,children:S.name})},O=w({symbol:S.symbol,currentMarket:x});return(0,q.jsxs)(Te.f,{titleComponent:(0,q.jsxs)(o.Z,{children:[(0,q.jsx)(o.Z,{sx:{display:"flex",alignItems:A?"flex-start":"center",alignSelf:A?"flex-start":"center",mb:4,minHeight:"40px",flexDirection:A?"column":"row"},children:(0,q.jsx)(C.Z,{variant:"surface",size:"medium",color:"primary",startIcon:(0,q.jsx)(M.Z,{sx:{fontSize:"20px"},children:(0,q.jsx)(Ce.Z,{})}),onClick:function(){0!==history.state.idx?r.back():r.push("/markets")},sx:{mr:3,mb:A?"24px":"0"},children:(0,q.jsx)(i.cC,{id:"Go Back"})})}),A&&(0,q.jsxs)(o.Z,{sx:{display:"flex",alignItems:"center",mb:6},children:[(0,q.jsx)(E,{}),(0,q.jsxs)(o.Z,{children:[!c&&(0,q.jsx)(a.Z,{sx:{color:"#A5A8B6"},variant:"caption",children:S.symbol}),(0,q.jsxs)(o.Z,{sx:{display:"inline-flex",alignItems:"center"},children:[(0,q.jsx)(B,{}),c?(0,q.jsx)(k.Z,{width:160,height:16,sx:{ml:1,background:"red"}}):(0,q.jsxs)(o.Z,{sx:{display:"flex"},children:[(0,q.jsx)(Re,{poolReserve:S,downToSM:A,hideAToken:O}),j&&(0,q.jsx)(Ne,{poolReserve:S,downToSM:A,switchNetwork:v,addERC20Token:b,currentChainId:h,connectedChainId:y,hideAToken:O})]})]})]})]})]}),children:[!A&&(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(Ae.d,{title:!c&&(0,q.jsx)(i.cC,{id:"{0}",values:{0:S.symbol}}),withoutIconWrapper:!0,icon:(0,q.jsx)(E,{}),loading:c,children:(0,q.jsxs)(o.Z,{sx:{display:"inline-flex",alignItems:"center"},children:[(0,q.jsx)(B,{}),(0,q.jsxs)(o.Z,{sx:{display:"flex"},children:[(0,q.jsx)(Re,{poolReserve:S,downToSM:A,hideAToken:O}),j&&(0,q.jsx)(Ne,{poolReserve:S,downToSM:A,switchNetwork:v,addERC20Token:b,currentChainId:h,connectedChainId:y,hideAToken:O})]})]})}),(0,q.jsx)(f.Z,{orientation:"vertical",flexItem:!0,sx:{my:1,borderColor:"rgba(235, 235, 239, 0.08)"}})]}),O?(0,q.jsx)(De,{}):(0,q.jsx)(Pe,{underlyingAsset:n})]})},Le=r(15446);function Fe(){var e=(0,l.useRouter)(),n=(0,u.HT)().reserves,r=e.query.underlyingAsset,t=(0,c.useState)("overview"),s=t[0],m=t[1],p=(0,V.Yh)((function(e){return e.trackEvent})),b=n.find((function(e){return e.underlyingAsset===r})),v=(0,c.useState)(!1),y=v[0],j=v[1];(0,c.useEffect)((function(){!y&&b&&b.iconSymbol&&r&&(p("Page Viewed",{"Page Name":"Reserve Overview",Reserve:b.iconSymbol,Asset:r}),j(!0))}),[p,b,r,y]);var f="overview"===s;return(0,q.jsxs)(h.hv,{asset:b,children:[(0,q.jsx)(Me,{underlyingAsset:r}),(0,q.jsxs)(Le.O,{children:[(0,q.jsx)(o.Z,{sx:{display:{xs:"flex",lg:"none"},justifyContent:{xs:"center",xsm:"flex-start"},mb:{xs:3,xsm:4}},children:(0,q.jsxs)(x.Z,{color:"primary",value:s,exclusive:!0,onChange:function(e,n){return m(n)},sx:{width:{xs:"100%",xsm:"359px"},height:"44px"},children:[(0,q.jsx)(d.Z,{value:"overview",disabled:"overview"===s,children:(0,q.jsx)(a.Z,{variant:"subheader1",children:(0,q.jsx)(i.cC,{id:"Overview"})})}),(0,q.jsx)(d.Z,{value:"actions",disabled:"actions"===s,children:(0,q.jsx)(a.Z,{variant:"subheader1",children:(0,q.jsx)(i.cC,{id:"Your info"})})})]})}),(0,q.jsxs)(o.Z,{sx:{display:"flex"},children:[(0,q.jsx)(o.Z,{sx:{display:{xs:f?"block":"none",lg:"block"},width:{xs:"100%",lg:"calc(100% - 432px)"},mr:{xs:0,lg:4}},children:(0,q.jsx)(Ze,{reserve:b})}),(0,q.jsx)(o.Z,{sx:{display:{xs:f?"none":"block",lg:"block"},width:{xs:"100%",lg:"416px"}},children:(0,q.jsx)(ce,{reserve:b})})]})]})]})}Fe.getLayout=function(e){return(0,q.jsx)(m.Z,{children:e})}},15446:function(e,n,r){"use strict";r.d(n,{O:function(){return o}});var t=r(61953),s=r(64288),i=r(85893),o=function(e){var n=e.children;return(0,i.jsx)(t.Z,{sx:{display:"flex",flexDirection:"column",flex:1,mt:{xs:"-32px",lg:"-46px",xl:"-44px",xxl:"-48px"}},children:(0,i.jsx)(s.Z,{children:n})})}},40535:function(e,n,r){"use strict";r.d(n,{V:function(){return h}});var t=r(49501),s=r(62097),i=r(61225),o=r(61953),a=r(29630),l=r(75084),c=r(8656),d=r(67728),x=r(68861),u=r(85893),h=function(e){var n=e.pageTitle,r=e.withMigrateButton,h=(0,c.Yh)((function(e){return(0,d.lY)(e)})),m=(0,s.Z)(),p=(0,i.Z)(m.breakpoints.up("lg")),b=(0,i.Z)(m.breakpoints.down("xsm"));return(0,u.jsxs)(o.Z,{sx:{display:"flex",alignItems:{xs:"flex-start",xsm:"center"},mb:n?4:0,flexDirection:{xs:"column",xsm:"row"}},children:[n&&(0,u.jsx)(o.Z,{sx:{display:"flex",alignItems:"flex-start"},children:(0,u.jsx)(a.Z,{variant:b?"h2":p?"display1":"h1",sx:{color:"text.white",mr:{xs:5,xsm:3},mb:{xs:1,xsm:0}},children:n})}),(0,u.jsx)(o.Z,{sx:{display:"flex",alignItems:"flex-start",flexWrap:"wrap",mb:n?0:4},children:h&&r&&(0,u.jsx)(x.rU,{href:x.Z6.migrationTool,sx:{mt:{xs:2,xsm:0}},children:(0,u.jsx)(l.Z,{variant:"gradient",size:"small",children:(0,u.jsx)(t.cC,{id:"Migrate to V3"})})})})]})}},74815:function(e,n,r){"use strict";r.d(n,{f:function(){return d}});var t=r(59499),s=r(61953),i=r(64288),o=r(40535),a=r(85893);function l(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function c(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?l(Object(r),!0).forEach((function(n){(0,t.Z)(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}var d=function(e){var n=e.pageTitle,r=e.titleComponent,t=e.withMarketSwitcher,l=e.withMigrateButton,d=e.bridge,x=e.children,u=e.containerProps,h=void 0===u?{}:u;return(0,a.jsx)(s.Z,{sx:{bgcolor:"background.header",pt:{xs:10,md:12},pb:{xs:18,md:20,lg:"94px",xl:"92px",xxl:"96px"},color:"#F1F1F3"},children:(0,a.jsx)(i.Z,c(c({},h),{},{sx:c(c({},h.sx),{},{pb:0}),children:(0,a.jsxs)(s.Z,{sx:{px:{}},children:[!r&&(0,a.jsx)(o.V,{pageTitle:n,withMarketSwitcher:t,withMigrateButton:l,bridge:d}),r&&r,(0,a.jsx)(s.Z,{sx:{display:"flex",alignItems:"flex-start",gap:{xs:3,xsm:8},flexWrap:"wrap",width:"100%"},children:x})]})}))})}},87369:function(e,n,r){"use strict";r.d(n,{d:function(){return c}});var t=r(62097),s=r(61225),i=r(61953),o=r(29630),a=r(91655),l=r(85893),c=function(e){var n=e.icon,r=e.title,c=e.titleIcon,d=e.children,x=e.hideIcon,u=e.variant,h=void 0===u?"dark":u,m=e.withLine,p=e.loading,b=e.withoutIconWrapper,v=(0,t.Z)(),y=(0,s.Z)(v.breakpoints.up("sm"));return(0,l.jsxs)(i.Z,{sx:{display:"flex",alignItems:"center",width:{xs:"calc(50% - 12px)",xsm:"unset"}},children:[m&&(0,l.jsx)(i.Z,{sx:{mr:8,my:"auto",width:"1px",bgcolor:"#F2F3F729",height:"37px"}}),!x&&(b?n&&n:(0,l.jsx)(i.Z,{sx:{display:{xs:"none",md:"flex"},alignItems:"center",justifyContent:"center",border:"1px solid #EBEBED1F",borderRadius:"12px",bgcolor:"#535047",boxShadow:"0px 2px 1px rgba(0, 0, 0, 0.05), 0px 0px 1px rgba(0, 0, 0, 0.25)",width:42,height:42,mr:3},children:n&&n})),(0,l.jsxs)(i.Z,{sx:{display:"flex",flexDirection:"column"},children:[(0,l.jsxs)(i.Z,{sx:{display:"inline-flex",alignItems:"center"},children:[(0,l.jsx)(o.Z,{sx:{color:"dark"===h?"#A5A8B6":"#62677B"},variant:y?"description":"caption",component:"div",children:r}),c&&c]}),p?(0,l.jsx)(a.Z,{width:60,height:y?28:24,sx:{background:"#535047"}}):d]})]})}},3765:function(e,n,r){"use strict";r.d(n,{p:function(){return x}});var t=r(49501),s=r(75084),i=r(5152),o=r(26074),a=r(8656),l=r(57609),c=r(85893),d=(0,i.default)((function(){return Promise.resolve().then(r.bind(r,58294)).then((function(e){return e.WalletModal}))}),{loadableGenerated:{webpack:function(){return[58294]}}}),x=function(e){var n=e.funnel,r=(0,o.q)().setWalletModalOpen,i=(0,a.Yh)((function(e){return e.trackEvent}));return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(s.Z,{variant:"surface",onClick:function(){i(l.Bp.CONNECT_WALLET,{funnel:n}),r(!0)},children:(0,c.jsx)(t.cC,{id:"Connect wallet"})}),(0,c.jsx)(d,{})]})}},29002:function(e,n,r){"use strict";r.d(n,{o:function(){return d}});var t=r(59499),s=r(4730),i=r(81645),o=r(85893),a=["sx"];function l(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function c(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?l(Object(r),!0).forEach((function(n){(0,t.Z)(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}var d=function(e){var n=e.sx,r=(0,s.Z)(e,a);return(0,o.jsxs)(i.Z,c(c({sx:c({fill:"none",stroke:"#A5A8B6"},n),viewBox:"0 0 21 19",xmlns:"http://www.w3.org/2000/svg","aria-label":"Wallet"},r),{},{children:[(0,o.jsxs)("g",{clipPath:"url(#clip0_3719_3323)",strokeWidth:"2",children:[(0,o.jsx)("path",{d:"M17.3203 17.398H3.32031C2.78988 17.398 2.28117 17.1872 1.9061 16.8122C1.53103 16.4371 1.32031 15.9284 1.32031 15.3979V6.39795C1.32031 5.86752 1.53103 5.35881 1.9061 4.98374C2.28117 4.60866 2.78988 4.39795 3.32031 4.39795H17.3203C17.8507 4.39795 18.3595 4.60866 18.7345 4.98374C19.1096 5.35881 19.3203 5.86752 19.3203 6.39795V15.3979C19.3203 15.9284 19.1096 16.4371 18.7345 16.8122C18.3595 17.1872 17.8507 17.398 17.3203 17.398Z"}),(0,o.jsx)("path",{d:"M14.8203 11.3979C14.6877 11.3979 14.5605 11.3453 14.4668 11.2515C14.373 11.1577 14.3203 11.0306 14.3203 10.8979C14.3203 10.7653 14.373 10.6382 14.4668 10.5444C14.5605 10.4506 14.6877 10.3979 14.8203 10.3979C14.9529 10.3979 15.0801 10.4506 15.1739 10.5444C15.2676 10.6382 15.3203 10.7653 15.3203 10.8979C15.3203 11.0306 15.2676 11.1577 15.1739 11.2515C15.0801 11.3453 14.9529 11.3979 14.8203 11.3979Z",strokeLinecap:"round",strokeLinejoin:"round"}),(0,o.jsx)("path",{d:"M16.3203 4.39793V2.99993C16.3202 2.69343 16.2497 2.39106 16.1142 2.11615C15.9787 1.84124 15.7818 1.60116 15.5387 1.41444C15.2956 1.22773 15.0129 1.09937 14.7124 1.03929C14.4118 0.979209 14.1015 0.989009 13.8053 1.06793L2.80531 4.00093C2.37937 4.11444 2.00285 4.36549 1.7343 4.71506C1.46575 5.06462 1.32021 5.49312 1.32031 5.93393V6.39793"})]}),(0,o.jsx)("defs",{children:(0,o.jsx)("clipPath",{id:"clip0_3719_3323",children:(0,o.jsx)("rect",{width:"20",height:"19",fill:"white",transform:"translate(0.320312)"})})})]}))}},94847:function(e,n,r){"use strict";r.d(n,{x:function(){return a},I:function(){return l}});var t=r(80854),s=r(1279),i=r(70794),o=r(87385);function a(e,n){return"0"===e?new i.Z(-1):new i.Z(e).minus(n)}function l(e,n,r,l){if(n.isFrozen)return"0";var c=(0,s.hE)(e);return c.gt(0)&&r.toLowerCase()===t.hP.toLowerCase()&&(c=c.minus(l)),"0"!==n.supplyCap&&(c=i.Z.min(c,a(n.supplyCap,n.totalLiquidity))),c.lte(0)?"0":(0,o.$w)(c.toString(10),n.decimals)}},97438:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/reserve-overview",function(){return r(29822)}])}},function(e){e.O(0,[4653,4553,8469,3629,1034,3122,9774,2888,179],(function(){return n=97438,e(e.s=n);var n}));var n=e.O();_N_E=n}]);