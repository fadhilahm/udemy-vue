import { createStore } from 'vuex';

import rootGetters from './getters.js';
import rootMutations from './mutations.js';
import rootActions from './actions.js';
import counterModule from './modules/counter'

const store = createStore({
    modules: {
        numbers: counterModule
    },
    state: function() {
        return {
            isLogin: false
        };
    },
    mutations: rootMutations,
    getters: rootGetters,
    actions: rootActions
});

export default store;
