const app = Vue.createApp({
    data: function() {
        return {
            name: 'Fadhilah Metra',
            age: 23,
            imgUrl: "https://static.wikia.nocookie.net/bandori/images/4/48/Hello%2C_Happy_World%21_1st_Single_Cover.jpg/revision/latest/?cb=20170720094107",
        }
    },
    methods: {
        getRnd: function() {
            return Math.random();
        }
    }
});

app.mount(`#assignment`);