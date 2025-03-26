import { createApp } from 'vue'
import App from './App.vue'


// Import Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';

// Import Bootstrap JS (optionnel, si vous avez besoin des composants JavaScript de Bootstrap comme les modals, tooltips, etc.)
import 'bootstrap';
import "/src/libs/tabulator/tabulator.min.js";
import {routes} from "./routes.js"
import { createRouter,createWebHistory } from 'vue-router'
import VueApexCharts from "vue3-apexcharts";

const router = createRouter({
    history: createWebHistory(),
    routes,
})

router.beforeEach((to, from, next) => {
    router.routeFrom = from.name
    router.routeTo = to.name
    if(!(to.name == "empty" )){
        router.pathFrom = from.path.replace('/', '') == '' ? undefined : from.path.replace('/', '')
        router.pathTo = to.path.replace('/', '') == '' ? undefined : to.path.replace('/', '')

        
    }
    next()
})
const app = createApp(App)

app.use(router)
app.use(VueApexCharts);
app.mount('#app')