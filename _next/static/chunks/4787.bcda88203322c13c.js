"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4787],{99730:function(e,r,t){t.d(r,{f:function(){return c}});var n=t(49501),a=t(30120),o=t(29630),i=t(69331),s=t(67916),u=t(85893),c=function(e){var r=e.txError;return(0,u.jsxs)(a.Z,{children:[(0,u.jsx)(s.Q,{txError:r}),"MetaMask Message Signature: User denied message signature."!==r.rawError.message&&"MetaMask Tx Signature: User denied transaction signature."!==r.rawError.message&&(0,u.jsx)(a.Z,{sx:{pt:4},children:(0,u.jsx)(i.v,{severity:"info",children:(0,u.jsxs)(o.Z,{variant:"description",children:[" ",(0,u.jsx)(n.cC,{id:"Tip: Try increasing slippage or reduce input amount"})]})})})]})}},21732:function(e,r,t){t.d(r,{P:function(){return k}});var n=t(90116),a=t(59499),o=t(50029),i=t(87794),s=t.n(i),u=t(75331),c=t(53670),l=t(67294),d=t(19419),f=t(74119),h=t(8195),p=t(77537),v=t(16376),m=t(32113),x=t(39771),y=t(15591),g=t(89291);function b(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function T(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?b(Object(t),!0).forEach((function(r){(0,a.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):b(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var k=function(e){var r=e.handleGetTxns,t=e.handleGetApprovalTxns,a=e.gasLimitRecommendation,i=e.skip,b=e.spender,k=e.protocolAction,E=e.deps,C=void 0===E?[]:E,A=(0,h.vR)(),M=A.approvalTxState,S=A.setApprovalTxState,R=A.mainTxState,w=A.setMainTxState,I=A.setGasLimit,L=A.loadingTxns,O=A.setLoadingTxns,D=A.setTxError,q=(0,p.Z)(),P=q.sendTx,B=q.getTxError,N=q.signTxData,j=(0,d.n)(),U=j.refetchPoolData,Z=j.refetchIncentiveData,G=(0,v.Yh)(),_=G.walletApprovalMethodPreference,H=G.generateSignatureRequest,W=G.addTransaction,F=(0,l.useState)(),Q=F[0],V=F[1],K=(0,l.useState)(),X=K[0],Y=K[1],z=(0,l.useState)(),J=z[0],$=z[1],ee=(0,l.useState)(),re=ee[0],te=ee[1],ne=(0,l.useState)({asset:C[0],amount:C[1]}),ae=ne[0],oe=ne[1],ie=(0,l.useState)(!1),se=ie[0],ue=ie[1],ce=(0,l.useRef)(!1);(0,l.useEffect)((function(){return ce.current=!0,function(){ce.current=!1}}),[]);var le=function(){var e=(0,o.Z)(s().mark((function e(r){var t,n,a,o,i;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.tx,n=r.errorCallback,a=r.successCallback,e.prev=1,e.next=4,t();case 4:return o=e.sent,e.prev=5,e.next=8,o.wait(1);case 8:ce.current&&a&&a(o),W(o.hash,{txState:"success",action:k||u.UQ.default}),c.queryClient.invalidateQueries({queryKey:y.B.pool}),U&&U(),Z&&Z(),e.next=32;break;case 15:return e.prev=15,e.t0=e.catch(5),e.prev=17,e.next=20,B(o.hash);case 20:return i=e.sent,ce.current&&n&&n(new Error(i),o.hash),e.abrupt("return");case 25:return e.prev=25,e.t1=e.catch(17),ce.current&&n&&n(e.t1,o.hash),e.abrupt("return");case 29:return e.prev=29,W(o.hash,{txState:"failed",action:k||u.UQ.default}),e.finish(29);case 32:return e.abrupt("return");case 35:e.prev=35,e.t2=e.catch(1),n&&n(e.t2);case 38:case"end":return e.stop()}}),e,null,[[1,35],[5,15],[17,25,29,32]])})));return function(r){return e.apply(this,arguments)}}(),de=function(){var e=(0,o.Z)(s().mark((function e(r){var t,n,a,o,i,u,c,l,d;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=r.amount,n=r.underlyingAsset,!(se&&t&&n)){e.next=38;break}return S(T(T({},M),{},{loading:!0})),e.prev=3,a=Math.floor(Date.now()/1e3+3600).toString(),e.next=7,H({token:n,amount:t,deadline:a,spender:b});case 7:return o=e.sent,e.prev=8,e.next=11,N(o);case 11:if(i=e.sent,ce.current){e.next=14;break}return e.abrupt("return");case 14:$(i),te(a),S({txHash:g.Z,loading:!1,success:!0}),D(void 0),e.next=27;break;case 20:if(e.prev=20,e.t0=e.catch(8),ce.current){e.next=24;break}return e.abrupt("return");case 24:u=(0,x.WG)(e.t0,x.aD.APPROVAL,!1),D(u),S({txHash:void 0,loading:!1});case 27:e.next=36;break;case 29:if(e.prev=29,e.t1=e.catch(3),ce.current){e.next=33;break}return e.abrupt("return");case 33:c=(0,x.WG)(e.t1,x.aD.GAS_ESTIMATION,!1),D(c),S({txHash:void 0,loading:!1});case 36:e.next=56;break;case 38:if(!Q){e.next=56;break}return e.prev=39,S(T(T({},M),{},{loading:!0})),e.next=43,Q.tx();case 43:return delete(l=e.sent).gasPrice,e.next=47,le({tx:function(){return P(l)},successCallback:function(e){S({txHash:e.hash,loading:!1,success:!0}),D(void 0)},errorCallback:function(e,r){var t=(0,x.WG)(e,x.aD.APPROVAL,!1);D(t),S({txHash:r,loading:!1})},action:x.aD.APPROVAL});case 47:e.next=56;break;case 49:if(e.prev=49,e.t2=e.catch(39),ce.current){e.next=53;break}return e.abrupt("return");case 53:d=(0,x.WG)(e.t2,x.aD.GAS_ESTIMATION,!1),D(d),S({txHash:void 0,loading:!1});case 56:case"end":return e.stop()}}),e,null,[[3,29],[8,20],[39,49]])})));return function(r){return e.apply(this,arguments)}}(),fe=function(){var e=(0,o.Z)(s().mark((function e(){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return w(T(T({},R),{},{loading:!0})),D(void 0),e.next=4,r(J,re).then(function(){var e=(0,o.Z)(s().mark((function e(r){var t,n,a;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t=r.find((function(e){return["DLP_ACTION"].includes(e.txType)})))){e.next=15;break}return e.prev=2,e.next=5,t.tx();case 5:return delete(n=e.sent).gasPrice,e.abrupt("return",le({tx:function(){return P(n)},successCallback:function(e){w({txHash:e.hash,loading:!1,success:!0}),D(void 0)},errorCallback:function(e,r){var t=(0,x.WG)(e,x.aD.MAIN_ACTION);D(t),w({txHash:r,loading:!1})},action:x.aD.MAIN_ACTION}));case 10:e.prev=10,e.t0=e.catch(2),a=(0,x.WG)(e.t0,x.aD.GAS_ESTIMATION,!1),D(a),w(T(T({},R),{},{loading:!1}));case 15:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(r){return e.apply(this,arguments)}}()).catch((function(e){var r=(0,x.WG)(e,x.aD.GAS_ESTIMATION,!1);D(r),w(T(T({},R),{},{loading:!1}))}));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,l.useEffect)((function(){i?(V(void 0),Y(void 0)):(O(!0),t().then(function(){var e=(0,o.Z)(s().mark((function e(r){var t,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=r.find((function(e){return"ERC20_APPROVAL"===e.txType})),n=_===m.n.PERMIT,(C[0]!==ae.asset||Number(C[1])>Number(ae.amount)+Number(ae.amount)*(f.Ik/2))&&(S({success:!1}),D(void 0)),Number(C[1])<Number(ae.amount)&&D(void 0),oe({asset:C[0],amount:C[1]}),t&&n?(ue(!0),w({txHash:void 0}),O(!1)):(ue(!1),V(t));case 6:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}()).finally((function(){w({txHash:void 0}),I(a),O(!1)})))}),[i].concat((0,n.Z)(C),[_])),{approval:de,action:fe,loadingTxns:L,requiresApproval:!!Q||se,approvalTxState:M,mainTxState:R,actionTx:X,approvalTx:Q}}},68448:function(e,r,t){t.d(r,{_S:function(){return i},bU:function(){return s},DX:function(){return u}});var n=t(20854),a=t(1279),o=t(70794);function i(e){var r,t=e.fromAmount,o=e.fromAssetData,i=e.fromAssetUserData,s=e.toAmountAfterSlippage,u=e.toAssetData,c=e.user,l=c.isInEmode&&c.userEmodeCategoryId===o.eModeCategoryId?o.formattedEModeLiquidationThreshold:o.formattedReserveLiquidationThreshold,d="0";i.usageAsCollateralEnabledOnUser&&"0"!==o.reserveLiquidationThreshold&&(d=(0,n.L1)({collateralBalanceMarketReferenceCurrency:(0,a.hE)(t).multipliedBy(o.formattedPriceInMarketReferenceCurrency),borrowBalanceMarketReferenceCurrency:c.totalBorrowsMarketReferenceCurrency,currentLiquidationThreshold:l}).toString());var f="0";return(!c.isInIsolationMode&&!u.isIsolated||c.isInIsolationMode&&(null===(r=c.isolatedReserve)||void 0===r?void 0:r.underlyingAsset)===u.underlyingAsset)&&(f=(0,n.L1)({collateralBalanceMarketReferenceCurrency:(0,a.hE)(s).multipliedBy(u.formattedPriceInMarketReferenceCurrency),borrowBalanceMarketReferenceCurrency:c.totalBorrowsMarketReferenceCurrency,currentLiquidationThreshold:c.isInEmode&&c.userEmodeCategoryId===u.eModeCategoryId?u.formattedEModeLiquidationThreshold:u.formattedReserveLiquidationThreshold}).toString()),{hfEffectOfFromAmount:d,hfAfterSwap:"-1"===c.healthFactor?(0,a.hE)("-1"):(0,a.hE)(c.healthFactor).plus(f).minus(d)}}var s=function(e){var r=e.user,t=e.amountToReceiveAfterSwap,i=e.amountToSwap,s=e.fromAssetData,u=e.toAssetData,c=e.repayWithUserReserve,l=e.debt,d=r.isInEmode&&r.userEmodeCategoryId===s.eModeCategoryId?s.formattedEModeLiquidationThreshold:s.formattedReserveLiquidationThreshold,f="0";null!==c&&void 0!==c&&c.usageAsCollateralEnabledOnUser&&s.usageAsCollateralEnabled&&(f=(0,n.L1)({collateralBalanceMarketReferenceCurrency:(0,a.hE)(i).multipliedBy(s.formattedPriceInMarketReferenceCurrency),borrowBalanceMarketReferenceCurrency:r.totalBorrowsMarketReferenceCurrency,currentLiquidationThreshold:d}).toString());var h=(0,a.hE)(o.Z.min(t,l)).multipliedBy(u.priceInUSD).toString(10),p=(0,a.hE)(r.totalBorrowsUSD).minus(h);p=o.Z.max(p,(0,a.hE)("0"));var v=(0,n.L1)({collateralBalanceMarketReferenceCurrency:r.totalCollateralUSD,borrowBalanceMarketReferenceCurrency:p.toString(10),currentLiquidationThreshold:r.currentLiquidationThreshold}),m="0"!==s.reserveLiquidationThreshold&&null!==c&&void 0!==c&&c.usageAsCollateralEnabledOnUser?(0,n.L1)({collateralBalanceMarketReferenceCurrency:(0,a.hE)(i).multipliedBy(s.priceInUSD),borrowBalanceMarketReferenceCurrency:p.toString(10),currentLiquidationThreshold:s.formattedReserveLiquidationThreshold}).toString():"0",x=v.eq(-1)?v:v.minus(m);return{hfEffectOfFromAmount:(0,a.hE)(f),hfAfterSwap:x.isLessThan(0)&&!x.eq(-1)?0:x}},u=function(e){var r=e.user,t=e.userReserve,i=e.poolReserve,s=e.withdrawAmount,u=(0,a.hE)(r.totalCollateralMarketReferenceCurrency),c=r.currentLiquidationThreshold,l=(0,a.hE)(r.healthFactor),d=r.isInEmode&&r.userEmodeCategoryId===i.eModeCategoryId?i.formattedEModeLiquidationThreshold:i.formattedReserveLiquidationThreshold;if(null!==t&&void 0!==t&&t.usageAsCollateralEnabledOnUser&&"0"!==i.reserveLiquidationThreshold){var f=(0,a.hE)(s).multipliedBy(i.formattedPriceInMarketReferenceCurrency);u=u.minus(f),c=(0,a.hE)(r.totalCollateralMarketReferenceCurrency).multipliedBy((0,a.hE)(r.currentLiquidationThreshold)).minus((0,a.hE)(f).multipliedBy(d)).div(u).toFixed(4,o.Z.ROUND_DOWN),l=(0,n.L1)({collateralBalanceMarketReferenceCurrency:u,borrowBalanceMarketReferenceCurrency:r.totalBorrowsMarketReferenceCurrency,currentLiquidationThreshold:c})}return l}}}]);