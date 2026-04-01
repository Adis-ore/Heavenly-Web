import axios from 'axios'

const BASE_URL = 'http://localhost:5000'

const api = axios.create({
  baseURL: BASE_URL,
  timeout: 15000,
})

export async function fetchComfort(message) {
  const response = await api.post('/api/comfort', { message })
  return response.data
}
