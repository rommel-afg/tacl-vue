import { states } from "./users/states"
import actions from "./users/actions"
import mutations from "./users/mutations"
import getters from "./users/getters"

export default {
    namespace: true,
    state: () => states,
    actions,
    mutations,
    getters
}