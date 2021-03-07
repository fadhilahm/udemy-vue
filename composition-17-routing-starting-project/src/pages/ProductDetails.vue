<template>
  <section>
    <h2>{{ title }}</h2>
    <h3>${{ price}}</h3>
    <p>{{ description}}</p>
    <router-link to="/products/p2">To Product 2</router-link>
  </section>
</template>

<script>
import { inject, computed } from 'vue';
import { useRoute } from 'vue-router';

export default {
  props: ['pid'],
  setup() {
    const products = inject('products');

    const route = useRoute();

    const productDetail = computed(() =>
      products.value.find(({ id }) => id === route.params.pid)
    );


    const title = computed(() => productDetail.value.title);
    const price = computed(() => productDetail.value.price);
    const description = computed(() => productDetail.value.description);

    return { title, price, description };
  },
};
</script>


<style scoped>
section {
  margin: 3rem auto;
  max-width: 40rem;
  padding: 1rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
}
</style>