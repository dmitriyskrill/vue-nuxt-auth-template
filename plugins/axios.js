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
    switch (error.response.status) {
      case 401:
        if (!originalRequest
          || originalRequest._isRetry
          || originalRequest.url === '/auth/updateAccessToken'
          || originalRequest.url === '/auth/logout'
        ) break
        originalRequest._isRetry = true
        try {
          const accessToken = await store.dispatch('auth/updateAccessToken')
          originalRequest.headers.Authorization = `Bearer ${accessToken}`
          return $axios.request(originalRequest)
        } catch (e) {
          console.log('$axios.onError auth/logout', e)
          await store.dispatch('auth/logout')
        }

        break
      case 500:
        console.error('Server 500 error')
        break
    }

  })
}
