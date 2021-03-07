<template>
  <header>
    <form @submit.prevent="addFriend">
      <div>
        <label>Name</label>
        <input type="text" v-model="name" />
      </div>
      <div>
        <label>Phone</label>
        <input type="tel" v-model="phone" />
      </div>
      <div>
        <label>E-mail</label>
        <input type="email" v-model="email" />
      </div>
      <button>Add contact</button>
    </form>
  </header>
</template>

<script>
export default {
  emits: ["add-friend"],
  data() {
    return {
      name: "",
      phone: "",
      email: "",
    };
  },
  methods: {
    addFriend() {
      this.$emit("add-friend", {
        name: this.name,
        phone: this.phone,
        email: this.email,
      });
    },
  },
};
</script>
