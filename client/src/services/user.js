import Cookies from 'js-cookie'

export default function logIn(token){
  return Cookies.set('token', token)
}