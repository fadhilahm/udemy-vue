Vue.createApp({
    data() {
        return {
            output1: '',
            output2: ''
        }
    },
    methods: {
        showAlert: function() {
            alert("ハローハッピーワールド!!!");
        },
        updateOutput({ target: { value } }, id) {
            this[`output${id}`] = value;
        }
    }
}).mount('#assignment');
