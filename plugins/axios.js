export default function ({ $axios, store }) {
  $axios.interceptors.request.use(request => {
    const common = request.headers.common
    if (
      !common.Authorization && common.Authorization !== 'Bearer undefined'
    ) {
      const accessToken = store.getters['auth/accessToken']
      request.headers.common.Authorization = `Bearer ${accessToken}`
    }
    return request
  })

  $axios.onError(async error => {
    const originalRequest = error.config
    if (!error.response) return
    if (
      error.response.status === 401 &&
      originalRequest
      && !originalRequest._isRetry
      && originalRequest.url !== '/auth/updateAccessToken'
    ) {
      originalRequest._isRetry = true
      try {
        const accessToken = await store.dispatch('auth/updateAccessToken')
        originalRequest.headers.Authorization = `Bearer ${accessToken}`
        return $axios.request(originalRequest)
      } catch (e) {
        console.log('$axios.onError auth/logout',e)
        await store.dispatch('auth/logout')
      }
    }
    if (error.response.status === 500) {
      console.error('Server 500 error')
    }

  })
}
