import * as types from '@/store/mutation-types';
import axios from 'axios';

// const state = {
//     info: []
// };

// const mutations = {
//     [types.UPDATE_SIDEBAR](state, payload) {
//         state.info = payload;
//     }
// };

const actions = {
    async [types.FETCH_SIDEBAR](store) {
        const { data } = await axios.post('/api/sideBar', {
            name: 'tom'
        });
        store.commit(types.UPDATE_SIDEBAR, data);
    }
};

export default {
    // state,
    actions
};
