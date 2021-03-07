import getters from './getters'
import mutations from './mutations'
import actions from './actions'

export default {
    state: function() {
        return {
            userId: null,
            token: null,
            didAutoLogout: false
        };
    },
    getters,
    mutations,
    actions
}
