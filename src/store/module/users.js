// const state = {
//     currentUser: null
// }

// const mutations = {
//     usersStatus (state, user){
//         if (user) {
//             state.currentUser = user;
//             state.isLogin = true;
//         } else {
//             state.currentUser = null;
//             state.isLogin = false;
//         }
//     }

// }
// const getters = {
//     currentUser(state) {
//        return state.currentUser
//     }
// }

// const actions = {
//     setUser({ commit }, user){
//         commit("usersStatus", user);
//     }
// }

// export default {
//     state,
//     getters,
//     mutations,
//     actions
// }
const state = {
    currentUser: null
}

const getters = {
    currentUser: state => state.currentUser
}

const mutations = {
    // 更改用户的状态信息
    userStatus(state, user) {
        if (user) {
            state.currentUser = user
            state.isLogin = true
        } else {
            state.currentUser = null
            state.isLogin = false
        }
    }
}

const actions = {
    // 应用mutations
    setUser({ commit }, user) {
        commit("userStatus", user)
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}