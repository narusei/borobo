import Vue from 'vue'
import App from '@/app.vue'
import router from "@/router"
import store from "@/store"
import Buefy from 'buefy'

Vue.use(Buefy)

document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector("#main")
    if (container === null) return

    const app = new Vue({
        router,
        store,
        render: h => h(App)
    }).$mount()
    container.appendChild(app.$el)
})