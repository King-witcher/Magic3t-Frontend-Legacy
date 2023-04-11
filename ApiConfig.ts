import { Axios } from 'axios'

export const Api = new Axios({
  baseURL: process.env.REACT_APP_STAGE === 'production' ? 'https://magic3t-backend.onrender.com' : 'http://localhost:4000',
  validateStatus: () => true
})