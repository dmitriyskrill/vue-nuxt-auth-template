import appLocalStorage from '../utils/appLocalStorage'
import { isClient } from '~/utils/appUtils'

export const state = () => ({
  accessToken: null,
  refreshToken: null,
  authUserId: null,
  authUser: null
})

export const mutations = {
  setAuthUser (state, user) {
    state.authUser = user
  },
  removeAuthUser (state) {
    appLocalStorage.removeAuthUserId()
    state.authUser = null
  },
  setAccessToken (state, accessToken) {
    state.accessToken = accessToken
    appLocalStorage.setAccessToken(accessToken)
    // this.$axios.setToken(accessToken, 'Bearer')
    // this.$axios.setHeader('Authorization', `Bearer ${accessToken}`)
  },
  removeAccessToken (state) {
    state.accessToken = null
    appLocalStorage.removeAccessToken()
  },
  setRefreshToken (state, refreshToken) {
    state.refreshToken = refreshToken
    appLocalStorage.setRefreshToken(refreshToken)
  },
  removeRefreshToken (state) {
    state.refreshToken = null
    appLocalStorage.removeRefreshToken()
  },
  setAuthUserId (state, userId) {
    state.authUserId = userId
    appLocalStorage.setAuthUserId(userId)
  },
  removeAuthUserId (state) {
    state.authUserId = null
    appLocalStorage.removeAuthUserId()
  }
}

export const actions = {

  async login ({ commit, dispatch }, authData) {
    try {
      const tokenDto = await this.$axios.$post('/auth/login', authData, { withCredentials: true })
      commit('setAccessToken', tokenDto.accessToken)
      commit('setRefreshToken', tokenDto.refreshToken)
      commit('setAuthUserId', tokenDto.userId)
      await dispatch('getAuthUser')
      await this.$router.push('/authUser')
    } catch (error) {
      console.error(error)
    }
  },
  async logout ({ commit }) {
    try {
      await this.$axios.$post('/auth/logout',{ withCredentials: true })
      commit('removeAccessToken')
      commit('removeRefreshToken')
      commit('removeAuthUserId')
      commit('removeAuthUser')
    } catch (error) {
      console.error(error)
    }
  },
  async getAuthUser ({ commit, getters }) {
    try {
      const response = await this.$axios.$get(`/users/${getters.authUserId}`, { withCredentials: true })
      commit('setAuthUser', response)
    } catch (error) {
      commit('removeAuthUser')
      console.error(error)
    }
  },
  async updateAccessCookie ({ commit, dispatch, getters }) {
    const refreshToken = getters.refreshToken
    if (!refreshToken && isClient()) {
      await dispatch('logout')
      return
    }
    if (!refreshToken && !isClient()) return
    const response = await this.$axios.get(`/auth/updateAccessCookie`, {
      headers: { 'refresh': refreshToken },
      withCredentials: true
    })
    const accessToken = response.data
    if (!accessToken) {
      await dispatch('logout')
      return
    }
    commit('setAccessToken', accessToken)
    return accessToken
  }
}

export const getters = {
  accessToken: state => state.accessToken || appLocalStorage.getAccessToken(),
  refreshToken: state => state.refreshToken || appLocalStorage.getRefreshToken(),
  authUserId: state => state.authUserId || appLocalStorage.getAuthUserId(),
  isAuth: state => !!state.authUser,
  authUser: state => state.authUser,
}
