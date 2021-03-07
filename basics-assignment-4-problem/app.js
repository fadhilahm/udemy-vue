const app = Vue.createApp({
    data: function() {
        return {
            userInput: '',
            isVisible: true,
            colorInput: ''
        }
    },
    computed: {
        textClass() {
            return {
                ...this.userInput
                .split(' ')
                .reduce((acc, curr) => {
                    if (['user1', 'user2'].includes(curr)) acc[curr] = true;
                    return acc;
            }, {}),
                visible: this.isVisible,
                hidden: !this.isVisible
            }
        },
    },
    methods: {
        toggleVisibility() {
            this.isVisible = !this.isVisible;
        }
    }
});

app.mount('#assignment');
