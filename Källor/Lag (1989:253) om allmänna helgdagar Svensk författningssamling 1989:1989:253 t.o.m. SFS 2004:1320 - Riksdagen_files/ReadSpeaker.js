window.ReadSpeakerDefer={deferred:null,clickhandler:function(b){var b=b||window.event,d=b.target||b.srcElement;3===d.nodeType&&(d=d.parentNode);if(d!==document&&window.ReadSpeakerDefer.isRSLink(d)){window.ReadSpeakerDefer.deferred=d;if((d=window.ReadSpeakerDefer.findRSParent(d))&&d.className&&!/rsdeferred/i.test(d.className))d.className+=" rsdeferred";if(window.ReadSpeakerJIT){d=window.rspkr;if(/ios|ipad|iphone|ipod|android/i.test(window.navigator.userAgent)&&(d.audio=new Audio,d=d.audio.play(),void 0!==
d))d.then(function(){})["catch"](function(b){rspkr.log(b)});window.rspkr.loadCore()}b.cancelBubble=!0;b.preventDefault&&b.preventDefault();b.stopPropagation&&b.stopPropagation();return!1}},init:function(){this.RSDeferClick(document)},isRSLink:function(b){return this.isRSParent(b.parentNode)||b.href&&-1<b.href.indexOf("readspeaker.com/cgi-bin/rsent")},isRSParent:function(b){return!b?!1:b.getAttribute("class")&&-1<b.getAttribute("class").indexOf("rsbtn")||b.id&&"string"===typeof b.id&&-1<b.id.indexOf("readspeaker_button")},
findRSParent:function(b){for(;b.parentNode&&b.parentNode!==document&&!(b=b.parentNode,"a"==b.tagName.toLowerCase()&&this.isRSLink(b)););return b==document?void 0:b.parentNode},RSDeferClick:function(b){b.addEventListener?b.addEventListener("click",this.clickhandler,!1):b.attachEvent?b.attachEvent("onclick",this.clickhandler):b.onclick=this.clickhandler}};window.ReadSpeakerDefer.init();
(function(b){var d,e={major:"2",minor:"5",update:"10",revision:"4648",prod:"embhl"},i=[],G=0,t=0,H=!1,u=[],I=0,k=[],J=!1,v=!1,Q=0,z=!1,l=null,h="default",K=!1,w=[],L=!1,A="",B={},C=!1,D="",x=null,p=!1,E=function(a){if("string"==typeof a){for(var a="ReadSpeaker."+a.replace("_","."),a=a.split("."),f=b,c=0,d=a.length;c<d;c++)if(f)if(f[a[c]]){if(c==d-1)return f[a[c]];f=f[a[c]]}else break;else break;return!1}},N=function(a,f){u.push(a);I++;for(var f=f||[a],c=0,d=f.length;c<d;c++)try{var e=E(f[c]);"function"==
typeof e.init&&e.init.apply(e,[])}catch(R){r("[rspkr] Could not load: "+f[c]+" | "+R,3)}I===t&&!0===H&&(r("[rspkr] All prod mods loaded. _domready = "+z,4),p&&b.ReadSpeaker.init(),c=function(){rspkr.Common.createShortcuts();rspkr.devt("onModsLoaded",b);rspkr.devt("onAfterModsLoaded",b);B.onAdapterReady?rspkr.devt("onReady",b):rspkr.evt("onAdapterReady",function(){rspkr.devt("onReady",b)});b.ReadSpeaker.ui.viewport={width:$rs.width(b),height:$rs.height(b)}},b.ReadSpeaker.Common.addEvent("onReady",
function(){M.executeCode();M.flush();if(x)a:{rspkr.log("[rspkr.startAutoplay] Id: "+x);var a=$rs.get(x);if($rs.isArray(a)&&0<a.length)a=a[0];else if($rs.isArray(a)&&0==a.length)break a;a=$rs.findIn(a,"a");if($rs.isArray(a)&&0<a.length)a=a[0];else if($rs.isArray(a)&&0==a.length)break a;b.readpage(a)}}),z?c():b.ReadSpeaker.Common.addEvent("onDOMReady",c))},O=function(){if(!v){p&&!C&&(document.getElementById("rsmod_Styles").href=D+"ReadSpeaker.Styles.css");for(var a in i)i.hasOwnProperty(a)&&(mod=a,
n.load({id:"req_"+mod,type:"text/javascript",src:"ReadSpeaker."+mod+".js",cb:function(){var a=(b.event&&b.event.srcElement&&b.event.srcElement.id?b.event.srcElement.id:this.id).replace("req_",""),a=a.replace("_","."),a=!1===i[a]?[a]:i[a],c;G++;for(var d=0,e=a.length;d<e;d++)u.push(a[d]),c=E(a[d]),"function"==typeof c.init&&c.init.apply(c,[]);G===Object.size(i)&&(b.ReadSpeaker.Common.addEvent("onModsLoaded",b.ReadSpeaker.pub.Config.setup),L=!0,a={id:"",type:"text/javascript",src:"",cb:function(){var a=
(b.event&&b.event.srcElement&&b.event.srcElement.id?b.event.srcElement.id:this.id).replace("rsmod_","");u.push(a);a=E(a);"function"==typeof a.init&&a.init.apply(a,[]);if(L&&b.ReadSpeaker.modmap&&!J){for(var a=b.ReadSpeaker.modmap,c=[],d=0,f="|",e=[],m=0,h=w.length;m<h;m++)if(c=a.products&&"function"==typeof a.products[w[m]]?a.products[w[m]]():null){for(var g=d=0,i=c.length;g<i;g++)-1===f.indexOf("|"+c[g][0]+c[g][1]+"|")&&(c[g][0].length&&(e[c[g][0]]=c[g][2],n.load({id:"rsmod_"+c[g][0],type:c[g][1],
src:"ReadSpeaker."+c[g][0]+("text/css"===c[g][1]?".css":".js"),cb:function(){var a=(b.event&&b.event.srcElement&&b.event.srcElement.id?b.event.srcElement.id:this.id).replace("rsmod_","");N(a,e[a])},async:!0})),"undefined"!==typeof c[g][1]&&/text\/javascript/.test(c[g][1])&&d++,f+=c[g][0]+c[g][1]+"|");t+=d}H=!0}}},c=b.ReadSpeaker.lib.Facade.currentLib().toLowerCase(),"rslib"==c?(a.id="rsmod_lib.RSLib",a.src="ReadSpeaker.lib.RSLib.js"):(a.id="rsmod_lib.Facade.adapter."+c,a.src="ReadSpeaker.lib.Facade.adapter."+
c+".js"),n.load(a))},async:!0}))}},P=function(){rspkr.log("[rspkr.updateBaseClass] Attempting to update..");for(var a=document.getElementsByTagName("div"),d=/\brsbtn\b/,c=0,e=a.length;c<e;c++)d.test(a[c].className)&&(a[c].className=a[c].className.replace(d,b.rsConf.ui.rsbtnClass));rspkr.log("[rspkr.updateBaseClass] Update successful!");N("skinfile")};d={extract:function(a){if("string"==typeof a){for(var b={},a=a.split(/[;&]/),c,d=0;d<a.length;d++)(c=a[d].split("="))&&2==c.length&&(b[unescape(c[0])]=
unescape(c[1]).replace(/\+/g," "));return b}return{}}};var M={isok:!0,executeCode:function(){this.isok=!0;if(!k.length)return!0;for(idx in k)if(k.hasOwnProperty(idx)&&"function"==typeof k[idx])try{k[idx].apply(b,[])}catch(a){this.isok=!1,rspkr.log("[rspkr.q] "+a,3)}},flush:function(){k=[]}},n={load:function(a){if("text/javascript"==a.type||"text/css"==a.type){a.src=l.path+a.src;var d=document.getElementsByTagName("head")[0],c=document.createElement("text/javascript"==a.type?"script":"link"),m=[e.major,
e.minor,e.update,e.revision].join(".");"function"==typeof a.cb&&(void 0!==c.onreadystatechange?c.onreadystatechange=function(){("complete"==this.readyState||"loaded"==this.readyState)&&a.cb.apply(b)}:c.onload=a.cb);c.id=a.id.replace(".","_");c.type=a.type;"text/javascript"==a.type?(c.src=a.src+"?v="+m,a.async&&(c.async=!0)):(c.rel="stylesheet",c.href=a.src+"?v="+m);d.appendChild(c)}}},S=0,F={1:[],2:[],3:[],4:[],5:[],6:[]},q={1:{lbl:"Info",method:"log"},2:{lbl:"Warn",method:"warn"},3:{lbl:"Err",method:"error"},
4:{lbl:"AS",method:"log"},5:{lbl:"SW",method:"log"}},r=function(a,b){var c=A,b=b||1;F[b].push(a);if(c&&"string"===typeof c&&-1<c.indexOf(","+b+",")){c=q[b].lbl;try{console[q[b].method]&&console[q[b].method](S++ +". "+c+": "+a)}catch(d){}}},T=function(a){A=/^,[0-9,]*,$/.test(a)?a:","+a+","};Object.size=function(a){var b=0,c;for(c in a)a.hasOwnProperty(c)&&b++;return b};if(b.rsConf&&b.rsConf.params&&"string"===typeof b.rsConf.params&&b.rsConf.params)var s=b.rsConf.params,j=s.split("?");else j=document.getElementsByTagName("script"),
s=j[j.length-1].getAttribute("src"),j=s.split("?");if(/\?/i.test(s)&&1<j.length&&j[1].length){var D=s.replace(/[^\/]*$/,""),y;if(/rsdebug=rsdebug/i.test(document.location.href))try{y=","+document.location.href.split("?").pop().match(/rsdebug=rsdebug([^$|&]*)/i).pop()+","}catch(U){y=",3,"}else y="";A=y;l=d=d.extract(j[1]);h=d.skin||"default";w=d.pids.split(",");l.path=j[0].replace("ReadSpeaker.js","");i.Core=["Common","lib.Facade","modmap"];i["pub.Config"]=!1;x=d.autoplay;p=b.ReadSpeakerJIT="1"===
d.jit;l.forceBasicMode&&"1"===l.forceBasicMode||document.attachEvent&&/MSIE/i.test(navigator.userAgent)&&(document.compatMode&&"backcompat"===document.compatMode.toLowerCase()||/MSIE 6\./i.test(navigator.userAgent))?(C=!0,n.load({id:"rsmod_Styles",type:"text/css",src:(l.skinPathBasic||"ReadSpeaker.Styles-Basic")+".css",cb:null})):(n.load({id:"rsmod_Styles",type:"text/css",src:"ReadSpeaker.Styles"+(p?"-Button":"")+".css",cb:null}),"default"!==h&&!p&&(t++,n.load({id:"rsskin_"+h+"_style",type:"text/css",
src:"skins/"+h+"/"+h+".css",cb:null}),n.load({id:"rsskin_"+h+"_js",type:"text/javascript",src:"skins/"+h+"/"+h+".js",cb:function(){"default"!==h&&v?P():K=!0},async:!0})));p||O()}else J=!0;d=new function(){this.meta={obj:e,version:[e.major,e.minor,e.update].join(".")+"_rev"+e.revision+"-"+e.prod};this.q=function(a){"function"==typeof a&&(B.onReady?a.apply(b,[]):k.push(a))};this.init=function(){v||(v=!0,document.addEventListener&&document.removeEventListener("DOMContentLoaded",b.ReadSpeaker.init,!1),
z=!0,b.ReadSpeaker.Common&&b.ReadSpeaker.Common.dispatchEvent("onDOMReady"),r("[rspkr] DOM Ready!"),K&&(r("[rspkr] Updating base class.",1),P()))};this.getLoadedMods=function(){return u};this.rsidCount=1E3;this.logcount=0;this.log=function(a,b){r(a,b||1)};this.showLog=function(a){a=a||"1";rspkr.log("[rspkr.printErrorLog]",1);for(var a=(a||"3").split(","),b=0;b<a.length;b++)if(F.hasOwnProperty(a[b])){var c=F[a[b]],d=a[b],d=parseInt(d)||3,e=q[d].lbl;console.groupCollapsed&&console.groupCollapsed(e);
for(e=0;e<c.length;e++)try{console[q[d].method]&&console[q[d].method](c[e])}catch(h){}console.groupCollapsed&&console.groupEnd()}};this.getID=function(){return"readspeaker"+Q++};this.getVersion=function(){return this.meta.version};this.skin=h;this.displog=B;this.basicMode=C;this.params=l;this.setDebugLevel=T;this.baseUrl=D;this.loadCore=O;this.audio=null};b.ReadSpeaker=b.rs=b.rspkr=d})(window);ReadSpeaker.enums={mime:{tjs:"text/javascript",tcss:"text/css",thtml:"text/html"}};
(function(b){if(!window.ReadSpeakerJIT){var d=navigator.userAgent,e=eval("/*@cc_on! @*/false"),i=setTimeout;/mozilla/i.test(d)&&!/(compati)/.test(d)||/opera/i.test(d)||/webkit/i.test(d)?document.addEventListener("DOMContentLoaded",b,!1):e?function(){var d=document.createElement("doc:rdy");try{d.doScroll("left"),b()}catch(e){i(arguments.callee,0)}}():window.onload=b}})(ReadSpeaker.init);
