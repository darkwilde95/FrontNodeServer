import axios from 'axios'

// Assets
import { apiUrl } from './assets'

const get = (url, params = {}) => {
  return axios({
    url,
    method: 'get',
    baseURL: apiUrl,
    headers: { 'Content-Type': 'application/json' },
    params
  })
}

const post = (url, data) => {
  return axios({
    url,
    method: 'post',
    baseURL: apiUrl,
    headers: { 'Content-Type': 'application/json' },
    data
  })
}

const authed_get = (url, params = {}) => {
  return axios({
    url,
    method: 'get',
    baseURL: apiUrl,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    },
    params
  })
}

const authed_post = (url, data) => {
  return axios({
    url,
    method: 'post',
    baseURL: apiUrl,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    },
    data
  })
}

export { get, post, authed_get, authed_post }
