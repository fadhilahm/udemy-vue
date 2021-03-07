const app = Vue.createApp({
    data() {
        return {
            boxASelected: false,
            boxBSelected: false,
            boxCSelected: false
        }
    },
    methods: {
        toggle(alias) {
            this[`box${alias}Selected`] = !this[`box${alias}Selected`];
        }
    },
    computed: {
        boxAClasses() {
            return { active: this.boxASelected};
        },
        boxBClasses() {
            return { active: this.boxBSelected};
        },
        boxCClasses() {
            return { active: this.boxCSelected};
        }
    }
});

app.mount("#styling");
