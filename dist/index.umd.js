(function(e,t){typeof exports=="object"&&typeof module<"u"?t(exports,require("vue")):typeof define=="function"&&define.amd?define(["exports","vue"],t):(e=typeof globalThis<"u"?globalThis:e||self,t(e.graphmelui={},e.Vue))})(this,function(e,t){"use strict";const i={template:`<div>
      <h1>{{ title }}</h1>
      <p>{{ description }}</p>
      <p>test vue component</p>
    </div>`,props:{title:String,description:String}},n=t.defineCustomElement(i);function o(p="my-component"){customElements.define(p,n)}e.MyComponentWC=n,e.register=o,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})});
