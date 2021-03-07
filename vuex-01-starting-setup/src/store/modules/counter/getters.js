export default {
    testAuth(state) {
        return state.isLogin
    },
    finalCounter: function(state) {
        return state.counter * 3;
    },
    normalizedCounter(_, { finalCounter }) {
        if (finalCounter < 0) {
            return 0;
        } else if (finalCounter > 100) {
            return 100;
        } else {
            return finalCounter;
        }
    },
    getUserIsLoggedIn(...[,,, { userIsLoggedIn }]) {
        return userIsLoggedIn;
    }
};
