export default {
  helloWorld() {
    console.log('helloworld');
  },
  removeProductFromCart({ getters: { getCart }, commit }, payload) {
    const cart = getCart;
    const productInCartIndex = cart.items.findIndex(
      cartItem => cartItem.productId === payload
    );
    const prodData = cart.items[productInCartIndex];
    // this.cart.items.splice(productInCartIndex, 1);
    commit('REMOVE_ITEM', productInCartIndex);
    // this.cart.qty -= prodData.qty;
    commit('SET_QTY', getCart.qty - 1);
    // this.cart.total -= prodData.price * prodData.qty;
    commit('SET_TOTAL', getCart.total - prodData.price * prodData.qty);
  }
};
