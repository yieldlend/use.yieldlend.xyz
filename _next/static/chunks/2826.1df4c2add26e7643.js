(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2826],{64938:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n.createSvgIcon}});var n=r(58075)},90149:function(e,t,r){"use strict";var n=r(63366),o=r(87462),i=r(67294),s=r(86010),a=r(94780),c=r(70917),l=r(36622),u=r(78884),d=r(81719),m=r(23309),f=r(85893);const p=["className","color","disableShrink","size","style","thickness","value","variant"];let x,h,v,b,y=e=>e;const j=44,g=(0,c.F4)(x||(x=y`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`)),w=(0,c.F4)(h||(h=y`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -125px;
  }
`)),Z=(0,d.ZP)("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,t[r.variant],t[`color${(0,l.Z)(r.color)}`]]}})((({ownerState:e,theme:t})=>(0,o.Z)({display:"inline-block"},"determinate"===e.variant&&{transition:t.transitions.create("transform")},"inherit"!==e.color&&{color:(t.vars||t).palette[e.color].main})),(({ownerState:e})=>"indeterminate"===e.variant&&(0,c.iv)(v||(v=y`
      animation: ${0} 1.4s linear infinite;
    `),g))),O=(0,d.ZP)("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:(e,t)=>t.svg})({display:"block"}),S=(0,d.ZP)("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.circle,t[`circle${(0,l.Z)(r.variant)}`],r.disableShrink&&t.circleDisableShrink]}})((({ownerState:e,theme:t})=>(0,o.Z)({stroke:"currentColor"},"determinate"===e.variant&&{transition:t.transitions.create("stroke-dashoffset")},"indeterminate"===e.variant&&{strokeDasharray:"80px, 200px",strokeDashoffset:0})),(({ownerState:e})=>"indeterminate"===e.variant&&!e.disableShrink&&(0,c.iv)(b||(b=y`
      animation: ${0} 1.4s ease-in-out infinite;
    `),w))),P=i.forwardRef((function(e,t){const r=(0,u.Z)({props:e,name:"MuiCircularProgress"}),{className:i,color:c="primary",disableShrink:d=!1,size:x=40,style:h,thickness:v=3.6,value:b=0,variant:y="indeterminate"}=r,g=(0,n.Z)(r,p),w=(0,o.Z)({},r,{color:c,disableShrink:d,size:x,thickness:v,value:b,variant:y}),P=(e=>{const{classes:t,variant:r,color:n,disableShrink:o}=e,i={root:["root",r,`color${(0,l.Z)(n)}`],svg:["svg"],circle:["circle",`circle${(0,l.Z)(r)}`,o&&"circleDisableShrink"]};return(0,a.Z)(i,m.C,t)})(w),C={},k={},D={};if("determinate"===y){const e=2*Math.PI*((j-v)/2);C.strokeDasharray=e.toFixed(3),D["aria-valuenow"]=Math.round(b),C.strokeDashoffset=`${((100-b)/100*e).toFixed(3)}px`,k.transform="rotate(-90deg)"}return(0,f.jsx)(Z,(0,o.Z)({className:(0,s.default)(P.root,i),style:(0,o.Z)({width:x,height:x},k,h),ownerState:w,ref:t,role:"progressbar"},D,g,{children:(0,f.jsx)(O,{className:P.svg,ownerState:w,viewBox:"22 22 44 44",children:(0,f.jsx)(S,{className:P.circle,style:C,ownerState:w,cx:j,cy:j,r:(j-v)/2,fill:"none",strokeWidth:v})})}))}));t.Z=P},23309:function(e,t,r){"use strict";r.d(t,{C:function(){return o}});var n=r(34867);function o(e){return(0,n.Z)("MuiCircularProgress",e)}const i=(0,r(1588).Z)("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"]);t.Z=i},89722:function(e,t,r){"use strict";r.d(t,{Z:function(){return v}});var n=r(87462),o=r(63366),i=r(67294),s=r(86010),a=r(94780),c=r(81719),l=r(78884),u=r(36622),d=r(34867);function m(e){return(0,d.Z)("MuiIcon",e)}(0,r(1588).Z)("MuiIcon",["root","colorPrimary","colorSecondary","colorAction","colorError","colorDisabled","fontSizeInherit","fontSizeSmall","fontSizeMedium","fontSizeLarge"]);var f=r(85893);const p=["baseClassName","className","color","component","fontSize"],x=(0,c.ZP)("span",{name:"MuiIcon",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,"inherit"!==r.color&&t[`color${(0,u.Z)(r.color)}`],t[`fontSize${(0,u.Z)(r.fontSize)}`]]}})((({theme:e,ownerState:t})=>({userSelect:"none",width:"1em",height:"1em",overflow:"hidden",display:"inline-block",textAlign:"center",flexShrink:0,fontSize:{inherit:"inherit",small:e.typography.pxToRem(20),medium:e.typography.pxToRem(24),large:e.typography.pxToRem(36)}[t.fontSize],color:{primary:(e.vars||e).palette.primary.main,secondary:(e.vars||e).palette.secondary.main,info:(e.vars||e).palette.info.main,success:(e.vars||e).palette.success.main,warning:(e.vars||e).palette.warning.main,action:(e.vars||e).palette.action.active,error:(e.vars||e).palette.error.main,disabled:(e.vars||e).palette.action.disabled,inherit:void 0}[t.color]}))),h=i.forwardRef((function(e,t){const r=(0,l.Z)({props:e,name:"MuiIcon"}),{baseClassName:i="material-icons",className:c,color:d="inherit",component:h="span",fontSize:v="medium"}=r,b=(0,o.Z)(r,p),y=(0,n.Z)({},r,{baseClassName:i,color:d,component:h,fontSize:v}),j=(e=>{const{color:t,fontSize:r,classes:n}=e,o={root:["root","inherit"!==t&&`color${(0,u.Z)(t)}`,`fontSize${(0,u.Z)(r)}`]};return(0,a.Z)(o,m,n)})(y);return(0,f.jsx)(x,(0,n.Z)({as:h,className:(0,s.default)(i,"notranslate",j.root,c),ownerState:y,"aria-hidden":!0,ref:t},b))}));h.muiName="Icon";var v=h},58075:function(e,t,r){"use strict";r.r(t),r.d(t,{capitalize:function(){return o.Z},createChainedFunction:function(){return i},createSvgIcon:function(){return s.Z},debounce:function(){return a.Z},deprecatedPropType:function(){return c},isMuiElement:function(){return l.Z},ownerDocument:function(){return u.Z},ownerWindow:function(){return d.Z},requirePropFactory:function(){return m},setRef:function(){return f},unstable_ClassNameGenerator:function(){return g},unstable_useEnhancedEffect:function(){return p.Z},unstable_useId:function(){return x.Z},unsupportedProp:function(){return h},useControlled:function(){return v.Z},useEventCallback:function(){return b.Z},useForkRef:function(){return y.Z},useIsFocusVisible:function(){return j.Z}});var n=r(37078),o=r(36622),i=r(49064).Z,s=r(54235),a=r(75400);var c=function(e,t){return()=>null},l=r(7335),u=r(47505),d=r(57577);r(87462);var m=function(e,t){return()=>null},f=r(7960).Z,p=r(63289),x=r(15391);var h=function(e,t,r,n,o){return null},v=r(42293),b=r(26432),y=r(84771),j=r(40011);const g={configure:e=>{console.warn(["MUI: `ClassNameGenerator` import from `@mui/material/utils` is outdated and might cause unexpected issues.","","You should use `import { unstable_ClassNameGenerator } from '@mui/material/className'` instead","","The detail of the issue: https://github.com/mui/material-ui/issues/30011#issuecomment-1024993401","","The updated documentation: https://mui.com/guides/classname-generator/"].join("\n")),n.Z.configure(e)}}},96875:function(e,t,r){"use strict";r.d(t,{o:function(){return v}});var n=r(59499),o=r(4730),i=r(49501),s=r(1279),a=r(62097),c=r(61953),l=r(29630),u=r(75084),d=r(70794),m=r(41024),f=r(85893),p=["value","onInfoClick","HALIntegrationComponent"];function x(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function h(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?x(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):x(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var v=function(e){var t=e.value,r=e.onInfoClick,n=e.HALIntegrationComponent,x=(0,o.Z)(e,p),v=(0,a.Z)().palette,b=Number((0,s.hE)(t).toFixed(2,d.Z.ROUND_DOWN)),y="";return y=b>=3?v.success.main:b<1.1?v.error.main:v.warning.main,(0,f.jsxs)(c.Z,{sx:{display:"inline-flex",alignItems:{xs:"flex-start",xsm:"center"},flexDirection:{xs:"column",xsm:"row"}},"data-cy":"HealthFactorTopPannel",children:["-1"===t?(0,f.jsx)(l.Z,{variant:"secondary14",color:v.success.main,children:"\u221e"}):(0,f.jsx)(m.B,h({value:b,sx:h({color:y},x.sx),visibleDecimals:2,compact:!0},x)),r&&(0,f.jsx)(u.Z,{onClick:r,variant:"surface",size:"small",sx:{minWidth:"unset",ml:{xs:0,xsm:2}},children:(0,f.jsx)(i.cC,{id:"Risk details"})}),n&&(0,f.jsx)(c.Z,{ml:{xs:0,xsm:2},mt:{xs:1,xsm:0},children:n})]})}},12349:function(e,t,r){"use strict";r.d(t,{M:function(){return y}});var n=r(1279),o=r(80059),i=r(61953),s=r(29630),a=r(81645),c=r(67294),l=r(8656),u=r(57609),d=r(97563),m=r(41024),f=r(72667),p=r(49501),x=r(92391),h=r(85893),v=function(e){var t=e.incentives,r=e.incentivesNetAPR,n=e.symbol,o="secondary12",a=function(e){var t=e.incentiveAPR;return(0,h.jsx)(i.Z,{sx:{display:"inline-flex",alignItems:"center"},children:"Infinity"!==t?(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(m.B,{value:+t,percent:!0,variant:o}),(0,h.jsx)(s.Z,{variant:o,sx:{ml:1},children:(0,h.jsx)(p.cC,{id:"APR"})})]}):(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(s.Z,{variant:o,children:"\u221e %"}),(0,h.jsx)(s.Z,{variant:o,sx:{ml:1},children:(0,h.jsx)(p.cC,{id:"APR"})})]})})};return(0,h.jsxs)(i.Z,{sx:{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"},children:[(0,h.jsx)(s.Z,{variant:"caption",color:"text.secondary",mb:3,children:(0,h.jsx)(p.cC,{id:"Participating in this {symbol} reserve gives annualized rewards.",values:{symbol:n}})}),(0,h.jsxs)(i.Z,{sx:{width:"100%"},children:[t.map((function(e){return(0,h.jsx)(x.X,{height:32,caption:(0,h.jsxs)(i.Z,{sx:{display:"flex",alignItems:"center",mb:t.length>1?2:0},children:[(0,h.jsx)(f.T1,{symbol:e.rewardTokenSymbol,sx:{fontSize:"20px",mr:1}}),(0,h.jsx)(s.Z,{variant:o,children:e.rewardTokenSymbol})]}),width:"100%",children:(0,h.jsx)(a,{incentiveAPR:e.incentiveAPR})},e.rewardTokenAddress)})),t.length>1&&(0,h.jsx)(i.Z,{sx:function(e){return{pt:1,mt:1,border:"1px solid ".concat(e.palette.divider)}},children:(0,h.jsx)(x.X,{caption:(0,h.jsx)(p.cC,{id:"Net APR"}),height:32,children:(0,h.jsx)(a,{incentiveAPR:r})})})]})]})},b=function(){return(0,h.jsx)(i.Z,{sx:{p:{xs:"0 4px",xsm:"3.625px 4px"},display:"flex",alignItems:"center",justifyContent:"center"},children:(0,h.jsx)(s.Z,{variant:"main12",color:"text.secondary",children:"\xa0"})})},y=function(e){var t=e.incentives,r=e.symbol,p=e.displayBlank,x=(0,c.useState)(!1),y=x[0],j=x[1],g=(0,l.Yh)((function(e){return e.trackEvent}));if(!(t&&t.length>0))return p?(0,h.jsx)(b,{}):null;var w=t.some((function(e){return"Infinity"===e.incentiveAPR})),Z=w?"Infinity":t.reduce((function(e,t){return e+ +t.incentiveAPR}),0),O=w?"Infinity":"Infinity"!==Z?(0,n.hE)(Z||0).toNumber():"Infinity";if(0===O)return p?(0,h.jsx)(b,{}):null;return(0,h.jsx)(d.a,{tooltipContent:(0,h.jsx)(v,{incentives:t,incentivesNetAPR:O,symbol:r}),withoutHover:!0,setOpen:j,open:y,children:(0,h.jsxs)(i.Z,{sx:function(e){return{p:{xs:"0 4px",xsm:"2px 4px"},border:"1px solid ".concat(y?e.palette.action.disabled:e.palette.divider),borderRadius:"4px",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",transition:"opacity 0.2s ease",bgcolor:y?"action.hover":"transparent","&:hover":{bgcolor:"action.hover",borderColor:"action.disabled"}}},onClick:function(){g(u.h1.VIEW_LM_DETAILS_DASHBOARD,{}),j(!y)},children:[(0,h.jsx)(i.Z,{sx:{mr:2},children:"Infinity"!==O&&O<1e4?(0,h.jsx)(m.B,{value:O,percent:!0,variant:"secondary12",color:"text.secondary"}):"Infinity"!==O&&O>9999?(0,h.jsx)(m.B,{value:O,percent:!0,compact:!0,variant:"secondary12",color:"text.secondary"}):"Infinity"===O?(0,h.jsx)(s.Z,{variant:"main12",color:"text.secondary",children:"\u221e"}):void 0}),(0,h.jsx)(i.Z,{sx:{display:"inline-flex"},children:(0,h.jsx)(h.Fragment,{children:t.length<5?(0,h.jsx)(h.Fragment,{children:t.map((function(e){return(0,h.jsx)(f.T1,{symbol:e.rewardTokenSymbol,sx:{fontSize:"".concat(12,"px"),ml:-1}},e.rewardTokenSymbol)}))}):(0,h.jsxs)(h.Fragment,{children:[t.slice(0,3).map((function(e){return(0,h.jsx)(f.T1,{symbol:e.rewardTokenSymbol,sx:{fontSize:"".concat(12,"px"),ml:-1}},e.rewardTokenSymbol)})),(0,h.jsx)(a.Z,{sx:{fontSize:"".concat(12,"px"),borderRadius:"50%",bgcolor:"common.white",color:"common.black",ml:-1,zIndex:5},children:(0,h.jsx)(o.Z,{})})]})})})]})})}},44749:function(e,t,r){"use strict";r.d(t,{Ch:function(){return v},r$:function(){return b},a9:function(){return y}});var n=r(59499),o=r(49501),i=r(38264),s=r(81645),a=r(62097),c=r(61953),l=r(29630),u=r(68346),d=r(97563),m=r(85893);function f(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?f(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var x={borderRadius:"4px",display:"inline-flex",alignItems:"center",p:"2px",mt:"2px",cursor:"pointer","&:hover":{opacity:.6}},h=function(e){var t=e.color;return(0,m.jsx)(s.Z,{sx:{ml:"3px",color:t||"text.muted",fontSize:"14px"},children:(0,m.jsx)(i.Z,{})})},v=function(e){var t=e.typographyProps,r=(0,a.Z)(),n=p({border:"1px solid ".concat(r.palette.warning.main),color:r.palette.warning.main},x);return(0,m.jsx)(d.a,{withoutHover:!0,tooltipContent:(0,m.jsx)(j,{content:(0,m.jsx)(o.cC,{id:"Isolated assets have limited borrowing power and other assets cannot be used as collateral."})}),children:(0,m.jsxs)(c.Z,{sx:n,children:[(0,m.jsx)(l.Z,p(p({variant:"secondary12",sx:{lineHeight:"0.75rem"},color:r.palette.warning.main},t),{},{children:(0,m.jsx)(o.cC,{id:"Isolated"})})),(0,m.jsx)(h,{color:r.palette.warning.main})]})})},b=function(){return(0,m.jsx)(d.a,{tooltipContent:(0,m.jsx)(j,{content:(0,m.jsx)(o.cC,{id:"Asset can be only used as collateral in isolation mode with limited borrowing power. To enter isolation mode, disable all other collateral."})}),children:(0,m.jsxs)(c.Z,{sx:x,children:[(0,m.jsx)(l.Z,{variant:"description",color:"error.main",children:(0,m.jsx)(o.cC,{id:"Unavailable"})}),(0,m.jsx)(h,{})]})})},y=function(){return(0,m.jsx)(d.a,{tooltipContent:(0,m.jsx)(j,{content:(0,m.jsx)(o.cC,{id:"Collateral usage is limited because of isolation mode."})}),children:(0,m.jsxs)(c.Z,{sx:x,children:[(0,m.jsx)(l.Z,{variant:"description",color:"error.main",children:(0,m.jsx)(o.cC,{id:"Unavailable"})}),(0,m.jsx)(h,{})]})})},j=function(e){var t=e.content;return(0,m.jsxs)(c.Z,{children:[(0,m.jsx)(c.Z,{sx:{mb:4},children:t}),(0,m.jsx)(l.Z,{variant:"subheader2",color:"text.secondary",children:(0,m.jsx)(o.cC,{id:"Learn more in our <0>FAQ guide</0>",components:{0:(0,m.jsx)(u.Z,{href:"https://docs.aave.com/faq/aave-v3-features#isolation-mode",fontWeight:500})}})})]})}},41024:function(e,t,r){"use strict";r.d(t,{J:function(){return m},B:function(){return p}});var n=r(59499),o=r(4730),i=r(1279),s=r(29630),a=r(85893),c=["value","symbol","visibleDecimals","compact","percent","symbolsVariant","symbolsColor","roundDown","compactThreshold"];function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var d=["","K","M","B","T","P","E","Z","Y"],m=function(e){var t=e.value,r=e.visibleDecimals,n=void 0===r?2:r,o=e.roundDown,s=e.compactThreshold,a=(0,i.hE)(t),c=a.toFixed(0).length;s&&Number(t)<=s&&(c=0);var l=Math.min(Math.floor(c?(c-1)/3:0),d.length-1),u=d[l],m=(0,i.pV)(a,3*l).toNumber();return o&&(m=Math.trunc(Number(m)*Math.pow(10,n))/Math.pow(10,n)),{prefix:new Intl.NumberFormat("en-US",{maximumFractionDigits:n,minimumFractionDigits:n}).format(m),postfix:u}};function f(e){var t=e.value,r=e.visibleDecimals,n=e.roundDown,o=m({value:t,visibleDecimals:r,roundDown:n}),i=o.prefix,s=o.postfix;return(0,a.jsxs)(a.Fragment,{children:[i,s]})}function p(e){var t=e.value,r=e.symbol,n=e.visibleDecimals,i=e.compact,l=e.percent,d=e.symbolsVariant,m=e.symbolsColor,p=e.roundDown,x=e.compactThreshold,h=(0,o.Z)(e,c),v=l?100*Number(t):Number(t),b=null!==n&&void 0!==n?n:0;0===v?b=0:void 0===n&&(b=v>1||l||"USD"===r?2:7);var y=Math.pow(10,-b),j=0!==v&&Math.abs(v)<Math.abs(y),g=j?y:v,w=!1!==i&&(i||v>99999);return p&&!w&&(g=Math.trunc(Number(g)*Math.pow(10,b))/Math.pow(10,b)),(0,a.jsxs)(s.Z,u(u({},h),{},{sx:u({display:"inline-flex",flexDirection:"row",alignItems:"center",position:"relative"},h.sx),noWrap:!0,children:[j&&(0,a.jsx)(s.Z,{component:"span",sx:{mr:.5},variant:d||h.variant,color:m||"text.secondary",children:"<"}),"usd"===(null===r||void 0===r?void 0:r.toLowerCase())&&!l&&(0,a.jsx)(s.Z,{component:"span",sx:{mr:.5},variant:d||h.variant,color:m||"text.secondary",children:"$"}),w?(0,a.jsx)(f,{value:g,visibleDecimals:b,roundDown:p,compactThreshold:x}):new Intl.NumberFormat("en-US",{maximumFractionDigits:b,minimumFractionDigits:b}).format(g),l&&(0,a.jsx)(s.Z,{component:"span",sx:{ml:.5},variant:d||h.variant,color:m||"text.secondary",children:"%"}),"usd"!==(null===r||void 0===r?void 0:r.toLowerCase())&&"undefined"!==typeof r&&(0,a.jsx)(s.Z,{component:"span",sx:{ml:.5},variant:d||h.variant,color:m||"text.secondary",children:r})]}))}},92391:function(e,t,r){"use strict";r.d(t,{X:function(){return d}});var n=r(59499),o=r(4730),i=r(61953),s=r(29630),a=r(85893),c=["caption","children","captionVariant","captionColor","align"];function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var d=function(e){var t=e.caption,r=e.children,n=e.captionVariant,l=void 0===n?"secondary16":n,d=e.captionColor,m=e.align,f=void 0===m?"center":m,p=(0,o.Z)(e,c);return(0,a.jsxs)(i.Z,u(u({},p),{},{sx:u({display:"flex",alignItems:f,justifyContent:"space-between"},p.sx),children:[t&&(0,a.jsx)(s.Z,{component:"div",variant:l,color:d,sx:{mr:2},children:t}),r]}))}},72667:function(e,t,r){"use strict";r.d(t,{Js:function(){return h},T1:function(){return j}});var n=r(83618),o=r(59499),i=r(4730),s=r(89722),a=r(61953),c=r(60082),l=r(67294),u=r(85893),d=["symbol","aToken"],m=["symbols","badgeSymbol"],f=["symbol"];function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function x(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){(0,o.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function h(e){var t=e.symbol,r=e.onImageGenerated,n=e.aToken,o=(0,l.useRef)(null),i=(0,l.useRef)(null),s=(0,l.useState)(!0),a=s[0],c=s[1];return(0,l.useEffect)((function(){var e;if(!a&&o.current&&null!==(e=o.current)&&void 0!==e&&e.contentDocument)if(n){var t,s,c,l,u=null===(t=o.current)||void 0===t||null===(s=t.contentDocument)||void 0===s||null===(c=s.childNodes)||void 0===c?void 0:c[0],d=u.getAttribute("width"),m=u.getAttribute("height"),f=u.getAttribute("viewBox");u.setAttribute("x",25),u.setAttribute("width",206),u.setAttribute("y",25),u.setAttribute("height",206),f||u.setAttribute("viewBox","0 0 ".concat(d," ").concat(m)),null===(l=i.current)||void 0===l||l.appendChild(u);var p=(new XMLSerializer).serializeToString(i.current);r("data:image/svg+xml;base64,".concat(window.btoa(unescape(encodeURIComponent(p)))))}else{var x,h=(new XMLSerializer).serializeToString(null===(x=o.current)||void 0===x?void 0:x.contentDocument);r("data:image/svg+xml;base64,".concat(window.btoa(unescape(encodeURIComponent(h)))))}}),[a,n]),(0,u.jsxs)("div",{style:{visibility:"hidden",height:0,width:0,overflow:"hidden"},children:[(0,u.jsx)("object",{style:{opacity:1},ref:o,id:"svg",data:"/icons/tokens/".concat(t.toLowerCase(),".svg"),onLoad:function(){return c(!1)}}),n&&(0,u.jsx)(v,{ref:i})]})}var v=(0,l.forwardRef)((function(e,t){var r=e.symbol;return(0,u.jsxs)("svg",{style:{position:"absolute",top:0,left:0,width:"100%",height:"100%"},ref:t,id:"Group_30952",width:"256",height:"256",viewBox:"0 0 256 256",children:[(0,u.jsxs)("defs",{id:"defs10",children:[(0,u.jsxs)("linearGradient",{id:"linear-gradient",x1:".843",x2:".206",y1:".135",y2:".886",gradientUnits:"objectBoundingBox",children:[(0,u.jsx)("stop",{offset:"0",stopColor:"#b6509e",id:"stop2"}),(0,u.jsx)("stop",{offset:"1",stopColor:"#2ebac6",id:"stop4"})]}),(0,u.jsx)("linearGradient",{id:"linear-gradient-2",x1:".907",x2:".163",y1:".227",y2:".853"})]}),(0,u.jsxs)("g",{id:"Group_29109",children:[(0,u.jsx)("path",{id:"Subtraction_108",fill:"url(#linear-gradient)",d:"M128 256a128.976 128.976 0 0 1-25.8-2.6 127.309 127.309 0 0 1-45.77-19.261 128.366 128.366 0 0 1-46.375-56.315A127.357 127.357 0 0 1 2.6 153.8a129.251 129.251 0 0 1 0-51.593 127.31 127.31 0 0 1 19.26-45.77 128.372 128.372 0 0 1 56.317-46.378A127.33 127.33 0 0 1 102.2 2.6a129.244 129.244 0 0 1 51.593 0 127.308 127.308 0 0 1 45.77 19.26 128.367 128.367 0 0 1 46.375 56.316A127.343 127.343 0 0 1 253.4 102.2a129.248 129.248 0 0 1 0 51.593 127.3 127.3 0 0 1-19.26 45.77 128.382 128.382 0 0 1-56.316 46.375A127.4 127.4 0 0 1 153.8 253.4 128.977 128.977 0 0 1 128 256zm0-242.287a115.145 115.145 0 0 0-23.033 2.322A113.657 113.657 0 0 0 64.1 33.232a114.622 114.622 0 0 0-41.4 50.283 113.7 113.7 0 0 0-6.659 21.452 115.4 115.4 0 0 0 0 46.065 113.66 113.66 0 0 0 17.2 40.866 114.627 114.627 0 0 0 50.282 41.407 113.75 113.75 0 0 0 21.453 6.658 115.381 115.381 0 0 0 46.065 0 113.609 113.609 0 0 0 40.866-17.2 114.622 114.622 0 0 0 41.393-50.278 113.741 113.741 0 0 0 6.659-21.453 115.4 115.4 0 0 0 0-46.065 113.662 113.662 0 0 0-17.2-40.865A114.619 114.619 0 0 0 172.485 22.7a113.74 113.74 0 0 0-21.453-6.659A115.145 115.145 0 0 0 128 13.714z"}),r&&(0,u.jsx)("image",{x:"25",y:"25",href:"/icons/tokens/".concat(r.toLowerCase(),".svg"),width:"206",height:"206"})]})]})}));function b(e){var t=e.symbol,r=e.aToken,n=(0,i.Z)(e,d);return(0,u.jsx)(s.Z,x(x({},n),{},{sx:x({display:"flex",position:"relative",borderRadius:"50%"},n.sx),children:r?(0,u.jsx)(v,{symbol:t}):(0,u.jsx)("img",{src:"/icons/tokens/".concat(t.toLowerCase(),".svg"),width:"100%",height:"100%",alt:"".concat(t," icon")})}))}function y(e){var t=e.symbols,r=e.badgeSymbol,n=(0,i.Z)(e,m);return r?(0,u.jsx)(c.Z,{badgeContent:(0,u.jsx)(b,{symbol:r,sx:{border:"1px solid #fff"},fontSize:"small"}),sx:{".MuiBadge-anchorOriginTopRight":{top:9}},children:t.map((function(e,t){return(0,l.createElement)(b,x(x({},n),{},{key:e,symbol:e,sx:x({ml:0===t?0:"calc(-1 * 0.5em)"},n.sx)}))}))}):(0,u.jsx)(a.Z,{sx:{display:"inline-flex",position:"relative"},children:t.map((function(e,t){return(0,l.createElement)(b,x(x({},n),{},{key:e,symbol:e,sx:x({ml:0===t?0:"calc(-1 * 0.5em)"},n.sx)}))}))})}function j(e){var t=e.symbol,r=(0,i.Z)(e,f),o=t.split("_");if(o.length>1){var s=(0,n.Z)(o),a=s[0],c=s.slice(1);return(0,u.jsx)(y,x(x({},r),{},{symbols:c,badgeSymbol:"/pools/"+a}))}return(0,u.jsx)(b,x({symbol:t},r))}v.displayName="ATokenIcon"},64836:function(e){e.exports=function(e){return e&&e.__esModule?e:{default:e}},e.exports.__esModule=!0,e.exports.default=e.exports},80227:function(e,t,r){"use strict";var n=r(67294);const o=n.forwardRef((function(e,t){return n.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:t},e),n.createElement("path",{fillRule:"evenodd",d:"M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z",clipRule:"evenodd"}))}));t.Z=o},83618:function(e,t,r){"use strict";r.d(t,{Z:function(){return a}});var n=r(14666),o=r(28811),i=r(2937),s=r(14882);function a(e){return(0,n.Z)(e)||(0,o.Z)(e)||(0,i.Z)(e)||(0,s.Z)()}}}]);