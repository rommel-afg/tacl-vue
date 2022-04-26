import Api from '@/api'

const action = {
    async getAllUsers({commit}) {
        try {
            commit("LOADING_STATUS", true)

            let users = await Api.get('/users')
            commit("GET_ALL_USERS", users.data)

            return users.data
        } catch(err) {
            commit("SET_ERRORS", err)
            throw err;
        } finally {
            commit("LOADING_STATUS", false)
        }
        
    }
}

export default action;