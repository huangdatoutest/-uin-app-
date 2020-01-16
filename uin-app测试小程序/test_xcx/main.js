import Vue from 'vue'
import App from './App'

import axios from './api'
import baseUrl from './api/baseUrl'

Vue.prototype.$Api =axios;
Vue.prototype.$Url =baseUrl;


Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
