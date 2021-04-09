(this["webpackJsonpreact-http-request"]=this["webpackJsonpreact-http-request"]||[]).push([[0],{36:function(t,e,n){},37:function(t,e,n){},56:function(t,e,n){},63:function(t,e,n){},64:function(t,e,n){},65:function(t,e,n){"use strict";n.r(e);var c=n(0),s=n.n(c),o=n(30),a=n.n(o),r=(n(36),n(9)),i=n(10),l=n(12),u=n(11),h=n(13),d=n(2),j=(n(37),n(16)),p=n(8),b=n.n(p),O=b.a.create({baseURL:"https://jsonplaceholder.typicode.com"});O.defaults.headers.common.Autorization="AUTH TOKEN FROM INSTANCE";var f=O,m=(n(56),n(1)),v=Object(d.g)((function(t){return Object(m.jsxs)("article",{className:"Post",onClick:t.clicked,children:[Object(m.jsx)("h1",{children:t.title}),Object(m.jsx)("div",{className:"Info",children:Object(m.jsx)("div",{className:"Author",children:t.author})})]})})),x=(n(63),function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(r.a)(this,n);for(var c=arguments.length,s=new Array(c),o=0;o<c;o++)s[o]=arguments[o];return(t=e.call.apply(e,[this].concat(s))).state={loadedPost:null},t.deletePostHandler=function(){b.a.delete("/posts/"+t.props.match.params.id).then((function(t){console.log(t)}))},t}return Object(i.a)(n,[{key:"componentDidMount",value:function(){console.log(this.props),this.loadData()}},{key:"componentDidUpdate",value:function(){this.loadData()}},{key:"loadData",value:function(){var t=this;this.props.match.params.id&&(!this.state.loadedPost||this.state.loadedPost&&this.state.loadedPost.id!==this.props.match.params.id)&&b.a.get("/posts/"+this.props.match.params.id).then((function(e){t.setState({loadedPost:e.data})})).catch((function(t){console.log(t)}))}},{key:"render",value:function(){var t=Object(m.jsx)("p",{style:{textAlign:"center"},children:"Please select a Post!"});return this.props.match.params.id&&(t=Object(m.jsx)("p",{style:{textAlign:"center"},children:"Loading...!"})),this.state.loadedPost&&(t=Object(m.jsxs)("div",{className:"FullPost",children:[Object(m.jsx)("h1",{children:this.state.loadedPost.title}),Object(m.jsx)("p",{children:this.state.loadedPost.body}),Object(m.jsx)("div",{className:"Edit",children:Object(m.jsx)("button",{onClick:this.deletePostHandler,className:"Delete",children:"Delete"})})]})),t}}]),n}(c.Component)),y=(n(64),function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(r.a)(this,n);for(var c=arguments.length,s=new Array(c),o=0;o<c;o++)s[o]=arguments[o];return(t=e.call.apply(e,[this].concat(s))).state={posts:[]},t.postSelectedHandler=function(e){t.props.history.push("/posts/"+e)},t}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var t=this;console.log(this.props),f.get("/posts").then((function(e){var n=e.data.slice(0,4).map((function(t){return Object(j.a)(Object(j.a)({},t),{},{author:"Ciamac"})}));t.setState({posts:n})})).catch((function(t){console.log(t)}))}},{key:"render",value:function(){var t=this,e=Object(m.jsx)("p",{style:{textAlign:"center"},children:"Something went wrong!"});return this.state.error||(e=this.state.posts.map((function(e){return Object(m.jsx)(v,{author:e.author,title:e.title,clicked:function(){return t.postSelectedHandler(e.id)}})}))),Object(m.jsxs)("div",{children:[Object(m.jsx)("section",{className:"Posts",children:e}),Object(m.jsx)(d.b,{path:this.props.match.url+"/:id",exact:!0,component:x})]})}}]),n}(c.Component)),g=function(t){return function(e){Object(l.a)(c,e);var n=Object(u.a)(c);function c(){var t;Object(r.a)(this,c);for(var e=arguments.length,s=new Array(e),o=0;o<e;o++)s[o]=arguments[o];return(t=n.call.apply(n,[this].concat(s))).state={component:null},t}return Object(i.a)(c,[{key:"componentDidMount",value:function(){var e=this;t().then((function(t){e.setState({component:t.default})}))}},{key:"render",value:function(){var t=this.state.component;return t?Object(m.jsx)(t,Object(j.a)({},this.props)):null}}]),c}(c.Component)}((function(){return n.e(3).then(n.bind(null,67))})),P=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(r.a)(this,n);for(var c=arguments.length,s=new Array(c),o=0;o<c;o++)s[o]=arguments[o];return(t=e.call.apply(e,[this].concat(s))).state={auth:!0},t}return Object(i.a)(n,[{key:"render",value:function(){return Object(m.jsxs)("div",{className:"Blog",children:[Object(m.jsx)("header",{children:Object(m.jsx)("nav",{children:Object(m.jsxs)("ul",{children:[Object(m.jsx)("li",{children:Object(m.jsx)(h.b,{to:"/posts/",exact:!0,activeClassName:"my-active",activeStyle:{color:"#fa923f",textDecoration:"underline"},children:"Posts"})}),Object(m.jsx)("li",{children:Object(m.jsx)(h.b,{to:{pathname:"/new-post",hash:"#submit",search:"?quick-submit=true"},children:"New Post"})})]})})}),Object(m.jsxs)(d.d,{children:[this.state.auth?Object(m.jsx)(d.b,{path:"/new-post",component:g}):null,Object(m.jsx)(d.b,{path:"/posts",component:y}),Object(m.jsx)(d.b,{render:function(){return Object(m.jsx)("h1",{children:"Not found"})}})]})]})}}]),n}(c.Component),k=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return Object(m.jsx)(h.a,{children:Object(m.jsx)("div",{className:"App",children:Object(m.jsx)(P,{})})})}}]),n}(c.Component),N=function(t){t&&t instanceof Function&&n.e(4).then(n.bind(null,68)).then((function(e){var n=e.getCLS,c=e.getFID,s=e.getFCP,o=e.getLCP,a=e.getTTFB;n(t),c(t),s(t),o(t),a(t)}))};b.a.defaults.baseURL="https://jsonplaceholder.typicode.com",b.a.defaults.headers.common.Autorization="AUTH TOKEN",b.a.defaults.headers.post["Content-Type"]="application/json",b.a.interceptors.request.use((function(t){return console.log(t),t}),(function(t){return console.log(t),Promise.reject(t)})),b.a.interceptors.response.use((function(t){return console.log(t),t}),(function(t){return console.log(t),Promise.reject(t)})),a.a.render(Object(m.jsx)(s.a.StrictMode,{children:Object(m.jsx)(k,{})}),document.getElementById("root")),N()}},[[65,1,2]]]);
//# sourceMappingURL=main.7caa4548.chunk.js.map