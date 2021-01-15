import NcBreadcrumb from "./Breadcrumb.vue";

function install(Vue) {
  if (install.installed) return;
  install.installed = true;
  Vue.component("NcBreadcrumb", NcBreadcrumb);
}

const plugin = {
  install
};

let GlobalVue = null;
if (typeof window !== "undefined") {
  GlobalVue = window.Vue;
} else if (typeof global !== "undefined") {
  GlobalVue = global.vue;
}
if (GlobalVue) {
  GlobalVue.use(plugin);
}

NcBreadcrumb.install = install;

export default NcBreadcrumb;
