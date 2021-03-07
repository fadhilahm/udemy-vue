export default {
    userId(state) {
        return state.userId;
      },
    getToken({ token }) {
        return token;
    },
    isAuthenticated({ token }) {
        return !!token;
    },
    isDidAutoLogout({ didAutoLogout }) {
        return didAutoLogout;
    }
};
