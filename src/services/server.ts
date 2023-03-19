import axios from 'axios'

// const serverUrl = process.env.ENVIRONMENT === 'production' ? 'http://127.0.0.1:3001/' : 'http://127.0.0.1:3001/'
const SERVER_URL = 'http://localhost:4000'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function get<Response = any>(url: string): Promise<Response> {
  const response = await axios.get<T>(SERVER_URL + url, {
    validateStatus: () => true
  })
  return response.data
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function post<Response = any>(url: string, payload: any): Promise<Response> {
  const response = await axios.post<Response>(SERVER_URL + url, payload, {
    validateStatus: () => true
  })
  return response.data
}

export { get, post }