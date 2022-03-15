export default {
  setAuthUserId (userId) {
    console.log('setAuthUserId 1')
    if(!localStorage) return
    console.log('setAuthUserId 2')
    localStorage.setItem('authUserId', userId)
  },
  removeAuthUserId () {
    if(!localStorage) return
    localStorage.removeItem('authUserId')
  },
  getAuthUserId () {
    if(!localStorage) return
    console.log('getAuthUserId')
   return  localStorage.getItem('authUserId')
  }
}
