const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      lastName: '',
      // fullname: ''
    };
  },
  methods: {
    setName(event, lastName) {
      this.name = event.target.value + ' ' + lastName;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetInput() {
      this.name = '';
    }
  },
  computed: {
    fullname() {
      console.log('running...');
      return this.name === '' || this.lastName === '' ? '' : `${this.name} ${this.lastName}`;
    }
  },
  watch: {
    // name: function(val) {
    //   this.fullname = val === '' ? '' : `${val} ${this.lastName}`
    // },
    // lastName(val) {
    //   this.fullname = val === '' ? '' : `${this.name} ${val}`
    // }
    counter(val) {
      console.log(`counter watcher is executing...`);
      const that = this;
      if (val > 50) {
        setTimeout(function (){
          that.counter = 0;
        }, 2000);
      }
      // if (val > 50) {
      //   setTimeout(() => {
      //     that.counter = 0;
      //   }, 2000);
      // }
      // if (val > 50) {
      //   setTimeout(() => {
      //     this.counter = 0;
      //   }, 2000);
      // }
    }
  }
});

app.mount('#events');
