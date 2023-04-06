import axios from 'axios'
import { Env } from 'config/Env'
const axiosClient = axios.create({
  baseURL: Env.API_BASE_URL,
})
const authToken = localStorage.getItem('authToken')

axiosClient.defaults.headers.common = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
  Authorization: authToken === null ? '' : authToken,
}

axiosClient.defaults.timeout = 7000

axiosClient.defaults.withCredentials = true

export const axiosGet = async URL => {
  return axiosClient.get(`${URL}`).then(response => response)
}

export const axiosPost = async (URL, payload) => {
  return await axiosClient.post(`${URL}`, payload).then(response => response)
}

export const axiosPatch = async (URL, payload) => {
  return await axiosClient.patch(`${URL}`, payload).then(response => response)
}

export const axiosDelete = async URL => {
  return await axiosClient.delete(`${URL}`).then(response => response)
}

export const setAuthToken = token => {
  localStorage.setItem('authToken', token)
  axiosClient.defaults.headers.common = {
    Authorization: token,
  }
}

export const clearToken = () => {
  localStorage.clear()
  axiosClient.defaults.headers.common = {
    Authorization: '',
  }
}

const apiClient = {
  axiosGet,
  axiosPost,
  axiosPatch,
  axiosDelete,
  setAuthToken,
}

export { apiClient }
