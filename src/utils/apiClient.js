import axios from 'axios'

export default req => {

  const apiClient = axios.create({
    baseURL: 'http://localhost:3030/api'
  })

  apiClient.interceptors.response.use(
    response => response,
    error => Promise.reject(error.response ? error.response : error)
  )

  return apiClient
}
