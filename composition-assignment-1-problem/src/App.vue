<template>
  <h2>My Course Goal</h2>
  <!-- Task 1: Output your main course goal with help of the composition API -->
  <!-- Don't hardcode it into the template, instead hardcode it into the JS code -->
  <h3 v-if="data.isActive">{{ data.goal }}</h3>
  <!-- Task 2: Toggle (show/ hide) the goal with help of the button  -->
  <button @click="toggle">Toggle Goal</button>
  <!-- Task 3: Manage data in three ways -->
  <!-- => Separate refs -->
  <!-- => Ref Object -->
  <!-- => Reactive Object -->
  <!-- Task 4: Also solve the assignment with the Options API -->
</template>

<script>
import { reactive } from 'vue';

export default {
  setup: function() {
    // const goal = ref('Become The Master of Front End');
    // const isActive = ref(true);
    // const data = ref({
    //   goal: 'Become The Master of The Front End',
    //   isActive: true
    // });
    const data = reactive({
      goal: 'Become The Master of The Front End',
      isActive: true
    })

    return {
      data,
      // toggle: () => {
      //   data.isActive = !data.isActive;
      }
    },
  // data: function() {
  //   return {
  //     goal: 'Become The Master of The Front End',
  //     isActive: true
  //   };
  // },
  methods: {
    toggle: function() {
      this.data.isActive = !this.data.isActive;
    }
  }
}
</script>

<style>
html {
  font-family: sans-serif;
}
body {
  margin: 3rem;
  text-align: center;
}
</style>