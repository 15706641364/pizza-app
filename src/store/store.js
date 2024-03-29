// import Vue from 'vue'
// import Vuex from 'vuex'
// // import * as actions from './actions'
// // import * as mutations from './mutations'
// // import * as getters from './getters'

// import menu from './module/menu'
// import status from './module/status'
// import users from './module/users'

// Vue.use(Vuex);
// export const store = new Vuex.Store({
//     modules: {
//         menu,
//         status,
//         users
//     }

// })
import Vue from 'vue'
import Vuex from 'vuex'

import menu from './module/menu';
import users from './module/users';
import status from './module/status';

Vue.use(Vuex)

export const store = new Vuex.Store({
  modules:{
    menu,
    users,
    status
  }
})