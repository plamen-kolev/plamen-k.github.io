!function(e,t){"function"==typeof define&&define.amd?define(t):"object"==typeof exports?module.exports=t():e.PhotoSwipe=t()}(this,function(){"use strict";return function(p,i,e,t){var f={features:null,bind:function(e,t,n,i){var o=(i?"remove":"add")+"EventListener";t=t.split(" ");for(var a=0;a<t.length;a++)t[a]&&e[o](t[a],n,!1)},isArray:function(e){return e instanceof Array},createEl:function(e,t){var n=document.createElement(t||"div");return e&&(n.className=e),n},getScrollY:function(){var e=window.pageYOffset;return void 0!==e?e:document.documentElement.scrollTop},unbind:function(e,t,n){f.bind(e,t,n,!0)},removeClass:function(e,t){var n=new RegExp("(\\s|^)"+t+"(\\s|$)");e.className=e.className.replace(n," ").replace(/^\s\s*/,"").replace(/\s\s*$/,"")},addClass:function(e,t){f.hasClass(e,t)||(e.className+=(e.className?" ":"")+t)},hasClass:function(e,t){return e.className&&new RegExp("(^|\\s)"+t+"(\\s|$)").test(e.className)},getChildByClass:function(e,t){for(var n=e.firstChild;n;){if(f.hasClass(n,t))return n;n=n.nextSibling}},arraySearch:function(e,t,n){for(var i=e.length;i--;)if(e[i][n]===t)return i;return-1},extend:function(e,t,n){for(var i in t)if(t.hasOwnProperty(i)){if(n&&e.hasOwnProperty(i))continue;e[i]=t[i]}},easing:{sine:{out:function(e){return Math.sin(e*(Math.PI/2))},inOut:function(e){return-(Math.cos(Math.PI*e)-1)/2}},cubic:{out:function(e){return--e*e*e+1}}},detectFeatures:function(){if(f.features)return f.features;var e=f.createEl().style,t="",n={};if(n.oldIE=document.all&&!document.addEventListener,n.touch="ontouchstart"in window,window.requestAnimationFrame&&(n.raf=window.requestAnimationFrame,n.caf=window.cancelAnimationFrame),n.pointerEvent=navigator.pointerEnabled||navigator.msPointerEnabled,!n.pointerEvent){var i=navigator.userAgent;if(/iP(hone|od)/.test(navigator.platform)){var o=navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);o&&0<o.length&&(1<=(o=parseInt(o[1],10))&&o<8&&(n.isOldIOSPhone=!0))}var a=i.match(/Android\s([0-9\.]*)/),r=a?a[1]:0;1<=(r=parseFloat(r))&&(r<4.4&&(n.isOldAndroid=!0),n.androidVersion=r),n.isMobileOpera=/opera mini|opera mobi/i.test(i)}for(var l,s,u=["transform","perspective","animationName"],c=["","webkit","Moz","ms","O"],d=0;d<4;d++){t=c[d];for(var p=0;p<3;p++)l=u[p],s=t+(t?l.charAt(0).toUpperCase()+l.slice(1):l),!n[l]&&s in e&&(n[l]=s);t&&!n.raf&&(t=t.toLowerCase(),n.raf=window[t+"RequestAnimationFrame"],n.raf&&(n.caf=window[t+"CancelAnimationFrame"]||window[t+"CancelRequestAnimationFrame"]))}if(!n.raf){var m=0;n.raf=function(e){var t=(new Date).getTime(),n=Math.max(0,16-(t-m)),i=window.setTimeout(function(){e(t+n)},n);return m=t+n,i},n.caf=function(e){clearTimeout(e)}}return n.svg=!!document.createElementNS&&!!document.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect,f.features=n}};f.detectFeatures(),f.features.oldIE&&(f.bind=function(e,t,n,i){t=t.split(" ");for(var o,a=(i?"detach":"attach")+"Event",r=function(){n.handleEvent.call(n)},l=0;l<t.length;l++)if(o=t[l])if("object"==typeof n&&n.handleEvent){if(i){if(!n["oldIE"+o])return!1}else n["oldIE"+o]=r;e[a]("on"+o,n["oldIE"+o])}else e[a]("on"+o,n)});var m=this,n=25,r=3,h={allowPanToNext:!0,spacing:.12,bgOpacity:1,mouseUsed:!1,loop:!0,pinchToClose:!0,closeOnScroll:!0,closeOnVerticalDrag:!0,verticalDragRange:.75,hideAnimationDuration:333,showAnimationDuration:333,showHideOpacity:!1,focus:!0,escKey:!0,arrowKeys:!0,mainScrollEndFriction:.35,panEndFriction:.35,isClickableElement:function(e){return"A"===e.tagName},getDoubleTapZoom:function(e,t){return e?1:t.initialZoomLevel<.7?1:1.33},maxSpreadZoom:1.33,modal:!0,scaleMode:"fit"};f.extend(h,t);var s,o,y,v,a,l,c,u,d,x,g,w,b,I,C,D,M,T,S,A,E,O,k,R,Z,P,F,L,_,z,N,U,H,Y,B,W,G,X,V,K,q,$,j,J,Q,ee,te,ne,ie,oe,ae,re,le,se,ue,ce=function(){return{x:0,y:0}},de=ce(),pe=ce(),me=ce(),fe={},he=0,ye={},ve=ce(),xe=0,ge=!0,we=[],be={},Ie=!1,Ce=function(e,t){f.extend(m,t.publicMethods),we.push(e)},De=function(e){var t=Jt();return t-1<e?e-t:e<0?t+e:e},Me={},Te=function(e,t){return Me[e]||(Me[e]=[]),Me[e].push(t)},Se=function(e){var t=Me[e];if(t){var n=Array.prototype.slice.call(arguments);n.shift();for(var i=0;i<t.length;i++)t[i].apply(m,n)}},Ae=function(){return(new Date).getTime()},Ee=function(e){le=e,m.bg.style.opacity=e*h.bgOpacity},Oe=function(e,t,n,i,o){(!Ie||o&&o!==m.currItem)&&(i/=o?o.fitRatio:m.currItem.fitRatio),e[O]=w+t+"px, "+n+"px"+b+" scale("+i+")"},ke=function(e){ne&&(e&&(x>m.currItem.fitRatio?Ie||(cn(m.currItem,!1,!0),Ie=!0):Ie&&(cn(m.currItem),Ie=!1)),Oe(ne,me.x,me.y,x))},Re=function(e){e.container&&Oe(e.container.style,e.initialPosition.x,e.initialPosition.y,e.initialZoomLevel,e)},Ze=function(e,t){t[O]=w+e+"px, 0px"+b},Pe=function(e,t){if(!h.loop&&t){var n=v+(ve.x*he-e)/ve.x,i=Math.round(e-vt.x);(n<0&&0<i||n>=Jt()-1&&i<0)&&(e=vt.x+i*h.mainScrollEndFriction)}vt.x=e,Ze(e,a)},Fe=function(e,t){var n=xt[e]-ye[e];return pe[e]+de[e]+n-n*(t/g)},Le=function(e,t){e.x=t.x,e.y=t.y,t.id&&(e.id=t.id)},_e=function(e){e.x=Math.round(e.x),e.y=Math.round(e.y)},ze=null,Ne=function(){ze&&(f.unbind(document,"mousemove",Ne),f.addClass(p,"pswp--has_mouse"),h.mouseUsed=!0,Se("mouseUsed")),ze=setTimeout(function(){ze=null},100)},Ue=function(){f.bind(document,"keydown",m),N.transform&&f.bind(m.scrollWrap,"click",m),h.mouseUsed||f.bind(document,"mousemove",Ne),f.bind(window,"resize scroll",m),Se("bindEvents")},He=function(){f.unbind(window,"resize",m),f.unbind(window,"scroll",d.scroll),f.unbind(document,"keydown",m),f.unbind(document,"mousemove",Ne),N.transform&&f.unbind(m.scrollWrap,"click",m),X&&f.unbind(window,c,m),Se("unbindEvents")},Ye=function(e,t){var n=rn(m.currItem,fe,e);return t&&(te=n),n},Be=function(e){return e||(e=m.currItem),e.initialZoomLevel},We=function(e){return e||(e=m.currItem),0<e.w?h.maxSpreadZoom:1},Ge=function(e,t,n,i){return i===m.currItem.initialZoomLevel?(n[e]=m.currItem.initialPosition[e],!0):(n[e]=Fe(e,i),n[e]>t.min[e]?(n[e]=t.min[e],!0):n[e]<t.max[e]&&(n[e]=t.max[e],!0))},Xe=function(){if(O){var e=N.perspective&&!R;return w="translate"+(e?"3d(":"("),void(b=N.perspective?", 0px)":")")}O="left",f.addClass(p,"pswp--ie"),Ze=function(e,t){t.left=e+"px"},Re=function(e){var t=1<e.fitRatio?1:e.fitRatio,n=e.container.style,i=t*e.w,o=t*e.h;n.width=i+"px",n.height=o+"px",n.left=e.initialPosition.x+"px",n.top=e.initialPosition.y+"px"},ke=function(){if(ne){var e=ne,t=m.currItem,n=1<t.fitRatio?1:t.fitRatio,i=n*t.w,o=n*t.h;e.width=i+"px",e.height=o+"px",e.left=me.x+"px",e.top=me.y+"px"}}},Ve=function(e){var t="";h.escKey&&27===e.keyCode?t="close":h.arrowKeys&&(37===e.keyCode?t="prev":39===e.keyCode&&(t="next")),t&&(e.ctrlKey||e.altKey||e.shiftKey||e.metaKey||(e.preventDefault?e.preventDefault():e.returnValue=!1,m[t]()))},Ke=function(e){e&&(q||K||ie||W)&&(e.preventDefault(),e.stopPropagation())},qe=function(){m.setScrollOffset(0,f.getScrollY())},$e={},je=0,Je=function(e){$e[e]&&($e[e].raf&&P($e[e].raf),je--,delete $e[e])},Qe=function(e){$e[e]&&Je(e),$e[e]||(je++,$e[e]={})},et=function(){for(var e in $e)$e.hasOwnProperty(e)&&Je(e)},tt=function(e,t,n,i,o,a,r){var l,s=Ae();Qe(e);var u=function(){if($e[e]){if(l=Ae()-s,i<=l)return Je(e),a(n),void(r&&r());a((n-t)*o(l/i)+t),$e[e].raf=Z(u)}};u()},nt={shout:Se,listen:Te,viewportSize:fe,options:h,isMainScrollAnimating:function(){return ie},getZoomLevel:function(){return x},getCurrentIndex:function(){return v},isDragging:function(){return X},isZooming:function(){return Q},setScrollOffset:function(e,t){ye.x=e,z=ye.y=t,Se("updateScrollOffset",ye)},applyZoomPan:function(e,t,n,i){me.x=t,me.y=n,x=e,ke(i)},init:function(){if(!s&&!o){var e;m.framework=f,m.template=p,m.bg=f.getChildByClass(p,"pswp__bg"),F=p.className,s=!0,N=f.detectFeatures(),Z=N.raf,P=N.caf,O=N.transform,_=N.oldIE,m.scrollWrap=f.getChildByClass(p,"pswp__scroll-wrap"),m.container=f.getChildByClass(m.scrollWrap,"pswp__container"),a=m.container.style,m.itemHolders=D=[{el:m.container.children[0],wrap:0,index:-1},{el:m.container.children[1],wrap:0,index:-1},{el:m.container.children[2],wrap:0,index:-1}],D[0].el.style.display=D[2].el.style.display="none",Xe(),d={resize:m.updateSize,scroll:qe,keydown:Ve,click:Ke};var t=N.isOldIOSPhone||N.isOldAndroid||N.isMobileOpera;for(N.animationName&&N.transform&&!t||(h.showAnimationDuration=h.hideAnimationDuration=0),e=0;e<we.length;e++)m["init"+we[e]]();if(i)(m.ui=new i(m,f)).init();Se("firstUpdate"),v=v||h.index||0,(isNaN(v)||v<0||v>=Jt())&&(v=0),m.currItem=jt(v),(N.isOldIOSPhone||N.isOldAndroid)&&(ge=!1),p.setAttribute("aria-hidden","false"),h.modal&&(ge?p.style.position="fixed":(p.style.position="absolute",p.style.top=f.getScrollY()+"px")),void 0===z&&(Se("initialLayout"),z=L=f.getScrollY());var n="pswp--open ";for(h.mainClass&&(n+=h.mainClass+" "),h.showHideOpacity&&(n+="pswp--animate_opacity "),n+=R?"pswp--touch":"pswp--notouch",n+=N.animationName?" pswp--css_animation":"",n+=N.svg?" pswp--svg":"",f.addClass(p,n),m.updateSize(),l=-1,xe=null,e=0;e<r;e++)Ze((e+l)*ve.x,D[e].el.style);_||f.bind(m.scrollWrap,u,m),Te("initialZoomInEnd",function(){m.setContent(D[0],v-1),m.setContent(D[2],v+1),D[0].el.style.display=D[2].el.style.display="block",h.focus&&p.focus(),Ue()}),m.setContent(D[1],v),m.updateCurrItem(),Se("afterInit"),ge||(I=setInterval(function(){je||X||Q||x!==m.currItem.initialZoomLevel||m.updateSize()},1e3)),f.addClass(p,"pswp--visible")}},close:function(){s&&(o=!(s=!1),Se("close"),He(),Qt(m.currItem,null,!0,m.destroy))},destroy:function(){Se("destroy"),Vt&&clearTimeout(Vt),p.setAttribute("aria-hidden","true"),p.className=F,I&&clearInterval(I),f.unbind(m.scrollWrap,u,m),f.unbind(window,"scroll",m),Ct(),et(),Me=null},panTo:function(e,t,n){n||(e>te.min.x?e=te.min.x:e<te.max.x&&(e=te.max.x),t>te.min.y?t=te.min.y:t<te.max.y&&(t=te.max.y)),me.x=e,me.y=t,ke()},handleEvent:function(e){e=e||window.event,d[e.type]&&d[e.type](e)},goTo:function(e){var t=(e=De(e))-v;xe=t,v=e,m.currItem=jt(v),he-=t,Pe(ve.x*he),et(),ie=!1,m.updateCurrItem()},next:function(){m.goTo(v+1)},prev:function(){m.goTo(v-1)},updateCurrZoomItem:function(e){if(e&&Se("beforeChange",0),D[1].el.children.length){var t=D[1].el.children[0];ne=f.hasClass(t,"pswp__zoom-wrap")?t.style:null}else ne=null;te=m.currItem.bounds,g=x=m.currItem.initialZoomLevel,me.x=te.center.x,me.y=te.center.y,e&&Se("afterChange")},invalidateCurrItems:function(){C=!0;for(var e=0;e<r;e++)D[e].item&&(D[e].item.needsUpdate=!0)},updateCurrItem:function(e){if(0!==xe){var t,n=Math.abs(xe);if(!(e&&n<2)){m.currItem=jt(v),Ie=!1,Se("beforeChange",xe),r<=n&&(l+=xe+(0<xe?-r:r),n=r);for(var i=0;i<n;i++)0<xe?(t=D.shift(),D[r-1]=t,Ze((++l+2)*ve.x,t.el.style),m.setContent(t,v-n+i+1+1)):(t=D.pop(),D.unshift(t),Ze(--l*ve.x,t.el.style),m.setContent(t,v+n-i-1-1));if(ne&&1===Math.abs(xe)){var o=jt(M);o.initialZoomLevel!==x&&(rn(o,fe),cn(o),Re(o))}xe=0,m.updateCurrZoomItem(),M=v,Se("afterChange")}}},updateSize:function(e){if(!ge&&h.modal){var t=f.getScrollY();if(z!==t&&(p.style.top=t+"px",z=t),!e&&be.x===window.innerWidth&&be.y===window.innerHeight)return;be.x=window.innerWidth,be.y=window.innerHeight,p.style.height=be.y+"px"}if(fe.x=m.scrollWrap.clientWidth,fe.y=m.scrollWrap.clientHeight,qe(),ve.x=fe.x+Math.round(fe.x*h.spacing),ve.y=fe.y,Pe(ve.x*he),Se("beforeResize"),void 0!==l){for(var n,i,o,a=0;a<r;a++)n=D[a],Ze((a+l)*ve.x,n.el.style),o=v+a-1,h.loop&&2<Jt()&&(o=De(o)),(i=jt(o))&&(C||i.needsUpdate||!i.bounds)?(m.cleanSlide(i),m.setContent(n,o),1===a&&(m.currItem=i,m.updateCurrZoomItem(!0)),i.needsUpdate=!1):-1===n.index&&0<=o&&m.setContent(n,o),i&&i.container&&(rn(i,fe),cn(i),Re(i));C=!1}g=x=m.currItem.initialZoomLevel,(te=m.currItem.bounds)&&(me.x=te.center.x,me.y=te.center.y,ke(!0)),Se("resize")},zoomTo:function(t,e,n,i,o){e&&(g=x,xt.x=Math.abs(e.x)-me.x,xt.y=Math.abs(e.y)-me.y,Le(pe,me));var a=Ye(t,!1),r={};Ge("x",a,r,t),Ge("y",a,r,t);var l=x,s={x:me.x,y:me.y};_e(r);var u=function(e){1===e?(x=t,me.x=r.x,me.y=r.y):(x=(t-l)*e+l,me.x=(r.x-s.x)*e+s.x,me.y=(r.y-s.y)*e+s.y),o&&o(e),ke(1===e)};n?tt("customZoomTo",0,1,n,i||f.easing.sine.inOut,u):u(1)}},it=30,ot=10,at={},rt={},lt={},st={},ut={},ct=[],dt={},pt=[],mt={},ft=0,ht=ce(),yt=0,vt=ce(),xt=ce(),gt=ce(),wt=function(e,t){return e.x===t.x&&e.y===t.y},bt=function(e,t){return Math.abs(e.x-t.x)<n&&Math.abs(e.y-t.y)<n},It=function(e,t){return mt.x=Math.abs(e.x-t.x),mt.y=Math.abs(e.y-t.y),Math.sqrt(mt.x*mt.x+mt.y*mt.y)},Ct=function(){$&&(P($),$=null)},Dt=function(){X&&($=Z(Dt),Ut())},Mt=function(){return!("fit"===h.scaleMode&&x===m.currItem.initialZoomLevel)},Tt=function(e,t){return!(!e||e===document)&&(!(e.getAttribute("class")&&-1<e.getAttribute("class").indexOf("pswp__scroll-wrap"))&&(t(e)?e:Tt(e.parentNode,t)))},St={},At=function(e,t){return St.prevent=!Tt(e.target,h.isClickableElement),Se("preventDragEvent",e,t,St),St.prevent},Et=function(e,t){return t.x=e.pageX,t.y=e.pageY,t.id=e.identifier,t},Ot=function(e,t,n){n.x=.5*(e.x+t.x),n.y=.5*(e.y+t.y)},kt=function(e,t,n){if(50<e-H){var i=2<pt.length?pt.shift():{};i.x=t,i.y=n,pt.push(i),H=e}},Rt=function(){var e=me.y-m.currItem.initialPosition.y;return 1-Math.abs(e/(fe.y/2))},Zt={},Pt={},Ft=[],Lt=function(e){for(;0<Ft.length;)Ft.pop();return k?(ue=0,ct.forEach(function(e){0===ue?Ft[0]=e:1===ue&&(Ft[1]=e),ue++})):-1<e.type.indexOf("touch")?e.touches&&0<e.touches.length&&(Ft[0]=Et(e.touches[0],Zt),1<e.touches.length&&(Ft[1]=Et(e.touches[1],Pt))):(Zt.x=e.pageX,Zt.y=e.pageY,Zt.id="",Ft[0]=Zt),Ft},_t=function(e,t){var n,i,o,a,r=me[e]+t[e],l=0<t[e],s=vt.x+t.x,u=vt.x-dt.x;return n=r>te.min[e]||r<te.max[e]?h.panEndFriction:1,r=me[e]+t[e]*n,!h.allowPanToNext&&x!==m.currItem.initialZoomLevel||(ne?"h"!==oe||"x"!==e||K||(l?(r>te.min[e]&&(n=h.panEndFriction,te.min[e]-r,i=te.min[e]-pe[e]),(i<=0||u<0)&&1<Jt()?(a=s,u<0&&s>dt.x&&(a=dt.x)):te.min.x!==te.max.x&&(o=r)):(r<te.max[e]&&(n=h.panEndFriction,r-te.max[e],i=pe[e]-te.max[e]),(i<=0||0<u)&&1<Jt()?(a=s,0<u&&s<dt.x&&(a=dt.x)):te.min.x!==te.max.x&&(o=r))):a=s,"x"!==e)?void(ie||j||x>m.currItem.fitRatio&&(me[e]+=t[e]*n)):(void 0!==a&&(Pe(a,!0),j=a!==dt.x),te.min.x!==te.max.x&&(void 0!==o?me.x=o:j||(me.x+=t.x*n)),void 0!==a)},zt=function(e){if(!("mousedown"===e.type&&0<e.button)){if($t)return void e.preventDefault();if(!G||"mousedown"!==e.type){if(At(e,!0)&&e.preventDefault(),Se("pointerDown"),k){var t=f.arraySearch(ct,e.pointerId,"id");t<0&&(t=ct.length),ct[t]={x:e.pageX,y:e.pageY,id:e.pointerId}}var n=Lt(e),i=n.length;J=null,et(),X&&1!==i||(X=ae=!0,f.bind(window,c,m),B=se=re=W=j=q=V=K=!1,oe=null,Se("firstTouchStart",n),Le(pe,me),de.x=de.y=0,Le(st,n[0]),Le(ut,st),dt.x=ve.x*he,pt=[{x:st.x,y:st.y}],H=U=Ae(),Ye(x,!0),Ct(),Dt()),!Q&&1<i&&!ie&&!j&&(g=x,Q=V=!(K=!1),de.y=de.x=0,Le(pe,me),Le(at,n[0]),Le(rt,n[1]),Ot(at,rt,gt),xt.x=Math.abs(gt.x)-me.x,xt.y=Math.abs(gt.y)-me.y,ee=It(at,rt))}}},Nt=function(e){if(e.preventDefault(),k){var t=f.arraySearch(ct,e.pointerId,"id");if(-1<t){var n=ct[t];n.x=e.pageX,n.y=e.pageY}}if(X){var i=Lt(e);if(oe||q||Q)J=i;else if(vt.x!==ve.x*he)oe="h";else{var o=Math.abs(i[0].x-st.x)-Math.abs(i[0].y-st.y);Math.abs(o)>=ot&&(oe=0<o?"h":"v",J=i)}}},Ut=function(){if(J){var e=J.length;if(0!==e)if(Le(at,J[0]),lt.x=at.x-st.x,lt.y=at.y-st.y,Q&&1<e){if(st.x=at.x,st.y=at.y,!lt.x&&!lt.y&&wt(J[1],rt))return;Le(rt,J[1]),K||(K=!0,Se("zoomGestureStarted"));var t=It(at,rt),n=Gt(t);n>m.currItem.initialZoomLevel+m.currItem.initialZoomLevel/15&&(se=!0);var i=1,o=Be(),a=We();if(n<o)if(h.pinchToClose&&!se&&g<=m.currItem.initialZoomLevel){var r=1-(o-n)/(o/1.2);Ee(r),Se("onPinchClose",r),re=!0}else 1<(i=(o-n)/o)&&(i=1),n=o-i*(o/3);else a<n&&(1<(i=(n-a)/(6*o))&&(i=1),n=a+i*o);i<0&&(i=0),t,Ot(at,rt,ht),de.x+=ht.x-gt.x,de.y+=ht.y-gt.y,Le(gt,ht),me.x=Fe("x",n),me.y=Fe("y",n),B=x<n,x=n,ke()}else{if(!oe)return;if(ae&&(ae=!1,Math.abs(lt.x)>=ot&&(lt.x-=J[0].x-ut.x),Math.abs(lt.y)>=ot&&(lt.y-=J[0].y-ut.y)),st.x=at.x,st.y=at.y,0===lt.x&&0===lt.y)return;if("v"===oe&&h.closeOnVerticalDrag&&!Mt()){de.y+=lt.y,me.y+=lt.y;var l=Rt();return W=!0,Se("onVerticalDrag",l),Ee(l),void ke()}kt(Ae(),at.x,at.y),q=!0,te=m.currItem.bounds,_t("x",lt)||(_t("y",lt),_e(me),ke())}}},Ht=function(e){if(N.isOldAndroid){if(G&&"mouseup"===e.type)return;-1<e.type.indexOf("touch")&&(clearTimeout(G),G=setTimeout(function(){G=0},600))}var t;if(Se("pointerUp"),At(e,!1)&&e.preventDefault(),k){var n=f.arraySearch(ct,e.pointerId,"id");if(-1<n)if(t=ct.splice(n,1)[0],navigator.pointerEnabled)t.type=e.pointerType||"mouse";else{var i={4:"mouse",2:"touch",3:"pen"};t.type=i[e.pointerType],t.type||(t.type=e.pointerType||"mouse")}}var o,a=Lt(e),r=a.length;if("mouseup"===e.type&&(r=0),2===r)return!(J=null);1===r&&Le(ut,a[0]),0!==r||oe||ie||(t||("mouseup"===e.type?t={x:e.pageX,y:e.pageY,type:"mouse"}:e.changedTouches&&e.changedTouches[0]&&(t={x:e.changedTouches[0].pageX,y:e.changedTouches[0].pageY,type:"touch"})),Se("touchRelease",e,t));var l=-1;if(0===r&&(X=!1,f.unbind(window,c,m),Ct(),Q?l=0:-1!==yt&&(l=Ae()-yt)),yt=1===r?Ae():-1,o=-1!==l&&l<150?"zoom":"swipe",Q&&r<2&&(Q=!1,1===r&&(o="zoomPointerUp"),Se("zoomGestureEnded")),J=null,q||K||ie||W)if(et(),Y||(Y=Yt()),Y.calculateSwipeSpeed("x"),W){if(Rt()<h.verticalDragRange)m.close();else{var s=me.y,u=le;tt("verticalDrag",0,1,300,f.easing.cubic.out,function(e){me.y=(m.currItem.initialPosition.y-s)*e+s,Ee((1-u)*e+u),ke()}),Se("onVerticalDrag",1)}}else{if((j||ie)&&0===r){if(Wt(o,Y))return;o="zoomPointerUp"}if(!ie)return"swipe"!==o?void Xt():void(!j&&x>m.currItem.fitRatio&&Bt(Y))}},Yt=function(){var t,n,i={lastFlickOffset:{},lastFlickDist:{},lastFlickSpeed:{},slowDownRatio:{},slowDownRatioReverse:{},speedDecelerationRatio:{},speedDecelerationRatioAbs:{},distanceOffset:{},backAnimDestination:{},backAnimStarted:{},calculateSwipeSpeed:function(e){1<pt.length?(t=Ae()-H+50,n=pt[pt.length-2][e]):(t=Ae()-U,n=ut[e]),i.lastFlickOffset[e]=st[e]-n,i.lastFlickDist[e]=Math.abs(i.lastFlickOffset[e]),20<i.lastFlickDist[e]?i.lastFlickSpeed[e]=i.lastFlickOffset[e]/t:i.lastFlickSpeed[e]=0,Math.abs(i.lastFlickSpeed[e])<.1&&(i.lastFlickSpeed[e]=0),i.slowDownRatio[e]=.95,i.slowDownRatioReverse[e]=1-i.slowDownRatio[e],i.speedDecelerationRatio[e]=1},calculateOverBoundsAnimOffset:function(t,e){i.backAnimStarted[t]||(me[t]>te.min[t]?i.backAnimDestination[t]=te.min[t]:me[t]<te.max[t]&&(i.backAnimDestination[t]=te.max[t]),void 0!==i.backAnimDestination[t]&&(i.slowDownRatio[t]=.7,i.slowDownRatioReverse[t]=1-i.slowDownRatio[t],i.speedDecelerationRatioAbs[t]<.05&&(i.lastFlickSpeed[t]=0,i.backAnimStarted[t]=!0,tt("bounceZoomPan"+t,me[t],i.backAnimDestination[t],e||300,f.easing.sine.out,function(e){me[t]=e,ke()}))))},calculateAnimOffset:function(e){i.backAnimStarted[e]||(i.speedDecelerationRatio[e]=i.speedDecelerationRatio[e]*(i.slowDownRatio[e]+i.slowDownRatioReverse[e]-i.slowDownRatioReverse[e]*i.timeDiff/10),i.speedDecelerationRatioAbs[e]=Math.abs(i.lastFlickSpeed[e]*i.speedDecelerationRatio[e]),i.distanceOffset[e]=i.lastFlickSpeed[e]*i.speedDecelerationRatio[e]*i.timeDiff,me[e]+=i.distanceOffset[e])},panAnimLoop:function(){return $e.zoomPan&&($e.zoomPan.raf=Z(i.panAnimLoop),i.now=Ae(),i.timeDiff=i.now-i.lastNow,i.lastNow=i.now,i.calculateAnimOffset("x"),i.calculateAnimOffset("y"),ke(),i.calculateOverBoundsAnimOffset("x"),i.calculateOverBoundsAnimOffset("y"),i.speedDecelerationRatioAbs.x<.05&&i.speedDecelerationRatioAbs.y<.05)?(me.x=Math.round(me.x),me.y=Math.round(me.y),ke(),void Je("zoomPan")):void 0}};return i},Bt=function(e){return e.calculateSwipeSpeed("y"),te=m.currItem.bounds,e.backAnimDestination={},e.backAnimStarted={},Math.abs(e.lastFlickSpeed.x)<=.05&&Math.abs(e.lastFlickSpeed.y)<=.05?(e.speedDecelerationRatioAbs.x=e.speedDecelerationRatioAbs.y=0,e.calculateOverBoundsAnimOffset("x"),e.calculateOverBoundsAnimOffset("y"),!0):(Qe("zoomPan"),e.lastNow=Ae(),void e.panAnimLoop())},Wt=function(e,t){var n,i,o;if(ie||(ft=v),"swipe"===e){var a=st.x-ut.x,r=t.lastFlickDist.x<10;it<a&&(r||20<t.lastFlickOffset.x)?i=-1:a<-it&&(r||t.lastFlickOffset.x<-20)&&(i=1)}i&&((v+=i)<0?(v=h.loop?Jt()-1:0,o=!0):v>=Jt()&&(v=h.loop?0:Jt()-1,o=!0),(!o||h.loop)&&(xe+=i,he-=i,n=!0));var l,s=ve.x*he,u=Math.abs(s-vt.x);return n||s>vt.x==0<t.lastFlickSpeed.x?(l=0<Math.abs(t.lastFlickSpeed.x)?u/Math.abs(t.lastFlickSpeed.x):333,l=Math.min(l,400),l=Math.max(l,250)):l=333,ft===v&&(n=!1),ie=!0,Se("mainScrollAnimStart"),tt("mainScroll",vt.x,s,l,f.easing.cubic.out,Pe,function(){et(),ie=!1,ft=-1,(n||ft!==v)&&m.updateCurrItem(),Se("mainScrollAnimComplete")}),n&&m.updateCurrItem(!0),n},Gt=function(e){return 1/ee*e*g},Xt=function(){var e=x,t=Be(),n=We();x<t?e=t:n<x&&(e=n);var i,o=1,a=le;return re&&!B&&!se&&x<t?m.close():(re&&(i=function(e){Ee((o-a)*e+a)}),m.zoomTo(e,0,200,f.easing.cubic.out,i)),!0};Ce("Gestures",{publicMethods:{initGestures:function(){var e=function(e,t,n,i,o){T=e+t,S=e+n,A=e+i,E=o?e+o:""};(k=N.pointerEvent)&&N.touch&&(N.touch=!1),k?navigator.pointerEnabled?e("pointer","down","move","up","cancel"):e("MSPointer","Down","Move","Up","Cancel"):N.touch?(e("touch","start","move","end","cancel"),R=!0):e("mouse","down","move","up"),c=S+" "+A+" "+E,u=T,k&&!R&&(R=1<navigator.maxTouchPoints||1<navigator.msMaxTouchPoints),m.likelyTouchDevice=R,d[T]=zt,d[S]=Nt,d[A]=Ht,E&&(d[E]=d[A]),N.touch&&(u+=" mousedown",c+=" mousemove mouseup",d.mousedown=d[T],d.mousemove=d[S],d.mouseup=d[A]),R||(h.allowPanToNext=!1)}}});var Vt,Kt,qt,$t,jt,Jt,Qt=function(l,e,s,t){var u;Vt&&clearTimeout(Vt),qt=$t=!0,l.initialLayout?(u=l.initialLayout,l.initialLayout=null):u=h.getThumbBoundsFn&&h.getThumbBoundsFn(v);var c=s?h.hideAnimationDuration:h.showAnimationDuration,d=function(){Je("initialZoom"),s?(m.template.removeAttribute("style"),m.bg.removeAttribute("style")):(Ee(1),e&&(e.style.display="block"),f.addClass(p,"pswp--animated-in"),Se("initialZoom"+(s?"OutEnd":"InEnd"))),t&&t(),$t=!1};if(!c||!u||void 0===u.x)return Se("initialZoom"+(s?"Out":"In")),x=l.initialZoomLevel,Le(me,l.initialPosition),ke(),p.style.opacity=s?0:1,Ee(1),void(c?setTimeout(function(){d()},c):d());(function(){var a=y,r=!m.currItem.src||m.currItem.loadError||h.showHideOpacity;l.miniImg&&(l.miniImg.style.webkitBackfaceVisibility="hidden"),s||(x=u.w/l.w,me.x=u.x,me.y=u.y-L,m[r?"template":"bg"].style.opacity=.001,ke()),Qe("initialZoom"),s&&!a&&f.removeClass(p,"pswp--animated-in"),r&&(s?f[(a?"remove":"add")+"Class"](p,"pswp--animate_opacity"):setTimeout(function(){f.addClass(p,"pswp--animate_opacity")},30)),Vt=setTimeout(function(){if(Se("initialZoom"+(s?"Out":"In")),s){var t=u.w/l.w,n={x:me.x,y:me.y},i=x,o=le,e=function(e){1===e?(x=t,me.x=u.x,me.y=u.y-z):(x=(t-i)*e+i,me.x=(u.x-n.x)*e+n.x,me.y=(u.y-z-n.y)*e+n.y),ke(),r?p.style.opacity=1-e:Ee(o-e*o)};a?tt("initialZoom",0,1,c,f.easing.cubic.out,e,d):(e(1),Vt=setTimeout(d,c+20))}else x=l.initialZoomLevel,Le(me,l.initialPosition),ke(),Ee(1),r?p.style.opacity=1:Ee(1),Vt=setTimeout(d,c+20)},s?25:90)})()},en={},tn=[],nn={index:0,errorMsg:'<div class="pswp__error-msg"><a href="%url%" target="_blank">The image</a> could not be loaded.</div>',forceProgressiveLoading:!1,preload:[1,1],getNumItemsFn:function(){return Kt.length}},on=function(){return{center:{x:0,y:0},max:{x:0,y:0},min:{x:0,y:0}}},an=function(e,t,n){var i=e.bounds;i.center.x=Math.round((en.x-t)/2),i.center.y=Math.round((en.y-n)/2)+e.vGap.top,i.max.x=t>en.x?Math.round(en.x-t):i.center.x,i.max.y=n>en.y?Math.round(en.y-n)+e.vGap.top:i.center.y,i.min.x=t>en.x?0:i.center.x,i.min.y=n>en.y?e.vGap.top:i.center.y},rn=function(e,t,n){if(e.src&&!e.loadError){var i=!n;if(i&&(e.vGap||(e.vGap={top:0,bottom:0}),Se("parseVerticalMargin",e)),en.x=t.x,en.y=t.y-e.vGap.top-e.vGap.bottom,i){var o=en.x/e.w,a=en.y/e.h;e.fitRatio=o<a?o:a;var r=h.scaleMode;"orig"===r?n=1:"fit"===r&&(n=e.fitRatio),1<n&&(n=1),e.initialZoomLevel=n,e.bounds||(e.bounds=on())}if(!n)return;return an(e,e.w*n,e.h*n),i&&n===e.initialZoomLevel&&(e.initialPosition=e.bounds.center),e.bounds}return e.w=e.h=0,e.initialZoomLevel=e.fitRatio=1,e.bounds=on(),e.initialPosition=e.bounds.center,e.bounds},ln=function(e,t,n,i,o,a){t.loadError||i&&(t.imageAppended=!0,cn(t,i,t===m.currItem&&Ie),n.appendChild(i),a&&setTimeout(function(){t&&t.loaded&&t.placeholder&&(t.placeholder.style.display="none",t.placeholder=null)},500))},sn=function(e){e.loading=!0,e.loaded=!1;var t=e.img=f.createEl("pswp__img","img"),n=function(){e.loading=!1,e.loaded=!0,e.loadComplete?e.loadComplete(e):e.img=null,t.onload=t.onerror=null,t=null};return t.onload=n,t.onerror=function(){e.loadError=!0,n()},t.src=e.src,t},un=function(e,t){return e.src&&e.loadError&&e.container?(t&&(e.container.innerHTML=""),e.container.innerHTML=h.errorMsg.replace("%url%",e.src),!0):void 0},cn=function(e,t,n){if(e.src){t||(t=e.container.lastChild);var i=n?e.w:Math.round(e.w*e.fitRatio),o=n?e.h:Math.round(e.h*e.fitRatio);e.placeholder&&!e.loaded&&(e.placeholder.style.width=i+"px",e.placeholder.style.height=o+"px"),t.style.width=i+"px",t.style.height=o+"px"}},dn=function(){if(tn.length){for(var e,t=0;t<tn.length;t++)(e=tn[t]).holder.index===e.index&&ln(e.index,e.item,e.baseDiv,e.img,!1,e.clearPlaceholder);tn=[]}};Ce("Controller",{publicMethods:{lazyLoadItem:function(e){e=De(e);var t=jt(e);t&&(!t.loaded&&!t.loading||C)&&(Se("gettingData",e,t),t.src&&sn(t))},initController:function(){f.extend(h,nn,!0),m.items=Kt=e,jt=m.getItemAt,Jt=h.getNumItemsFn,h.loop,Jt()<3&&(h.loop=!1),Te("beforeChange",function(e){var t,n=h.preload,i=null===e||0<=e,o=Math.min(n[0],Jt()),a=Math.min(n[1],Jt());for(t=1;t<=(i?a:o);t++)m.lazyLoadItem(v+t);for(t=1;t<=(i?o:a);t++)m.lazyLoadItem(v-t)}),Te("initialLayout",function(){m.currItem.initialLayout=h.getThumbBoundsFn&&h.getThumbBoundsFn(v)}),Te("mainScrollAnimComplete",dn),Te("initialZoomInEnd",dn),Te("destroy",function(){for(var e,t=0;t<Kt.length;t++)(e=Kt[t]).container&&(e.container=null),e.placeholder&&(e.placeholder=null),e.img&&(e.img=null),e.preloader&&(e.preloader=null),e.loadError&&(e.loaded=e.loadError=!1);tn=null})},getItemAt:function(e){return 0<=e&&void 0!==Kt[e]&&Kt[e]},allowProgressiveImg:function(){return h.forceProgressiveLoading||!R||h.mouseUsed||1200<screen.width},setContent:function(t,n){h.loop&&(n=De(n));var e=m.getItemAt(t.index);e&&(e.container=null);var i,o=m.getItemAt(n);if(o){Se("gettingData",n,o),t.index=n;var a=(t.item=o).container=f.createEl("pswp__zoom-wrap");if(!o.src&&o.html&&(o.html.tagName?a.appendChild(o.html):a.innerHTML=o.html),un(o),rn(o,fe),!o.src||o.loadError||o.loaded)o.src&&!o.loadError&&((i=f.createEl("pswp__img","img")).style.opacity=1,i.src=o.src,cn(o,i),ln(n,o,a,i,!0));else{if(o.loadComplete=function(e){if(s){if(t&&t.index===n){if(un(e,!0))return e.loadComplete=e.img=null,rn(e,fe),Re(e),void(t.index===v&&m.updateCurrZoomItem());e.imageAppended?!$t&&e.placeholder&&(e.placeholder.style.display="none",e.placeholder=null):N.transform&&(ie||$t)?tn.push({item:e,baseDiv:a,img:e.img,index:n,holder:t,clearPlaceholder:!0}):ln(n,e,a,e.img,ie||$t,!0)}e.loadComplete=null,e.img=null,Se("imageLoadComplete",n,e)}},f.features.transform){var r="pswp__img pswp__img--placeholder";r+=o.msrc?"":" pswp__img--placeholder--blank";var l=f.createEl(r,o.msrc?"img":"");o.msrc&&(l.src=o.msrc),cn(o,l),a.appendChild(l),o.placeholder=l}o.loading||sn(o),m.allowProgressiveImg()&&(!qt&&N.transform?tn.push({item:o,baseDiv:a,img:o.img,index:n,holder:t}):ln(n,o,a,o.img,!0,!0))}qt||n!==v?Re(o):(ne=a.style,Qt(o,i||o.img)),t.el.innerHTML="",t.el.appendChild(a)}else t.el.innerHTML=""},cleanSlide:function(e){e.img&&(e.img.onload=e.img.onerror=null),e.loaded=e.loading=e.img=e.imageAppended=!1}}});var pn,mn,fn={},hn=function(e,t,n){var i=document.createEvent("CustomEvent"),o={origEvent:e,target:e.target,releasePoint:t,pointerType:n||"touch"};i.initCustomEvent("pswpTap",!0,!0,o),e.target.dispatchEvent(i)};Ce("Tap",{publicMethods:{initTap:function(){Te("firstTouchStart",m.onTapStart),Te("touchRelease",m.onTapRelease),Te("destroy",function(){fn={},pn=null})},onTapStart:function(e){1<e.length&&(clearTimeout(pn),pn=null)},onTapRelease:function(e,t){if(t&&!q&&!V&&!je){var n=t;if(pn&&(clearTimeout(pn),pn=null,bt(n,fn)))return void Se("doubleTap",n);if("mouse"===t.type)return void hn(e,t,"mouse");if("BUTTON"===e.target.tagName.toUpperCase()||f.hasClass(e.target,"pswp__single-tap"))return void hn(e,t);Le(fn,n),pn=setTimeout(function(){hn(e,t),pn=null},300)}}}}),Ce("DesktopZoom",{publicMethods:{initDesktopZoom:function(){_||(R?Te("mouseUsed",function(){m.setupDesktopZoom()}):m.setupDesktopZoom(!0))},setupDesktopZoom:function(e){mn={};var t="wheel mousewheel DOMMouseScroll";Te("bindEvents",function(){f.bind(p,t,m.handleMouseWheel)}),Te("unbindEvents",function(){mn&&f.unbind(p,t,m.handleMouseWheel)}),m.mouseZoomedIn=!1;var n,i=function(){m.mouseZoomedIn&&(f.removeClass(p,"pswp--zoomed-in"),m.mouseZoomedIn=!1),x<1?f.addClass(p,"pswp--zoom-allowed"):f.removeClass(p,"pswp--zoom-allowed"),o()},o=function(){n&&(f.removeClass(p,"pswp--dragging"),n=!1)};Te("resize",i),Te("afterChange",i),Te("pointerDown",function(){m.mouseZoomedIn&&(n=!0,f.addClass(p,"pswp--dragging"))}),Te("pointerUp",o),e||i()},handleMouseWheel:function(e){if(x<=m.currItem.fitRatio)return h.modal&&(!h.closeOnScroll||je||X?e.preventDefault():O&&2<Math.abs(e.deltaY)&&(y=!0,m.close())),!0;if(e.stopPropagation(),mn.x=0,"deltaX"in e)1===e.deltaMode?(mn.x=18*e.deltaX,mn.y=18*e.deltaY):(mn.x=e.deltaX,mn.y=e.deltaY);else if("wheelDelta"in e)e.wheelDeltaX&&(mn.x=-.16*e.wheelDeltaX),e.wheelDeltaY?mn.y=-.16*e.wheelDeltaY:mn.y=-.16*e.wheelDelta;else{if(!("detail"in e))return;mn.y=e.detail}Ye(x,!0);var t=me.x-mn.x,n=me.y-mn.y;(h.modal||t<=te.min.x&&t>=te.max.x&&n<=te.min.y&&n>=te.max.y)&&e.preventDefault(),m.panTo(t,n)},toggleDesktopZoom:function(e){e=e||{x:fe.x/2+ye.x,y:fe.y/2+ye.y};var t=h.getDoubleTapZoom(!0,m.currItem),n=x===t;m.mouseZoomedIn=!n,m.zoomTo(n?m.currItem.initialZoomLevel:t,e,333),f[(n?"remove":"add")+"Class"](p,"pswp--zoomed-in")}}});var yn,vn,xn,gn,wn,bn,In,Cn,Dn,Mn,Tn,Sn,An={history:!0,galleryUID:1},En=function(){return Tn.hash.substring(1)},On=function(){yn&&clearTimeout(yn),xn&&clearTimeout(xn)},kn=function(){var e=En(),t={};if(e.length<5)return t;var n,i=e.split("&");for(n=0;n<i.length;n++)if(i[n]){var o=i[n].split("=");o.length<2||(t[o[0]]=o[1])}if(h.galleryPIDs){var a=t.pid;for(n=t.pid=0;n<Kt.length;n++)if(Kt[n].pid===a){t.pid=n;break}}else t.pid=parseInt(t.pid,10)-1;return t.pid<0&&(t.pid=0),t},Rn=function(){if(xn&&clearTimeout(xn),je||X)xn=setTimeout(Rn,500);else{gn?clearTimeout(vn):gn=!0;var e=v+1,t=jt(v);t.hasOwnProperty("pid")&&(e=t.pid);var n=In+"&gid="+h.galleryUID+"&pid="+e;Cn||-1===Tn.hash.indexOf(n)&&(Mn=!0);var i=Tn.href.split("#")[0]+"#"+n;Sn?"#"+n!==window.location.hash&&history[Cn?"replaceState":"pushState"]("",document.title,i):Cn?Tn.replace(i):Tn.hash=n,Cn=!0,vn=setTimeout(function(){gn=!1},60)}};Ce("History",{publicMethods:{initHistory:function(){if(f.extend(h,An,!0),h.history){Tn=window.location,Cn=Dn=Mn=!1,In=En(),Sn="pushState"in history,-1<In.indexOf("gid=")&&(In=(In=In.split("&gid=")[0]).split("?gid=")[0]),Te("afterChange",m.updateURL),Te("unbindEvents",function(){f.unbind(window,"hashchange",m.onHashChange)});var e=function(){bn=!0,Dn||(Mn?history.back():In?Tn.hash=In:Sn?history.pushState("",document.title,Tn.pathname+Tn.search):Tn.hash=""),On()};Te("unbindEvents",function(){y&&e()}),Te("destroy",function(){bn||e()}),Te("firstUpdate",function(){v=kn().pid});var t=In.indexOf("pid=");-1<t&&("&"===(In=In.substring(0,t)).slice(-1)&&(In=In.slice(0,-1))),setTimeout(function(){s&&f.bind(window,"hashchange",m.onHashChange)},40)}},onHashChange:function(){return En()===In?(Dn=!0,void m.close()):void(gn||(wn=!0,m.goTo(kn().pid),wn=!1))},updateURL:function(){On(),wn||(Cn?yn=setTimeout(Rn,800):Rn())}}}),f.extend(m,nt)}});