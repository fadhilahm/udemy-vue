export default {
    increment(state) {
        state.counter = state.counter + 2;
    },
    increase(state, { value }) {
        state.counter += value;
        console.log(state);
    },
};
