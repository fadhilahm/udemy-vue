<template>
  <div>
    <base-dialog :show="!!error" title="An error occured" @close="handleError">
      <p>{{ error }}</p>
    </base-dialog>
    <section>
      <base-card>
        <header>
          <h2>Requests Received</h2>
        </header>
        <div v-if="isLoading">
          <base-spinner></base-spinner>
        </div>
        <ul v-else-if="hasRequests">
          <request-item
            v-for="req in receivedRequests"
            :key="req.id"
            :email="req.userEmail"
            :message="req.message"
          ></request-item>
        </ul>
        <h3 v-else>You haven't received any requests yet!</h3>
      </base-card>
    </section>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

import RequestItem from '../../components/requests/RequestItem.vue';

export default {
  components: {
    RequestItem
  },
  data() {
    return {
      isLoading: false,
      error: null
    };
  },
  computed: {
    receivedRequests() {
      return this.$store.getters['requests/getRequests'];
    },
    hasRequests() {
      return this.$store.getters['requests/isHasRequests'];
    }
  },
  methods: {
    ...mapActions('requests', ['loadRequests']),
    handleError() {
      this.error = null;
    }
  },
  async created() {
    this.isLoading = true;
    try {
      await this.loadRequests();
    } catch (error) {
      this.error = error.message || 'Something failed!';
    } finally {
      this.isLoading = false;
    }
  }
};
</script>

<style scoped>
header {
  text-align: center;
}

ul {
  list-style: none;
  margin: 2rem auto;
  padding: 0;
  max-width: 30rem;
}

h3 {
  text-align: center;
}
</style>
