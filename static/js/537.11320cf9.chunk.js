"use strict";(self.webpackChunkajaib_search_app=self.webpackChunkajaib_search_app||[]).push([[537],{3537:function(n,e,t){t.r(e),t.d(e,{default:function(){return k}});var r,a,i,o,d,s,c=t(8152),l=t(168),p=t(2791),u=t(5751),f=t(184),b=u.ZP.div(r||(r=(0,l.Z)(["\n  display: flex;\n  justify-content: flex-end;\n  margin-top: 20px;\n\n  button {\n    margin-right: 8px;\n    background: #ffffff;\n    border: 1px solid #e6e9eb;\n    cursor: pointer;\n\n    &.active {\n      color: #339fff;\n      border-color: #339fff;\n    }\n\n    &:last-child {\n      margin-right: 0;\n    }\n  }\n"]))),h=function(n){var e=n.pagination,t=n.handleSetPage;if(!e)return null;var r=Math.ceil(e.results/5);return(0,f.jsxs)(b,{children:[(0,f.jsx)("button",{type:"button",onClick:function(){return t(e.page-1)},disabled:1===e.page,children:"\u2329"}),Array.from(Array(r).keys()).map((function(n){return(0,f.jsx)("button",{type:"button",onClick:function(){return t(n+1)},className:e.page===n+1?"active":"",children:n+1},n)})),(0,f.jsx)("button",{type:"button",onClick:function(){return t(e.page+1)},disabled:e.page===r,children:"\u232a"})]})},x=u.ZP.div(a||(a=(0,l.Z)(["\n  flex: 0 0 100%;\n\n  table {\n    width: 100%;\n\n    th {\n      width: 20%;\n    }\n  }\n"]))),g=u.ZP.table(i||(i=(0,l.Z)(["\n  border-spacing: unset;\n"]))),m=u.ZP.tr(o||(o=(0,l.Z)(["\n  background: #efecec;\n"]))),j=u.ZP.th(d||(d=(0,l.Z)(["\n  position: relative;\n  text-align: left;\n  padding: 18px 4px;\n  text-transform: capitalize;\n\n  &::before,\n  &::after {\n    content: '';\n    position: absolute;\n    top: 50%;\n    right: 12px;\n    border: 5px solid transparent;\n  }\n\n  &::before {\n    border-bottom-color: #bdbdbd;\n    margin-top: -12px;\n  }\n\n  &::after {\n    border-top-color: #bdbdbd;\n    margin-top: 1px;\n  }\n\n  &.asc {\n    &::after {\n      border-top-color: green;\n    }\n  }\n\n  &.dsc {\n    &::before {\n      border-bottom-color: green;\n    }\n  }\n"]))),Z=u.ZP.tr(s||(s=(0,l.Z)(["\n  td {\n    border-bottom: 1px solid #efecec;\n    padding: 10px 4px;\n    font-size: 12px;\n  }\n\n  &:last-child {\n    td {\n      border-bottom: unset;\n    }\n  }\n"]))),k=function(n){var e=n.rows,t=n.pagination,r=n.handleSetPage,a=n.handleUpdateFilter,i=(0,p.useState)([]),o=(0,c.Z)(i,2),d=o[0],s=o[1],l=(0,c.Z)(d,2),u=l[0],b=l[1];return(0,p.useEffect)((function(){a({sortBy:u,sortOrder:b})}),[u,b]),(0,f.jsxs)(x,{children:[(0,f.jsxs)(g,{children:[(0,f.jsx)("thead",{children:(0,f.jsx)(m,{children:["username","name","Email","gender","registered date"].map((function(n){var e=[],t=(0,c.Z)(d,2),r=t[0],a=t[1],i=n.split(" ")[0];return r===i&&("asc"===a?e.push("asc"):"dsc"===a&&e.push("dsc")),(0,f.jsx)(j,{className:e.join(" "),onClick:function(){var n="undefined"===typeof a||"dsc"===a?"asc":"dsc";s([i,n])},children:n},n)}))})}),(0,f.jsx)("tbody",{children:e&&e.map((function(n){return(0,f.jsxs)(Z,{children:[(0,f.jsx)("td",{children:n.login.username}),(0,f.jsxs)("td",{children:[n.name.first," ",n.name.last]}),(0,f.jsx)("td",{children:n.email}),(0,f.jsx)("td",{children:n.gender}),(0,f.jsx)("td",{children:n.registered.date})]},n.login.username)}))})]}),(0,f.jsx)(h,{pagination:t,handleSetPage:r})]})}}}]);
//# sourceMappingURL=537.11320cf9.chunk.js.map