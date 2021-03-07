Vue.createApp({
    data() {
        return {
            number: 0
        }
    },
    methods: {
        add: function(num) {
            this.number += num;
        }
    },
    computed: {
        output() {
            return this.number === 37 ? this.number
                    : this.number < 37 ? "Not there yet" 
                    : "Too much!";
        }
    },
    watch: {
        output: function() {
            setTimeout(() => this.number = 0, 5000);
        }
    }
}).mount('#assignment');
