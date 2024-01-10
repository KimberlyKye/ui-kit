import { defineCustomElement as t } from "vue";
const e = {
  template: `<div>
      <h1>{{ title }}</h1>
      <p>{{ description }}</p>
    </div>`,
  props: {
    title: String,
    description: String
  }
}, o = customElements.define(
  "my-component",
  t(e)
);
export {
  o as default
};
