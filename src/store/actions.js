import * as type from './type';

export default {
    getUser ({commit}, user) {
        commit(type.GET_USER, user)
    },
    logout ({commit}) {
        commit(type.LOGOUT)
    }
}