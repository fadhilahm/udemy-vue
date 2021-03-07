<template>
  <ul>
    <li :class="getStylePoor">
      <button type="button" @click="setActive('poor')">
        Poor
      </button>
    </li>
    <li :class="getStyleAverage">
      <button type="button" @click="setActive('average')">
        Average
      </button>
    </li>
    <li :class="getStyleGreat">
      <button type="button" @click="setActive('great')">Great</button>
    </li>
  </ul>
</template>

<script>
export default {
  props: ['modelValue'],
  emits: ['update:modelValue'],
  //   data() {
  //     return {
  //       activeOption: this.modelValue
  //     };
  //   },
  computed: {
    // activeOption() {
    //   return this.modelValue;
    // },
    getStylePoor() {
      return { active: this.modelValue === 'poor' };
    },
    getStyleAverage() {
      return { active: this.modelValue === 'average' };
    },
    getStyleGreat() {
      return { active: this.modelValue === 'great' };
    }
  },
  methods: {
    setActive(value) {
      this.$emit('update:modelValue', value);
    }
  }
};
</script>

<style scoped>
.active {
  border-color: #a00078;
}

.active button {
  color: #a00078;
}

ul {
  list-style: none;
  margin: 0.5rem 0;
  padding: 0;
  display: flex;
}

li {
  margin: 0 1rem;
  border: 1px solid #ccc;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

button {
  font: inherit;
  border: none;
  background-color: transparent;
  cursor: pointer;
}
</style>
