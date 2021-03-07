const app = Vue.createApp({
  data() {
    return {
      currentUserInput: '',
      message: 'Vue is great!',
    };
  },
  methods: {
    saveInput(event) {
      this.currentUserInput = event.target.value;
    },
    setText() {
      // this.message = this.currentUserInput;
      this.message = this.$refs.userText.value;
    },
  },
  beforeCreate: function () {
    console.log('beforeCreate()');
  },
  created() {
    console.log('created()');
  },
  beforeMount: function () {
    console.log('beforeMount()');
  },
  mounted() {
    console.log('mounted()');
  },
  beforeUpdate: function () {
    console.log('beforeUpdate()');
  },
  updated() {
    console.log('updated()');
  },
  beforeUnmount: function () {
    console.log('beforeUnmount()');
  },
  unmounted() {
    console.log('unmounted()');
  }
});

app.mount('#app');
setTimeout(() => {
  app.unmount();
}, 3000);

const app2 = Vue.createApp({
  template: `
  <p>{{ favoriteMeal }}</p>
  `,
  data: function() {
    return {
      favoriteMeal: 'Pizza!'
    }
  }
});

app2.mount('#app2');

// const data = {
//   message: 'Hello!',
//   message2: 'Happy!',
//   message3: 'World!',
//   longMessage: 'Hello! World!'
// };

// const handler = {
//   set: function (target, key, value) {
//     console.log(target);
//     console.log(key);
//     console.log(value);

//     if (key === 'message') {
//       target.longMessage = value + ' World';
//     }
//     target.message = value;
//   }
// };

// const proxy = new Proxy(data, handler);

// proxy.message = 'Hello!!!!';

// console.log(proxy.longMessage);
