import { defineCustomElement } from 'vue';

const MyComponent = {
  template: `<div>
      <h1>{{ title }}</h1>
      <p>{{ description }}</p>
    </div>`,
  props: {
    title: String,
    description: String,
  },
};

const MyComponentWC = customElements.define(
  'my-component',
  defineCustomElement(MyComponent)
);

export default MyComponentWC;
