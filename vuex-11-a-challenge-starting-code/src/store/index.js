import { createStore } from 'vuex';

import getters from './getters.js';
import mutations from './mutations.js';
import actions from './actions.js';

import {
    products,
    carts,
    auth
} from './modules'

export default createStore({
    modules: {
        products,
        carts,
        auth
    },
    state() {
        return {
            
        }
    },
    getters,
    mutations,
    actions
});
