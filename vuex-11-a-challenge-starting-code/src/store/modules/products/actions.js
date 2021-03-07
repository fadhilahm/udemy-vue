export default {
    addProductToCart: function({ commit ,rootGetters }, productData) {
        const cart = rootGetters['carts/getCart'];
        const productInCartIndex = cart.items.findIndex(
            (ci) => ci.productId === productData.id
          );
    
          if (productInCartIndex >= 0) {
            cart.items[productInCartIndex].qty++;
          } else {
            const newItem = {
              productId: productData.id,
              title: productData.title,
              image: productData.image,
              price: productData.price,
              qty: 1,
            };
            // this.cart.items.push(newItem);
            commit('carts/ADD_ITEM', (newItem), { root: true });
          }
          // this.cart.qty++;
          commit('carts/SET_QTY', cart.qty + 1, { root: true });
          // this.cart.total += productData.price;
          commit('carts/SET_TOTAL', cart.total + productData.price, { root: true });
    },
};
