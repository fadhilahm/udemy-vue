export default {
    SET_USER(state, { token, userId }) {
        state.token = token;
        state.userId = userId;
        state.didAutoLogout = false;
    },
    SET_AUTO_LOGOUT(state) {
        state.didAutoLogout = true;
    }
};
 