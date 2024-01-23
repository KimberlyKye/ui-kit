import { defineCustomElement as e } from "vue";
const n = {
  template: `<div>
      <h1>{{ title }}</h1>
      <p>{{ description }}</p>
      <p>test vue component</p>
    </div>`,
  props: {
    title: String,
    description: String
  }
}, o = e(n);
function p(t = "my-component") {
  customElements.define(t, o);
}
export {
  o as MyComponentWC,
  p as register
};
