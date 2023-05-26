import axios from 'axios'

//const port = 81

export const apiClient = axios.create({
  baseURL: 'https://leadspapa-backend-production.up.railway.app',
  crossdomain:true
})