(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5017],{98289:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return _}});var n=r(5152),o=r(83550),i=r(59499),a=r(49501),s=r(1279),c=r(62097),u=r(61225),l=r(29630),d=r(30120),p=r(75084),f=(r(67294),r(45745)),h=r(45884),x=r(99435),v=r(1475),m=r(32383),j=r(45556),b=r(41024),g=r(68861),y=r(72667),w=r(34220),O=r(82482),k=r(8195),Z=r(77537),P=r(16376),D=r(91655),C=r(85893),S=function(){return(0,C.jsxs)(m.H,{px:6,minHeight:76,children:[(0,C.jsxs)(h.h,{isRow:!0,maxWidth:280,children:[(0,C.jsx)(D.Z,{variant:"circular",width:32,height:32}),(0,C.jsx)(d.Z,{sx:{pl:3.5,overflow:"hidden"},children:(0,C.jsx)(D.Z,{width:75,height:24})})]}),(0,C.jsx)(h.h,{children:(0,C.jsx)(D.Z,{width:70,height:24})}),(0,C.jsx)(h.h,{maxWidth:280,align:"right",children:(0,C.jsx)(p.Z,{variant:"contained",children:(0,C.jsx)(a.cC,{id:"Faucet"})})})]})},A=function(){return(0,C.jsxs)(m.H,{px:6,minHeight:76,children:[(0,C.jsxs)(h.h,{isRow:!0,maxWidth:280,children:[(0,C.jsx)(D.Z,{variant:"circular",width:32,height:32}),(0,C.jsx)(d.Z,{sx:{pl:3.5,overflow:"hidden"},children:(0,C.jsx)(D.Z,{width:75,height:24})})]}),(0,C.jsx)(h.h,{maxWidth:280,align:"right",children:(0,C.jsx)(p.Z,{variant:"contained",children:(0,C.jsx)(a.cC,{id:"Faucet"})})})]})};function T(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function R(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?T(Object(r),!0).forEach((function(t){(0,i.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):T(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function B(){var e=(0,w.HT)(),t=e.reserves,r=e.loading,n=(0,k.vR)().openFaucet,o=(0,Z.Z)(),i=o.currentAccount,D=o.loading,T=(0,P.Yh)((function(e){return e.currentMarket})),B=(0,P.Yh)((function(e){return e.currentMarketData})),E=(0,O.P)(B).walletBalances,W=(0,c.Z)(),I=(0,u.Z)(W.breakpoints.down("xsm")),z=t.filter((function(e){return!e.isWrappedBaseAsset&&!e.isFrozen&&"GHO"!==e.symbol})).map((function(e){var t,r=(0,s.hE)((null===(t=E[e.underlyingAsset])||void 0===t?void 0:t.amount)||"0");return R(R({},e),{},{walletBalance:r})}));return!i||D?(0,C.jsx)(f.w,{loading:D,description:(0,C.jsx)(a.cC,{id:"Please connect your wallet to get free testnet assets."})}):(0,C.jsxs)(j.l,{titleComponent:(0,C.jsx)(l.Z,{component:"div",variant:"h2",sx:{mr:4},children:(0,C.jsx)(a.cC,{id:"Test Assets"})}),children:[(0,C.jsxs)(v.u,{px:I?4:6,children:[(0,C.jsx)(h.h,{isRow:!0,maxWidth:280,children:(0,C.jsx)(x.M,{children:(0,C.jsx)(a.cC,{id:"Asset"})})}),!I&&(0,C.jsx)(h.h,{children:(0,C.jsx)(x.M,{children:(0,C.jsx)(a.cC,{id:"Wallet balance"})})}),(0,C.jsx)(h.h,{maxWidth:280})]}),r?I?(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(A,{}),(0,C.jsx)(A,{}),(0,C.jsx)(A,{})]}):(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(S,{}),(0,C.jsx)(S,{}),(0,C.jsx)(S,{}),(0,C.jsx)(S,{}),(0,C.jsx)(S,{})]}):z.map((function(e){return(0,C.jsxs)(m.H,{px:I?4:6,"data-cy":"faucetListItem_".concat(e.symbol.toUpperCase()),children:[(0,C.jsx)(h.h,{isRow:!0,maxWidth:280,children:(0,C.jsxs)(g.rU,{href:g.Z6.reserveOverview(e.underlyingAsset,T),noWrap:!0,sx:{display:"inline-flex",alignItems:"center"},children:[(0,C.jsx)(y.T1,{symbol:e.iconSymbol,fontSize:"large"}),(0,C.jsxs)(d.Z,{sx:{pl:3.5,overflow:"hidden"},children:[(0,C.jsx)(l.Z,{variant:"h4",noWrap:!0,children:e.name}),(0,C.jsx)(l.Z,{variant:"subheader2",color:"text.muted",noWrap:!0,children:e.symbol})]})]})}),!I&&(0,C.jsx)(h.h,{children:(0,C.jsx)(b.B,{compact:!0,value:e.walletBalance.toString(),variant:"main16"})}),(0,C.jsx)(h.h,{maxWidth:280,align:"right",children:(0,C.jsx)(p.Z,{variant:"contained",onClick:function(){return n(e.underlyingAsset)},children:(0,C.jsx)(a.cC,{id:"Faucet"})})})]},e.symbol)}))]})}var E=r(40535),W=r(46930),I=r(74815),z=function(){var e=(0,c.Z)().breakpoints,t=(0,u.Z)(e.down("md")),r=(0,u.Z)(e.down("xsm")),n=(0,W.f)().currentMarketData;return(0,C.jsx)(I.f,{pageTitle:(0,C.jsx)(C.Fragment,{}),titleComponent:(0,C.jsxs)(d.Z,{children:[(0,C.jsx)(E.V,{pageTitle:(0,C.jsx)(a.cC,{id:"{0} Faucet",values:{0:n.marketTitle}}),withMarketSwitcher:!0}),(0,C.jsx)(d.Z,{sx:{width:t?r?"320px":"540px":"860px"},children:(0,C.jsx)(l.Z,{variant:"description",color:"#A5A8B6",children:(0,C.jsx)(a.cC,{id:"With testnet Faucet you can get free assets to test the YieldLend Protocol. Make sure to switch your wallet provider to the appropriate testnet network, select desired asset, and click \u2018Faucet\u2019 to get tokens transferred to your wallet. The assets on a testnet are not \u201creal,\u201d meaning they have no monetary value."})})})]})})},F=r(15446),H=(0,n.default)((function(){return Promise.all([r.e(543),r.e(3629),r.e(1717),r.e(1780)]).then(r.bind(r,53913)).then((function(e){return e.FaucetModal}))}),{loadableGenerated:{webpack:function(){return[53913]}}});function _(){return(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(z,{}),(0,C.jsx)(F.O,{children:(0,C.jsx)(B,{})})]})}_.getLayout=function(e){return(0,C.jsxs)(o.Z,{children:[e,(0,C.jsx)(H,{})]})}},45884:function(e,t,r){"use strict";r.d(t,{h:function(){return i}});var n=r(30120),o=r(85893),i=function(e){var t=e.isRow,r=e.children,i=e.minWidth,a=e.maxWidth,s=e.align,c=void 0===s?"center":s,u=e.overFlow,l=void 0===u?"visible":u,d=e.flex,p=void 0===d?1:d,f=e.p,h=void 0===f?1:f;return(0,o.jsx)(n.Z,{sx:{display:"flex",flexDirection:t?"row":"column",alignItems:t?"center":"left"===c?"flex-start":"right"===c?"flex-end":c,justifyContent:t?"flex-start":"flex-end",flex:p,minWidth:i||"70px",maxWidth:a,overflow:l,padding:h},children:r})}},99435:function(e,t,r){"use strict";r.d(t,{M:function(){return c}});var n=r(29630),o=r(30120),i=r(16376),a=r(57609),s=r(85893),c=function(e){var t=e.sortName,r=e.sortDesc,c=e.sortKey,u=e.source,l=e.setSortName,d=e.setSortDesc,p=e.onClick,f=e.children,h=(0,i.Yh)((function(e){return e.trackEvent}));return(0,s.jsxs)(n.Z,{component:"div",variant:"subheader2",color:"text.secondary",noWrap:!0,onClick:function(){return p?p():!!c&&(e=c,h(a.uZ.SORT,{sort_by:e,tile:u}),d&&d(!1),l&&l(e),void(t===e&&d&&d(!r)));var e},sx:{cursor:p||c?"pointer":"default",display:"inline-flex",alignItems:"center"},children:[f,!!c&&(0,s.jsxs)(o.Z,{sx:{display:"inline-flex",flexDirection:"column",ml:1},children:[(0,s.jsx)(o.Z,{component:"span",sx:function(e){return{width:0,height:0,borderStyle:"solid",borderWidth:"0 4px 4px 4px",borderColor:"transparent transparent ".concat(t===c&&r?e.palette.text.secondary:e.palette.divider," transparent"),mb:.5}}}),(0,s.jsx)(o.Z,{component:"span",sx:function(e){return{width:0,height:0,borderStyle:"solid",borderWidth:"4px 4px 0 4px",borderColor:"".concat(t!==c||r?e.palette.divider:e.palette.text.secondary," transparent transparent transparent")}}})]})]})}},1475:function(e,t,r){"use strict";r.d(t,{u:function(){return l}});var n=r(59499),o=r(4730),i=r(30120),a=r(85893),s=["px","children"];function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var l=function(e){var t=e.px,r=void 0===t?4:t,n=e.children,c=(0,o.Z)(e,s);return(0,a.jsx)(i.Z,u(u({},c),{},{sx:u({display:"flex",alignItems:"flex-end",px:r,pt:4,pb:1,position:"sticky",top:0,zIndex:100},c.sx),children:n}))}},32383:function(e,t,r){"use strict";r.d(t,{H:function(){return l}});var n=r(59499),o=r(4730),i=r(30120),a=r(85893),s=["children","minHeight","px","button"];function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var l=function(e){var t=e.children,r=e.minHeight,n=void 0===r?71:r,c=e.px,l=void 0===c?4:c,d=e.button,p=(0,o.Z)(e,s);return(0,a.jsx)(i.Z,u(u({},p),{},{sx:u(u({display:"flex",alignItems:"center",minHeight:n,px:l,"&:not(:last-child)":{}},d?{"&:hover":{bgcolor:"action.hover"}}:{}),p.sx),children:t}))}},72667:function(e,t,r){"use strict";r.d(t,{Js:function(){return v},T1:function(){return g}});var n=r(83618),o=r(59499),i=r(4730),a=r(89722),s=r(30120),c=r(60082),u=r(67294),l=r(85893),d=["symbol","aToken"],p=["symbols","badgeSymbol"],f=["symbol"];function h(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function x(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?h(Object(r),!0).forEach((function(t){(0,o.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):h(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function v(e){var t=e.symbol,r=e.onImageGenerated,n=e.aToken,o=(0,u.useRef)(null),i=(0,u.useRef)(null),a=(0,u.useState)(!0),s=a[0],c=a[1];return(0,u.useEffect)((function(){var e;if(!s&&o.current&&null!==(e=o.current)&&void 0!==e&&e.contentDocument)if(n){var t,a,c,u,l=null===(t=o.current)||void 0===t||null===(a=t.contentDocument)||void 0===a||null===(c=a.childNodes)||void 0===c?void 0:c[0],d=l.getAttribute("width"),p=l.getAttribute("height"),f=l.getAttribute("viewBox");l.setAttribute("x",25),l.setAttribute("width",206),l.setAttribute("y",25),l.setAttribute("height",206),f||l.setAttribute("viewBox","0 0 ".concat(d," ").concat(p)),null===(u=i.current)||void 0===u||u.appendChild(l);var h=(new XMLSerializer).serializeToString(i.current);r("data:image/svg+xml;base64,".concat(window.btoa(unescape(encodeURIComponent(h)))))}else{var x,v=(new XMLSerializer).serializeToString(null===(x=o.current)||void 0===x?void 0:x.contentDocument);r("data:image/svg+xml;base64,".concat(window.btoa(unescape(encodeURIComponent(v)))))}}),[s,n]),(0,l.jsxs)("div",{style:{visibility:"hidden",height:0,width:0,overflow:"hidden"},children:[(0,l.jsx)("object",{style:{opacity:1},ref:o,id:"svg",data:"/icons/tokens/".concat(t.toLowerCase(),".svg"),onLoad:function(){return c(!1)}}),n&&(0,l.jsx)(m,{ref:i})]})}var m=(0,u.forwardRef)((function(e,t){var r=e.symbol;return(0,l.jsxs)("svg",{style:{position:"absolute",top:0,left:0,width:"100%",height:"100%"},ref:t,id:"Group_30952",width:"256",height:"256",viewBox:"0 0 256 256",children:[(0,l.jsxs)("defs",{id:"defs10",children:[(0,l.jsxs)("linearGradient",{id:"linear-gradient",x1:".843",x2:".206",y1:".135",y2:".886",gradientUnits:"objectBoundingBox",children:[(0,l.jsx)("stop",{offset:"0",stopColor:"#b6509e",id:"stop2"}),(0,l.jsx)("stop",{offset:"1",stopColor:"#2ebac6",id:"stop4"})]}),(0,l.jsx)("linearGradient",{id:"linear-gradient-2",x1:".907",x2:".163",y1:".227",y2:".853"})]}),(0,l.jsxs)("g",{id:"Group_29109",children:[(0,l.jsx)("path",{id:"Subtraction_108",fill:"url(#linear-gradient)",d:"M128 256a128.976 128.976 0 0 1-25.8-2.6 127.309 127.309 0 0 1-45.77-19.261 128.366 128.366 0 0 1-46.375-56.315A127.357 127.357 0 0 1 2.6 153.8a129.251 129.251 0 0 1 0-51.593 127.31 127.31 0 0 1 19.26-45.77 128.372 128.372 0 0 1 56.317-46.378A127.33 127.33 0 0 1 102.2 2.6a129.244 129.244 0 0 1 51.593 0 127.308 127.308 0 0 1 45.77 19.26 128.367 128.367 0 0 1 46.375 56.316A127.343 127.343 0 0 1 253.4 102.2a129.248 129.248 0 0 1 0 51.593 127.3 127.3 0 0 1-19.26 45.77 128.382 128.382 0 0 1-56.316 46.375A127.4 127.4 0 0 1 153.8 253.4 128.977 128.977 0 0 1 128 256zm0-242.287a115.145 115.145 0 0 0-23.033 2.322A113.657 113.657 0 0 0 64.1 33.232a114.622 114.622 0 0 0-41.4 50.283 113.7 113.7 0 0 0-6.659 21.452 115.4 115.4 0 0 0 0 46.065 113.66 113.66 0 0 0 17.2 40.866 114.627 114.627 0 0 0 50.282 41.407 113.75 113.75 0 0 0 21.453 6.658 115.381 115.381 0 0 0 46.065 0 113.609 113.609 0 0 0 40.866-17.2 114.622 114.622 0 0 0 41.393-50.278 113.741 113.741 0 0 0 6.659-21.453 115.4 115.4 0 0 0 0-46.065 113.662 113.662 0 0 0-17.2-40.865A114.619 114.619 0 0 0 172.485 22.7a113.74 113.74 0 0 0-21.453-6.659A115.145 115.145 0 0 0 128 13.714z"}),r&&(0,l.jsx)("image",{x:"25",y:"25",href:"/icons/tokens/".concat(r.toLowerCase(),".svg"),width:"206",height:"206"})]})]})}));function j(e){var t=e.symbol,r=e.aToken,n=(0,i.Z)(e,d);return(0,l.jsx)(a.Z,x(x({},n),{},{sx:x({display:"flex",position:"relative",borderRadius:"50%"},n.sx),children:r?(0,l.jsx)(m,{symbol:t}):(0,l.jsx)("img",{src:"/icons/tokens/".concat(t.toLowerCase(),".svg"),width:"100%",height:"100%",alt:"".concat(t," icon")})}))}function b(e){var t=e.symbols,r=e.badgeSymbol,n=(0,i.Z)(e,p);return r?(0,l.jsx)(c.Z,{badgeContent:(0,l.jsx)(j,{symbol:r,sx:{border:"1px solid #fff"},fontSize:"small"}),sx:{".MuiBadge-anchorOriginTopRight":{top:9}},children:t.map((function(e,t){return(0,u.createElement)(j,x(x({},n),{},{key:e,symbol:e,sx:x({ml:0===t?0:"calc(-1 * 0.5em)"},n.sx)}))}))}):(0,l.jsx)(s.Z,{sx:{display:"inline-flex",position:"relative"},children:t.map((function(e,t){return(0,u.createElement)(j,x(x({},n),{},{key:e,symbol:e,sx:x({ml:0===t?0:"calc(-1 * 0.5em)"},n.sx)}))}))})}function g(e){var t=e.symbol,r=(0,i.Z)(e,f),o=t.split("_");if(o.length>1){var a=(0,n.Z)(o),s=a[0],c=a.slice(1);return(0,l.jsx)(b,x(x({},r),{},{symbols:c,badgeSymbol:"/pools/"+s}))}return(0,l.jsx)(j,x({symbol:t},r))}m.displayName="ATokenIcon"},82482:function(e,t,r){"use strict";r.d(t,{P:function(){return j}});var n=r(80854),o=r(1279),i=r(81206),a=r(82403),s=r(70794),c=r(16376),u=r(25298),l=r(52369),d=r(59499),p=r(87669),f=r(15591),h=r(12987);function x(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var v=function(e,t,r){var n=(0,h.z)().poolTokensBalanceService;return(0,p.h)({queries:e.map((function(e){return function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?x(Object(r),!0).forEach((function(t){(0,d.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):x(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({queryKey:f.B.poolTokens(t,e),queryFn:function(){return n.getPoolTokensBalances(e,t)},enabled:!!t,refetchInterval:f.g},r)}))})},m=function(e){var t=(0,c.Yh)((function(e){return e.account})),r=v(e,t),d=(0,l.T)(e),p=r.find((function(e){return e.isLoading}))||d.find((function(e){return e.isLoading}));return{walletBalances:d.map((function(t,c){var l;return function(e){var t=e.reservesHumanized,r=e.balances,c=e.marketData,l=(null===t||void 0===t?void 0:t.reservesData)||[],d=(null===t||void 0===t?void 0:t.baseCurrencyData)||{marketReferenceCurrencyDecimals:0,marketReferenceCurrencyPriceInUsd:"0",networkBaseTokenPriceInUsd:"0",networkBaseTokenPriceDecimals:0},p=!0;return{walletBalances:(null!==r&&void 0!==r?r:[]).reduce((function(e,t){var r=l.find((function(e){var r;return t.address===n.hP.toLowerCase()?e.symbol.toLowerCase()===(null===(r=u.m5[c.chainId].wrappedBaseAssetSymbol)||void 0===r?void 0:r.toLowerCase()):e.underlyingAsset.toLowerCase()===t.address}));return"0"!==t.amount&&(p=!1),r&&(e[t.address]={amount:(0,o.Fv)(t.amount,r.decimals),amountUSD:(0,i.Z)({amount:new s.O(t.amount),currencyDecimals:r.decimals,priceInMarketReferenceCurrency:r.priceInMarketReferenceCurrency,marketReferenceCurrencyDecimals:d.marketReferenceCurrencyDecimals,normalizedMarketReferencePriceInUsd:(0,o.Fv)(d.marketReferenceCurrencyPriceInUsd,a.$3)})}),e}),{}),hasEmptyWallet:p}}({reservesHumanized:t.data,balances:null===(l=r[c])||void 0===l?void 0:l.data,marketData:e[c]})})),isLoading:p}},j=function(e){var t=m([e]),r=t.walletBalances,n=t.isLoading;return{walletBalances:r[0].walletBalances,hasEmptyWallet:r[0].hasEmptyWallet,loading:n}}},52369:function(e,t,r){"use strict";r.d(t,{T:function(){return c},J:function(){return u}});var n=r(59499),o=r(87669),i=r(15591),a=r(12987);function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var c=function(e,t){var r=(0,a.z)().uiPoolService;return(0,o.h)({queries:e.map((function(e){return function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({queryKey:i.B.poolReservesDataHumanized(e),queryFn:function(){return r.getReservesHumanized(e)},refetchInterval:i.g,meta:{}},t)}))})},u=function(e){return c([e])[0]}},15591:function(e,t,r){"use strict";r.d(t,{B:function(){return o},g:function(){return i}});var n=r(90116),o={governance:["governance"],staking:["staking"],pool:["pool"],incentives:["incentives"],gho:["gho"],market:function(e){return[e.chainId,!!e.isFork,e.market]},user:function(e){return[e]},powers:function(e,t){return[].concat((0,n.Z)(o.governance),(0,n.Z)(o.user(e)),(0,n.Z)(o.market(t)),["powers"])},voteOnProposal:function(e,t,r){return[].concat((0,n.Z)(o.governance),(0,n.Z)(o.user(e)),(0,n.Z)(o.market(r)),[t,"voteOnProposal"])},votingPowerAt:function(e,t,r,i){return[].concat((0,n.Z)(o.governance),(0,n.Z)(o.user(e)),(0,n.Z)(o.market(i)),[t,r,"votingPowerAt"])},governanceTokens:function(e,t){return[].concat((0,n.Z)(o.governance),(0,n.Z)(o.user(e)),(0,n.Z)(o.market(t)),["governanceTokens"])},transactionHistory:function(e,t){return[].concat((0,n.Z)(o.user(e)),(0,n.Z)(o.market(t)),["transactionHistory"])},poolTokens:function(e,t){return[].concat((0,n.Z)(o.pool),(0,n.Z)(o.user(e)),(0,n.Z)(o.market(t)),["poolTokens"])},poolReservesDataHumanized:function(e){return[].concat((0,n.Z)(o.pool),(0,n.Z)(o.market(e)),["poolReservesDataHumanized"])},generalStakeUiData:function(e){return[].concat((0,n.Z)(o.staking),(0,n.Z)(o.market(e)),["generalStakeUiData"])},userStakeUiData:function(e,t){return[].concat((0,n.Z)(o.staking),(0,n.Z)(o.user(e)),(0,n.Z)(o.market(t)),["userStakeUiData"])},paraswapRates:function(e,t,r,i,a){return[].concat((0,n.Z)(o.user(a)),[e,t,r,i,"paraswapRates"])},gasPrices:function(e){return[e,"gasPrices"]},poolApprovedAmount:function(e,t,r){return[].concat((0,n.Z)(o.pool),(0,n.Z)(o.user(e)),(0,n.Z)(o.market(r)),[t,"poolApprovedAmount"])},approvedAmount:function(e,t,r,i){return[].concat((0,n.Z)(o.user(e)),(0,n.Z)(o.market(i)),[t,r,"approvedAmount"])}},i=6e4},84268:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/faucet",function(){return r(98289)}])}},function(e){e.O(0,[3327,4718,3299,9774,2888,179],(function(){return t=84268,e(e.s=t);var t}));var t=e.O();_N_E=t}]);