import vue from 'vue'

import vuex from 'vuex'

vue.use(vuex)

const state = {

    userList: [],
    token: '3'

}



const mutations = {

    setUserList(state, data) {

        state.userList = data;

        ('注：如果这里的userList需要axios请求也可以把axios写在等号后面')

    }

}



const action = {

    commitUserList: ({ commit }, userList) => commit('setUserList', userList)

}
export default state;