import axios from 'axios'

let host = '' // <-- Your API host
// ----------------------------------------------------------------------

const axiosInstance = axios.create({
  baseURL: host
})

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject((error.response && error.response.data) || 'Something went wrong')
)

export default axiosInstance
