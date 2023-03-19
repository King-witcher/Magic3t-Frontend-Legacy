import axios from 'axios'

// const serverUrl = process.env.ENVIRONMENT === 'production' ? 'http://127.0.0.1:3001/' : 'http://127.0.0.1:3001/'
const serverUrl = 'http://localhost:3000'

async function get<T>(url: string): Promise<T> {
  const response = await axios.get<T>(serverUrl + url)
  return response.data
}

async function post<Response>(url: string, payload: any): Promise<Response> {
  const response = await axios.post<Response>(serverUrl + url, payload)
  return response.data
}

export { get, post }