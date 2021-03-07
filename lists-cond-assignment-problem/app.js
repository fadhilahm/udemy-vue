Vue.createApp({
    data() {
        return {
            text: '',
            tasks: [],
            isVisible: true
        }
    },
    methods: {
        addTask() {
            this.tasks.push(this.text);
            this.text = '';
        },
        toggleVisibility() {
            this.isVisible = !this.isVisible;
        }
    },
    computed: {
        // showStyle() {
        //     return {
        //         visibility: this.isVisible ? 'visible' : 'hidden'
        //     };
        // },
        showBtnContent() {
            return this.isVisible ? 'Show List' : 'Hide List';
        }
    }
}).mount('#assignment');