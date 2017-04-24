import * as type from './type';

export default {
    [type.GET_USER](state, user) {
        state.user = user;
    }
}