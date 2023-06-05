import Vue from 'vue'
import VueRouter from 'vue-router'
import HelloWorld from '../components/HelloWorld.vue'
import multiVideo from '../viewer/multiVideo.vue'

// 使用 vue-router
Vue.use(VueRouter)

// 匯出 vue-router 設置
export default new VueRouter({
    routes: [
        {
            name: 'helloWorld',   //組件呈現名稱
            path: '/',     //對應路徑
            component: HelloWorld //對應組件
        },
        {
            name: 'multiVideo',   //組件呈現名稱
            path: '/video',     //對應路徑
            component: multiVideo //對應組件
        }
    ] 
})