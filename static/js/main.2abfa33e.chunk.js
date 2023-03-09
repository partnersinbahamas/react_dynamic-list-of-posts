(this["webpackJsonpreact_dynamic-list-of-posts"]=this["webpackJsonpreact_dynamic-list-of-posts"]||[]).push([[0],{15:function(e,t,c){},17:function(e,t,c){},18:function(e,t,c){"use strict";c.r(t);var s=c(7),a=c.n(s),n=c(5),r=c(2),i=c(3),l=c.n(i),o=c(1),d=c.n(o),u=(c(13),c(14),c(15),c(4)),j=c.n(u),b="https://mate.academy/students-api";function m(e){return new Promise((function(t){setTimeout(t,e)}))}function h(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",c=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,s={method:t};return c&&(s.body=JSON.stringify(c),s.headers={"Content-Type":"application/json; charset=UTF-8"}),m(300).then((function(){return fetch(b+e,s)})).then((function(e){if(!e.ok)throw Error("".concat(e.status," - ").concat(e.statusText));return e.json()}))}var O=function(e){return h(e)},p=function(e,t){return h(e,"POST",t)},x=function(e){return h(e,"DELETE")},f=function(e){return O("/comments?postId=".concat(e))},v=function(e){return O("/posts/".concat(e))},N=function(e,t){return p("/comments?postId=".concat(e),t)},y=function(e){return x("/comments/".concat(e))},g=c(0),k=function(e){var t=e.posts,c=e.selectPost,s=e.selectedPostId;return Object(g.jsxs)("div",{"data-cy":"PostsList",children:[Object(g.jsx)("p",{className:"title",children:"Posts:"}),Object(g.jsxs)("table",{className:"table is-fullwidth is-striped is-hoverable is-narrow",children:[Object(g.jsx)("thead",{children:Object(g.jsxs)("tr",{className:"has-background-link-light",children:[Object(g.jsx)("th",{children:"#"}),Object(g.jsx)("th",{children:"Title"}),Object(g.jsx)("th",{children:" "})]})}),Object(g.jsx)("tbody",{children:t.map((function(e){return Object(g.jsxs)("tr",{"data-cy":"Post",children:[Object(g.jsx)("td",{"data-cy":"PostId",children:e.id}),Object(g.jsx)("td",{"data-cy":"PostTitle",children:e.title}),Object(g.jsx)("td",{className:"has-text-right is-vcentered",children:s===e.id?Object(g.jsx)("button",{type:"button","data-cy":"PostButton",className:j()("button","is-link",{"is-light":s!==e.id}),onClick:function(){c(null)},children:"Close"}):Object(g.jsx)("button",{type:"button","data-cy":"PostButton",className:j()("button","is-link",{"is-light":s!==e.id}),onClick:function(){c(e.id)},children:"Open"})})]},e.id)}))})]})]})},w=(c(17),function(){return Object(g.jsx)("div",{className:"Loader","data-cy":"Loader",children:Object(g.jsx)("div",{className:"Loader__content"})})}),S=function(e){var t=e.postId,c=e.setIsError,s=Object(o.useState)(""),a=Object(r.a)(s,2),i=a[0],d=a[1],u=Object(o.useState)(""),b=Object(r.a)(u,2),m=b[0],h=b[1],O=Object(o.useState)(""),p=Object(r.a)(O,2),x=p[0],f=p[1],v=Object(o.useState)(!1),y=Object(r.a)(v,2),k=y[0],w=y[1],S=Object(o.useState)(!1),C=Object(r.a)(S,2),E=C[0],I=C[1],P=Object(o.useState)(!1),T=Object(r.a)(P,2),F=T[0],B=T[1],L=Object(o.useState)(!1),M=Object(r.a)(L,2),D=M[0],U=M[1],A=Object(o.useCallback)((function(e,t){var c=t.target.value;i&&w(!1),m&&I(!1),x&&B(!1)," "!==c&&e(c)}),[m,i,x]),_=function(){var e=Object(n.a)(l.a.mark((function e(s){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(s.preventDefault(),U(!0),i||w(!0),m||I(!0),x||B(!0),!(t&&i&&m&&x)){e.next=18;break}return a={postId:t,name:i,email:m,body:x},e.prev=7,e.next=10,N(t,a);case 10:e.next=15;break;case 12:e.prev=12,e.t0=e.catch(7),c(!0);case 15:return e.prev=15,U(!1),e.finish(15);case 18:U(!1),f("");case 20:case"end":return e.stop()}}),e,null,[[7,12,15,18]])})));return function(t){return e.apply(this,arguments)}}();return Object(g.jsxs)("form",{"data-cy":"NewCommentForm",onSubmit:function(e){return _(e)},children:[Object(g.jsxs)("div",{className:"field","data-cy":"NameField",children:[Object(g.jsx)("label",{className:"label",htmlFor:"comment-author-name",children:"Author Name"}),Object(g.jsxs)("div",{className:"control has-icons-left has-icons-right",children:[Object(g.jsx)("input",{type:"text",name:"name",id:"comment-author-name",placeholder:"Name Surname",className:j()("input",{"is-danger":k}),value:i,onChange:function(e){return A(d,e)}}),Object(g.jsx)("span",{className:"icon is-small is-left",children:Object(g.jsx)("i",{className:"fas fa-user"})}),k&&Object(g.jsx)("span",{className:"icon is-small is-right has-text-danger","data-cy":"ErrorIcon",children:Object(g.jsx)("i",{className:"fas fa-exclamation-triangle"})})]}),k&&Object(g.jsx)("p",{className:"help is-danger","data-cy":"ErrorMessage",children:"Name is required"})]}),Object(g.jsxs)("div",{className:"field","data-cy":"EmailField",children:[Object(g.jsx)("label",{className:"label",htmlFor:"comment-author-email",children:"Author Email"}),Object(g.jsxs)("div",{className:"control has-icons-left has-icons-right",children:[Object(g.jsx)("input",{type:"text",name:"email",id:"comment-author-email",placeholder:"email@test.com",className:j()("input",{"is-danger":E}),value:m,onChange:function(e){return A(h,e)}}),Object(g.jsx)("span",{className:"icon is-small is-left",children:Object(g.jsx)("i",{className:"fas fa-envelope"})}),E&&Object(g.jsx)("span",{className:"icon is-small is-right has-text-danger","data-cy":"ErrorIcon",children:Object(g.jsx)("i",{className:"fas fa-exclamation-triangle"})})]}),E&&Object(g.jsx)("p",{className:"help is-danger","data-cy":"ErrorMessage",children:"Email is required"})]}),Object(g.jsxs)("div",{className:"field","data-cy":"BodyField",children:[Object(g.jsx)("label",{className:"label",htmlFor:"comment-body",children:"Comment Text"}),Object(g.jsx)("div",{className:"control",children:Object(g.jsx)("textarea",{id:"comment-body",name:"body",placeholder:"Type comment here",className:j()("textarea",{"is-danger":F}),value:x,onChange:function(e){return A(f,e)}})}),F&&Object(g.jsx)("p",{className:"help is-danger","data-cy":"ErrorMessage",children:"Enter some text"})]}),Object(g.jsxs)("div",{className:"field is-grouped",children:[Object(g.jsx)("div",{className:"control",children:Object(g.jsx)("button",{type:"submit",className:j()("button","is-link",{"is-loading":D}),children:"Add"})}),Object(g.jsx)("div",{className:"control",children:Object(g.jsx)("button",{type:"reset",className:"button is-link is-light",onClick:function(){d(""),h(""),f("")},children:"Clear"})})]})]})},C=d.a.memo((function(e){var t=e.postId,c=Object(o.useState)([]),s=Object(r.a)(c,2),a=s[0],i=s[1],d=Object(o.useState)(null),u=Object(r.a)(d,2),j=u[0],b=u[1],m=Object(o.useState)(!1),h=Object(r.a)(m,2),O=h[0],p=h[1],x=Object(o.useState)(!1),N=Object(r.a)(x,2),k=N[0],C=N[1],E=Object(o.useState)(!1),I=Object(r.a)(E,2),P=I[0],T=I[1],F=function(){var e=Object(n.a)(l.a.mark((function e(){var c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f(t);case 3:c=e.sent,i(c),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),null!==j&&C(!0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();Object(o.useEffect)((function(){F()}),[t,a]);var B=function(){var e=Object(n.a)(l.a.mark((function e(){var c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,p(!0),e.next=4,v(t);case 4:c=e.sent,b(c),T(!1),C(!1),p(!1),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),C(!0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}();Object(o.useEffect)((function(){null!==t&&B()}),[t]);var L=function(){var e=Object(n.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y(t);case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),C(!0);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(t){return e.apply(this,arguments)}}();return Object(g.jsx)("div",{className:"content","data-cy":"PostDetails",children:Object(g.jsxs)("div",{className:"content","data-cy":"PostDetails",children:[Object(g.jsxs)("div",{className:"block",children:[j&&Object(g.jsxs)("h2",{"data-cy":"PostTitle",children:["#",null===j||void 0===j?void 0:j.id,":"," ",null===j||void 0===j?void 0:j.title]}),Object(g.jsx)("p",{"data-cy":"PostBody",children:null===j||void 0===j?void 0:j.body})]}),Object(g.jsxs)("div",{className:"block",children:[O&&Object(g.jsx)(w,{}),k&&Object(g.jsx)("div",{className:"notification is-danger","data-cy":"CommentsError",children:"Something went wrong"}),!a.length&&Object(g.jsx)("p",{className:"title is-4","data-cy":"NoCommentsMessage",children:"No comments yet"}),!!a.length&&Object(g.jsx)("p",{className:"title is-4",children:"Comments:"}),a.map((function(e){return Object(g.jsx)(g.Fragment,{children:j&&Object(g.jsxs)("article",{className:"message is-small","data-cy":"Comment",children:[Object(g.jsxs)("div",{className:"message-header",children:[Object(g.jsx)("a",{href:"mailto:".concat(e.email),"data-cy":"CommentAuthor",children:e.name}),Object(g.jsx)("button",{"data-cy":"CommentDelete",type:"button",className:"delete is-small","aria-label":"delete",onClick:function(){return L(e.id)},children:"delete button"})]}),Object(g.jsx)("div",{className:"message-body","data-cy":"CommentBody",children:e.body})]},e.id)})})),Object(g.jsx)("button",{"data-cy":"WriteCommentButton",type:"button",className:"button is-link",onClick:function(){return T(!0)},children:"Write a comment"})]}),P&&Object(g.jsx)(S,{postId:t,setIsError:C})]})})})),E=d.a.memo((function(e){var t=e.users,c=e.selectUserId,s=e.userId,a=Object(o.useState)(!1),n=Object(r.a)(a,2),i=n[0],l=n[1],d=Object(o.useMemo)((function(){return t[s-1]}),[s]);return Object(g.jsxs)("div",{"data-cy":"UserSelector",className:"dropdown is-active",children:[Object(g.jsx)("div",{className:"dropdown-trigger",children:Object(g.jsxs)("button",{type:"button",className:"button","aria-haspopup":"true","aria-controls":"dropdown-menu",onClick:function(){l(!i)},children:[d?Object(g.jsx)("p",{children:d.name}):Object(g.jsx)("span",{children:"Choose a user"}),Object(g.jsx)("span",{className:"icon is-small",children:Object(g.jsx)("i",{className:"fas fa-angle-down","aria-hidden":"true"})})]})}),i&&Object(g.jsx)("div",{className:"dropdown-menu",id:"dropdown-menu",role:"menu",children:Object(g.jsx)("div",{className:"dropdown-content",children:t.map((function(e){return Object(g.jsx)("a",{href:"#user-".concat(e.id),className:"dropdown-item",onClick:function(){c(e.id),l(!1)},children:e.name},e.id)}))})})]})})),I=function(){var e=Object(o.useState)([]),t=Object(r.a)(e,2),c=t[0],s=t[1],a=Object(o.useState)(!1),i=Object(r.a)(a,2),d=i[0],u=i[1],b=Object(o.useState)(-1),m=Object(r.a)(b,2),h=m[0],p=m[1],x=Object(o.useState)([]),f=Object(r.a)(x,2),v=f[0],N=f[1],y=Object(o.useState)(!1),S=Object(r.a)(y,2),I=S[0],P=S[1],T=Object(o.useState)(null),F=Object(r.a)(T,2),B=F[0],L=F[1],M=function(){var e=Object(n.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O("/users");case 3:t=e.sent,s(t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),u(!0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();Object(o.useEffect)((function(){M()}),[]);var D=Object(o.useCallback)((function(e){p(e)}),[h]),U=function(){var e=Object(n.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,P(!0),e.next=4,O("/posts?userId=".concat(h));case 4:t=e.sent,P(!1),N(t),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),u(!0);case 12:return e.prev=12,P(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,9,12,15]])})));return function(){return e.apply(this,arguments)}}();Object(o.useEffect)((function(){U()}),[h]);var A=Object(o.useCallback)((function(e){L(e)}),[B]);return Object(g.jsx)("main",{className:"section",children:Object(g.jsx)("div",{className:"container",children:Object(g.jsxs)("div",{className:"tile is-ancestor",children:[Object(g.jsx)("div",{className:"tile is-parent",children:Object(g.jsxs)("div",{className:"tile is-child box is-success",children:[Object(g.jsx)("div",{className:"block",children:Object(g.jsx)(E,{users:c,selectUserId:D,userId:h})}),Object(g.jsxs)("div",{className:"block","data-cy":"MainContent",children:[h<0&&Object(g.jsx)("p",{"data-cy":"NoSelectedUser",children:"No user selected"}),I&&Object(g.jsx)(w,{}),d&&Object(g.jsx)("div",{className:"notification is-danger","data-cy":"PostsLoadingError",children:"Something went wrong!"}),-1!==h&&!v.length&&!I&&Object(g.jsx)("p",{className:"notification is-warning","data-cy":"NoPostsYet",children:"No posts yet"}),!!v.length&&!I&&Object(g.jsx)(k,{posts:v,selectPost:A,selectedPostId:B})]})]})}),Object(g.jsx)("div",{"data-cy":"Sidebar",className:j()("tile","is-parent","is-8-desktop","Sidebar",{"Sidebar--open":B}),children:Object(g.jsx)("div",{className:"tile is-child box is-success ",children:Object(g.jsx)(C,{postId:B})})})]})})})};a.a.render(Object(g.jsx)(I,{}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.2abfa33e.chunk.js.map