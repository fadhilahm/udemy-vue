export default {
    login({ commit }) {
        commit('SET_ISLOGGEDIN', true);
    },
    logout({ commit }) {
        commit('SET_ISLOGGEDIN', false);
    }
};
