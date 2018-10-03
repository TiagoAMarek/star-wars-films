import axios from 'axios'
import router from '@/router'

const apiUrl = 'https://swapi.co/api/'

export default {

  async get(path) {
    let response = {}

    try {
      response = await axios.get(apiUrl + path)
    } catch (error) {
      router.push({ path: `/error/${error.status}` })
      throw new Error(error)
    }

    return response.data
  },

  async put(path, data) {
    let response = {}

    try {
      response = await axios.put(apiUrl + path, data)
    } catch (error) {
      router.push({ path: `/error/${error.status}` })
      throw new Error(error)
    }

    return response.data
  },

  async post(path, data) {
    let response = {}

    try {
      response = await axios.post(apiUrl + path, data)
    } catch (error) {
      router.push({ path: `/error/${error.status}` })
      throw new Error(error)
    }

    return response.data
  },
}
