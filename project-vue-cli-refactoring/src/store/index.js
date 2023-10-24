import { createStore } from 'vuex';
import projectDetails from './modules/project-details-store'


export default createStore({
    modules: {
        projectDetails,
    }
});