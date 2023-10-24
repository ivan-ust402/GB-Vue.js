import MasonryWall from '@yeger/vue-masonry-wall'
import { createApp } from 'vue'
import App from './App.vue'
import store from './store';

createApp(App)
    .use(MasonryWall)
    .use(store)
    .mount('#app');

