/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 *
 * Version: 5.9.2 (2021-09-08)
 */
!function(){"use strict";function e(n){return function(e){return r=typeof(t=e),(null===t?"null":"object"==r&&(Array.prototype.isPrototypeOf(t)||t.constructor&&"Array"===t.constructor.name)?"array":"object"==r&&(String.prototype.isPrototypeOf(t)||t.constructor&&"String"===t.constructor.name)?"string":r)===n;var t,r}}function s(e){return null!=e}function a(e){return function(){return e}}function t(e){return e}function r(){return d}var n=tinymce.util.Tools.resolve("tinymce.PluginManager"),p=function(){return(p=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},i=e("string"),u=e("object"),l=e("array"),c=a(!1),m=a(!0),d={fold:function(e,t){return e()},isSome:c,isNone:m,getOr:t,getOrThunk:o,getOrDie:function(e){throw new Error(e||"error: getOrDie called on none.")},getOrNull:a(null),getOrUndefined:a(void 0),or:t,orThunk:o,map:r,each:function(){},bind:r,exists:c,forall:m,filter:function(){return d},toArray:function(){return[]},toString:a("none()")};function o(e){return e()}function h(e,t){for(var r=0,n=e.length;r<n;r++)t(e[r],r)}function f(e){var t=e;return{get:function(){return t},set:function(e){t=e}}}function g(e,t){return H(e,t)?B.from(e[t]):B.none()}function v(e){return e.getParam("media_scripts")}function b(e,t){if(e)for(var r=0;r<e.length;r++)if(-1!==t.indexOf(e[r].filter))return e[r]}function w(e){return e.replace(/px$/,"")}function y(i,e){var c=f(!1),s={};return Q({validate:!1,allow_conditional_comments:!0,start:function(e,t){if(!c.get())if(H(t.map,"data-ephox-embed-iri"))c.set(!0),a=(o=(n=t).map.style)?V.parseStyle(o):{},s={type:"ephox-embed-iri",source:n.map["data-ephox-embed-iri"],altsource:"",poster:"",width:g(a,"max-width").map(w).getOr(""),height:g(a,"max-height").map(w).getOr("")};else{if(s.source||"param"!==e||(s.source=t.map.movie),"iframe"!==e&&"object"!==e&&"embed"!==e&&"video"!==e&&"audio"!==e||(s.type||(s.type=e),s=J.extend(t.map,s)),"script"===e){var r=b(i,t.map.src);if(!r)return;s={type:"script",source:t.map.src,width:String(r.width),height:String(r.height)}}"source"===e&&(s.source?s.altsource||(s.altsource=t.map.src):s.source=t.map.src),"img"!==e||s.poster||(s.poster=t.map.src)}var n,o,a}}).parse(e),s.source=s.source||s.src||s.data,s.altsource=s.altsource||"",s.poster=s.poster||"",s}function x(e){return{mp3:"audio/mpeg",m4a:"audio/x-m4a",wav:"audio/wav",mp4:"video/mp4",webm:"video/webm",ogg:"video/ogg",swf:"application/x-shockwave-flash"}[e.toLowerCase().split(".").pop()]||""}function j(e){return/^[0-9.]+$/.test(e)?e+"px":e}function O(a,e){!function(e){for(var t=G(e),r=0,n=t.length;r<n;r++){var o=t[r];!function(e,t){var r=""+e;if(a.map[t])for(var n=a.length;n--;){var o=a[n];o.name===t&&(r?(a.map[t]=r,o.value=r):(delete a.map[t],a.splice(n,1)))}else r&&(a.push({name:t,value:r}),a.map[t]=r)}(e[o],o)}}(e)}function S(e,c,s){var u,l=Y(),m=f(!1),d=0;return Q({validate:!1,allow_conditional_comments:!0,comment:function(e){l.comment(e)},cdata:function(e){l.cdata(e)},text:function(e,t){l.text(e,t)},start:function(e,t,r){if(!m.get())if(H(t.map,"data-ephox-embed-iri"))m.set(!0),n=c,(i=(a=(o=t).map.style)?Z.parseStyle(a):{})["max-width"]=j(n.width),i["max-height"]=j(n.height),O(o,{style:Z.serializeStyle(i)});else{switch(e){case"video":case"object":case"embed":case"img":case"iframe":void 0!==c.height&&void 0!==c.width&&O(t,{width:c.width,height:c.height})}if(s)switch(e){case"video":O(t,{poster:c.poster,src:""}),c.altsource&&O(t,{src:""});break;case"iframe":O(t,{src:c.source});break;case"source":if(d<2&&(O(t,{src:c[ee[d]],type:c[ee[d]+"mime"]}),!c[ee[d]]))return;d++;break;case"img":if(!c.poster)return;u=!0}}var n,o,a,i;l.start(e,t,r)},end:function(e){if(!m.get()){if("video"===e&&s)for(var t,r=0;r<2;r++)c[ee[r]]&&((t=[]).map={},d<=r&&(O(t,{src:c[ee[r]],type:c[ee[r]+"mime"]}),l.start("source",t,!0)));var n;c.poster&&"object"===e&&s&&!u&&((n=[]).map={},O(n,{src:c.poster,width:c.width,height:c.height}),l.start("img",n,!0))}l.end(e)}},X({})).parse(e),l.getContent()}function _(e,t){for(var r,n=(r=t.match(/^(https?:\/\/|www\.)(.+)$/i))&&1<r.length&&"www."!==r[1]?r[1]:"https://",o=e.regex.exec(t),a=n+e.url,i=0;i<o.length;i++)!function(e){a=a.replace("$"+e,function(){return o[e]||""})}(i);return a.replace(/\?$/,"")}function k(r,e){var n=J.extend({},e);if(!n.source&&(J.extend(n,y(v(r),n.embed)),!n.source))return"";n.altsource||(n.altsource=""),n.poster||(n.poster=""),n.source=r.convertURL(n.source,"source"),n.altsource=r.convertURL(n.altsource,"source"),n.sourcemime=x(n.source),n.altsourcemime=x(n.altsource),n.poster=r.convertURL(n.poster,"poster");var t,o,a=(t=n.source,0<(o=te.filter(function(e){return e.regex.test(t)})).length?J.extend({},o[0],{url:_(o[0],t)}):null);if(a&&(n.source=a.url,n.type=a.type,n.allowfullscreen=a.allowFullscreen,n.width=n.width||String(a.w),n.height=n.height||String(a.h)),n.embed)return S(n.embed,n,!0);var i=b(v(r),n.source);i&&(n.type="script",n.width=String(i.width),n.height=String(i.height));var c,s,u,l,m=r.getParam("audio_template_callback"),d=r.getParam("video_template_callback");return n.width=n.width||"300",n.height=n.height||"150",J.each(n,function(e,t){n[t]=r.dom.encode(""+e)}),"iframe"===n.type?(l=n.allowfullscreen?' allowFullscreen="1"':"",'<iframe src="'+n.source+'" width="'+n.width+'" height="'+n.height+'"'+l+"></iframe>"):"application/x-shockwave-flash"===n.sourcemime?(u='<object data="'+n.source+'" width="'+n.width+'" height="'+n.height+'" type="application/x-shockwave-flash">',n.poster&&(u+='<img src="'+n.poster+'" width="'+n.width+'" height="'+n.height+'" />'),u+"</object>"):-1!==n.sourcemime.indexOf("audio")?(s=n,m?m(s):'<audio controls="controls" src="'+s.source+'">'+(s.altsource?'\n<source src="'+s.altsource+'"'+(s.altsourcemime?' type="'+s.altsourcemime+'"':"")+" />\n":"")+"</audio>"):"script"===n.type?'<script src="'+n.source+'"><\/script>':(c=n,d?d(c):'<video width="'+c.width+'" height="'+c.height+'"'+(c.poster?' poster="'+c.poster+'"':"")+' controls="controls">\n<source src="'+c.source+'"'+(c.sourcemime?' type="'+c.sourcemime+'"':"")+" />\n"+(c.altsource?'<source src="'+c.altsource+'"'+(c.altsourcemime?' type="'+c.altsourcemime+'"':"")+" />\n":"")+"</video>")}function A(t){return function(e){return k(t,e)}}function T(e,t){var r,n,o,a,i,c=e.getParam("media_url_resolver");return c?(o=t,a=A(e),i=c,new re(function(t,e){function r(e){return e.html&&(ne[o.source]=e),t({url:o.source,html:e.html||a(o)})}ne[o.source]?r(ne[o.source]):i({url:o.source},r,e)})):(n=A(e),re.resolve({html:n(r=t),url:r.source}))}function C(e,t){var r,n,a,i,c,o=t?g(e,t).bind(function(e){return g(e,"meta")}).getOr({}):{},s=(a=e,i=o,c=t,function(e){function t(){return g(a,e)}function r(){return g(i,e)}function n(e){return g(e,"value").bind(function(e){return 0<e.length?B.some(e):B.none()})}var o={};return o[e]=(e===c?t().bind(function(e){return u(e)?n(e).orThunk(r):r().orThunk(function(){return B.from(e)})}):r().orThunk(function(){return t().bind(function(e){return u(e)?n(e):B.from(e)})})).getOr(""),o});return p(p(p(p(p({},s("source")),s("altsource")),s("poster")),s("embed")),(r=o,n={},g(e,"dimensions").each(function(e){h(["width","height"],function(t){g(r,t).orThunk(function(){return g(e,t)}).each(function(e){return n[t]=e})})}),n))}function D(e){var n=p(p({},e),{source:{value:g(e,"source").getOr("")},altsource:{value:g(e,"altsource").getOr("")},poster:{value:g(e,"poster").getOr("")}});return h(["width","height"],function(r){g(e,r).each(function(e){var t=n.dimensions||{};t[r]=e,n.dimensions=t})}),n}function P(r){return function(e){var t=e&&e.msg?"Media embed handler error: "+e.msg:"Media embed handler threw unknown error.";r.notificationManager.open({type:"error",text:t})}}function $(e,t){return y(v(e),t)}function M(o,a){return function(e){var t,r,n;i(e.url)&&0<e.url.trim().length&&(t=e.html,r=$(a,t),n=p(p({},r),{source:e.url,embed:t}),o.setData(D(n)))}}function F(e,t){var r=e.dom.select("*[data-mce-object]");e.insertContent(t),function(e,t){for(var r=e.dom.select("*[data-mce-object]"),n=0;n<t.length;n++)for(var o=r.length-1;0<=o;o--)t[n]===r[o]&&r.splice(o,1);e.selection.select(r[0])}(e,r),e.nodeChanged()}function z(m){var e,t,r,n,o=(n=(t=r=(e=m).selection.getNode()).hasAttribute("data-mce-object")||t.hasAttribute("data-ephox-embed-iri")?e.serializer.serialize(r,{selection:!0}):"",p({embed:n},y(v(e),n))),d=f(o),a=D(o),i={title:"General",name:"general",items:function(e){for(var t=[],r=0,n=e.length;r<n;++r){if(!l(e[r]))throw new Error("Arr.flatten item "+r+" was not an array, input: "+e);W.apply(t,e[r])}return t}([[{name:"source",type:"urlinput",filetype:"media",label:"Source"}],m.getParam("media_dimensions",!0)?[{type:"sizeinput",name:"dimensions",label:"Constrain proportions",constrain:!0}]:[]])},c=[];m.getParam("media_alt_source",!0)&&c.push({name:"altsource",type:"urlinput",filetype:"media",label:"Alternative source URL"}),m.getParam("media_poster",!0)&&c.push({name:"poster",type:"urlinput",filetype:"image",label:"Media poster (Image URL)"});var s=[i,{title:"Embed",items:[{type:"textarea",name:"embed",label:"Paste your embed code below:"}]}];0<c.length&&s.push({title:"Advanced",name:"advanced",items:c});var h=m.windowManager.open({title:"Insert/Edit Media",size:"normal",body:{type:"tabpanel",tabs:s},buttons:[{type:"cancel",name:"cancel",text:"Cancel"},{type:"submit",name:"save",text:"Save",primary:!0}],onSubmit:function(e){var t,r,n,o,a=C(e.getData());t=d.get(),n=m,(r=a).embed=S(r.embed,r),r.embed&&(t.source===r.source||(o=r.source,H(ne,o)))?F(n,r.embed):T(n,r).then(function(e){F(n,e.html)}).catch(P(n)),e.close()},onChange:function(e,t){switch(t.name){case"source":u=d.get(),l=C(e.getData(),"source"),u.source!==l.source&&(M(h,m)({url:l.source,html:""}),T(m,l).then(M(h,m)).catch(P(m)));break;case"embed":c=C((i=e).getData()),s=$(m,c.embed),i.setData(D(s));break;case"dimensions":case"altsource":case"poster":n=t.name,o=C((r=e).getData(),n),a=k(m,o),r.setData(D(p(p({},o),{embed:a})))}var r,n,o,a,i,c,s,u,l;d.set(C(e.getData()))},initialData:a})}function U(a,e){if(!1===a.getParam("media_filter_html",!0))return e;var i,c=Y();return Q({validate:!1,allow_conditional_comments:!1,comment:function(e){i||c.comment(e)},cdata:function(e){i||c.cdata(e)},text:function(e,t){i||c.text(e,t)},start:function(e,t,r){if(i=!0,"script"!==e&&"noscript"!==e&&"svg"!==e){for(var n=t.length-1;0<=n;n--){var o=t[n].name;0===o.indexOf("on")&&(delete t.map[o],t.splice(n,1)),"style"===o&&(t[n].value=a.dom.serializeStyle(a.dom.parseStyle(t[n].value),e))}c.start(e,t,r),i=!1}},end:function(e){i||c.end(e)}},X({})).parse(e),c.getContent()}function E(e,t,r,n){void 0===n&&(n=null);var o=e.attr(r);return s(o)?o:H(t,r)?null:n}function N(e,t,r){var n="img"===t.name||"video"===e.name,o="audio"===e.name?"30":"150",a=n?o:null;t.attr({width:E(e,r,"width",n?"300":null),height:E(e,r,"height",a)})}function R(o,t){var e=t.name,r=new oe("span",1);r.attr({contentEditable:"false",style:t.attr("style"),"data-mce-object":e,class:"mce-preview-object mce-object-"+e}),ce(o,t,r);var n,a=o.dom.parseStyle(t.attr("style")),i=new oe(e,1);N(t,i,a),i.attr({src:t.attr("src"),style:t.attr("style"),class:t.attr("class")}),"iframe"===e?i.attr({allowfullscreen:t.attr("allowfullscreen"),frameborder:"0"}):(h(["controls","crossorigin","currentTime","loop","muted","poster","preload"],function(e){i.attr(e,t.attr(e))}),s(n=r.attr("data-mce-html"))&&function(e,t,r){for(var n=ie({forced_root_block:!1,validate:!1},o.schema).parse(r,{context:e});n.firstChild;)t.append(n.firstChild)}(e,i,n));var c=new oe("span",1);return c.attr("class","mce-shim"),r.append(i),r.append(c),r}function L(e){for(;e=e.parent;)if(e.attr("data-ephox-embed-iri")||(t=e.attr("class"))&&/\btiny-pageembed\b/.test(t))return 1;var t}var I=function(r){function e(){return o}function t(e){return e(r)}var n=a(r),o={fold:function(e,t){return t(r)},isSome:m,isNone:c,getOr:n,getOrThunk:n,getOrDie:n,getOrNull:n,getOrUndefined:n,or:e,orThunk:e,map:function(e){return I(e(r))},each:function(e){e(r)},bind:t,exists:t,forall:t,filter:function(e){return e(r)?o:d},toArray:function(){return[r]},toString:function(){return"some("+r+")"}};return o},B={some:I,none:r,from:function(e){return null==e?d:I(e)}},W=Array.prototype.push,G=Object.keys,q=Object.hasOwnProperty,H=function(e,t){return q.call(e,t)},J=tinymce.util.Tools.resolve("tinymce.util.Tools"),K=tinymce.util.Tools.resolve("tinymce.dom.DOMUtils"),Q=tinymce.util.Tools.resolve("tinymce.html.SaxParser"),V=K.DOM,X=tinymce.util.Tools.resolve("tinymce.html.Schema"),Y=tinymce.util.Tools.resolve("tinymce.html.Writer"),Z=K.DOM,ee=["source","altsource"],te=[{regex:/youtu\.be\/([\w\-_\?&=.]+)/i,type:"iframe",w:560,h:314,url:"www.youtube.com/embed/$1",allowFullscreen:!0},{regex:/youtube\.com(.+)v=([^&]+)(&([a-z0-9&=\-_]+))?/i,type:"iframe",w:560,h:314,url:"www.youtube.com/embed/$2?$4",allowFullscreen:!0},{regex:/youtube.com\/embed\/([a-z0-9\?&=\-_]+)/i,type:"iframe",w:560,h:314,url:"www.youtube.com/embed/$1",allowFullscreen:!0},{regex:/vimeo\.com\/([0-9]+)/,type:"iframe",w:425,h:350,url:"player.vimeo.com/video/$1?title=0&byline=0&portrait=0&color=8dc7dc",allowFullscreen:!0},{regex:/vimeo\.com\/(.*)\/([0-9]+)/,type:"iframe",w:425,h:350,url:"player.vimeo.com/video/$2?title=0&amp;byline=0",allowFullscreen:!0},{regex:/maps\.google\.([a-z]{2,3})\/maps\/(.+)msid=(.+)/,type:"iframe",w:425,h:350,url:'maps.google.com/maps/ms?msid=$2&output=embed"',allowFullscreen:!1},{regex:/dailymotion\.com\/video\/([^_]+)/,type:"iframe",w:480,h:270,url:"www.dailymotion.com/embed/video/$1",allowFullscreen:!0},{regex:/dai\.ly\/([^_]+)/,type:"iframe",w:480,h:270,url:"www.dailymotion.com/embed/video/$1",allowFullscreen:!0}],re=tinymce.util.Tools.resolve("tinymce.util.Promise"),ne={},oe=tinymce.util.Tools.resolve("tinymce.html.Node"),ae=tinymce.util.Tools.resolve("tinymce.Env"),ie=tinymce.util.Tools.resolve("tinymce.html.DomParser"),ce=function(e,t,r){for(var n=t.attributes,o=n.length;o--;){var a=n[o].name,i=n[o].value;"width"!==a&&"height"!==a&&"style"!==a&&("data"!==a&&"src"!==a||(i=e.convertURL(i,a)),r.attr("data-mce-p-"+a,i))}var c=t.firstChild&&t.firstChild.value;c&&(r.attr("data-mce-html",escape(U(e,c))),r.firstChild=null)};n.add("media",function(e){var t,r,n,o,d,a,i;function c(){return r.execCommand("mceMedia")}return(t=e).addCommand("mceMedia",function(){z(t)}),(r=e).ui.registry.addToggleButton("media",{tooltip:"Insert/edit media",icon:"embed",onAction:c,onSetup:(n=r,o=["img[data-mce-object]","span[data-mce-object]","div[data-ephox-embed-iri]"],function(e){return n.selection.selectorChangedWithUnbind(o.join(","),e.setActive).unbind})}),r.ui.registry.addMenuItem("media",{icon:"embed",text:"Media...",onAction:c}),e.on("ResolveName",function(e){var t;1===e.target.nodeType&&(t=e.target.getAttribute("data-mce-object"))&&(e.name=t)}),(d=e).on("preInit",function(){var t=d.schema.getSpecialElements();J.each("video audio iframe object".split(" "),function(e){t[e]=new RegExp("</"+e+"[^>]*>","gi")});var u,r=d.schema.getBoolAttrs();J.each("webkitallowfullscreen mozallowfullscreen allowfullscreen".split(" "),function(e){r[e]={}}),d.parser.addNodeFilter("iframe,video,audio,object,embed,script",(u=d,function(e){for(var t,r,n,o,a,i,c,s=e.length;s--;)(t=e[s]).parent&&(t.parent.attr("data-mce-object")||"script"===t.name&&!(r=b(v(u),t.attr("src")))||(r&&(r.width&&t.attr("width",r.width.toString()),r.height&&t.attr("height",r.height.toString())),("iframe"===(c=t.name)||"video"===c||"audio"===c)&&u.getParam("media_live_embeds",!0)&&ae.ceFalse?L(t)||t.replace(R(u,t)):L(t)||t.replace((n=u,i=void 0,a=(o=t).name,(i=new oe("img",1)).shortEnded=!0,ce(n,o,i),N(o,i,{}),i.attr({style:o.attr("style"),src:ae.transparentSrc,"data-mce-object":a,class:"mce-object mce-object-"+a}),i))))})),d.serializer.addAttributeFilter("data-mce-object",function(e,t){for(var r,n,o,a,i,c,s,u,l=e.length;l--;)if((r=e[l]).parent){for(s=r.attr(t),n=new oe(s,1),"audio"!==s&&"script"!==s&&((u=r.attr("class"))&&-1!==u.indexOf("mce-preview-object")?n.attr({width:r.firstChild.attr("width"),height:r.firstChild.attr("height")}):n.attr({width:r.attr("width"),height:r.attr("height")})),n.attr({style:r.attr("style")}),o=(a=r.attributes).length;o--;){var m=a[o].name;0===m.indexOf("data-mce-p-")&&n.attr(m.substr(11),a[o].value)}"script"===s&&n.attr("type","text/javascript"),(i=r.attr("data-mce-html"))&&((c=new oe("#text",3)).raw=!0,c.value=U(d,unescape(i)),n.append(c)),r.replace(n)}})}),d.on("SetContent",function(){d.$("span.mce-preview-object").each(function(e,t){var r=d.$(t);0===r.find("span.mce-shim").length&&r.append('<span class="mce-shim"></span>')})}),(a=e).on("click keyup touchend",function(){var e=a.selection.getNode();e&&a.dom.hasClass(e,"mce-preview-object")&&a.dom.getAttrib(e,"data-mce-selected")&&e.setAttribute("data-mce-selected","2")}),a.on("ObjectSelected",function(e){"script"===e.target.getAttribute("data-mce-object")&&e.preventDefault()}),a.on("ObjectResized",function(e){var t,r=e.target;!r.getAttribute("data-mce-object")||(t=r.getAttribute("data-mce-html"))&&(t=unescape(t),r.setAttribute("data-mce-html",escape(S(t,{width:String(e.width),height:String(e.height)}))))}),i=e,{showDialog:function(){z(i)}}})}();