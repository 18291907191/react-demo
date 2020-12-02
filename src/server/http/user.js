import { get, post } from '../api'
import { LOGIN } from '../apiURL';

export function login(params) {
  return post(LOGIN,params)
}
