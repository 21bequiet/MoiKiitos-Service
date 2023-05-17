import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:8080'
axios.interceptors.request.use((config) => {
  config.headers.Authorization = "Bearer " + window.sessionStorage.getItem("token");
  return config;
})

axios.interceptors.response.use(config => {
  // console.log(config)
  return config;
})

const http = {
  post: '',
  get: '',
  put: '',
  delete: ''
}

http.post = function (api, data) {
  return new Promise((resolve, reject) => {
    axios
      .post(api, data)
      .then(response => resolve(response))
      .catch(error => reject(error))
  })
}

http.get = function (api, data) {
  return new Promise((resolve, reject) =>
    axios
      .get(api, data)
      .then(response => resolve(response))
      .catch(error => {
        // if (error.response.status === 404) {
        //   console.log('handle 404');
        // }
        reject(error)
      })
  )
}

http.delete = function (api, data) {
  return new Promise((resolve, reject) => {
    axios
      .delete(api, data)
      .then(response => resolve(response))
      .catch(error => reject(error))
  })
}

http.put = function (api, data) {
  return new Promise((resolve, reject) => {
    axios
      .put(api, data)
      .then(response => resolve(response))
      .catch(error => reject(error))
  })
}

export default http;