const mutation = {
    LOADING_STATUS(state, value) {
        state.isLoading = value
    },
    SET_ERRORS(state, value) {
        state.errors = value
    },
    GET_ALL_USERS(state, value){
        state.users = value
    }
}

export default mutation;