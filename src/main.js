import Vue from 'vue'
import App from './App.vue'
import Vconsole from "vconsole";

Vue.config.productionTip = false
const vConsole = new Vconsole();
Vue.use(vConsole);

new Vue({
  render: h => h(App),
}).$mount('#app')
