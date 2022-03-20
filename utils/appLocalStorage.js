export default {
  setAuthUserId (userId) {
    if (!localStorage) return
    localStorage.setItem('authUserId', userId)
  },
  removeAuthUserId () {
    if (!localStorage) return
    localStorage.removeItem('authUserId')
  },
  getAuthUserId () {
    if (!localStorage) return
    return localStorage.getItem('authUserId')
  },
  setAccessToken (accessToken) {
    if (!localStorage) return
    localStorage.setItem('accessToken', accessToken)
  },
  removeAccessToken  () {
    if (!localStorage) return
    localStorage.removeItem('accessToken')
  },
  getAccessToken  () {
    if (!localStorage) return
    return localStorage.getItem('accessToken')
  },
  setRefreshToken (refreshToken) {
    if (!localStorage) return
    localStorage.setItem('refreshToken', refreshToken)
  },
  removeRefreshToken  () {
    if (!localStorage) return
    localStorage.removeItem('refreshToken')
  },
  getRefreshToken  () {
    if (!localStorage) return
    return localStorage.getItem('refreshToken')
  },
}
