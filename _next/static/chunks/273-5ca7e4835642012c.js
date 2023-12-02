"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[273],{50020:function(e,n,r){var t=r(59499),o=r(4730),i=r(91655),s=r(61953),a=r(29630),c=(r(67294),r(34220)),l=r(41024),d=r(85893),p=["minVal","maxVal","percentVariant","hyphenVariant"];function u(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function x(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?u(Object(r),!0).forEach((function(n){(0,t.Z)(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}n.Z=function(e){var n=e.minVal,r=e.maxVal,t=e.percentVariant,u=e.hyphenVariant,f=(0,o.Z)(e,p),h=(0,c.HT)(),m=h.ghoLoadingData,j=h.ghoReserveData;if(m)return(0,d.jsx)(i.Z,{width:70,height:24});var b=null!==n&&void 0!==n?n:j.ghoBorrowAPYWithMaxDiscount,v=null!==r&&void 0!==r?r:j.ghoVariableBorrowAPY,y=Number((100*b).toFixed(2))===Number((100*v).toFixed(2));return(0,d.jsx)(s.Z,{sx:{display:"flex",alignItems:"center",justifyContent:"center"},children:y?(0,d.jsx)(l.B,x({compact:!0,percent:!0,value:b,visibleDecimals:2,variant:null!==t&&void 0!==t?t:"h3","data-cy":"apy"},f)):(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(l.B,x({compact:!0,value:100*b,visibleDecimals:2,variant:null!==t&&void 0!==t?t:"h3","data-cy":"apy-gho-from"},f)),(0,d.jsx)(a.Z,{variant:null!==u&&void 0!==u?u:"secondary16",color:"text.secondary",sx:{mx:.5},children:"-"}),(0,d.jsx)(l.B,x({compact:!0,percent:!0,value:v,visibleDecimals:2,variant:null!==t&&void 0!==t?t:"h3","data-cy":"apy-gho-till"},f))]})})}},87369:function(e,n,r){r.d(n,{d:function(){return l}});var t=r(62097),o=r(61225),i=r(61953),s=r(29630),a=r(91655),c=r(85893),l=function(e){var n=e.icon,r=e.title,l=e.titleIcon,d=e.children,p=e.hideIcon,u=e.variant,x=void 0===u?"dark":u,f=e.withLine,h=e.loading,m=e.withoutIconWrapper,j=(0,t.Z)(),b=(0,o.Z)(j.breakpoints.up("sm"));return(0,c.jsxs)(i.Z,{sx:{display:"flex",alignItems:"center",width:{xs:"calc(50% - 12px)",xsm:"unset"}},children:[f&&(0,c.jsx)(i.Z,{sx:{mr:8,my:"auto",width:"1px",bgcolor:"#F2F3F729",height:"37px"}}),!p&&(m?n&&n:(0,c.jsx)(i.Z,{sx:{display:{xs:"none",md:"flex"},alignItems:"center",justifyContent:"center",border:"1px solid #EBEBED1F",borderRadius:"12px",bgcolor:"#535047",boxShadow:"0px 2px 1px rgba(0, 0, 0, 0.05), 0px 0px 1px rgba(0, 0, 0, 0.25)",width:42,height:42,mr:3},children:n&&n})),(0,c.jsxs)(i.Z,{sx:{display:"flex",flexDirection:"column"},children:[(0,c.jsxs)(i.Z,{sx:{display:"inline-flex",alignItems:"center"},children:[(0,c.jsx)(s.Z,{sx:{color:"dark"===x?"#A5A8B6":"#62677B"},variant:b?"description":"caption",component:"div",children:r}),l&&l]}),h?(0,c.jsx)(a.Z,{width:60,height:b?28:24,sx:{background:"#535047"}}):d]})]})}},84734:function(e,n,r){r.d(n,{v:function(){return s}});var t=r(49501),o=r(68861),i=r(85893),s=function(){return(0,i.jsx)(t.cC,{id:"<0>Ampleforth</0> is a rebasing asset. Visit the <1>documentation</1> to learn more.",components:{0:(0,i.jsx)("b",{}),1:(0,i.jsx)(o.rU,{href:"https://docs.aave.com/developers/v/2.0/guides/ampl-asset-listing",underline:"always"})}})}},25002:function(e,n,r){r.d(n,{l:function(){return a}});var t=r(49501),o=r(25169),i=r(68861),s=r(85893),a=function(e){var n=e.symbol,r=e.currentMarket;return(0,s.jsx)(t.cC,{id:"Borrowing is disabled due to an YieldLend community decision. <0>More details</0>",components:{0:(0,s.jsx)(i.rU,{href:(0,o.E)(n,r),sx:{textDecoration:"underline"}})}})}},85642:function(e,n,r){r.d(n,{U:function(){return s},k:function(){return a}});var t=r(49501),o=r(68861),i=r(85893),s={},a=function(e){var n=e.discussionLink;return(0,i.jsx)(t.cC,{id:"This asset is planned to be offboarded due to an YieldLend Protocol Governance decision. <0>More details</0>",components:{0:(0,i.jsx)(o.rU,{href:n,sx:{textDecoration:"underline"}})}})}},1252:function(e,n,r){r.d(n,{O:function(){return i}});var t=r(49501),o=r(85893),i=function(){return(0,o.jsx)(t.cC,{id:"Due to internal stETH mechanics required for rebasing support, it is not possible to perform a collateral switch where stETH is the source token."})}},52906:function(e,n,r){r.d(n,{J:function(){return c}});var t=r(61953),o=r(41024),i=r(14463),s=r(12349),a=r(85893),c=function(e){var n=e.symbol,r=e.value,c=e.incentives,l=e.variant,d=void 0===l?"secondary14":l,p=e.symbolsVariant,u=e.align,x=e.color,f=e.tooltip;return(0,a.jsxs)(t.Z,{sx:{display:"flex",flexDirection:"column",alignItems:u||{xs:"flex-end",xsm:"center"},justifyContent:"center",textAlign:"center"},children:["-1"!==r.toString()?(0,a.jsxs)(t.Z,{sx:{display:"flex"},children:[(0,a.jsx)(o.B,{"data-cy":"apy",value:r,percent:!0,variant:d,symbolsVariant:p,color:x,symbolsColor:x}),f]}):(0,a.jsx)(i.J,{variant:d,color:x||"text.secondary"}),(0,a.jsx)(s.M,{incentives:c,symbol:n})]})}},35161:function(e,n,r){r.d(n,{$:function(){return l}});var t=r(58771),o=r(61953),i=r(81645),s=r(97563),a=r(84734),c=r(85893),l=function(){return(0,c.jsx)(s.a,{tooltipContent:(0,c.jsx)(o.Z,{children:(0,c.jsx)(a.v,{})}),children:(0,c.jsx)(i.Z,{sx:{fontSize:"20px",color:"warning.main",ml:2},children:(0,c.jsx)(t.Z,{})})})}},69507:function(e,n,r){r.d(n,{w:function(){return l}});var t=r(58771),o=r(61953),i=r(81645),s=r(97563),a=r(25002),c=r(85893),l=function(e){var n=e.symbol,r=e.currentMarket;return(0,c.jsx)(s.a,{tooltipContent:(0,c.jsx)(o.Z,{children:(0,c.jsx)(a.l,{symbol:n,currentMarket:r})}),children:(0,c.jsx)(i.Z,{sx:{fontSize:"20px",color:"error.main",ml:2},children:(0,c.jsx)(t.Z,{})})})}},25169:function(e,n,r){r.d(n,{E:function(){return p},Q:function(){return u}});var t=r(49501),o=r(58771),i=r(61953),s=r(81645),a=r(25298),c=r(97563),l=r(68861),d=r(85893),p=function(e,n){return n&&"proto_harmony_v3"===n?"https://snapshot.org/#/aave.eth/proposal/0x81a78109941e5e0ac6cb5ebf82597c839c20ad6821a8c3ff063dba39032533d4":n&&"proto_fantom_v3"===n?"https://snapshot.org/#/aave.eth/proposal/0xeefcd76e523391a14cfd0a79b531ea0a3faf0eb4a058e255fac13a2d224cc647":e&&a.$e[e.toUpperCase()+n]?a.$e[e.toUpperCase()+n]:"https://app.aave.com/governance"},u=function(e){var n=e.symbol,r=e.currentMarket;return(0,d.jsx)(c.a,{tooltipContent:(0,d.jsx)(i.Z,{children:(0,d.jsx)(t.cC,{id:"This asset is frozen due to an YieldLend Protocol Governance decision. <0>More details</0>",components:{0:(0,d.jsx)(l.rU,{href:p(n,r),sx:{textDecoration:"underline"}})}})}),children:(0,d.jsx)(s.Z,{sx:{fontSize:"20px",color:"error.main",ml:2},children:(0,d.jsx)(o.Z,{})})})}},14249:function(e,n,r){r.d(n,{H:function(){return l}});var t=r(58771),o=r(61953),i=r(81645),s=r(97563),a=r(85642),c=r(85893),l=function(e){var n=e.discussionLink;return(0,c.jsx)(s.a,{tooltipContent:(0,c.jsx)(o.Z,{children:(0,c.jsx)(a.k,{discussionLink:n})}),children:(0,c.jsx)(i.Z,{sx:{fontSize:"20px",color:"error.main",ml:2},children:(0,c.jsx)(t.Z,{})})})}},61649:function(e,n,r){r.d(n,{o:function(){return d},n:function(){return p}});var t=r(49501),o=r(58771),i=r(72389),s=r(9144),a=r(81645),c=r(97563),l=r(85893),d=function(){return(0,l.jsx)(t.cC,{id:"This asset has been paused due to a community decision. Supply, withdraw, borrows and repays are impacted."})},p=function(){return(0,l.jsx)(i.Z,{arrow:!0,placement:"top",PopperComponent:c.E,title:(0,l.jsx)(s.Z,{sx:{py:4,px:6},spacing:1,children:(0,l.jsx)(d,{})}),children:(0,l.jsx)(a.Z,{sx:{fontSize:"20px",color:"error.main",ml:2},children:(0,l.jsx)(o.Z,{})})})}},42115:function(e,n,r){r.d(n,{F:function(){return d}});var t=r(49501),o=r(58771),i=r(61953),s=r(81645),a=r(97563),c=r(68861),l=r(85893),d=function(){return(0,l.jsx)(a.a,{tooltipContent:(0,l.jsx)(i.Z,{children:(0,l.jsx)(t.cC,{id:"This asset is frozen due to an YieldLend Protocol Governance decision. On the 20th of December 2022, renFIL will no longer be supported and cannot be bridged back to its native network. It is recommended to withdraw supply positions and repay borrow positions so that renFIL can be bridged back to FIL before the deadline. After this date, it will no longer be possible to convert renFIL to FIL. <0>More details</0>",components:{0:(0,l.jsx)(c.rU,{href:"https://medium.com/renproject/moving-on-from-alameda-da62a823ce93",sx:{textDecoration:"underline"}})}})}),children:(0,l.jsx)(s.Z,{sx:{fontSize:"20px",color:"error.main",ml:2},children:(0,l.jsx)(o.Z,{})})})}},83793:function(e,n,r){r.d(n,{n:function(){return a}});var t=r(58771),o=r(58527),i=r(1252),s=r(85893),a=function(){return(0,s.jsx)(o.G,{wrapperProps:{ml:2},color:"warning.main",iconSize:20,icon:(0,s.jsx)(t.Z,{}),children:(0,s.jsx)(i.O,{})})}},14379:function(e,n,r){r.d(n,{B:function(){return d}});var t=r(59499),o=r(36864),i=r(49501),s=r(58527),a=r(85893);function c(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function l(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?c(Object(r),!0).forEach((function(n){(0,t.Z)(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}var d=function(e){var n=(0,o.Z)({},e);return(0,a.jsx)(s.G,l(l({},n),{},{children:(0,a.jsx)(i.cC,{id:"Variable interest rate will <0>fluctuate</0> based on the market conditions. Recommended for short-term positions.",components:{0:(0,a.jsx)("b",{})}})}))}},99435:function(e,n,r){r.d(n,{M:function(){return c}});var t=r(29630),o=r(61953),i=r(8656),s=r(57609),a=r(85893),c=function(e){var n=e.sortName,r=e.sortDesc,c=e.sortKey,l=e.source,d=e.setSortName,p=e.setSortDesc,u=e.onClick,x=e.children,f=(0,i.Yh)((function(e){return e.trackEvent}));return(0,a.jsxs)(t.Z,{component:"div",variant:"subheader2",color:"text.secondary",noWrap:!0,onClick:function(){return u?u():!!c&&(e=c,f(s.uZ.SORT,{sort_by:e,tile:l}),p&&p(!1),d&&d(e),void(n===e&&p&&p(!r)));var e},sx:{cursor:u||c?"pointer":"default",display:"inline-flex",alignItems:"center"},children:[x,!!c&&(0,a.jsxs)(o.Z,{sx:{display:"inline-flex",flexDirection:"column",ml:1},children:[(0,a.jsx)(o.Z,{component:"span",sx:function(e){return{width:0,height:0,borderStyle:"solid",borderWidth:"0 4px 4px 4px",borderColor:"transparent transparent ".concat(n===c&&r?e.palette.text.secondary:e.palette.divider," transparent"),mb:.5}}}),(0,a.jsx)(o.Z,{component:"span",sx:function(e){return{width:0,height:0,borderStyle:"solid",borderWidth:"4px 4px 0 4px",borderColor:"".concat(n!==c||r?e.palette.divider:e.palette.text.secondary," transparent transparent transparent")}}})]})]})}},1475:function(e,n,r){r.d(n,{u:function(){return d}});var t=r(59499),o=r(4730),i=r(61953),s=r(85893),a=["px","children"];function c(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function l(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?c(Object(r),!0).forEach((function(n){(0,t.Z)(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}var d=function(e){var n=e.px,r=void 0===n?4:n,t=e.children,c=(0,o.Z)(e,a);return(0,s.jsx)(i.Z,l(l({},c),{},{sx:l({display:"flex",alignItems:"flex-end",px:r,pt:4,pb:1,position:"sticky",top:0,zIndex:100,bgcolor:"background.paper"},c.sx),children:t}))}},14463:function(e,n,r){r.d(n,{J:function(){return c}});var t=r(59499),o=r(29630),i=(r(67294),r(85893));function s(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function a(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?s(Object(r),!0).forEach((function(n){(0,t.Z)(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}var c=function(e){return(0,i.jsx)(o.Z,a(a({},e),{},{children:"\u2014"}))}},14795:function(e,n,r){r.d(n,{C:function(){return d}});var t=r(49501),o=r(29630),i=r(68346),s=r(69331),a=r(85893),c=function(e){var n=e.market;return"Harmony"===n?(0,a.jsx)(t.cC,{id:"Due to the Horizon bridge exploit, certain assets on the Harmony network are not at parity with Ethereum, which affects the YieldLend V3 Harmony market."}):"Fantom"===n?(0,a.jsx)(t.cC,{id:"Per the community, the Fantom market has been frozen."}):"Ethereum AMM"===n?(0,a.jsx)(t.cC,{id:"Per the community, the V2 AMM market has been deprecated."}):null},l=function(e,n){return"Harmony"===e?n?"https://governance.aave.com/t/harmony-horizon-bridge-exploit-consequences-to-aave-v3-harmony/8614":"https://snapshot.org/#/aave.eth/proposal/0x81a78109941e5e0ac6cb5ebf82597c839c20ad6821a8c3ff063dba39032533d4":"Fantom"===e?n?"https://governance.aave.com/t/arc-aave-v3-fantom-freeze-reserves/9166":"https://snapshot.org/#/aave.eth/proposal/0xeefcd76e523391a14cfd0a79b531ea0a3faf0eb4a058e255fac13a2d224cc647":"Ethereum AMM"===e?"https://app.aave.com/governance/proposal/?proposalId=239":""},d=function(e){var n=e.marketName,r=e.forum;return(0,a.jsx)(s.v,{severity:"error",children:(0,a.jsxs)(o.Z,{variant:"caption",children:[(0,a.jsx)(c,{market:n})," ",(0,a.jsx)(i.Z,{href:l(n,r),target:"_blank",children:r?(0,a.jsx)(t.cC,{id:"Join the community discussion"}):(0,a.jsx)(t.cC,{id:"Learn more"})})]})})}},15880:function(e,n,r){r.d(n,{o:function(){return g}});var t=r(69507),o=r(14249),i=r(61649),s=r(83793),a=r(85642),c=r(35161),l=r(25169),d=r(42115),p=r(61953),u=r(44373),x=r(91655),f=r(29630),h=r(44749),m=r(43629),j=r(68861),b=r(72667),v=r(85893),y=function(e){var n=e.children,r=e.warningComponent,t=e.symbol,o=e.iconSymbol,i=e.name,s=e.underlyingAsset,a=e.loading,c=e.currentMarket,l=e.showSupplyCapTooltips,d=void 0!==l&&l,y=e.showBorrowCapTooltips,g=void 0!==y&&y,w=e.showDebtCeilingTooltips,O=void 0!==w&&w,Z=e.isIsolated,C=(0,m.ov)(),k=C.supplyCap,P=C.borrowCap,D=C.debtCeiling;return(0,v.jsxs)(p.Z,{children:[(0,v.jsx)(u.Z,{}),(0,v.jsxs)(p.Z,{sx:{px:4,pt:4,pb:6},children:[(0,v.jsxs)(p.Z,{sx:{mb:4,display:"flex",alignItems:"center"},children:[a?(0,v.jsxs)(p.Z,{sx:{display:"inline-flex",alignItems:"center"},children:[(0,v.jsx)(x.Z,{variant:"circular",width:40,height:40}),(0,v.jsx)(p.Z,{sx:{ml:2},children:(0,v.jsx)(x.Z,{width:100,height:24})})]}):t&&s&&i&&c&&o&&(0,v.jsxs)(j.rU,{href:j.Z6.reserveOverview(s,c),sx:{display:"inline-flex",alignItems:"center"},children:[(0,v.jsx)(b.T1,{symbol:o,sx:{fontSize:"40px"}}),(0,v.jsxs)(p.Z,{sx:{ml:2},children:[(0,v.jsx)(f.Z,{variant:"h4",children:i}),(0,v.jsxs)(p.Z,{display:"flex",alignItems:"center",children:[(0,v.jsx)(f.Z,{variant:"subheader2",color:"text.muted",children:t}),Z&&(0,v.jsx)("span",{style:{marginLeft:"8px"},children:(0,v.jsx)(h.Ch,{})})]})]}),d&&k.displayMaxedTooltip({supplyCap:k}),g&&P.displayMaxedTooltip({borrowCap:P}),O&&D.displayMaxedTooltip({debtCeiling:D})]}),r]}),n]})]})},g=function(e){var n=e.symbol,r=e.iconSymbol,p=e.name,u=e.children,x=e.underlyingAsset,f=e.loading,h=e.currentMarket,m=e.frozen,j=e.paused,b=e.borrowEnabled,g=void 0===b||b,w=e.showSupplyCapTooltips,O=void 0!==w&&w,Z=e.showBorrowCapTooltips,C=void 0!==Z&&Z,k=e.showDebtCeilingTooltips,P=void 0!==k&&k,D=e.isIsolated,S=void 0!==D&&D,M=function(){var e,r=m&&"renFIL"!==n,p=m&&"renFIL"===n,u=!m&&"AMPL"===n,x="stETH"==n,f=h&&n?null===(e=a.U[h])||void 0===e?void 0:e[n]:"",b=!m&&!g;return(0,v.jsxs)(v.Fragment,{children:[j&&(0,v.jsx)(i.n,{}),r&&(0,v.jsx)(l.Q,{symbol:n,currentMarket:h}),p&&(0,v.jsx)(d.F,{}),u&&(0,v.jsx)(c.$,{}),x&&(0,v.jsx)(s.n,{}),f&&(0,v.jsx)(o.H,{discussionLink:f}),b&&n&&h&&(0,v.jsx)(t.w,{symbol:n,currentMarket:h})]})};return(0,v.jsx)(y,{isIsolated:S,symbol:n,iconSymbol:r,name:p,underlyingAsset:x,warningComponent:(0,v.jsx)(M,{}),loading:f,currentMarket:h,showSupplyCapTooltips:O,showBorrowCapTooltips:C,showDebtCeilingTooltips:P,children:u})}},80059:function(e,n,r){var t=r(67294);const o=t.forwardRef((function(e,n){return t.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:n},e),t.createElement("path",{d:"M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"}))}));n.Z=o}}]);