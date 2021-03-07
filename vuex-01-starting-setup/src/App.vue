<template>
  <base-container v-if="userIsLoggedIn" title="Vuex">
    <the-counter></the-counter>
    <favorite-value></favorite-value>
    <button @click="addOne">Add 10</button>
    <change-counter></change-counter>
  </base-container>
  <base-container title="Auth">
    <user-auth></user-auth>
  </base-container>
</template>

<script>
import { mapGetters } from 'vuex';

import BaseContainer from './components/BaseContainer.vue';
import TheCounter from './components/TheCounter.vue';
import ChangeCounter from './components/ChangeCounter.vue';
import FavoriteValue from './components/FavoriteValue.vue';
import UserAuth from './components/UserAuth.vue';

export default {
  components: {
    BaseContainer,
    ChangeCounter,
    TheCounter,
    FavoriteValue,
    UserAuth
  },
  computed: {
    ...mapGetters(['userIsLoggedIn'])
  },
  methods: {
    addOne() {
      // this.$store.commit('increment');
      // this.$store.commit('increase', { value: 10 });
      this.$store.dispatch({
        type: 'numbers/increase',
        value: 10
      });
    }
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>