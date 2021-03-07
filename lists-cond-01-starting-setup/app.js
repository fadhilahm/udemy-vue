const app = Vue.createApp({
  data() {
    return { 
      goals: [],
      text: ''
    };
  },
  computed: {
    notFilled: function() {
      return Array.isArray(this.goals) && this.goals.length === 0;
    }
  },
  methods: {
    fillGoal() {
      this.goals.push(this.text);
      this.text = '';
    },
    removeGoal(i) {
      this.goals.splice(i, 1);
    }
  }
});

app.mount('#user-goals');
