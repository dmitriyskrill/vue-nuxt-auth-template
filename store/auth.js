import appLocalStorage from '../utils/appLocalStorage'

export const state = () => ({
  authUser: null
})

export const mutations = {
  setAuthUser (state, {
    accessToken,
    refreshToken,
    userId: TUserId
  }) {

    appLocalStorage.setAuthUserId(user.id)
    state.authUser = user
  },
  removeAuthUser (state) {
    appLocalStorage.removeAuthUserId()
    state.authUser = null
  }
}

export const actions = {
  async login ({ commit, dispatch }, authData) {
    try {
      const { userId } = await this.$axios.$post('/auth/login', authData, { withCredentials: true })
      dispatch('getAuthUser', userId)
    } catch (error) {
      console.error(error)
    }
  },
  async logout ({ commit }) {
    try {
      commit('removeAuthUser')
    } catch (error) {
      console.error(error)
    }
  },
  async getAuthUser ({ commit }, userId) {
    try {
      const response = await this.$axios.$get(`/users/${userId}`, { withCredentials: true })
      commit('setAuthUser', response)
    } catch (error) {
      console.error(error)
      commit('removeAuthUser')
    }
  }
}

export const getters = {
  authUser: state => state.authUser,
  isAuth: state => !!state.authUser
}
