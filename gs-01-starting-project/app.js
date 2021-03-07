// PURE JS

// const buttonEl = document.querySelector('button');
// const inputEl = document.querySelector('input');
// const listEl = document.querySelector('ul');

// const addGoal = () => {
//     const { value } = inputEl;
//     const listItemEl = document.createElement('li')
//     listItemEl.textContent = value;
//     listEl.appendChild(listItemEl);
//     inputEl.value = '';
// }

// buttonEl.addEventListener('click', addGoal)

// Vue
Vue.createApp({
    data: function() {
        return {
            enteredValue: '',
            goals: []
        }
    },
    methods: {
        addGoal: function() {
            this.goals.push(this.enteredValue);
            this.enteredValue = '';
        }
    }
}).mount('#app');
