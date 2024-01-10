(function(e,n){typeof exports=="object"&&typeof module<"u"?module.exports=n(require("vue")):typeof define=="function"&&define.amd?define(["vue"],n):(e=typeof globalThis<"u"?globalThis:e||self,e.dragonekui=n(e.Vue))})(this,function(e){"use strict";const n={template:`<div>
      <h1>{{ title }}</h1>
      <p>{{ description }}</p>
    </div>`,props:{title:String,description:String}};return customElements.define("my-component",e.defineCustomElement(n))});
