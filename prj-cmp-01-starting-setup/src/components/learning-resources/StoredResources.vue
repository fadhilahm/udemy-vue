<template>
  <ul>
    <learning-resource
      v-for="{ id, title, description, link } in resources"
      :key="id"
      :id="id"
      :title="title"
      :description="description"
      :link="link"
    ></learning-resource>
  </ul>
</template>

<script>
import LearningResource from './LearningResource.vue';

export default {
  components: {
    LearningResource
  },
  inject: ['resources']
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  margin: auto;
  max-width: 40rem;
}
</style>
