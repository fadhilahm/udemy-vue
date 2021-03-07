<template>
  <section>
    <form @submit.prevent="addUser">
      <div>
        <label>Name</label>
        <input type="text" v-model="enteredName" />
      </div>
      <div>
        <label>Age</label>
        <input type="text" v-model="enteredAge" />
      </div>
      <button>Add User</button>
    </form>
  </section>
</template>

<script>
export default {
  emits: {
    "add-user": ({ name, age }) => {
        if (name && age) {
            return true;
        }
        return false;
    },
  },
  data() {
    return {
      enteredName: "",
      enteredAge: "",
    };
  },
  methods: {
    addUser() {
      this.$emit("add-user", {
        name: this.enteredName,
        age: +this.enteredAge,
      });
    },
  },
};
</script>
