import axios from 'axios'

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 15000,
  headers: { 'Content-Type': 'application/json' },
})

export async function fetchComfort(message) {
  const response = await api.post('/api/comfort', { message })
  return response.data
}

export async function checkHealth() {
  const response = await api.get('/api/health')
  return response.data
}
