import axios from 'axios'

const request = axios.create({
  baseURL: 'http://localhost:3001/api/users',
  timeout: 1000,
  headers: { 'X-Custom-Header': 'foobar'}
})

export function registerUser(params) {
  console.log(params)
  return request.post('/register', params)
}