
const state = {
    menuItems: {}
}

const mutations = {
    setMenuItems (state, data)  {
        state.menuItems = data;
    },
    removeMenuItem (state, data){

        state.menuItems.forEach((item, index) => {
            if (item.id === data.id) {
                state.menuItems.splice(index, 1);
            }
        })
        // console.log(state.menuItem)
        // console.log(data)
    },
    pushToMenuItem (state, data) {
        state.menuItems.push(data);
    }

}
const getters = {
    getMenuItems(state){
         return state.menuItems
    }
}

const actions = {

}

export default {
    state,
    getters,
    mutations,
    actions
}
// const state = {
//     // 设置属性
//     menuItems: {}
// }

// const getters = {
//     // 获取属性的状态
//     getMenuItems: state => state.menuItems
// }

// const mutations = {
//     // 改变属性的状态
//     setMenuItems(state, data) {
//         state.menuItems = data
//     },

//     // 将匹配到对象,在menuItems数组中删除
//     removeMenuItems(state, data) {
//         state.menuItems.forEach((item, index) => {
//             if (item == data) {
//                 state.menuItems.splice(index, 1)
//             }
//         });
//     },
//     // 将新添加的pizza Push到menuItems属性中
//     pushToMenuItems(state, data) {
//         state.menuItems.push(data)
//     }
// }

// const actions = {

// }

// export default {
//     state,
//     getters,
//     mutations,
//     actions
// }