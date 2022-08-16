import { openBlock as r, createElementBlock as i, normalizeClass as a, renderSlot as d } from "vue";
const k = (t, e) => {
  const o = t.__vccOpts || t;
  for (const [n, s] of e)
    o[n] = s;
  return o;
}, m = {
  name: "ClockAssistButton",
  props: {
    type: String,
    disabled: Boolean
  },
  methods: {
    onClick: function(t) {
      this.$emit("click", t);
    }
  }
}, u = ["disabled"];
function _(t, e, o, n, s, l) {
  return r(), i("button", {
    class: a(["normal", o.type]),
    disabled: o.disabled,
    onClick: e[0] || (e[0] = (c) => l.onClick(c))
  }, [
    d(t.$slots, "default")
  ], 10, u);
}
const p = /* @__PURE__ */ k(m, [["render", _]]);
export {
  p as ClockAssistButton
};
