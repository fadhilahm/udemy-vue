<template>
  <div>
    <h2>{{ userName }}</h2>
    <h3>{{ age }}</h3>
  </div>
</template>

<script>
import {
  computed,
  inject,
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted
} from 'vue';

export default {
  props: ['firstName', 'lastName'],
  setup(props, context) {
    console.log(context);

    onBeforeMount(() => {
      console.log('onBeforeMount()');
    });

    onMounted(() => {
      console.log('onMounted()');
    });

    onBeforeUpdate(() => {
      console.log('onBeforeUpdate()');
    });

    onUpdated(() => {
      console.log('onUpdated()');
    });

    onBeforeUnmount(() => {
      console.log('onBeforeMount()');
    });

    onUnmounted(() => {
      console.log('onUnmounted()');
    });

    // context.emit('save-data', 1); // this.$emit('save-data, 1);

    const uName = computed(() => `${props.firstName} ${props.lastName}`);
    return {
      userName: uName,
      age: inject('userAge')
    };
  }
};
</script>
