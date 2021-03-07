const app = Vue.createApp({
  data() {
    return {
      counter: 10,
      name: '',
      confirmedName: ''
    };
  },
  methods: {
    add: function(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
    },
    setName({ target: { value }}, lastName) {
      this.name = `${value} ${lastName}`;
    },
    submitForm() {
      alert("ハローハッピーワールド");
    },
    confirmName() {
      this.confirmedName = this.name;
    }
  }
});

app.mount('#events');
