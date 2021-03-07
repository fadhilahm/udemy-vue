export default {
    addRequest({ requests }, payload) {
        requests.push(payload);
    },
    SET_REQUESTS( state, payload) {
        state.requests = payload;
    }
};
