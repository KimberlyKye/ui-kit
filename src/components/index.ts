import { defineCustomElement } from 'vue';

const MyComponent = {
  template: `<div>
      <h1>{{ title }}</h1>
      <p>{{ description }}</p>
      <p>test vue component</p>
    </div>`,
  props: {
    title: String,
    description: String,
  },
};

export const MyComponentWC = defineCustomElement(MyComponent);

export function register(tagName = 'my-component') {
  customElements.define(tagName, MyComponentWC);
}
