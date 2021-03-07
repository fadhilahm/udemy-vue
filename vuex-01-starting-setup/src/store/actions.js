export default {
    login({ commit }) {
        commit('setIsLogin', true);
    },
    logout: function({ commit }) {
        commit('setIsLogin', false);
    }
}
