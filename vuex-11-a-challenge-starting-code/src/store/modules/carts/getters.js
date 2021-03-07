export default {
    getCart({ cart }) {
        return cart;
    },
    getCartTotal({ cart: { total } }) {
        return total.toFixed(2);
    },
    getItemTotal: (state, { getCart }) => (id) => {
        const cart = getCart;
        const productInCartIndex = cart.items.findIndex(
            cartItem => cartItem.productId === id
          );
        const prodData = cart.items[productInCartIndex];
        return (prodData.price * prodData.qty).toFixed(2);
    }
};
