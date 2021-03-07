export default {
    ADD_ITEM(state, payload) {
        state.cart.items.push(payload);
    },
    REMOVE_ITEM({ cart: { items } }, payload) {
        items.splice(payload, 1)
    },
    SET_QTY(state, payload) {
        state.cart.qty = payload;
    },
    SET_TOTAL(state, payload) {
        state.cart.total = payload;
    }
};

