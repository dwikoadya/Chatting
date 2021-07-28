import Axios from 'axios'
import user from './user'

const config = {
  baseUrl: `http://localhost:3001/api`,
  timeout: 1000,
  headers: {'X-Custom-Header': 'foobar'}
}

const api = Axios.create(config)

export function registerUser(params) {
  return api.post('/register', params)
}

export function loginUser(params) {
  return api.post('/login', params)
  .then((response) => {
    const { data } = response
    user.logIn(data.accessToken)
    return true
  }, () => false
  )
}