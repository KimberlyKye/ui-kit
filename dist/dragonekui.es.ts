import { defineComponent as d, ref as u, openBlock as p, createElementBlock as i, Fragment as _, createElementVNode as t, toDisplayString as a, pushScopeId as h, popScopeId as m, createTextVNode as o } from "vue";
const r = (e) => (h("data-v-1d5be6d4"), e = e(), m(), e), g = { class: "card" }, v = /* @__PURE__ */ r(() => /* @__PURE__ */ t("p", null, [
  /* @__PURE__ */ o(" Edit "),
  /* @__PURE__ */ t("code", null, "components/HelloWorld.vue"),
  /* @__PURE__ */ o(" to test HMR ")
], -1)), f = /* @__PURE__ */ r(() => /* @__PURE__ */ t("p", null, [
  /* @__PURE__ */ o(" Check out "),
  /* @__PURE__ */ t("a", {
    href: "https://vuejs.org/guide/quick-start.html#local",
    target: "_blank"
  }, "create-vue"),
  /* @__PURE__ */ o(", the official Vue + Vite starter ")
], -1)), k = /* @__PURE__ */ r(() => /* @__PURE__ */ t("p", null, [
  /* @__PURE__ */ o(" Install "),
  /* @__PURE__ */ t("a", {
    href: "https://github.com/vuejs/language-tools",
    target: "_blank"
  }, "Volar"),
  /* @__PURE__ */ o(" in your IDE for a better DX ")
], -1)), b = /* @__PURE__ */ r(() => /* @__PURE__ */ t("p", { class: "read-the-docs" }, "Click on the Vite and Vue logos to learn more", -1)), V = /* @__PURE__ */ d({
  __name: "HelloWorld",
  props: {
    msg: {}
  },
  setup(e) {
    const l = u(0);
    return (n, s) => (p(), i(_, null, [
      t("h1", null, a(n.msg), 1),
      t("div", g, [
        t("button", {
          type: "button",
          onClick: s[0] || (s[0] = (c) => l.value++)
        }, "count is " + a(l.value), 1),
        v
      ]),
      f,
      k,
      b
    ], 64));
  }
}), I = (e, l) => {
  const n = e.__vccOpts || e;
  for (const [s, c] of l)
    n[s] = c;
  return n;
}, C = /* @__PURE__ */ I(V, [["__scopeId", "data-v-1d5be6d4"]]);
export {
  C as HelloWorld
};
