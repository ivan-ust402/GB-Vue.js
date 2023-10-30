import MasonryWall from '@yeger/vue-masonry-wall'
import { createApp } from 'vue'
import App from './App.vue'
import store from './store';
import router from './router';
import { createHead } from '@vueuse/head';

const head = createHead();

createApp(App)
    .use(MasonryWall)
    .use(store)
    .use(router)
    .use(head)
    .mount('#app');

