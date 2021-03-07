export default {
    getCoaches({ coaches }) {
        return coaches;
    },
    isHasCoaches({ coaches }) {
        return coaches && coaches.length > 0;
    },
    isCoach(_, getters, _2, rootGetters) {
        const coaches = getters.getCoaches;
        const userId = rootGetters.getUserId;
        return coaches.some(coach => coach.id === userId);
    },
    isShouldUpdate(state) {
        const lastFetch = state.lastFetch;
        if (!lastFetch) {
            return true;
        }
        const currentTimeStamp = new Date().getTime();
        return (currentTimeStamp - lastFetch) / 1000 > 60;
    }
};
