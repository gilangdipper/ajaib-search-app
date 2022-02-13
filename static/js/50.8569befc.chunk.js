"use strict";(self.webpackChunkajaib_search_app=self.webpackChunkajaib_search_app||[]).push([[50],{4050:function(n,e,t){t.r(e),t.d(e,{default:function(){return O}});var r,o=t(8152),i=t(168),a=t(2791),l=t(5751),s=["title","titleId"];function p(){return p=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},p.apply(this,arguments)}function d(n,e){if(null==n)return{};var t,r,o=function(n,e){if(null==n)return{};var t,r,o={},i=Object.keys(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||(o[t]=n[t]);return o}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(o[t]=n[t])}return o}function c(n,e){var t=n.title,o=n.titleId,i=d(n,s);return a.createElement("svg",p({fill:"#000000",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24px",height:"24px",ref:e,"aria-labelledby":o},i),t?a.createElement("title",{id:o},t):null,r||(r=a.createElement("path",{d:"M 9 2 C 5.1458514 2 2 5.1458514 2 9 C 2 12.854149 5.1458514 16 9 16 C 10.747998 16 12.345009 15.348024 13.574219 14.28125 L 14 14.707031 L 14 16 L 20 22 L 22 20 L 16 14 L 14.707031 14 L 14.28125 13.574219 C 15.348024 12.345009 16 10.747998 16 9 C 16 5.1458514 12.854149 2 9 2 z M 9 4 C 11.773268 4 14 6.2267316 14 9 C 14 11.773268 11.773268 14 9 14 C 6.2267316 14 4 11.773268 4 9 C 4 6.2267316 6.2267316 4 9 4 z"})))}var u=a.forwardRef(c);t.p;var f,x,b,h,g,m,v=t(184),w=l.ZP.div(f||(f=(0,i.Z)(["\n  display: block;\n  width: 100%;\n  position: relative;\n  z-index: 1;\n  cursor: pointer;\n  background-color: #ffffff;\n\n  .option-select {\n    font-size: 13px;\n    padding: 8px 10px;\n    font-weight: 500;\n    border: 1px solid #e6e9eb;\n    background: transparent;\n    width: 200px;\n    text-align: left;\n    text-transform: capitalize;\n    cursor: pointer;\n    border-radius: 2px;\n\n    &:before {\n      content: '';\n      position: absolute;\n      top: 50%;\n      right: 12px;\n      border: 5px solid transparent;\n      border-top-color: #bdbdbd;\n      margin-top: -2px;\n\n      ","\n    }\n  }\n\n  .options-wrapper {\n    position: absolute;\n    width: 100%;\n\n    .options {\n      height: 0;\n      width: 100%;\n      max-height: 0;\n      overflow: hidden;\n      overflow-y: scroll;\n      background-color: #ffffff;\n      -webkit-transition: max-height 0.5s ease;\n      display: flex;\n      flex-flow: column;\n\n      ","\n\n      button {\n        padding: 8px;\n        display: flex;\n        font-size: 12px;\n        cursor: pointer;\n        border: 0;\n\n        &.active {\n          font-weight: bold;\n        }\n      }\n    }\n  }\n"])),(function(n){return n.optionsVisible&&"\n          border-bottom-color: #bdbdbd;\n          border-top-color: transparent;\n          margin-top: -6px;\n        "}),(function(n){return n.optionsVisible&&(0,l.iv)(x||(x=(0,i.Z)(["\n          height: auto;\n          max-height: 200px;\n          -webkit-transition: max-height 0.5s ease;\n          box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.15);\n          border-style: solid;\n          border-width: 0 1px 1px 1px;\n          border-color: #d2d6da;\n        "])))})),y=function(n){var e=n.options,t=n.placeholder,r=n.value,i=n.onChange,l=(0,a.useRef)(null),s=(0,a.useState)(!1),p=(0,o.Z)(s,2),d=p[0],c=p[1],u=function(n){l&&l.current&&n.target instanceof Node&&!l.current.contains(n.target)&&c(!1)};return(0,a.useEffect)((function(){return document.addEventListener("mousedown",u),function(){document.removeEventListener("mousedown",u)}}),[]),(0,v.jsxs)(w,{optionsVisible:d,ref:l,className:"multiple-select-wrapper",children:[(0,v.jsx)("button",{type:"button",className:"option-select",onClick:function(){return c(!0)},children:r||t}),(0,v.jsx)("div",{className:"options-wrapper",children:(0,v.jsx)("div",{className:"options",children:e.map((function(n,e){var t="".concat(e,"-").concat(n.name),o=["option"];return n.value===r&&o.push("active"),(0,v.jsx)("button",{type:"button",className:o.join(" "),onClick:function(){c(!1),i(n.value)},children:n.name},t)}))})})]})},j=l.ZP.div(b||(b=(0,i.Z)(["\n  flex: 0 0 100%;\n  display: flex;\n  flex-flow: row wrap;\n  padding: 20px 0;\n"]))),k=l.ZP.div(h||(h=(0,i.Z)(["\n  flex: 0 0 25%;\n  display: flex;\n  flex-flow: row wrap;\n  margin-right: 10px;\n\n  .label {\n    flex: 1 1 100%;\n    margin-bottom: 6px;\n  }\n\n  input {\n    flex: 1 1 auto;\n    padding: 8px 10px;\n    border: 1px solid #e6e9eb;\n    border-right: 0;\n    font-size: 14px;\n    border-radius: 2px;\n  }\n\n  button {\n    flex: 0 0 auto;\n    background: #339fff;\n    border: 0;\n\n    svg {\n      fill: #ffffff;\n    }\n  }\n"]))),C=l.ZP.div(g||(g=(0,i.Z)(["\n  margin-right: 10px;\n\n  .label {\n    flex: 1 1 100%;\n    margin-bottom: 6px;\n  }\n"]))),Z=l.ZP.div(m||(m=(0,i.Z)(["\n  display: flex;\n  align-items: flex-end;\n\n  button {\n    border-radius: 2px;\n    background: transparent;\n    border: 1px solid #e6e9eb;\n    padding: 8px 10px;\n    cursor: pointer;\n  }\n"]))),O=function(n){var e=n.handleResetFilter,t=n.handleUpdateFilter,r=n.filter,i=(0,a.useState)(""),l=(0,o.Z)(i,2),s=l[0],p=l[1],d=function(n){t({keyword:n.target.value})},c=(0,a.useMemo)((function(){return function(n){var e,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:300;return function(){for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];clearTimeout(e),e=setTimeout((function(){n.apply(void 0,o)}),t)}}(d)}),[]);return(0,v.jsxs)(j,{children:[(0,v.jsxs)(k,{children:[(0,v.jsx)("div",{className:"label",children:"Search"}),(0,v.jsx)("input",{value:s,type:"text",placeholder:"Search..",name:"search",onChange:function(n){p(n.target.value),c(n)}}),(0,v.jsx)("button",{type:"button",children:(0,v.jsx)(u,{})})]}),(0,v.jsxs)(C,{children:[(0,v.jsx)("div",{className:"label",children:"Gender"}),(0,v.jsx)(y,{options:[{name:"all",value:"all"},{name:"male",value:"male"},{name:"female",value:"female"}],value:r.gender||"",onChange:function(n){t({gender:"".concat(n)})},placeholder:"Select gender"})]}),(0,v.jsx)(Z,{children:(0,v.jsx)("button",{type:"button",onClick:function(){e(),p("")},children:"Reset Filter"})})]})}}}]);
//# sourceMappingURL=50.8569befc.chunk.js.map