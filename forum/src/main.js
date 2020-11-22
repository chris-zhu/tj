import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// moment
import moment from 'moment'
// 点击特效

import "./styles/main.scss";
Vue.config.productionTip = false;
Vue.use(ElementUI)

Vue.filter('dateformat', function(date, pattern = 'YYYY-MM-DD HH:mm:ss') {
  return moment(date).format(pattern)
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");