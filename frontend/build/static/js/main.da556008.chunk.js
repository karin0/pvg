(this["webpackJsonppvg-ng-frontend"]=this["webpackJsonppvg-ng-frontend"]||[]).push([[0],{116:function(e,t,a){e.exports=a(191)},191:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(9),o=a.n(i),l=a(43),s=a(44),c=a(55),u=a(45),m=a(56),d=(a(121),a(238)),f=a(237),g=a(239),p=a(195),h=a(242),v=a(240),E=a(243),b=a(245),y=a(234),w=a(5),_=a(244),j=a(98),O=a.n(j),S=a(102),x=a(103),C=a(230),k=a(231),N=a(100),T=a(42),D=Object(T.a)({palette:{primary:{main:"#eeeeee"}}}),A=8;function B(e){var t=e.data,a=e.index,n=e.style;return r.a.cloneElement(t[a],{style:Object(x.a)({},n,{top:n.top+A})})}var R=r.a.createContext({}),I=r.a.forwardRef((function(e,t){var a=r.a.useContext(R);return r.a.createElement("div",Object.assign({ref:t},e,a))})),J=r.a.forwardRef((function(e,t){var a=e.children,n=Object(S.a)(e,["children"]),i=r.a.Children.toArray(a),o=Object(C.a)(D.breakpoints.up("sm"),{noSsr:!0}),l=i.length,s=o?36:48,c=function(e){return r.a.isValidElement(e)&&e.type===k.a?48:s};return r.a.createElement("div",{ref:t},r.a.createElement(R.Provider,{value:n},r.a.createElement(N.a,{itemData:i,height:(l>8?8*s:i.map(c).reduce((function(e,t){return e+t}),0))+2*A,width:"100%",key:l,outerElementType:I,innerElementType:"ul",itemSize:function(e){return c(i[e])},overscanCount:5,itemCount:l},B)))})),P=a(101),W=a(235),F=a(236),L=a(41),M=a(93),Q=a.n(M),z=a(58),H=a(96),V=window.location.protocol+"//"+window.location.hostname+(window.location.port?":"+window.location.port+"/":"/"),q=50,G=Object(L.a)({mr:{marginRight:"0.5em"},md:{marginDown:"1em"}});function K(e){var t=G(),a=e.img,n="https://www.pixiv.net/artworks/"+a.pid.toString(),i="https://www.pixiv.net/member.php?id="+a.aid.toString();return r.a.createElement(p.a,null,r.a.createElement("div",{className:t.md},r.a.createElement(W.a,{href:n,className:t.mr},a.title),r.a.createElement(W.a,{href:i},a.author)),a.tags.map((function(n){return r.a.createElement(b.a,{className:t.mr,label:n,onClick:function(){e.update_tags(n,a.nav)}})})))}function U(e){var t=Object(n.useState)(-1),a=Object(P.a)(t,2),i=a[0],o=a[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(H.a,{photos:e.images,onClick:function(e,t){var a=t.index;return o(a)}}),r.a.createElement(z.b,null,i>=0?r.a.createElement(z.a,{onClose:function(){return o(-1)}},r.a.createElement(z.c,{currentIndex:i,views:e.views})):null))}var X=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={offset:a.props.default_offset},a.set_offset=function(e){a.setState({offset:e})},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e,t,a=this,n=this.state.offset,i=this.props.pages,o=i.length;return n<o?(e=i[n],t=this.props.modal_pages[n]):e=t=[],r.a.createElement(r.a.Fragment,null,r.a.createElement(F.a,{container:!0,justify:"center"},r.a.createElement(Q.a,{limit:1,offset:n,total:o,onClick:function(e,t){return a.set_offset(t)},otherPageColor:"default"})),r.a.createElement(U,{images:e,views:t}))}}]),t}(n.Component);function Y(e){var t=[],a=[],n=[],i=[],o=0,l=!0,s=!1,c=void 0;try{for(var u,m=e.images[Symbol.iterator]();!(l=(u=m.next()).done);l=!0){var d=u.value;d.nav===e.locating_id&&(o=t.length);var f=V+"img/"+d.nav;n.push({src:f,width:d.w,height:d.h}),i.push({source:f,caption:r.a.createElement(K,{img:d,update_tags:e.update_tags})}),n.length>=q&&(t.push(n),a.push(i),n=[],i=[])}}catch(g){s=!0,c=g}finally{try{l||null==m.return||m.return()}finally{if(s)throw c}}return n.length&&(t.push(n),a.push(i)),r.a.createElement(X,{pages:t,modal_pages:a,default_offset:o,key:Date.now()})}var Z=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).set_tags=function(e){console.log("sets",e),a.setState({tags_curr:e,locating_id:-1},a.update)},a.add_tag=function(e,t){console.log("add",e),a.state.tags_curr.includes(e)||a.setState((function(a){return{tags_curr:a.tags_curr.concat([e]),locating_id:t}}),a.update)},a.state={error:null,loaded:!1,images:[],tags_list:[],tags_curr:[],locating_id:-1},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"update",value:function(){var e=this;console.log("update with",this.state.tags_curr),fetch(V+"select",{crossDomain:!0,method:"POST",body:JSON.stringify({filters:this.state.tags_curr}),headers:new Headers({"Content-Type":"application/json"})}).then((function(e){return e.json()})).then((function(t){var a=new Map,n=!0,r=!1,i=void 0;try{for(var o,l=t.items[Symbol.iterator]();!(n=(o=l.next()).done);n=!0){var s=o.value,c=!0,u=!1,m=void 0;try{for(var d,f=s.tags[Symbol.iterator]();!(c=(d=f.next()).done);c=!0){var g=d.value,p=a.get(g);a.set(g,p?p+1:1)}}catch(h){u=!0,m=h}finally{try{c||null==f.return||f.return()}finally{if(u)throw m}}}}catch(h){r=!0,i=h}finally{try{n||null==l.return||l.return()}finally{if(r)throw i}}(a=Array.from(a[Symbol.iterator]())).sort((function(e,t){return function(e,t,a){return e<t?-1:e>t?1:a()}(t[1],e[1],(function(){return function(e,t){return e<t?-1:e>t?1:0}(e[0],t[0])}))})),e.setState({loaded:!0,error:null,images:t.items,tags_list:a.map((function(e){return e[0]}))})}),(function(t){e.setState({loaded:!0,error:t,images:[],tags_list:[]})}))}},{key:"componentDidMount",value:function(){this.update()}},{key:"render",value:function(){var e=this;console.log("QAQ",this.state.tags_curr);var t=this.props.classes;return r.a.createElement(y.a,{theme:D},r.a.createElement(f.a,null),r.a.createElement(d.a,{position:"static"},r.a.createElement(g.a,null,r.a.createElement(v.a,{edge:"start",className:t.menuButton,color:"inherit","aria-label":"open drawer"},r.a.createElement(O.a,null)),r.a.createElement("div",{className:t.box},r.a.createElement(_.a,{multiple:!0,freeSolo:!0,options:this.state.tags_list,ListboxComponent:J,renderTags:function(e,t){return e.map((function(e,a){return r.a.createElement(b.a,Object.assign({variant:"outlined",label:e},t({index:a})))}))},renderInput:function(e){return r.a.createElement(E.a,Object.assign({},e,{fullWidth:!0}))},onChange:function(t,a){return e.set_tags(a)},renderOption:function(e){return r.a.createElement(p.a,{noWrap:!0},e)},value:this.state.tags_curr})))),r.a.createElement(h.a,{className:t.card,maxWidth:"lg"},this.state.loaded?this.state.error?r.a.createElement("div",null,"Error"):r.a.createElement(Y,{images:this.state.images,locating_id:this.state.locating_id,update_tags:this.add_tag}):r.a.createElement("div",null,"Loading..")))}}]),t}(n.Component),$=Object(w.a)((function(e){return{menuButton:{marginRight:e.spacing(2)},card:{paddingTop:e.spacing(4),paddingBottom:e.spacing(4)},box:{width:"100%","& > * + *":{marginTop:e.spacing(3)}}}}))(Z);o.a.render(r.a.createElement($,null),document.getElementById("root"))}},[[116,1,2]]]);
//# sourceMappingURL=main.da556008.chunk.js.map