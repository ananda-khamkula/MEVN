import axios from 'axios'
const trunks = require('trunks-log')

const log = new trunks('USERS')

export const UsersService = {
  http: axios.create({
    //baseURL: 'http://localhost:3000/api/users',
    baseURL: 'http://153.92.4.204:3000/api/users',
  }),
  get() {
    return this.http.get()
  },
  post(userData) {
    return this.http.post('', userData)
  },
  put(id, userData) {
    return this.http.put(`/${id}`, userData)
  },
  delete(id) {
    return this.http.delete(`/${id}`)
  },
}
