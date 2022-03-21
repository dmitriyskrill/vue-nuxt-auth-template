import {isClient} from '~/utils/appUtils'

export default {
  setAuthUserId (userId) {
    if (!isClient()) return
    localStorage.setItem('authUserId', userId)
  },
  removeAuthUserId () {
    if (!isClient()) return
    localStorage.removeItem('authUserId')
  },
  getAuthUserId () {
    if (!isClient()) return
    return localStorage.getItem('authUserId')
  },
  setAccessToken (accessToken) {
    if (!isClient()) return
    localStorage.setItem('accessToken', accessToken)
  },
  removeAccessToken  () {
    if (!isClient()) return
    localStorage.removeItem('accessToken')
  },
  getAccessToken  () {
    if (!isClient()) return
    console.log('getAccessToken', localStorage.getItem('accessToken'))
    return localStorage.getItem('accessToken')
  },
  setRefreshToken (refreshToken) {
    if (!isClient()) return
    localStorage.setItem('refreshToken', refreshToken)
  },
  removeRefreshToken  () {
    if (!isClient()) return
    localStorage.removeItem('refreshToken')
  },
  getRefreshToken  () {
    if (!isClient()) return
    return localStorage.getItem('refreshToken')
  },
}
