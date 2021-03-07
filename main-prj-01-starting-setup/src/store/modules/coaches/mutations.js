export default {
    registerCoach({ coaches }, payload) {
        coaches.push(payload);
    },
    setCoaches(state, payload) {
        state.coaches = payload
    },
    SET_FETCH_TIMESTAMP(state) {
        state.lastFetch = new Date().getTime();
    }
};
