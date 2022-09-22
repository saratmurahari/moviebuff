import axios from 'axios'
const createHeaders = (accessToken) => {
  const headers = {
    Accept: 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json'
  }

  if (accessToken) {
    headers.Authorization = `Bearer ${accessToken}`
  }

  return headers
}
function getBaseUrl() {
  return 'https://api.themoviedb.org/3/'
}
export const get = ({ url, requestBody = {}, accessToken = undefined }) => {
  const headers = createHeaders(accessToken)
  const fullUrl = `${getBaseUrl()}${url}`
  const config = {
    headers,
    requestBody
  }

  return axios.get(fullUrl, config)
}
export const post = ({ url, requestBody = {}, accessToken = undefined }) => {
  const headers = createHeaders(accessToken)
  const fullUrl = `${getBaseUrl()}${url}`
  const config = {
    headers
  }

  return axios.post(fullUrl, requestBody, config)
}
