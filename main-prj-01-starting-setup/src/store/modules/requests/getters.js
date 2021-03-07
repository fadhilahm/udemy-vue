export default {
    getRequests(...[state,,, rootGetters]) {
        const coachId = rootGetters.getUserId;
        return state.requests.filter(req => req.coachId === coachId);
    },
    isHasRequests(_, getters) {
        return getters.getRequests && getters.getRequests.length > 0;
    }
};
