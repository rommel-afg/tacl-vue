const getter = {
    isLoading(state) {
        return state.isLoading
    },
    getAllUsers(state){
        return state.users
    }
}

export default getter;