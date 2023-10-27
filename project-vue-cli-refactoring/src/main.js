import MasonryWall from '@yeger/vue-masonry-wall'
import { createApp } from 'vue'
import App from './App.vue'
import store from './store';
import router from './router'

createApp(App)
    .use(MasonryWall)
    .use(store)
    .use(router)
    .mount('#app');

