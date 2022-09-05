var c = Object.defineProperty;
var h = (s, e, t) => e in s ? c(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t;
var u = (s, e, t) => (h(s, typeof e != "symbol" ? e + "" : e, t), t), l = (s, e, t) => {
  if (!e.has(s))
    throw TypeError("Cannot " + t);
};
var o = (s, e, t) => (l(s, e, "read from private field"), t ? t.call(s) : e.get(s)), a = (s, e, t) => {
  if (e.has(s))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(s) : e.set(s, t);
};
class d extends HTMLElement {
  constructor() {
    super();
  }
}
var r;
class i extends d {
  constructor() {
    var t;
    super();
    a(this, r, document.createElement("slot"));
    o(this, r).name = (t = this.route) != null ? t : "", this.attachShadow({ mode: "closed" }).appendChild(o(this, r));
  }
  get route() {
    return this.getAttribute("route");
  }
  set route(t) {
    return this.setAttribute("route", t);
  }
  getRoute() {
    return this.route;
  }
  setRoute(t) {
    this.route = t;
  }
  attributeChangedCallback(t, m, n) {
    switch (t) {
      case "route":
        o(this, r).name = n;
        break;
    }
  }
}
r = new WeakMap(), u(i, "observedAttributes", ["route"]);
customElements.define("halo-router", i);
export {
  d as HaloElement,
  i as HaloRouterElement
};
