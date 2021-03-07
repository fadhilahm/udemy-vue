<template>
  <div>
    <user-data
      @add-user="addUser"
    ></user-data>
    <active-user
      v-for="({ username, age }, i) in users"
      :key="i"
      :username="username"
      :age="age"
    ></active-user>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: [
        {
          username: "Fedz",
          age: 23,
        },
        {
          username: "Lambdacore",
          age: 25,
        },
        {
          username: "Ridhowentro",
          age: 26,
        },
      ],
    };
  },
  methods: {
      addUser({ name, age}) {
          this.users.push({
              username: name,
              age
          });
      }
  }
};
</script>

<style>
html {
    font-family: sans-serif;
}

section, form {
    margin: 2rem auto;
    max-width: 40rem;
    border-radius: 12px;
    border: 1px solid #ccc;
    padding: 1rem;
}
</style>
