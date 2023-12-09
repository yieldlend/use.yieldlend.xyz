"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1717],{96875:function(e,n,r){r.d(n,{o:function(){return h}});var t=r(59499),i=r(4730),o=r(49501),s=r(1279),c=r(62097),a=r(30120),l=r(29630),d=r(75084),u=r(70794),x=r(41024),p=r(85893),m=["value","onInfoClick","HALIntegrationComponent"];function f(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function j(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?f(Object(r),!0).forEach((function(n){(0,t.Z)(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}var h=function(e){var n=e.value,r=e.onInfoClick,t=e.HALIntegrationComponent,f=(0,i.Z)(e,m),h=(0,c.Z)().palette,v=Number((0,s.hE)(n).toFixed(2,u.Z.ROUND_DOWN)),y="";return y=v>=3?h.success.main:v<1.1?h.error.main:h.warning.main,(0,p.jsxs)(a.Z,{sx:{display:"inline-flex",alignItems:{xs:"flex-start",xsm:"center"},flexDirection:{xs:"column",xsm:"row"}},"data-cy":"HealthFactorTopPannel",children:["-1"===n?(0,p.jsx)(l.Z,{variant:"secondary14",color:h.success.main,children:"\u221e"}):(0,p.jsx)(x.B,j({value:v,sx:j({color:y},f.sx),visibleDecimals:2,compact:!0},f)),r&&(0,p.jsx)(d.Z,{onClick:r,variant:"surface",size:"small",sx:{minWidth:"unset",ml:{xs:0,xsm:2}},children:(0,p.jsx)(o.cC,{id:"Risk details"})}),t&&(0,p.jsx)(a.Z,{ml:{xs:0,xsm:2},mt:{xs:1,xsm:0},children:t})]})}},12349:function(e,n,r){r.d(n,{M:function(){return y}});var t=r(1279),i=r(80059),o=r(30120),s=r(29630),c=r(81645),a=r(67294),l=r(16376),d=r(57609),u=r(4132),x=r(41024),p=r(72667),m=r(49501),f=r(92391),j=r(85893),h=function(e){var n=e.incentives,r=e.incentivesNetAPR,t=e.symbol,i="secondary12",c=function(e){var n=e.incentiveAPR;return(0,j.jsx)(o.Z,{sx:{display:"inline-flex",alignItems:"center"},children:"Infinity"!==n?(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(x.B,{value:+n,percent:!0,variant:i}),(0,j.jsx)(s.Z,{variant:i,sx:{ml:1},children:(0,j.jsx)(m.cC,{id:"APR"})})]}):(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(s.Z,{variant:i,children:"\u221e %"}),(0,j.jsx)(s.Z,{variant:i,sx:{ml:1},children:(0,j.jsx)(m.cC,{id:"APR"})})]})})};return(0,j.jsxs)(o.Z,{sx:{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"},children:[(0,j.jsx)(s.Z,{variant:"caption",color:"text.secondary",mb:3,children:(0,j.jsx)(m.cC,{id:"Participating in this {symbol} reserve gives annualized rewards.",values:{symbol:t}})}),(0,j.jsxs)(o.Z,{sx:{width:"100%"},children:[n.map((function(e){return(0,j.jsx)(f.X,{height:32,caption:(0,j.jsxs)(o.Z,{sx:{display:"flex",alignItems:"center",mb:n.length>1?2:0},children:[(0,j.jsx)(p.T1,{symbol:e.rewardTokenSymbol,sx:{fontSize:"20px",mr:1}}),(0,j.jsx)(s.Z,{variant:i,children:e.rewardTokenSymbol})]}),width:"100%",children:(0,j.jsx)(c,{incentiveAPR:e.incentiveAPR})},e.rewardTokenAddress)})),n.length>1&&(0,j.jsx)(o.Z,{sx:function(e){return{pt:1,mt:1,border:"1px solid ".concat(e.palette.divider)}},children:(0,j.jsx)(f.X,{caption:(0,j.jsx)(m.cC,{id:"Net APR"}),height:32,children:(0,j.jsx)(c,{incentiveAPR:r})})})]})]})},v=function(){return(0,j.jsx)(o.Z,{sx:{p:{xs:"0 4px",xsm:"3.625px 4px"},display:"flex",alignItems:"center",justifyContent:"center"},children:(0,j.jsx)(s.Z,{variant:"main12",color:"text.secondary",children:"\xa0"})})},y=function(e){var n=e.incentives,r=e.symbol,m=e.displayBlank,f=(0,a.useState)(!1),y=f[0],b=f[1],g=(0,l.Yh)((function(e){return e.trackEvent}));if(!(n&&n.length>0))return m?(0,j.jsx)(v,{}):null;var w=n.some((function(e){return"Infinity"===e.incentiveAPR})),O=w?"Infinity":n.reduce((function(e,n){return e+ +n.incentiveAPR}),0),C=w?"Infinity":"Infinity"!==O?(0,t.hE)(O||0).toNumber():"Infinity";if(0===C)return m?(0,j.jsx)(v,{}):null;return(0,j.jsx)(u.a,{tooltipContent:(0,j.jsx)(h,{incentives:n,incentivesNetAPR:C,symbol:r}),withoutHover:!0,setOpen:b,open:y,children:(0,j.jsxs)(o.Z,{sx:function(e){return{p:{xs:"0 4px",xsm:"2px 4px"},border:"1px solid ".concat(y?e.palette.action.disabled:e.palette.divider),borderRadius:"4px",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",transition:"opacity 0.2s ease",bgcolor:y?"action.hover":"transparent","&:hover":{bgcolor:"action.hover",borderColor:"action.disabled"}}},onClick:function(){g(d.h1.VIEW_LM_DETAILS_DASHBOARD,{}),b(!y)},children:[(0,j.jsx)(o.Z,{sx:{mr:2},children:"Infinity"!==C&&C<1e4?(0,j.jsx)(x.B,{value:C,percent:!0,variant:"secondary12",color:"text.secondary"}):"Infinity"!==C&&C>9999?(0,j.jsx)(x.B,{value:C,percent:!0,compact:!0,variant:"secondary12",color:"text.secondary"}):"Infinity"===C?(0,j.jsx)(s.Z,{variant:"main12",color:"text.secondary",children:"\u221e"}):void 0}),(0,j.jsx)(o.Z,{sx:{display:"inline-flex"},children:(0,j.jsx)(j.Fragment,{children:n.length<5?(0,j.jsx)(j.Fragment,{children:n.map((function(e){return(0,j.jsx)(p.T1,{symbol:e.rewardTokenSymbol,sx:{fontSize:"".concat(12,"px"),ml:-1}},e.rewardTokenSymbol)}))}):(0,j.jsxs)(j.Fragment,{children:[n.slice(0,3).map((function(e){return(0,j.jsx)(p.T1,{symbol:e.rewardTokenSymbol,sx:{fontSize:"".concat(12,"px"),ml:-1}},e.rewardTokenSymbol)})),(0,j.jsx)(c.Z,{sx:{fontSize:"".concat(12,"px"),borderRadius:"50%",bgcolor:"common.white",color:"common.black",ml:-1,zIndex:5},children:(0,j.jsx)(i.Z,{})})]})})})]})})}},44749:function(e,n,r){r.d(n,{Ch:function(){return j},r$:function(){return h},a9:function(){return v}});var t=r(59499),i=r(49501),o=r(38264),s=r(81645),c=r(62097),a=r(30120),l=r(29630),d=r(4132),u=r(85893);function x(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function p(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?x(Object(r),!0).forEach((function(n){(0,t.Z)(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):x(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}var m={borderRadius:"4px",display:"inline-flex",alignItems:"center",p:"2px",mt:"2px",cursor:"pointer","&:hover":{opacity:.6}},f=function(e){var n=e.color;return(0,u.jsx)(s.Z,{sx:{ml:"3px",color:n||"text.muted",fontSize:"14px"},children:(0,u.jsx)(o.Z,{})})},j=function(e){var n=e.typographyProps,r=(0,c.Z)(),t=p({border:"1px solid ".concat(r.palette.warning.main),color:r.palette.warning.main},m);return(0,u.jsx)(d.a,{withoutHover:!0,tooltipContent:(0,u.jsx)(y,{content:(0,u.jsx)(i.cC,{id:"Isolated assets have limited borrowing power and other assets cannot be used as collateral."})}),children:(0,u.jsxs)(a.Z,{sx:t,children:[(0,u.jsx)(l.Z,p(p({variant:"secondary12",sx:{lineHeight:"0.75rem"},color:r.palette.warning.main},n),{},{children:(0,u.jsx)(i.cC,{id:"Isolated"})})),(0,u.jsx)(f,{color:r.palette.warning.main})]})})},h=function(){return(0,u.jsx)(d.a,{tooltipContent:(0,u.jsx)(y,{content:(0,u.jsx)(i.cC,{id:"Asset can be only used as collateral in isolation mode with limited borrowing power. To enter isolation mode, disable all other collateral."})}),children:(0,u.jsxs)(a.Z,{sx:m,children:[(0,u.jsx)(l.Z,{variant:"description",color:"error.main",children:(0,u.jsx)(i.cC,{id:"Unavailable"})}),(0,u.jsx)(f,{})]})})},v=function(){return(0,u.jsx)(d.a,{tooltipContent:(0,u.jsx)(y,{content:(0,u.jsx)(i.cC,{id:"Collateral usage is limited because of isolation mode."})}),children:(0,u.jsxs)(a.Z,{sx:m,children:[(0,u.jsx)(l.Z,{variant:"description",color:"error.main",children:(0,u.jsx)(i.cC,{id:"Unavailable"})}),(0,u.jsx)(f,{})]})})},y=function(e){var n=e.content;return(0,u.jsx)(a.Z,{children:(0,u.jsx)(a.Z,{sx:{mb:4},children:n})})}},92391:function(e,n,r){r.d(n,{X:function(){return u}});var t=r(59499),i=r(4730),o=r(30120),s=r(29630),c=r(85893),a=["caption","children","captionVariant","captionColor","align"];function l(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function d(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?l(Object(r),!0).forEach((function(n){(0,t.Z)(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}var u=function(e){var n=e.caption,r=e.children,t=e.captionVariant,l=void 0===t?"secondary16":t,u=e.captionColor,x=e.align,p=void 0===x?"center":x,m=(0,i.Z)(e,a);return(0,c.jsxs)(o.Z,d(d({},m),{},{sx:d({display:"flex",alignItems:p,justifyContent:"space-between"},m.sx),children:[n&&(0,c.jsx)(s.Z,{component:"div",variant:l,color:u,sx:{mr:2},children:n}),r]}))}},32993:function(e,n,r){r.d(n,{A:function(){return v}});var t=r(80854),i=(r(67294),r(34220)),o=r(82482),s=r(43629),c=r(77537),a=r(46930);var l=r(8195),d=r(22454),u=r(16376),x=r(25298),p=r(57609),m=r(78944),f=r(10343),j=r(63491),h=r(85893),v=function(e){var n,r,v=e.hideTitleSymbol,y=e.underlyingAsset,b=e.children,g=e.requiredChainId,w=e.title,O=e.requiredPermission,C=e.keepWrappedSymbol,P=(0,c.Z)().readOnlyModeAddress,Z=(0,u.Yh)((function(e){return e.currentMarketData})),I=(0,u.Yh)((function(e){return e.currentNetworkConfig})),k=(0,o.P)(Z).walletBalances,A=(0,i.HT)(),S=A.user,D=A.reserves,R=(0,l.vR)(),T=R.txError,E=R.mainTxState,N=(0,d.T)().permissions,B=function(e){var n=(0,a.f)().currentChainId,r=e||n;return{isWrongNetwork:(0,c.Z)().chainId!==r,requiredChainId:r}}(g),W=B.isWrongNetwork,L=B.requiredChainId;if(T&&T.blocking)return(0,h.jsx)(j.D,{txError:T});if(O&&x.cr.permissions(Z)&&!N.includes(O)&&Z.permissionComponent)return(0,h.jsx)(h.Fragment,{children:Z.permissionComponent});var H=D.find((function(e){return y.toLowerCase()===t.hP.toLowerCase()?e.isWrappedBaseAsset:y===e.underlyingAsset})),_=null===S||void 0===S?void 0:S.userReservesData.find((function(e){return y.toLowerCase()===t.hP.toLowerCase()?e.reserve.isWrappedBaseAsset:y===e.underlyingAsset})),z=H.isWrappedBaseAsset&&!C?I.baseAssetSymbol:H.symbol;return(0,h.jsxs)(s.hv,{asset:H,children:[!E.success&&(0,h.jsx)(m.E,{title:w,symbol:v?void 0:z}),W&&!P&&(0,h.jsx)(f.I,{networkName:(0,x.Mo)(L).name,chainId:L,event:{eventName:p.vh.SWITCH_NETWORK,eventParams:{asset:y}}}),b({isWrongNetwork:W,nativeBalance:(null===(n=k[t.hP.toLowerCase()])||void 0===n?void 0:n.amount)||"0",tokenBalance:(null===(r=k[H.underlyingAsset.toLowerCase()])||void 0===r?void 0:r.amount)||"0",poolReserve:H,symbol:z,underlyingAsset:y,userReserve:_})]})}}}]);