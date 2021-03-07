import getters from './getters.js';
import mutations from './mutations.js';
import actions from './actions.js';

export default {
    namespaced: true,
    state() {
        return {
            cart: {
                items: [],
                qty: 0,
                total: 0
            }
        }
    },
    getters,
    mutations,
    actions
};
