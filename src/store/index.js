import { createStore } from 'vuex'

// 创建一个新的 store 实例
const store = createStore({
  state() {
    return {
      isMobile: (() => {
        console.log(document.body.clientWidth);
        return document.body.clientWidth < 768
      })(),
    }
  },
  mutations: {
    updateDevice(state, payload) {
      state.isMobile = payload
    }
  }
})
window.addEventListener('resize', (self) => {
  let newState = document.body.clientWidth < 768
  store.commit('updateDevice', newState)
})
export {
  store
}