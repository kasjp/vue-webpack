// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import MainApp from "./Apps/Main.vue";
import router from "./router";
import upperFirst from "lodash/upperFirst";
import camelCase from "lodash/camelCase";

import "normalize.css";

//getting base components
const requireComponent = require.context(
  "./Global/Components/",
  false,
  /base-[\w-]+\.vue$/
);

requireComponent.keys().forEach(fileName => {
  //get config for component
  const componentConfig = requireComponent(fileName);
  //rename fileName so the component would comply with VueJS rules (PascalCase)
  const componentName = upperFirst(
    camelCase(fileName.replace(/^\.\//, "").replace(/\.\w+$/, ""))
  );
  //Register global component
  Vue.component(componentName, componentConfig.default || componentConfig);
});

/* eslint-disable no-new */
const vm = new Vue({
  el: "#app",
  router,
  components: { MainApp },
  template: "<MainApp/>"
});
