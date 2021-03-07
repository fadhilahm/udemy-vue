<template>
    <button v-if="!userIsLoggedIn" @click="login">Login</button>
    <button v-else @click="logout">Logout</button>
    <p>{{ getUserIsLoggedIn }}</p>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
    methods: {
        ...mapActions(['login', 'logout'])
    },
    computed: {
        ...mapGetters('numbers', ['getUserIsLoggedIn']),
        ...mapGetters(['userIsLoggedIn', 'testAuth'])
    }
}
</script>
