"use strict";(self.webpackChunkmydao=self.webpackChunkmydao||[]).push([[552],{5811:function(t,r,e){e.d(r,{S:function(){return s}});var n=e(74165),a=e(15861),c=e(15671),u=e(43144),o=e(95360),i=e(60922),s=function(){function t(r,e,u){var s=this;(0,c.Z)(this,t),(0,o._)(this,"contractWrapper",void 0),(0,o._)(this,"storage",void 0),(0,o._)(this,"erc721",void 0),(0,o._)(this,"_chainId",void 0),(0,o._)(this,"transfer",(0,i.dt)(function(){var t=(0,a.Z)((0,n.Z)().mark((function t(r,e){return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",s.erc721.transfer.prepare(r,e));case 1:case"end":return t.stop()}}),t)})));return function(r,e){return t.apply(this,arguments)}}())),(0,o._)(this,"setApprovalForAll",(0,i.dt)(function(){var t=(0,a.Z)((0,n.Z)().mark((function t(r,e){return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",s.erc721.setApprovalForAll.prepare(r,e));case 1:case"end":return t.stop()}}),t)})));return function(r,e){return t.apply(this,arguments)}}())),(0,o._)(this,"setApprovalForToken",(0,i.dt)(function(){var t=(0,a.Z)((0,n.Z)().mark((function t(r,e){return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=i.aU,t.t1=s.contractWrapper,t.next=4,(0,i.cN)(r);case 4:return t.t2=t.sent,t.t3=e,t.t4=[t.t2,t.t3],t.t5={contractWrapper:t.t1,method:"approve",args:t.t4},t.abrupt("return",t.t0.fromContractWrapper.call(t.t0,t.t5));case 9:case"end":return t.stop()}}),t)})));return function(r,e){return t.apply(this,arguments)}}())),this.contractWrapper=r,this.storage=e,this.erc721=new i.au(this.contractWrapper,this.storage,u),this._chainId=u}return(0,u.Z)(t,[{key:"chainId",get:function(){return this._chainId}},{key:"onNetworkUpdated",value:function(t){this.contractWrapper.updateSignerOrProvider(t)}},{key:"getAddress",value:function(){return this.contractWrapper.readContract.address}},{key:"getAll",value:function(){var t=(0,a.Z)((0,n.Z)().mark((function t(r){return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",this.erc721.getAll(r));case 1:case"end":return t.stop()}}),t,this)})));return function(r){return t.apply(this,arguments)}}()},{key:"getOwned",value:function(){var t=(0,a.Z)((0,n.Z)().mark((function t(r){return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!r){t.next=4;break}return t.next=3,(0,i.cN)(r);case 3:r=t.sent;case 4:return t.abrupt("return",this.erc721.getOwned(r));case 5:case"end":return t.stop()}}),t,this)})));return function(r){return t.apply(this,arguments)}}()},{key:"getOwnedTokenIds",value:function(){var t=(0,a.Z)((0,n.Z)().mark((function t(r){return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!r){t.next=4;break}return t.next=3,(0,i.cN)(r);case 3:r=t.sent;case 4:return t.abrupt("return",this.erc721.getOwnedTokenIds(r));case 5:case"end":return t.stop()}}),t,this)})));return function(r){return t.apply(this,arguments)}}()},{key:"totalSupply",value:function(){var t=(0,a.Z)((0,n.Z)().mark((function t(){return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",this.erc721.totalCirculatingSupply());case 1:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"get",value:function(){var t=(0,a.Z)((0,n.Z)().mark((function t(r){return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",this.erc721.get(r));case 1:case"end":return t.stop()}}),t,this)})));return function(r){return t.apply(this,arguments)}}()},{key:"ownerOf",value:function(){var t=(0,a.Z)((0,n.Z)().mark((function t(r){return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",this.erc721.ownerOf(r));case 1:case"end":return t.stop()}}),t,this)})));return function(r){return t.apply(this,arguments)}}()},{key:"balanceOf",value:function(){var t=(0,a.Z)((0,n.Z)().mark((function t(r){return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",this.erc721.balanceOf(r));case 1:case"end":return t.stop()}}),t,this)})));return function(r){return t.apply(this,arguments)}}()},{key:"balance",value:function(){var t=(0,a.Z)((0,n.Z)().mark((function t(){return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",this.erc721.balance());case 1:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"isApproved",value:function(){var t=(0,a.Z)((0,n.Z)().mark((function t(r,e){return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",this.erc721.isApproved(r,e));case 1:case"end":return t.stop()}}),t,this)})));return function(r,e){return t.apply(this,arguments)}}()}]),t}()},20552:function(t,r,e){e.r(r),e.d(r,{SignatureDrop:function(){return Z}});var n=e(74165),a=e(15861),c=e(15671),u=e(43144),o=e(97326),i=e(60136),s=e(29388),p=e(95360),f=e(60922),l=e(5811),h=e(63534),d=e(2257),v=e(68624),Z=(e(80518),e(84255),e(13631),e(49675),e(20737),e(78262),e(66315),function(t){(0,i.Z)(e,t);var r=(0,s.Z)(e);function e(t,u,i){var s;(0,c.Z)(this,e);var l=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},d=arguments.length>4?arguments[4]:void 0,v=arguments.length>5?arguments[5]:void 0,Z=arguments.length>6&&void 0!==arguments[6]?arguments[6]:new f.dD(t,u,d,l);return s=r.call(this,Z,i,v),(0,p._)((0,o.Z)(s),"abi",void 0),(0,p._)((0,o.Z)(s),"owner",void 0),(0,p._)((0,o.Z)(s),"encoder",void 0),(0,p._)((0,o.Z)(s),"estimator",void 0),(0,p._)((0,o.Z)(s),"metadata",void 0),(0,p._)((0,o.Z)(s),"app",void 0),(0,p._)((0,o.Z)(s),"sales",void 0),(0,p._)((0,o.Z)(s),"platformFees",void 0),(0,p._)((0,o.Z)(s),"events",void 0),(0,p._)((0,o.Z)(s),"roles",void 0),(0,p._)((0,o.Z)(s),"interceptor",void 0),(0,p._)((0,o.Z)(s),"royalties",void 0),(0,p._)((0,o.Z)(s),"claimConditions",void 0),(0,p._)((0,o.Z)(s),"revealer",void 0),(0,p._)((0,o.Z)(s),"signature",void 0),(0,p._)((0,o.Z)(s),"checkout",void 0),(0,p._)((0,o.Z)(s),"createBatch",(0,f.dt)(function(){var t=(0,a.Z)((0,n.Z)().mark((function t(r,e){return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",s.erc721.lazyMint.prepare(r,e));case 1:case"end":return t.stop()}}),t)})));return function(r,e){return t.apply(this,arguments)}}())),(0,p._)((0,o.Z)(s),"claimTo",(0,f.dt)(function(){var t=(0,a.Z)((0,n.Z)().mark((function t(r,e,a){return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",s.erc721.claimTo.prepare(r,e,a));case 1:case"end":return t.stop()}}),t)})));return function(r,e,n){return t.apply(this,arguments)}}())),(0,p._)((0,o.Z)(s),"claim",(0,f.dt)(function(){var t=(0,a.Z)((0,n.Z)().mark((function t(r,e){return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",s.erc721.claim.prepare(r,e));case 1:case"end":return t.stop()}}),t)})));return function(r,e){return t.apply(this,arguments)}}())),(0,p._)((0,o.Z)(s),"burn",(0,f.dt)(function(){var t=(0,a.Z)((0,n.Z)().mark((function t(r){return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",s.erc721.burn.prepare(r));case 1:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}())),s.abi=f.e.parse(d||[]),s.metadata=new f.ai(s.contractWrapper,f.dN,s.storage),s.app=new f.aW(s.contractWrapper,s.metadata,s.storage),s.roles=new f.aj(s.contractWrapper,e.contractRoles),s.royalties=new f.ak(s.contractWrapper,s.metadata),s.sales=new f.al(s.contractWrapper),s.encoder=new f.ah(s.contractWrapper),s.estimator=new f.aO(s.contractWrapper),s.events=new f.aP(s.contractWrapper),s.platformFees=new f.aR(s.contractWrapper),s.interceptor=new f.aQ(s.contractWrapper),s.claimConditions=new f.an(s.contractWrapper,s.metadata,s.storage),s.signature=new f.ax(s.contractWrapper,s.storage),s.revealer=new f.am(s.contractWrapper,s.storage,f.dO.name,(function(){return s.erc721.nextTokenIdToMint()})),s.signature=new f.ax(s.contractWrapper,s.storage),s.owner=new f.aT(s.contractWrapper),s.checkout=new h.a(s.contractWrapper),s}return(0,u.Z)(e,[{key:"onNetworkUpdated",value:function(t){this.contractWrapper.updateSignerOrProvider(t)}},{key:"getAddress",value:function(){return this.contractWrapper.readContract.address}},{key:"totalSupply",value:function(){var t=(0,a.Z)((0,n.Z)().mark((function t(){var r,e;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.totalClaimedSupply();case 2:return r=t.sent,t.next=5,this.totalUnclaimedSupply();case 5:return e=t.sent,t.abrupt("return",r.add(e));case 7:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"getAllClaimed",value:function(){var t=(0,a.Z)((0,n.Z)().mark((function t(r){var e,a,c,u=this;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=d.O$.from((null===r||void 0===r?void 0:r.start)||0).toNumber(),a=d.O$.from((null===r||void 0===r?void 0:r.count)||p.c).toNumber(),t.t0=Math,t.next=5,this.totalClaimedSupply();case 5:return t.t1=t.sent.toNumber(),t.t2=e+a,c=t.t0.min.call(t.t0,t.t1,t.t2),t.next=10,Promise.all(Array.from(Array(c).keys()).map((function(t){return u.get(t.toString())})));case 10:return t.abrupt("return",t.sent);case 11:case"end":return t.stop()}}),t,this)})));return function(r){return t.apply(this,arguments)}}()},{key:"getAllUnclaimed",value:function(){var t=(0,a.Z)((0,n.Z)().mark((function t(r){var e,a,c,u,o=this;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=d.O$.from((null===r||void 0===r?void 0:r.start)||0).toNumber(),a=d.O$.from((null===r||void 0===r?void 0:r.count)||p.c).toNumber(),t.t0=d.O$,t.t1=Math,t.next=6,this.totalClaimedSupply();case 6:return t.t2=t.sent.toNumber(),t.t3=e,t.t4=t.t1.max.call(t.t1,t.t2,t.t3),c=t.t0.from.call(t.t0,t.t4),t.t5=d.O$,t.t6=Math,t.next=14,this.contractWrapper.readContract.nextTokenIdToMint();case 14:return t.t7=t.sent.toNumber(),t.t8=c.toNumber()+a,t.t9=t.t6.min.call(t.t6,t.t7,t.t8),u=t.t5.from.call(t.t5,t.t9),t.next=20,Promise.all(Array.from(Array(u.sub(c).toNumber()).keys()).map((function(t){return o.erc721.getTokenMetadata(c.add(t).toString())})));case 20:return t.abrupt("return",t.sent);case 21:case"end":return t.stop()}}),t,this)})));return function(r){return t.apply(this,arguments)}}()},{key:"totalClaimedSupply",value:function(){var t=(0,a.Z)((0,n.Z)().mark((function t(){return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",this.erc721.totalClaimedSupply());case 1:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"totalUnclaimedSupply",value:function(){var t=(0,a.Z)((0,n.Z)().mark((function t(){return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",this.erc721.totalUnclaimedSupply());case 1:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"isTransferRestricted",value:function(){var t=(0,a.Z)((0,n.Z)().mark((function t(){var r;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.contractWrapper.readContract.hasRole((0,f.bs)("transfer"),v.d);case 2:return r=t.sent,t.abrupt("return",!r);case 4:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"getClaimTransaction",value:function(){var t=(0,a.Z)((0,n.Z)().mark((function t(r,e,a){return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",this.erc721.getClaimTransaction(r,e,a));case 1:case"end":return t.stop()}}),t,this)})));return function(r,e,n){return t.apply(this,arguments)}}()},{key:"prepare",value:function(){var t=(0,a.Z)((0,n.Z)().mark((function t(r,e,a){return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",f.aU.fromContractWrapper({contractWrapper:this.contractWrapper,method:r,args:e,overrides:a}));case 1:case"end":return t.stop()}}),t,this)})));return function(r,e,n){return t.apply(this,arguments)}}()},{key:"call",value:function(){var t=(0,a.Z)((0,n.Z)().mark((function t(r,e,a){return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",this.contractWrapper.call(r,e,a));case 1:case"end":return t.stop()}}),t,this)})));return function(r,e,n){return t.apply(this,arguments)}}()}]),e}(l.S));(0,p._)(Z,"contractRoles",["admin","minter","transfer"])},63534:function(t,r,e){e.d(r,{a:function(){return b}});var n,a=e(1413),c=e(74165),u=e(15671),o=e(43144),i=e(15861),s=e(4942),p=e(95360),f=e(44554),l=e(60922),h="".concat("https://paper.xyz/api","/").concat("2022-08-12","/platform/thirdweb"),d=(n={},(0,s.Z)(n,l.u.Mainnet,"Ethereum"),(0,s.Z)(n,l.u.Goerli,"Goerli"),(0,s.Z)(n,l.u.Polygon,"Polygon"),(0,s.Z)(n,l.u.Mumbai,"Mumbai"),(0,s.Z)(n,l.u.Avalanche,"Avalanche"),n);function v(t){return(0,f.Z)(t in d,"chainId not supported by paper: ".concat(t)),d[t]}function Z(t,r){return m.apply(this,arguments)}function m(){return(m=(0,i.Z)((0,c.Z)().mark((function t(r,e){var n,a,u;return(0,c.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=v(e),t.next=3,fetch("".concat(h,"/register-contract?contractAddress=").concat(r,"&chain=").concat(n));case 3:return a=t.sent,t.next=6,a.json();case 6:return u=t.sent,(0,f.Z)(u.result.id,"Contract is not registered with paper"),t.abrupt("return",u.result.id);case 9:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var w={expiresInMinutes:15,feeBearer:"BUYER",sendEmailOnSuccess:!0,redirectAfterPayment:!1};function y(t,r){return k.apply(this,arguments)}function k(){return(k=(0,i.Z)((0,c.Z)().mark((function t(r,e){var n,u;return(0,c.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(h,"/checkout-link-intent"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify((0,a.Z)((0,a.Z)((0,a.Z)({contractId:r},w),e),{},{metadata:(0,a.Z)((0,a.Z)({},e.metadata),{},{via_platform:"thirdweb"}),hideNativeMint:!0,hidePaperWallet:!!e.walletAddress,hideExternalWallet:!0,hidePayWithCrypto:!0,usePaperKey:!1}))});case 2:return n=t.sent,t.next=5,n.json();case 5:return u=t.sent,(0,f.Z)(u.checkoutLinkIntentUrl,"Failed to create checkout link intent"),t.abrupt("return",u.checkoutLinkIntentUrl);case 8:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var b=function(){function t(r){(0,u.Z)(this,t),(0,p._)(this,"contractWrapper",void 0),this.contractWrapper=r}return(0,o.Z)(t,[{key:"getCheckoutId",value:function(){var t=(0,i.Z)((0,c.Z)().mark((function t(){return(0,c.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=Z,t.t1=this.contractWrapper.readContract.address,t.next=4,this.contractWrapper.getChainID();case 4:return t.t2=t.sent,t.abrupt("return",(0,t.t0)(t.t1,t.t2));case 6:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"isEnabled",value:function(){var t=(0,i.Z)((0,c.Z)().mark((function t(){return(0,c.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,this.getCheckoutId();case 3:return t.abrupt("return",!!t.sent);case 6:return t.prev=6,t.t0=t.catch(0),t.abrupt("return",!1);case 9:case"end":return t.stop()}}),t,this,[[0,6]])})));return function(){return t.apply(this,arguments)}}()},{key:"createLinkIntent",value:function(){var t=(0,i.Z)((0,c.Z)().mark((function t(r){return(0,c.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=y,t.next=3,this.getCheckoutId();case 3:return t.t1=t.sent,t.t2=r,t.next=7,(0,t.t0)(t.t1,t.t2);case 7:return t.abrupt("return",t.sent);case 8:case"end":return t.stop()}}),t,this)})));return function(r){return t.apply(this,arguments)}}()}]),t}()}}]);
//# sourceMappingURL=552.6ec5ff54.chunk.js.map