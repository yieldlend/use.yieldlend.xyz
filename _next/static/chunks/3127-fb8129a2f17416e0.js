"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3127],{96875:function(e,n,t){t.d(n,{o:function(){return b}});var r=t(59499),o=t(4730),i=t(49501),a=t(1279),c=t(62097),s=t(30120),l=t(29630),u=t(75084),d=t(70794),p=t(41024),f=t(85893),m=["value","onInfoClick","HALIntegrationComponent"];function x(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function v(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?x(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):x(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var b=function(e){var n=e.value,t=e.onInfoClick,r=e.HALIntegrationComponent,x=(0,o.Z)(e,m),b=(0,c.Z)().palette,y=Number((0,a.hE)(n).toFixed(2,d.Z.ROUND_DOWN)),j="";return j=y>=3?b.success.main:y<1.1?b.error.main:b.warning.main,(0,f.jsxs)(s.Z,{sx:{display:"inline-flex",alignItems:{xs:"flex-start",xsm:"center"},flexDirection:{xs:"column",xsm:"row"}},"data-cy":"HealthFactorTopPannel",children:["-1"===n?(0,f.jsx)(l.Z,{variant:"secondary14",color:b.success.main,children:"\u221e"}):(0,f.jsx)(p.B,v({value:y,sx:v({color:j},x.sx),visibleDecimals:2,compact:!0},x)),t&&(0,f.jsx)(u.Z,{onClick:t,variant:"surface",size:"small",sx:{minWidth:"unset",ml:{xs:0,xsm:2}},children:(0,f.jsx)(i.cC,{id:"Risk details"})}),r&&(0,f.jsx)(s.Z,{ml:{xs:0,xsm:2},mt:{xs:1,xsm:0},children:r})]})}},12349:function(e,n,t){t.d(n,{M:function(){return j}});var r=t(1279),o=t(80059),i=t(30120),a=t(29630),c=t(81645),s=t(67294),l=t(16376),u=t(57609),d=t(97563),p=t(41024),f=t(72667),m=t(49501),x=t(92391),v=t(85893),b=function(e){var n=e.incentives,t=e.incentivesNetAPR,r=e.symbol,o="secondary12",c=function(e){var n=e.incentiveAPR;return(0,v.jsx)(i.Z,{sx:{display:"inline-flex",alignItems:"center"},children:"Infinity"!==n?(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(p.B,{value:+n,percent:!0,variant:o}),(0,v.jsx)(a.Z,{variant:o,sx:{ml:1},children:(0,v.jsx)(m.cC,{id:"APR"})})]}):(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(a.Z,{variant:o,children:"\u221e %"}),(0,v.jsx)(a.Z,{variant:o,sx:{ml:1},children:(0,v.jsx)(m.cC,{id:"APR"})})]})})};return(0,v.jsxs)(i.Z,{sx:{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"},children:[(0,v.jsx)(a.Z,{variant:"caption",color:"text.secondary",mb:3,children:(0,v.jsx)(m.cC,{id:"Participating in this {symbol} reserve gives annualized rewards.",values:{symbol:r}})}),(0,v.jsxs)(i.Z,{sx:{width:"100%"},children:[n.map((function(e){return(0,v.jsx)(x.X,{height:32,caption:(0,v.jsxs)(i.Z,{sx:{display:"flex",alignItems:"center",mb:n.length>1?2:0},children:[(0,v.jsx)(f.T1,{symbol:e.rewardTokenSymbol,sx:{fontSize:"20px",mr:1}}),(0,v.jsx)(a.Z,{variant:o,children:e.rewardTokenSymbol})]}),width:"100%",children:(0,v.jsx)(c,{incentiveAPR:e.incentiveAPR})},e.rewardTokenAddress)})),n.length>1&&(0,v.jsx)(i.Z,{sx:function(e){return{pt:1,mt:1,border:"1px solid ".concat(e.palette.divider)}},children:(0,v.jsx)(x.X,{caption:(0,v.jsx)(m.cC,{id:"Net APR"}),height:32,children:(0,v.jsx)(c,{incentiveAPR:t})})})]})]})},y=function(){return(0,v.jsx)(i.Z,{sx:{p:{xs:"0 4px",xsm:"3.625px 4px"},display:"flex",alignItems:"center",justifyContent:"center"},children:(0,v.jsx)(a.Z,{variant:"main12",color:"text.secondary",children:"\xa0"})})},j=function(e){var n=e.incentives,t=e.symbol,m=e.displayBlank,x=(0,s.useState)(!1),j=x[0],h=x[1],g=(0,l.Yh)((function(e){return e.trackEvent}));if(!(n&&n.length>0))return m?(0,v.jsx)(y,{}):null;var O=n.some((function(e){return"Infinity"===e.incentiveAPR})),w=O?"Infinity":n.reduce((function(e,n){return e+ +n.incentiveAPR}),0),Z=O?"Infinity":"Infinity"!==w?(0,r.hE)(w||0).toNumber():"Infinity";if(0===Z)return m?(0,v.jsx)(y,{}):null;return(0,v.jsx)(d.a,{tooltipContent:(0,v.jsx)(b,{incentives:n,incentivesNetAPR:Z,symbol:t}),withoutHover:!0,setOpen:h,open:j,children:(0,v.jsxs)(i.Z,{sx:function(e){return{p:{xs:"0 4px",xsm:"2px 4px"},border:"1px solid ".concat(j?e.palette.action.disabled:e.palette.divider),borderRadius:"4px",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",transition:"opacity 0.2s ease",bgcolor:j?"action.hover":"transparent","&:hover":{bgcolor:"action.hover",borderColor:"action.disabled"}}},onClick:function(){g(u.h1.VIEW_LM_DETAILS_DASHBOARD,{}),h(!j)},children:[(0,v.jsx)(i.Z,{sx:{mr:2},children:"Infinity"!==Z&&Z<1e4?(0,v.jsx)(p.B,{value:Z,percent:!0,variant:"secondary12",color:"text.secondary"}):"Infinity"!==Z&&Z>9999?(0,v.jsx)(p.B,{value:Z,percent:!0,compact:!0,variant:"secondary12",color:"text.secondary"}):"Infinity"===Z?(0,v.jsx)(a.Z,{variant:"main12",color:"text.secondary",children:"\u221e"}):void 0}),(0,v.jsx)(i.Z,{sx:{display:"inline-flex"},children:(0,v.jsx)(v.Fragment,{children:n.length<5?(0,v.jsx)(v.Fragment,{children:n.map((function(e){return(0,v.jsx)(f.T1,{symbol:e.rewardTokenSymbol,sx:{fontSize:"".concat(12,"px"),ml:-1}},e.rewardTokenSymbol)}))}):(0,v.jsxs)(v.Fragment,{children:[n.slice(0,3).map((function(e){return(0,v.jsx)(f.T1,{symbol:e.rewardTokenSymbol,sx:{fontSize:"".concat(12,"px"),ml:-1}},e.rewardTokenSymbol)})),(0,v.jsx)(c.Z,{sx:{fontSize:"".concat(12,"px"),borderRadius:"50%",bgcolor:"common.white",color:"common.black",ml:-1,zIndex:5},children:(0,v.jsx)(o.Z,{})})]})})})]})})}},44749:function(e,n,t){t.d(n,{Ch:function(){return v},r$:function(){return b},a9:function(){return y}});var r=t(59499),o=t(49501),i=t(38264),a=t(81645),c=t(62097),s=t(30120),l=t(29630),u=t(97563),d=t(85893);function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function f(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var m={borderRadius:"4px",display:"inline-flex",alignItems:"center",p:"2px",mt:"2px",cursor:"pointer","&:hover":{opacity:.6}},x=function(e){var n=e.color;return(0,d.jsx)(a.Z,{sx:{ml:"3px",color:n||"text.muted",fontSize:"14px"},children:(0,d.jsx)(i.Z,{})})},v=function(e){var n=e.typographyProps,t=(0,c.Z)(),r=f({border:"1px solid ".concat(t.palette.warning.main),color:t.palette.warning.main},m);return(0,d.jsx)(u.a,{withoutHover:!0,tooltipContent:(0,d.jsx)(j,{content:(0,d.jsx)(o.cC,{id:"Isolated assets have limited borrowing power and other assets cannot be used as collateral."})}),children:(0,d.jsxs)(s.Z,{sx:r,children:[(0,d.jsx)(l.Z,f(f({variant:"secondary12",sx:{lineHeight:"0.75rem"},color:t.palette.warning.main},n),{},{children:(0,d.jsx)(o.cC,{id:"Isolated"})})),(0,d.jsx)(x,{color:t.palette.warning.main})]})})},b=function(){return(0,d.jsx)(u.a,{tooltipContent:(0,d.jsx)(j,{content:(0,d.jsx)(o.cC,{id:"Asset can be only used as collateral in isolation mode with limited borrowing power. To enter isolation mode, disable all other collateral."})}),children:(0,d.jsxs)(s.Z,{sx:m,children:[(0,d.jsx)(l.Z,{variant:"description",color:"error.main",children:(0,d.jsx)(o.cC,{id:"Unavailable"})}),(0,d.jsx)(x,{})]})})},y=function(){return(0,d.jsx)(u.a,{tooltipContent:(0,d.jsx)(j,{content:(0,d.jsx)(o.cC,{id:"Collateral usage is limited because of isolation mode."})}),children:(0,d.jsxs)(s.Z,{sx:m,children:[(0,d.jsx)(l.Z,{variant:"description",color:"error.main",children:(0,d.jsx)(o.cC,{id:"Unavailable"})}),(0,d.jsx)(x,{})]})})},j=function(e){var n=e.content;return(0,d.jsx)(s.Z,{children:(0,d.jsx)(s.Z,{sx:{mb:4},children:n})})}},92391:function(e,n,t){t.d(n,{X:function(){return d}});var r=t(59499),o=t(4730),i=t(30120),a=t(29630),c=t(85893),s=["caption","children","captionVariant","captionColor","align"];function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function u(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var d=function(e){var n=e.caption,t=e.children,r=e.captionVariant,l=void 0===r?"secondary16":r,d=e.captionColor,p=e.align,f=void 0===p?"center":p,m=(0,o.Z)(e,s);return(0,c.jsxs)(i.Z,u(u({},m),{},{sx:u({display:"flex",alignItems:f,justifyContent:"space-between"},m.sx),children:[n&&(0,c.jsx)(a.Z,{component:"div",variant:l,color:d,sx:{mr:2},children:n}),t]}))}},72667:function(e,n,t){t.d(n,{Js:function(){return v},T1:function(){return h}});var r=t(83618),o=t(59499),i=t(4730),a=t(89722),c=t(30120),s=t(60082),l=t(67294),u=t(85893),d=["symbol","aToken"],p=["symbols","badgeSymbol"],f=["symbol"];function m(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function x(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?m(Object(t),!0).forEach((function(n){(0,o.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):m(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function v(e){var n=e.symbol,t=e.onImageGenerated,r=e.aToken,o=(0,l.useRef)(null),i=(0,l.useRef)(null),a=(0,l.useState)(!0),c=a[0],s=a[1];return(0,l.useEffect)((function(){var e;if(!c&&o.current&&null!==(e=o.current)&&void 0!==e&&e.contentDocument)if(r){var n,a,s,l,u=null===(n=o.current)||void 0===n||null===(a=n.contentDocument)||void 0===a||null===(s=a.childNodes)||void 0===s?void 0:s[0],d=u.getAttribute("width"),p=u.getAttribute("height"),f=u.getAttribute("viewBox");u.setAttribute("x",25),u.setAttribute("width",206),u.setAttribute("y",25),u.setAttribute("height",206),f||u.setAttribute("viewBox","0 0 ".concat(d," ").concat(p)),null===(l=i.current)||void 0===l||l.appendChild(u);var m=(new XMLSerializer).serializeToString(i.current);t("data:image/svg+xml;base64,".concat(window.btoa(unescape(encodeURIComponent(m)))))}else{var x,v=(new XMLSerializer).serializeToString(null===(x=o.current)||void 0===x?void 0:x.contentDocument);t("data:image/svg+xml;base64,".concat(window.btoa(unescape(encodeURIComponent(v)))))}}),[c,r]),(0,u.jsxs)("div",{style:{visibility:"hidden",height:0,width:0,overflow:"hidden"},children:[(0,u.jsx)("object",{style:{opacity:1},ref:o,id:"svg",data:"/icons/tokens/".concat(n.toLowerCase(),".svg"),onLoad:function(){return s(!1)}}),r&&(0,u.jsx)(b,{ref:i})]})}var b=(0,l.forwardRef)((function(e,n){var t=e.symbol;return(0,u.jsxs)("svg",{style:{position:"absolute",top:0,left:0,width:"100%",height:"100%"},ref:n,id:"Group_30952",width:"256",height:"256",viewBox:"0 0 256 256",children:[(0,u.jsxs)("defs",{id:"defs10",children:[(0,u.jsxs)("linearGradient",{id:"linear-gradient",x1:".843",x2:".206",y1:".135",y2:".886",gradientUnits:"objectBoundingBox",children:[(0,u.jsx)("stop",{offset:"0",stopColor:"#b6509e",id:"stop2"}),(0,u.jsx)("stop",{offset:"1",stopColor:"#2ebac6",id:"stop4"})]}),(0,u.jsx)("linearGradient",{id:"linear-gradient-2",x1:".907",x2:".163",y1:".227",y2:".853"})]}),(0,u.jsxs)("g",{id:"Group_29109",children:[(0,u.jsx)("path",{id:"Subtraction_108",fill:"url(#linear-gradient)",d:"M128 256a128.976 128.976 0 0 1-25.8-2.6 127.309 127.309 0 0 1-45.77-19.261 128.366 128.366 0 0 1-46.375-56.315A127.357 127.357 0 0 1 2.6 153.8a129.251 129.251 0 0 1 0-51.593 127.31 127.31 0 0 1 19.26-45.77 128.372 128.372 0 0 1 56.317-46.378A127.33 127.33 0 0 1 102.2 2.6a129.244 129.244 0 0 1 51.593 0 127.308 127.308 0 0 1 45.77 19.26 128.367 128.367 0 0 1 46.375 56.316A127.343 127.343 0 0 1 253.4 102.2a129.248 129.248 0 0 1 0 51.593 127.3 127.3 0 0 1-19.26 45.77 128.382 128.382 0 0 1-56.316 46.375A127.4 127.4 0 0 1 153.8 253.4 128.977 128.977 0 0 1 128 256zm0-242.287a115.145 115.145 0 0 0-23.033 2.322A113.657 113.657 0 0 0 64.1 33.232a114.622 114.622 0 0 0-41.4 50.283 113.7 113.7 0 0 0-6.659 21.452 115.4 115.4 0 0 0 0 46.065 113.66 113.66 0 0 0 17.2 40.866 114.627 114.627 0 0 0 50.282 41.407 113.75 113.75 0 0 0 21.453 6.658 115.381 115.381 0 0 0 46.065 0 113.609 113.609 0 0 0 40.866-17.2 114.622 114.622 0 0 0 41.393-50.278 113.741 113.741 0 0 0 6.659-21.453 115.4 115.4 0 0 0 0-46.065 113.662 113.662 0 0 0-17.2-40.865A114.619 114.619 0 0 0 172.485 22.7a113.74 113.74 0 0 0-21.453-6.659A115.145 115.145 0 0 0 128 13.714z"}),t&&(0,u.jsx)("image",{x:"25",y:"25",href:"/icons/tokens/".concat(t.toLowerCase(),".svg"),width:"206",height:"206"})]})]})}));function y(e){var n=e.symbol,t=e.aToken,r=(0,i.Z)(e,d);return(0,u.jsx)(a.Z,x(x({},r),{},{sx:x({display:"flex",position:"relative",borderRadius:"50%"},r.sx),children:t?(0,u.jsx)(b,{symbol:n}):(0,u.jsx)("img",{src:"/icons/tokens/".concat(n.toLowerCase(),".svg"),width:"100%",height:"100%",alt:"".concat(n," icon")})}))}function j(e){var n=e.symbols,t=e.badgeSymbol,r=(0,i.Z)(e,p);return t?(0,u.jsx)(s.Z,{badgeContent:(0,u.jsx)(y,{symbol:t,sx:{border:"1px solid #fff"},fontSize:"small"}),sx:{".MuiBadge-anchorOriginTopRight":{top:9}},children:n.map((function(e,n){return(0,l.createElement)(y,x(x({},r),{},{key:e,symbol:e,sx:x({ml:0===n?0:"calc(-1 * 0.5em)"},r.sx)}))}))}):(0,u.jsx)(c.Z,{sx:{display:"inline-flex",position:"relative"},children:n.map((function(e,n){return(0,l.createElement)(y,x(x({},r),{},{key:e,symbol:e,sx:x({ml:0===n?0:"calc(-1 * 0.5em)"},r.sx)}))}))})}function h(e){var n=e.symbol,t=(0,i.Z)(e,f),o=n.split("_");if(o.length>1){var a=(0,r.Z)(o),c=a[0],s=a.slice(1);return(0,u.jsx)(j,x(x({},t),{},{symbols:s,badgeSymbol:"/pools/"+c}))}return(0,u.jsx)(y,x({symbol:n},t))}b.displayName="ATokenIcon"},82482:function(e,n,t){t.d(n,{P:function(){return y}});var r=t(80854),o=t(1279),i=t(81206),a=t(82403),c=t(70794),s=t(16376),l=t(25298),u=t(52369),d=t(59499),p=t(87669),f=t(15591),m=t(12987);function x(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}var v=function(e,n,t){var r=(0,m.z)().poolTokensBalanceService;return(0,p.h)({queries:e.map((function(e){return function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?x(Object(t),!0).forEach((function(n){(0,d.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):x(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}({queryKey:f.B.poolTokens(n,e),queryFn:function(){return r.getPoolTokensBalances(e,n)},enabled:!!n,refetchInterval:f.g},t)}))})},b=function(e){var n=(0,s.Yh)((function(e){return e.account})),t=v(e,n),d=(0,u.T)(e),p=t.find((function(e){return e.isLoading}))||d.find((function(e){return e.isLoading}));return{walletBalances:d.map((function(n,s){var u;return function(e){var n=e.reservesHumanized,t=e.balances,s=e.marketData,u=(null===n||void 0===n?void 0:n.reservesData)||[],d=(null===n||void 0===n?void 0:n.baseCurrencyData)||{marketReferenceCurrencyDecimals:0,marketReferenceCurrencyPriceInUsd:"0",networkBaseTokenPriceInUsd:"0",networkBaseTokenPriceDecimals:0},p=!0;return{walletBalances:(null!==t&&void 0!==t?t:[]).reduce((function(e,n){var t=u.find((function(e){var t;return n.address===r.hP.toLowerCase()?e.symbol.toLowerCase()===(null===(t=l.m5[s.chainId].wrappedBaseAssetSymbol)||void 0===t?void 0:t.toLowerCase()):e.underlyingAsset.toLowerCase()===n.address}));return"0"!==n.amount&&(p=!1),t&&(e[n.address]={amount:(0,o.Fv)(n.amount,t.decimals),amountUSD:(0,i.Z)({amount:new c.O(n.amount),currencyDecimals:t.decimals,priceInMarketReferenceCurrency:t.priceInMarketReferenceCurrency,marketReferenceCurrencyDecimals:d.marketReferenceCurrencyDecimals,normalizedMarketReferencePriceInUsd:(0,o.Fv)(d.marketReferenceCurrencyPriceInUsd,a.$3)})}),e}),{}),hasEmptyWallet:p}}({reservesHumanized:n.data,balances:null===(u=t[s])||void 0===u?void 0:u.data,marketData:e[s]})})),isLoading:p}},y=function(e){var n=b([e]),t=n.walletBalances,r=n.isLoading;return{walletBalances:t[0].walletBalances,hasEmptyWallet:t[0].hasEmptyWallet,loading:r}}},52369:function(e,n,t){t.d(n,{T:function(){return s},J:function(){return l}});var r=t(59499),o=t(87669),i=t(15591),a=t(12987);function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}var s=function(e,n){var t=(0,a.z)().uiPoolService;return(0,o.h)({queries:e.map((function(e){return function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}({queryKey:i.B.poolReservesDataHumanized(e),queryFn:function(){return t.getReservesHumanized(e)},refetchInterval:i.g,meta:{}},n)}))})},l=function(e){return s([e])[0]}},15591:function(e,n,t){t.d(n,{B:function(){return o},g:function(){return i}});var r=t(90116),o={governance:["governance"],staking:["staking"],pool:["pool"],incentives:["incentives"],gho:["gho"],market:function(e){return[e.chainId,!!e.isFork,e.market]},user:function(e){return[e]},powers:function(e,n){return[].concat((0,r.Z)(o.governance),(0,r.Z)(o.user(e)),(0,r.Z)(o.market(n)),["powers"])},voteOnProposal:function(e,n,t){return[].concat((0,r.Z)(o.governance),(0,r.Z)(o.user(e)),(0,r.Z)(o.market(t)),[n,"voteOnProposal"])},votingPowerAt:function(e,n,t,i){return[].concat((0,r.Z)(o.governance),(0,r.Z)(o.user(e)),(0,r.Z)(o.market(i)),[n,t,"votingPowerAt"])},governanceTokens:function(e,n){return[].concat((0,r.Z)(o.governance),(0,r.Z)(o.user(e)),(0,r.Z)(o.market(n)),["governanceTokens"])},transactionHistory:function(e,n){return[].concat((0,r.Z)(o.user(e)),(0,r.Z)(o.market(n)),["transactionHistory"])},poolTokens:function(e,n){return[].concat((0,r.Z)(o.pool),(0,r.Z)(o.user(e)),(0,r.Z)(o.market(n)),["poolTokens"])},poolReservesDataHumanized:function(e){return[].concat((0,r.Z)(o.pool),(0,r.Z)(o.market(e)),["poolReservesDataHumanized"])},generalStakeUiData:function(e){return[].concat((0,r.Z)(o.staking),(0,r.Z)(o.market(e)),["generalStakeUiData"])},userStakeUiData:function(e,n){return[].concat((0,r.Z)(o.staking),(0,r.Z)(o.user(e)),(0,r.Z)(o.market(n)),["userStakeUiData"])},paraswapRates:function(e,n,t,i,a){return[].concat((0,r.Z)(o.user(a)),[e,n,t,i,"paraswapRates"])},gasPrices:function(e){return[e,"gasPrices"]},poolApprovedAmount:function(e,n,t){return[].concat((0,r.Z)(o.pool),(0,r.Z)(o.user(e)),(0,r.Z)(o.market(t)),[n,"poolApprovedAmount"])},approvedAmount:function(e,n,t,i){return[].concat((0,r.Z)(o.user(e)),(0,r.Z)(o.market(i)),[n,t,"approvedAmount"])}},i=6e4}}]);