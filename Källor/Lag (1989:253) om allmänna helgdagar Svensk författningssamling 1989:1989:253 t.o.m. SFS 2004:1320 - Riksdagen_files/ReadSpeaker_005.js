ReadSpeaker.lib||(ReadSpeaker.lib={});
(function(A,I){function r(y,a,e,c){for(var d=0,ba=a.length;d<ba;d++)m(y,a[d],e,c)}function a(y,a,e){var c=a.dir,aa=U++;y||(y=function(y){return y===e});return a.first?function(a,b){for(;a=a[c];)if(1===a.nodeType)return y(a,b)&&a}:function(a,b){for(var e,f=aa+"."+g,h=f+"."+d;a=a[c];)if(1===a.nodeType){if((e=a[w])===h)return a.sizset;if("string"===typeof e&&0===e.indexOf(f)){if(a.sizset)return a}else{a[w]=h;if(y(a,b))return a.sizset=!0,a;a.sizset=!1}}}}function c(a,b){return a?function(e,c){var d=b(e,
c);return d&&a(!0===d?e:d,c)}:b}var d,g,f,h,q,p=A.document,i=p.documentElement,F=!1,V=!0,U=0,C=[].slice,G=[].push,w=("sizcache"+Math.random()).replace(".",""),z="\\[[\\x20\\t\\r\\n\\f]*((?:\\\\.|[-\\w]|[^\\x00-\\xa0])+)[\\x20\\t\\r\\n\\f]*(?:([*^$|!~]?=)[\\x20\\t\\r\\n\\f]*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+"(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+".replace("w","w#")+")|)|)[\\x20\\t\\r\\n\\f]*\\]",x="(?=[^\\x20\\t\\r\\n\\f])(?:\\\\.|"+z+"|"+":((?:\\\\.|[-\\w]|[^\\x00-\\xa0])+)(?:\\((?:(['\"])((?:\\\\.|[^\\\\])*?)\\2|((?:[^,]|\\\\,|(?:,(?=[^\\[]*\\]))|(?:,(?=[^\\(]*\\))))*))\\)|)".replace(2,
7)+"|[^\\\\(),])+",K=/^[\x20\t\r\n\f]+|((?:^|[^\\])(?:\\.)*)[\x20\t\r\n\f]+$/g,J=/^[\x20\t\r\n\f]*([\x20\t\r\n\f>+~])[\x20\t\r\n\f]*/,L=RegExp(x+"?(?=[\\x20\\t\\r\\n\\f]*,|$)","g"),W=RegExp("^(?:(?!,)(?:(?:^|,)[\\x20\\t\\r\\n\\f]*"+x+")*?|[\\x20\\t\\r\\n\\f]*(.*?))(\\)|$)"),ca=RegExp(x.slice(19,-6)+"\\x20\\t\\r\\n\\f>+~])+|[\\x20\\t\\r\\n\\f]*([\\x20\\t\\r\\n\\f>+~])[\\x20\\t\\r\\n\\f]*","g"),da=/^(?:#([\w\-]+)|(\w+)|\.([\w\-]+))$/,M=/[\x20\t\r\n\f]*[+~]/,ea=/:not\($/,fa=/h\d/i,ga=/input|select|textarea|button/i,
H=/\\(?!\\)/g,D={ID:/^#((?:\\.|[-\w]|[^\x00-\xa0])+)/,CLASS:/^\.((?:\\.|[-\w]|[^\x00-\xa0])+)/,NAME:/^\[name=['"]?((?:\\.|[-\w]|[^\x00-\xa0])+)['"]?\]/,TAG:RegExp("^("+"(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+".replace("[-","[-\\*")+")"),ATTR:RegExp("^"+z),PSEUDO:RegExp("^:((?:\\\\.|[-\\w]|[^\\x00-\\xa0])+)(?:\\((?:(['\"])((?:\\\\.|[^\\\\])*?)\\2|((?:[^,]|\\\\,|(?:,(?=[^\\[]*\\]))|(?:,(?=[^\\(]*\\))))*))\\)|)"),CHILD:RegExp("^:(only|nth|last|first)-child(?:\\([\\x20\\t\\r\\n\\f]*(even|odd|(([+-]|)(\\d*)n|)[\\x20\\t\\r\\n\\f]*(?:([+-]|)[\\x20\\t\\r\\n\\f]*(\\d+)|))[\\x20\\t\\r\\n\\f]*\\)|)",
"i"),POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\)|)(?=[^-]|$)/ig,needsContext:/^[\x20\t\r\n\f]*[>+~]|:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\)|)(?=[^-]|$)/i},N={},O=[],P={},Q=[],z=function(a){a.sizzleFilter=!0;return a},x=function(a){return function(b){return"input"===b.nodeName.toLowerCase()&&b.type===a}},X=function(a){return function(b){var e=b.nodeName.toLowerCase();return("input"===e||"button"===e)&&b.type===a}},v=function(a){var b=!1,e=p.createElement("div");try{b=a(e)}catch(c){}return b},
ha=v(function(a){a.innerHTML="<select></select>";a=typeof a.lastChild.getAttribute("multiple");return"boolean"!==a&&"string"!==a}),ia=v(function(a){a.id=w+0;a.innerHTML="<a name='"+w+"'></a><div name='"+w+"'></div>";i.insertBefore(a,i.firstChild);var b=p.getElementsByName&&p.getElementsByName(w).length===2+p.getElementsByName(w+0).length;q=!p.getElementById(w);i.removeChild(a);return b}),ja=v(function(a){a.appendChild(p.createComment(""));return 0===a.getElementsByTagName("*").length}),ka=v(function(a){a.innerHTML=
"<a href='#'></a>";return a.firstChild&&"undefined"!==typeof a.firstChild.getAttribute&&"#"===a.firstChild.getAttribute("href")}),Y=v(function(a){a.innerHTML="<div class='hidden e'></div><div class='hidden'></div>";if(!a.getElementsByClassName||0===a.getElementsByClassName("e").length)return!1;a.lastChild.className="e";return 1!==a.getElementsByClassName("e").length}),m=function(a,b,e,c){var e=e||[],b=b||p,d,g,j,f,h=b.nodeType;if(1!==h&&9!==h)return[];if(!a||"string"!==typeof a)return e;j=R(b);if(!j&&
!c&&(d=da.exec(a)))if(f=d[1])if(9===h)if((g=b.getElementById(f))&&g.parentNode){if(g.id===f)return e.push(g),e}else return e;else{if(b.ownerDocument&&(g=b.ownerDocument.getElementById(f))&&la(b,g)&&g.id===f)return e.push(g),e}else{if(d[2])return G.apply(e,C.call(b.getElementsByTagName(a),0)),e;if((f=d[3])&&Y&&b.getElementsByClassName)return G.apply(e,C.call(b.getElementsByClassName(f),0)),e}return S(a,b,e,c,j)},l=m.selectors={cacheLength:50,match:D,order:["ID","TAG"],attrHandle:{},createPseudo:z,
find:{ID:q?function(a,b,e){if("undefined"!==typeof b.getElementById&&!e)return(a=b.getElementById(a))&&a.parentNode?[a]:[]}:function(a,b,e){if("undefined"!==typeof b.getElementById&&!e)return(b=b.getElementById(a))?b.id===a||"undefined"!==typeof b.getAttributeNode&&b.getAttributeNode("id").value===a?[b]:I:[]},TAG:ja?function(a,b){if("undefined"!==typeof b.getElementsByTagName)return b.getElementsByTagName(a)}:function(a,b){var e=b.getElementsByTagName(a);if("*"===a){for(var c,d=[],g=0;c=e[g];g++)1===
c.nodeType&&d.push(c);return d}return e}},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){a[1]=a[1].replace(H,"");a[3]=(a[4]||a[5]||"").replace(H,"");"~="===a[2]&&(a[3]=" "+a[3]+" ");return a.slice(0,4)},CHILD:function(a){a[1]=a[1].toLowerCase();"nth"===a[1]?(a[2]||m.error(a[0]),a[3]=+(a[3]?a[4]+(a[5]||1):2*("even"===a[2]||"odd"===a[2])),a[4]=+(a[6]+a[7]||"odd"===a[2])):a[2]&&m.error(a[0]);
return a},PSEUDO:function(a){var b,e=a[4];if(D.CHILD.test(a[0]))return null;if(e&&(b=W.exec(e))&&b.pop())a[0]=a[0].slice(0,b[0].length-e.length-1),e=b[0].slice(0,-1);a.splice(2,3,e||a[3]);return a}},filter:{ID:q?function(a){a=a.replace(H,"");return function(b){return b.getAttribute("id")===a}}:function(a){a=a.replace(H,"");return function(b){return(b="undefined"!==typeof b.getAttributeNode&&b.getAttributeNode("id"))&&b.value===a}},TAG:function(a){if("*"===a)return function(){return!0};a=a.replace(H,
"").toLowerCase();return function(b){return b.nodeName&&b.nodeName.toLowerCase()===a}},CLASS:function(a){var b=N[a];b||(b=N[a]=RegExp("(^|[\\x20\\t\\r\\n\\f])"+a+"([\\x20\\t\\r\\n\\f]|$)"),O.push(a),O.length>l.cacheLength&&delete N[O.shift()]);return function(a){return b.test(a.className||"undefined"!==typeof a.getAttribute&&a.getAttribute("class")||"")}},ATTR:function(a,b,e){return!b?function(b){return null!=m.attr(b,a)}:function(c){var c=m.attr(c,a),d=c+"";if(null==c)return"!="===b;switch(b){case "=":return d===
e;case "!=":return d!==e;case "^=":return e&&0===d.indexOf(e);case "*=":return e&&-1<d.indexOf(e);case "$=":return e&&d.substr(d.length-e.length)===e;case "~=":return-1<(" "+d+" ").indexOf(e);case "|=":return d===e||d.substr(0,e.length+1)===e+"-"}}},CHILD:function(a,b,e,c){if("nth"===a){var d=U++;return function(a){var b,y=0,g=a;if(1===e&&0===c)return!0;if((b=a.parentNode)&&(b[w]!==d||!a.sizset)){for(g=b.firstChild;g&&!(1===g.nodeType&&(g.sizset=++y,g===a));g=g.nextSibling);b[w]=d}a=a.sizset-c;return 0===
e?0===a:0===a%e&&0<=a/e}}return function(b){var e=b;switch(a){case "only":case "first":for(;e=e.previousSibling;)if(1===e.nodeType)return!1;if("first"===a)return!0;e=b;case "last":for(;e=e.nextSibling;)if(1===e.nodeType)return!1;return!0}}},PSEUDO:function(a,b,e,c){var d=l.pseudos[a]||l.pseudos[a.toLowerCase()];d||m.error("unsupported pseudo: "+a);return!d.sizzleFilter?d:d(b,e,c)}},pseudos:{not:z(function(a,b,e){var c=Z(a.replace(K,"$1"),b,e);return function(a){return!c(a)}}),enabled:function(a){return!1===
a.disabled},disabled:function(a){return!0===a.disabled},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){a.parentNode&&a.parentNode.selectedIndex;return!0===a.selected},parent:function(a){return!l.pseudos.empty(a)},empty:function(a){for(var b,a=a.firstChild;a;){if("@"<a.nodeName||3===(b=a.nodeType)||4===b)return!1;a=a.nextSibling}return!0},contains:z(function(a){return function(b){return-1<(b.textContent||b.innerText||
T(b)).indexOf(a)}}),has:z(function(a){return function(b){return 0<m(a,b).length}}),header:function(a){return fa.test(a.nodeName)},text:function(a){var b,e;return"input"===a.nodeName.toLowerCase()&&"text"===(b=a.type)&&(null==(e=a.getAttribute("type"))||e.toLowerCase()===b)},radio:x("radio"),checkbox:x("checkbox"),file:x("file"),password:x("password"),image:x("image"),submit:X("submit"),reset:X("reset"),button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===
b},input:function(a){return ga.test(a.nodeName)},focus:function(a){var b=a.ownerDocument;return a===b.activeElement&&(!b.hasFocus||b.hasFocus())&&!(!a.type&&!a.href)},active:function(a){return a===a.ownerDocument.activeElement}},setFilters:{first:function(a,b,e){return e?a.slice(1):[a[0]]},last:function(a,b,e){b=a.pop();return e?a:[b]},even:function(a,b,e){for(var b=[],e=e?1:0,c=a.length;e<c;e+=2)b.push(a[e]);return b},odd:function(a,b,e){for(var b=[],e=e?0:1,c=a.length;e<c;e+=2)b.push(a[e]);return b},
lt:function(a,b,e){return e?a.slice(+b):a.slice(0,+b)},gt:function(a,b,e){return e?a.slice(0,+b+1):a.slice(+b+1)},eq:function(a,b,e){b=a.splice(+b,1);return e?a:b}}};l.setFilters.nth=l.setFilters.eq;l.filters=l.pseudos;ka||(l.attrHandle={href:function(a){return a.getAttribute("href",2)},type:function(a){return a.getAttribute("type")}});ia&&(l.order.push("NAME"),l.find.NAME=function(a,b){if("undefined"!==typeof b.getElementsByName)return b.getElementsByName(a)});Y&&(l.order.splice(1,0,"CLASS"),l.find.CLASS=
function(a,b,e){if("undefined"!==typeof b.getElementsByClassName&&!e)return b.getElementsByClassName(a)});try{C.call(i.childNodes,0)[0].nodeType}catch(pa){C=function(a){for(var b,e=[];b=this[a];a++)e.push(b);return e}}var R=m.isXML=function(a){return(a=a&&(a.ownerDocument||a).documentElement)?"HTML"!==a.nodeName:!1},la=m.contains=i.compareDocumentPosition?function(a,b){return!!(a.compareDocumentPosition(b)&16)}:i.contains?function(a,b){var e=9===a.nodeType?a.documentElement:a,c=b.parentNode;return a===
c||!(!c||!(1===c.nodeType&&e.contains&&e.contains(c)))}:function(a,b){for(;b=b.parentNode;)if(b===a)return!0;return!1},T=m.getText=function(a){var b,e="",c=0;if(b=a.nodeType)if(1===b||9===b||11===b){if("string"===typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)e+=T(a)}else{if(3===b||4===b)return a.nodeValue}else for(;b=a[c];c++)e+=T(b);return e};m.attr=function(a,b){var e;(e=R(a))||(b=b.toLowerCase());return l.attrHandle[b]?l.attrHandle[b](a):ha||e?a.getAttribute(b):
(e=a.getAttributeNode(b))?"boolean"===typeof a[b]?a[b]?b:null:e.specified?e.value:null:null};m.error=function(a){throw Error("Syntax error, unrecognized expression: "+a);};[0,0].sort(function(){return V=0});i.compareDocumentPosition?f=function(a,b){return a===b?(F=!0,0):(!a.compareDocumentPosition||!b.compareDocumentPosition?a.compareDocumentPosition:a.compareDocumentPosition(b)&4)?-1:1}:(f=function(a,b){if(a===b)return F=!0,0;if(a.sourceIndex&&b.sourceIndex)return a.sourceIndex-b.sourceIndex;var e,
c,d=[],g=[];e=a.parentNode;c=b.parentNode;var f=e;if(e===c)return h(a,b);if(e){if(!c)return 1}else return-1;for(;f;)d.unshift(f),f=f.parentNode;for(f=c;f;)g.unshift(f),f=f.parentNode;e=d.length;c=g.length;for(f=0;f<e&&f<c;f++)if(d[f]!==g[f])return h(d[f],g[f]);return f===e?h(a,g[f],-1):h(d[f],b,1)},h=function(a,b,c){if(a===b)return c;for(a=a.nextSibling;a;){if(a===b)return-1;a=a.nextSibling}return 1});m.uniqueSort=function(a){var b,c=1;if(f&&(F=V,a.sort(f),F))for(;b=a[c];c++)b===a[c-1]&&a.splice(c--,
1);return a};var Z=m.compile=function(d,b,e){var g,f,h=P[d];if(h&&h.context===b)return h;var j,u=[];g=0;for(var k=W.exec(d),s=!k.pop()&&!k.pop(),t=s&&d.match(L)||[""],i=l.preFilter,r=l.filter,q=!e&&b!==p;null!=(j=t[g])&&s;g++){u.push(h=[]);for(q&&(j=" "+j);j;){s=!1;if(k=J.exec(j))j=j.slice(k[0].length),s=h.push({part:k.pop().replace(K," "),captures:k});for(f in r)if((k=D[f].exec(j))&&(!i[f]||(k=i[f](k,b,e))))j=j.slice(k.shift().length),s=h.push({part:f,captures:k});if(!s)break}}s||m.error(d);for(f=
0;g=u[f];f++){h=u;j=f;k=b;s=e;i=t=void 0;for(r=0;t=g[r];r++)l.relative[t.part]?i=a(i,l.relative[t.part],k):(t.captures.push(k,s),i=c(i,l.filter[t.part].apply(null,t.captures)));h[j]=i}h=P[d]=function(a,b){for(var c,e=0;c=u[e];e++)if(c(a,b))return!0;return!1};h.context=b;h.runs=h.dirruns=0;Q.push(d);Q.length>l.cacheLength&&delete P[Q.shift()];return h};m.matches=function(a,b){return m(a,null,null,b)};m.matchesSelector=function(a,b){return 0<m(b,null,null,[a]).length};var S=function(a,b,c,f,h){var a=
a.replace(K,"$1"),i,j,u,k,s,t,q;k=a.match(L);u=a.match(ca);s=b.nodeType;if(D.POS.test(a)){i=a;var p,w,n,x,v;u=0;s=k.length;t=D.POS;q=RegExp("^"+t.source+"(?![\\x20\\t\\r\\n\\f])","i");for(var A=function(){for(var a=1,b=arguments.length-2;a<b;a++)arguments[a]===I&&(p[a]=I)};u<s;u++){t.exec("");i=k[u];h=[];a=0;for(n=f;p=t.exec(i);)if(v=t.lastIndex=p.index+p[0].length,v>a){j=i.slice(a,p.index);a=v;x=[b];J.test(j)&&(n&&(x=n),n=f);if(w=ea.test(j))j=j.slice(0,-5).replace(J,"$&*");1<p.length&&p[0].replace(q,
A);v=j;var z=p[1],F=p[2],B=void 0,E=l.setFilters[z.toLowerCase()];E||m.error(z);if(v||!(B=n))r(v||"*",x,B=[],n);n=0<B.length?E(B,F,w):[]}n?(h=h.concat(n),(j=i.slice(a))&&")"!==j?J.test(j)?r(j,h,c,f):m(j,b,c,f?f.concat(n):n):G.apply(c,h)):m(i,b,c,f)}return 1===s?c:m.uniqueSort(c)}if(f)i=C.call(f,0);else if(k&&1===k.length){if(1<u.length&&9===s&&!h&&(k=D.ID.exec(u[0]))){b=l.find.ID(k[1],b,h)[0];if(!b)return c;a=a.slice(u.shift().length)}j=(k=M.exec(u[0]))&&!k.index&&b.parentNode||b;q=u.pop();s=q.split(":not")[0];
f=0;for(u=l.order.length;f<u;f++)if(t=l.order[f],k=D[t].exec(s))if(i=l.find[t]((k[1]||"").replace(H,""),j,h),null!=i){s===q&&((a=a.slice(0,a.length-q.length)+s.replace(D[t],""))||G.apply(c,C.call(i,0)));break}}if(a){j=Z(a,b,h);g=j.dirruns++;null==i&&(i=l.find.TAG("*",M.test(a)&&b.parentNode||b));for(f=0;k=i[f];f++)d=j.runs++,j(k,b)&&c.push(k)}return c};if(p.querySelectorAll){var $,ma=S,na=/'|\\/g,oa=/\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,n=[],B=[":active"],E=i.matchesSelector||i.mozMatchesSelector||
i.webkitMatchesSelector||i.oMatchesSelector||i.msMatchesSelector;v(function(a){a.innerHTML="<select><option selected></option></select>";a.querySelectorAll("[selected]").length||n.push("\\[[\\x20\\t\\r\\n\\f]*(?:checked|disabled|ismap|multiple|readonly|selected|value)");a.querySelectorAll(":checked").length||n.push(":checked")});v(function(a){a.innerHTML="<p test=''></p>";a.querySelectorAll("[test^='']").length&&n.push("[*^$]=[\\x20\\t\\r\\n\\f]*(?:\"\"|'')");a.innerHTML="<input type='hidden'>";a.querySelectorAll(":enabled").length||
n.push(":enabled",":disabled")});n=n.length&&RegExp(n.join("|"));S=function(a,b,c,d,f){if(!d&&!f&&(!n||!n.test(a)))if(9===b.nodeType)try{return G.apply(c,C.call(b.querySelectorAll(a),0)),c}catch(g){}else if(1===b.nodeType&&"object"!==b.nodeName.toLowerCase()){var h=b.getAttribute("id"),i=h||w,k=M.test(a)&&b.parentNode||b;h?i=i.replace(na,"\\$&"):b.setAttribute("id",i);try{return G.apply(c,C.call(k.querySelectorAll(a.replace(L,"[id='"+i+"'] $&")),0)),c}catch(l){}finally{h||b.removeAttribute("id")}}return ma(a,
b,c,d,f)};E&&(v(function(a){$=E.call(a,"div");try{E.call(a,"[test!='']:sizzle"),B.push(l.match.PSEUDO.source,l.match.POS.source,"!=")}catch(b){}}),B=RegExp(B.join("|")),m.matchesSelector=function(a,b){b=b.replace(oa,"='$1']");if(!R(a)&&!B.test(b)&&(!n||!n.test(b)))try{var c=E.call(a,b);if(c||$||a.document&&11!==a.document.nodeType)return c}catch(d){}return 0<m(b,null,null,[a]).length})}A.ReadSpeaker.Sizzle=m})(window);
ReadSpeaker.lib.RSLib=function(){var A={core_pnum:function(){return/[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source},rposition:function(){return/^(top|right|bottom|left)$/},rmargin:function(){return/^margin/},rnumsplit:function(){return RegExp("^("+this.core_pnum+")(.*)$","i")},rnumnonpx:function(){return RegExp("^("+this.core_pnum+")(?!px)[a-z%]+$","i")},rmsPrefix:function(){return/^-ms-/},rdashAlpha:function(){return/-([\da-z])/gi}},I={_formatRet:function(a){return a.length?1==a.length?a[0].length&&
"object"===typeof a[0]&&!a[0].tagName?a[0][0]:a[0]:a:[]},get:function(a){return"#"===a?[]:"object"==typeof a?a:document.getElementById(a)||this._formatRet(window.ReadSpeaker.Sizzle(a))},findIn:function(a,c){"string"===typeof a&&(a=this.get(a));return this._formatRet(window.ReadSpeaker.Sizzle(c,a))},closest:function(a,c){var d=!1,g=null,f=null,g=null,h=a;"string"===typeof a&&(h=this.get(a));g=$rs.findIn(h.parentNode,c);if(g===h)return h;for(;!d&&h!==document.body;){f=h.parentNode;g=h.parentNode.parentNode;
if((g=$rs.findIn(g,c))&&g===f){d=!0;break}else if(g&&$rs.isArray(g)&&g.length)for(var h=0,q=g.length;h<q;h++)if(g[h]&&g[h]===f){d=!0;g=g[h];break}h=f}if(d)return g},getAttr:function(a,c){"string"===typeof a&&(a=this.get(a));if("style"===c)return a.style.cssText.toLowerCase()||void 0;if(a.getAttribute)return a.getAttribute(c);if(a[c])return a[c]},setAttr:function(a,c,d){"string"===typeof a&&(a=this.get(a));this.isArray(a)||(a=[a]);for(var g=0,f=a.length;g<f;g++)"style"===c?a[g].style.cssText=d:a[g].setAttribute?
a[g].setAttribute(c,d):a[g][c]=d;return d},regEvent:function(a,c,d){var g,f;"string"===typeof a&&(a=this.get(a));this.isArray(a)||(a=[a]);for(var h=0,q=a.length;h<q;h++)f=a[h].window?document.documentElement:a[h],g=this.getAttr(f,"data-rsevent-id")||"rs_"+Math.round(1E6*Math.random()),this.setAttr(f,"data-rsevent-id",g),r.push(g,c,d),(!r.store[g]||!(r.store[g][c]&&1<r.store[g][c].length))&&_addEvent(a[h],c,r.dispatch)},unregEvent:function(a,c,d){if(a){var g;"string"===typeof a&&(a=this.get(a));this.isArray(a)||
(a=[a]);for(var f=0,h=a.length;f<h;f++)if(g=a[f].window?document.documentElement:a[f],g=this.getAttr(g,"data-rsevent-id"),d)(g=r.pop(g,c,d))||_removeEvent(a[f],c,r.dispatch);else if(_removeEvent(a[f],c,r.dispatch),g&&c){r.store[g][c]=void 0;try{delete r.store[g][c]}catch(q){}}}},fireEvent:function(){return!1},width:function(a){"string"===typeof a&&(a=this.get(a));return _getSize(a,"width")},height:function(a){"string"===typeof a&&(a=this.get(a));return _getSize(a,"height")},innerWidth:function(a){"string"===
typeof a&&(a=this.get(a));var c=parseFloat(_getCss(a,"border-left-width"))+parseFloat(_getCss(a,"border-right-width"));return _getSize(a,"width")-c},innerHeight:function(a){"string"===typeof a&&(a=this.get(a));var c=parseFloat(_getCss(a,"border-top-width"))+parseFloat(_getCss(a,"border-bottom-width"));return _getSize(a,"height")-c},outerWidth:function(a,c){"string"===typeof a&&(a=this.get(a));if(a&&a.style){var d=c?parseFloat(_getCss(a,"margin-left"))+parseFloat(_getCss(a,"margin-right")):0;return _getSize(a,
"width")+d}return null},outerHeight:function(a,c){"string"===typeof a&&(a=this.get(a));if(a&&a.style){var d=c?parseFloat(_getCss(a,"margin-top"))+parseFloat(_getCss(a,"margin-bottom")):0;return _getSize(a,"height")+d}return null},offsetParent:function(a){"string"===typeof a&&(a=this.get(a));for(var c=/absolute|relative|fixed/i;a!==document.body&&!(a=a.parentNode,a.style&&c.test(_getCss(a,"position"))););return a||document.body},offset:function(a){"string"===typeof a&&(a=this.get(a));var c=document.body,
d=document.defaultView||window,g=document.documentElement,f=document.createElement("div");if(a===document.body)return a=c.offsetTop,f=c.offsetLeft,/explorer/i.test(rspkr.c.data.browser.name)&&8>rspkr.c.data.browser.version||(a+=parseFloat(_getCss(c,"marginTop"))||0,f+=parseFloat(_getCss(c,"marginLeft"))||0),{top:a,left:f};f.style.paddingLeft=f.style.width="1px";c.appendChild(f);var h=2==f.offsetWidth;c.removeChild(f);var f=a.getBoundingClientRect(),q=g.clientTop||c.clientTop||0,p=g.clientLeft||c.clientLeft||
0,i=d.pageYOffset||h&&g.scrollTop||c.scrollTop,d=d.pageXOffset||h&&g.scrollLeft||c.scrollLeft;rspkr.basicMode&&(a===c&&i&&!f.top)&&(f.top=-i);rspkr.basicMode&&(a===c&&d&&!f.left)&&(f.left=-d);return{top:f.top+i-q,left:f.left+d-p}},absOffset:function(a){return this.offset(a)},position:function(a){"string"===typeof a&&this.get(a);return!1},scrollLeft:function(a,c){"string"===typeof a&&(a=this.get(a));return _scrollXY("scrollLeft","pageXOffset",a,c)},scrollTop:function(a,c){"string"===typeof a&&(a=this.get(a));
return _scrollXY("scrollTop","pageYOffset",a,c)},addClass:function(a,c){"string"===typeof a&&(a=this.get(a));this.isArray(a)||(a=[a]);for(var d,g=0,f=a.length;g<f;g++)d=_trim(a[g].className+" "+c).replace(/ {2,}/g," ").split(" "),a[g].className=d.join(" ")},removeClass:function(a,c){if(a){"string"===typeof a&&(a=this.get(a));this.isArray(a)||(a=[a]);for(var d,g=0,f=a.length;g<f;g++){d=_trim(c).replace(/ {2,}/g," ");newClassName=_trim(a[g].className);this.isArray(d)||(d=d.split(" "));for(var h=0,q=
d.length;h<q;h++)newClassName=newClassName.replace(RegExp("\\b"+d[h]+"\\b","gi"),"");a[g].className=_trim(newClassName).replace(/ {2,}/g," ")}}},hasClass:function(a,c){"string"===typeof a&&(a=this.get(a));if(!a||this.isArray(a)&&!a.length)return!1;for(var d=a.className.split(" "),g=0,f=d.length;g<f;g++)if(d[g]==c)return!0;return!1},css:function(a,c,d){"string"===typeof a&&(a=this.get(a));if("object"==typeof c||d){var g={};"string"===typeof c?g[_camelCase(c)]=d:g=c;for(var f in g)g.hasOwnProperty(f)&&
(a.style[_camelCase(f)]=g[f])}else return _getCss(a,_camelCase(c))},isVisible:function(a){for(;a!==document.body;){if("none"===this.css(a,"display"))return!1;a=a.parentNode}return!0},addStyleRule:function(a,c,d){d="string"==typeof d?document.styleSheets[d]||document.getElementById(d):d;d.addRule?d.addRule(a,c):d.sheet.insertRule&&d.sheet.insertRule(a+" {"+c+"}",d.sheet.cssRules.length)},isArray:function(a){return"[object Array]"===Object.prototype.toString.call(a)},rsid:function(a){if(""==this.getAttr(a,
"data-rsid")||void 0==this.getAttr(a,"data-rsid")){var c=ReadSpeaker.rsidCount++;this.setAttr(a,"data-rsid",c)}return this.getAttr(a,"data-rsid")},detach:function(a){return a.parentNode.removeChild(a)},convertEvent:function(a,c){var a=a||window.event,d=new ReadSpeaker.lib.Facade.RSEvent;d.pageX=a.pageX||a.clientX+$rs.scrollLeft(document);d.pageY=a.pageY||a.clientY+$rs.scrollTop(document);d.screenX=a.screenX;d.screenY=a.screenY;d.clientX=a.clientX;d.clientY=a.clientY;d.target=a.currentTarget||c;d.type=
a.type;d.keyCode=a.keyCode;d.targetTouches=a.targetTouches;d.originalEvent=a;return d},clone:function(a,c,d){return a.cloneNode(d||!1)},camel:function(a){return _camelCase(a)},remove:function(){return jQuery(elm).remove()},replaceWith:function(a,c){return _formatRet(jQuery(a).replaceWith(c))},focus:function(a,c){void 0!==c?this.focusIn(a,c):(a=this.get(a),this.isArray(a)&&0<a.length?a[0].focus?a[0].focus():a[0].setActive&&a[0].setActive():a.focus?a.focus():a.setActive&&a.setActive())},focusIn:function(a,
c){a=this.get(a);if(this.isArray(a)&&0<a.length)for(var d=0;d<a.length;d++)void 0!==c&&_addEvent(a[d],"focus",c);else void 0!==c&&_addEvent(a,"focus",c)},focusOut:function(a,c){a=this.get(a);if(this.isArray(a)&&0<a.length)for(var d=0;d<a.length;d++)void 0!==c&&_addEvent(a[d],"blur",c);else void 0!==c&&_addEvent(a,"blur",c)}},r=null;_getWindow=function(a){return null!=a&&a==a.window?a:9===a.nodeType?a.defaultView||a.parentWindow:!1};_camelCase=function(a){return a.replace(A.rmsPrefix(),"ms-").replace(A.rdashAlpha(),
_fcamelCase)};_fcamelCase=function(a,c){return(c+"").toUpperCase()};_trim=function(a){return a.replace(/^ +/,"").replace(/ +$/,"")};_getCss=window.getComputedStyle?function(a,c){return window.getComputedStyle(a,null)[_camelCase(c)]||!1}:function(a,c){var d,g,f=a.currentStyle&&a.currentStyle[c],h=a.style;null==f&&(h&&h[c])&&(f=h[c]);if(A.rnumnonpx().test(f)&&!A.rposition().test(c)){d=h.left;if(g=a.runtimeStyle&&a.runtimeStyle.left)a.runtimeStyle.left=a.currentStyle.left;h.left="fontSize"===c?"1em":
f;f=h.pixelLeft+"px";h.left=d;g&&(a.runtimeStyle.left=g)}return""===f?"auto":f};_getSize=function(a,c){var d="width"==c?"Width":"Height";if(a!==window&&a!==document){d=a["offset"+d];if(isNaN(d)||!d)d=_getCss(a,c);isNaN(d);return parseInt(d)}try{if(a===window)return window["inner"+d]||document.documentElement["client"+d]||document.body["client"+d];if(a===document)return document.body["client"+d]}catch(g){return rspkr.log("[RSLib._getSize] Error: "+g.message,3),0}};_scrollXY=function(a,c,d,g){var f=
/X/.test(c),h=_getWindow(d);if(void 0===g)return h?c in h?h[c]:h.document.documentElement[a]||document&&document.body&&document.body[a]:d[a];h?h.scrollTo(!f?g:$rs.scrollLeft(h),f?g:$rs.scrollTop(h)):d[a]=g};_addEvent=document.addEventListener?function(a,c,d){a.addEventListener&&a.addEventListener(c,d,!1)}:function(a,c,d){a.attachEvent&&a.attachEvent("on"+c,function(c){d(c,a)})};_removeEvent=document.removeEventListener?function(a,c,d){a.removeEventListener&&a.removeEventListener(c,d,!1)}:function(a,
c,d){a.detachEvent&&a.detachEvent("on"+c,d)};return{meta:{revision:"4648"},init:function(){window.ReadSpeaker.Sizzle?(r=ReadSpeaker.lib.Facade.eq,ReadSpeaker.lib.Facade.adapterInit(I),ReadSpeaker.log("[rspkr.l.RSLib] Initialized."),rspkr.Common.dispatchEvent("onAdapterReady")):ReadSpeaker.log("[rspkr.l.RSLib] Error, Sizzle unavailable.",3)}}}();
