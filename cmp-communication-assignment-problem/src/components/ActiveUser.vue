<template>
  <section>
    <ul>
      <li>
        <h2>{{ username }}</h2>
        <h3>{{ age }} years old</h3>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  props: {
    username: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
  },
};
</script>
