import * as type from './type';

export default {
    [type.GET_USER](state, user) {
        state.user = user;
    },
    [type.LOGOUT](state, user) {
        state.user = {};
    }
}