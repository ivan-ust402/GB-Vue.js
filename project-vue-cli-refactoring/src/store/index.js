import { createStore } from 'vuex';
import projectDetails from './modules/project-details-store'
import navStore from './modules/nav-store';
import projectsStore from './modules/projects-store';
import achivementsStore from './modules/achivements-store';


export default createStore({
    modules: {
        projectDetails,
        navStore,
        projectsStore,
        achivementsStore
    }
});