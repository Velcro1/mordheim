import Vuex from 'vuex';
import Vue from 'vue';
import warbands from './modules/warbands';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        warbands,
    },
});
