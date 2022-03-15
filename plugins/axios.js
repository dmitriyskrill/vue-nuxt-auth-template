export default function ({ $axios, redirect, store }) {
  $axios.onRequest(config => {
    console.log('Making request to ' + config.url)
  })

  $axios.onError(async error => {
    const originalRequest = error.config;
    if (error.response) {
      if (error.response.status === 401 && error.config && !error.config._isRetry) {
        originalRequest._isRetry = true;
        try {
          const response = await $axios.get(`/auth/updateAccessCookie`, {withCredentials: true})

          return $axios.request(originalRequest);
        } catch (e) {
          store.dispatch('auth/logout')
          redirect('/login')
        }
      }
      if (error.response.status === 500) {
        console.error('Server 500 error')
      }
    } else {
    }
  })
}
