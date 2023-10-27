import { createStore } from 'vuex';
import projectDetails from './modules/project-details-store'
import navStore from './modules/nav-store';
import projectsStore from './modules/projects-store';


export default createStore({
    modules: {
        projectDetails,
        navStore,
        projectsStore
    }
});