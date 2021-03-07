let timer;

export default {
    async login({ dispatch }, { email, password }) {
        return dispatch('auth', {
            email,
            password,
            mode: 'login'
        });
    },
    async signup({ dispatch }, { email, password }) {
        return dispatch('auth', {
            email,
            password,
            mode: 'signup'
        });

    },
    async auth({ commit, dispatch }, { mode, email, password}) {
        let url = mode === 'login' 
            ? 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDdZ7iXezYDMPi7Hdaa6ZzYEnsbxHxGE5g' 
            : 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDdZ7iXezYDMPi7Hdaa6ZzYEnsbxHxGE5g'

        const response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify({
                email,
                password,
                returnSecureToken: true
            })
        });

        const responseData = await response.json();

        if (!response.ok) {
            console.log(responseData);
            const error = new Error(responseData.message || 'Failed to authenticate. Check your login data.');
            throw error;
        }

        const expiresIn = +responseData.expiresIn * 1000;
        // const expiresIn = 5000;
        const expirationDate = new Date().getTime() + expiresIn;

        localStorage.setItem('token', responseData.idToken);
        localStorage.setItem('userId', responseData.localId);
        localStorage.setItem('tokenExpiration', expirationDate);

        timer = setTimeout(() => {
            dispatch('autoLogout');
        }, expiresIn);

        commit('SET_USER', {
            token: responseData.idToken,
            userId: responseData.localId,
        });
    },
    tryLogin({ commit, dispatch }) {
        const token = localStorage.getItem('token');
        const userId = localStorage.getItem('userId');
        const tokenExpiration = localStorage.getItem('tokenExpiration');

        const expiresIn = +tokenExpiration - new Date().getTime();

        if (expiresIn < 0) {
            return;
        }

        timer = setTimeout(() => {
            dispatch('autoLogout');
        }, expiresIn);

        if (token && userId) {
            commit('SET_USER', {
                token,
                userId
            });
        }        
    },
    logout({ commit }) {
        localStorage.removeItem('token');
        localStorage.removeItem('userId');
        localStorage.removeItem('tokenExpiration');

        clearTimeout(timer);

        commit('SET_USER', {
          token: null,
          userId: null
        })
    },
    autoLogout({ commit, dispatch }) {
        dispatch('logout');
        commit('SET_AUTO_LOGOUT');
    }
};
