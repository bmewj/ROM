window.ROM=function(){return{}}();ROM.digest=function(){var h=[],e=[],c=[],a=function(){var a=10,b;do{for(var d=0;d<e.length;d+=1)try{e[d]()}catch(t){(console.error||console.log)(t)}e=[];for(d=0;d<h.length;d+=1)try{var r=h[d];r.watchFn()&&(r.listenerFn(),b=!0)}catch(s){(console.error||console.log)(s)}if(!a--)throw"10 digest iterations reached";}while(b);for(d=0;d<c.length;d+=1)try{c[d]()}catch(q){(console.error||console.log)(q)}c=[]};a.watch=function(a,b){var c={watchFn:a,listenerFn:b||function(){}};h.push(c);return function(){var b=
h.indexOf(c);-1!==b&&h.splice(b,1)}};a.queueAsync=function(a){"function"===typeof a&&e.push(a)};a.queuePostDigest=function(a){"function"===typeof a&&c.push(a)};return a}();ROM.apply=function(){return function(h){try{h()}catch(e){(console.error||console.log)(e)}ROM.digest()}}();ROM.applyAsync=function(){return apply}();window.ROM.selector=function(){return{Selector:function(h,e,c,a,l,b){h=h||"";e=e||null;c=c||null;a=a||[];l=l||{};b=!!b;var d=a.join(" "),t=Object.keys(l),r=function(a){var c=a.getElementsByTagName(e),g=function(b){return b.parentElement===a};return b?m(c,g):n(c)},s=function(a){var d=document.getElementById(c),g;if(!(g=null===d)){a:if(g=d,a===document)g=!0;else{for(;null!==g.parentElement;){if(g.parentElement===a){g=!0;break a}g=g.parentElement}g=!1}g=!g}return g?[]:b&&d.parentElement!==a?[]:[d]},
q=function(a){var c=a.getElementsByClassName(d),g=function(b){return b.parentElement===a};return b?m(c,g):n(c)},u=function(a){var c=n(v(a)||a.childNodes);b||function w(a){c=c.concat(a);a=v(a);for(var b=0;b<a.length;b+=1)w(a[b])}(a);return k(a,c)},f=function(a,b){var c=e.toUpperCase();return m(b,function(a){return a.tagName===c})},p=function(b,c){return m(c,function(b){for(var c=0;c<a.length;c+=1)if(!b.classList.contains(a[c]))return!1;return!0})},k=function(a,b){return m(b,function(a){for(var b=0;b<
t.length;b+=1){var c=t[b],d=l[c];if(!a.hasAttribute||!a.hasAttribute(c)||!d(a.getAttribute(c)))return!1}return!0})},m=function(a,b){for(var c=[],d=0;d<a.length;d+=1)b(a[d],d)&&c.push(a[d]);return c},n=function(a){return Array.prototype.slice.call(a,0)},v=function(a){var b=function(a){return 1===a.nodeType};return a.children||m(a.childNodes,b)};this.match=function(b){var d,g=[s,r,q,u];d=null!==c?0:null!==e?1:0!==a.length?2:3;g=g[d](b);1>d&&null!==e&&(g=f(b,g));2>d&&0!==a.length&&(g=p(b,g));3>d&&0!==
t.length&&(g=k(b,g));return g};this.selectorString=h;return this}}}();window.ROM.selector.SelectorTree=function(){this.addSelector=function(h){}};window.ROM.selector.tree=new ROM.selector.SelectorTree;window.ROM.selector.attributes=function(){var h={getMatchFunction:function(c,a){var e=h.attr[c]||function(){return!1};a=a.toLowerCase();return function(b){return e(a,b)}},attr:{"=":function(c,a){return c===a},"~=":function(c,a){for(var l=e(c),b=e(a),d=0;d<l.length;d+=1)if(-1===b.indexOf(l[d]))return!1;return!0},"|=":function(c,a){for(var l=e(c),b=e(a),d=0;d<l.length;d+=1)if(b[d]!==l[d])return!1;return!0},"^=":function(c,a){return 0===a.indexOf(c)},"$=":function(c,a){return-1!==a.indexOf(c,a.length-
c.length)},"*=":function(c,a){return-1!==a.indexOf(c)},exists:function(){return!0}}},e=function(c){c=c.split(" ");for(var a=[],e=[],b=0;b<c.length;b+=1)a=a.concat(c[b].split("-"));for(b=0;b<a.length;b+=1)""!==a[b]&&e.push(a[b]);return e};return h}();window.ROM.selector.parseString=function(){var h=function(c,a,l){for(var b,d,h,r=[],s={},q=[],u=[];a[0]<c.length;){b=c[a[0]];if(-1!==" \t\r\n".indexOf(b)||">"===b)break;switch(b){case ".":b=c;var f=a;f[0]+=1;b=e(b,f).toLowerCase();r.push(b);q.push("."+b);break;case "#":h=c;b=a;b[0]+=1;h=e(h,b);break;case "[":b=c;var f=a,p={};f[0]+=1;p.name=e(b,f);var k=b[f[0]],m=void 0,n=void 0;if("]"===k)p.matchFn=ROM.selector.attributes.getMatchFunction("exists"),f[0]+=1;else{"="===k?m="=":(f[0]+=1,k+=b[f[0]],m=
-1!==Object.keys(ROM.selector.attributes.attr).indexOf(k)?k:"exists");f[0]+=1;k=b[f[0]];if('"'===k){f[0]+=1;for(n=f[0];f[0]<b.length&&(k=b[f[0]],'"'!==k);)f[0]+=1;n=b.substring(n,f[0]);f[0]+=1}else n=e(b,f);f[0]+=1;p.matchType=m;p.matchValue=n;p.matchFn=ROM.selector.attributes.getMatchFunction(m,p.matchValue)}b=p;s[b.name]=b.matchFn;u.push(["[",b.name,b.matchType,'"',b.matchValue,'"]'].join(""));break;default:d=e(c,a)}}c=ROM.selector.Selector;a=h;b=[];d&&b.push(d.toUpperCase());a&&b.push("#",a.toLowerCase());
b=b.concat(q.sort());b=b.concat(u.sort());q=b.join("");return new c(q,d,h,r,s,l)},e=function(c,a){for(var e=a[0],b;a[0]<c.length;){b=c[a[0]];if(-1!=='#.[]~|^$*=">'.indexOf(b)||-1!==" \t\r\n".indexOf(b))break;a[0]+=1}return c.substring(e,a[0])};return function(c){for(var a=[0],e,b=!1,d=[];a[0]<c.length;){e=c[a[0]];if(-1!==" \t\r\n".indexOf(e))a[0]+=1;else if(">"===e){b=!0;a[0]+=1;continue}else d.push(h(c,a,b));b=!1}return d}}();
