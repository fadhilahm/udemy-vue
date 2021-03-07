export default {
    async contactCoach(context, payload) {
        const newRequest = {
            // id: new Date().toISOString(),
            // coachId: payload.coachId,
            userEmail: payload.email,
            message: payload.message
        };

        const response = await fetch(`https://find-a-coach-ca5c7-default-rtdb.firebaseio.com/requests/${payload.coachId}.json`, {
            method: 'POST',
            body: JSON.stringify(newRequest)
        });
        const { name, message } = await response.json();
        
        if (!response.ok) {
            const error = new Error(message || 'Failed to send request.');
            throw error;
        }


        context.commit('addRequest', {
            ...newRequest,
            id: name,
            coachId: payload.coachId
        });
    },
    async loadRequests({ commit, rootGetters }) {
       const userId = rootGetters.getUserId;
       const response = await fetch(`https://find-a-coach-ca5c7-default-rtdb.firebaseio.com/requests/${userId}.json`);
       const responseData = await response.json();

       if (!response.ok) {
            const error = new Error(responseData.message || 'Failed to retrieve requests');
            throw error;
       }


       const requests = [];
       for (const key in responseData) {
           requests.push({
               id: key,
               coachId: userId,
               userEmail: responseData[key].userEmail,
               message: responseData[key].message
           });
       }

       commit('SET_REQUESTS', requests);
    }
};
