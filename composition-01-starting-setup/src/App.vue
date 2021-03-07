<template>
  <section class="container">
    <user-data
      :first-name="firstName"
      :last-name="lastName"
      class="target-this"
    ></user-data>
    <button @click="setAge">Change Age</button>
    <div>
      <input type="text" placeholder="First Name" v-model="firstName" />
      <input type="text" placeholder="Last Name" ref="lastNameInput" />
      <button @click="setLastName">Set Last Name</button>
    </div>
  </section>
</template>

<script>
import { ref, computed, watch, provide } from 'vue';
import UserData from './components/UserData.vue';

export default {
  components: {
    UserData
  },
  setup() {
    // const uName = ref('Maximilian');
    const firstName = ref('');
    const lastName = ref('');
    const uAge = ref(31);
    const lastNameInput = ref(null);
    // const user = reactive({
    //   name: 'Maximilian',
    //   age: 31
    // });

    provide('userAge', uAge);

    const uName = computed(function() {
      return `${firstName.value} ${lastName.value}`;
    });

    watch([uAge, uName], (newValues, oldValues) => {
      console.log('old age: ', oldValues[0]);
      console.log('new age: ', newValues[0]);
      console.log('👌');
      console.log('old uName: ', oldValues[1]);
      console.log('new uName: ', newValues[1]);
    });

    function setNewAge() {
      uAge.value = 32;
    }

    // function setFirstName({ target: { value }}) {
    //   firstName.value = value
    // }

    // function setLastName({ target: { value }}) {
    //   lastName.value = value
    // }

    function setLastName() {
      lastName.value = lastNameInput.value.value;
    }

    return {
      name: uName,
      age: uAge,
      setAge: setNewAge,
      firstName,
      lastName,
      // setFirstName,
      setLastName,
      lastNameInput
    };
  }
  // data() {
  //   return {
  //     userName: 'Maximilian',
  //   };
  // },
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

.container {
  margin: 3rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  text-align: center;
}
</style>
