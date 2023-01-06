// api 관련 내용들을 묶어둔 곳이다.
import axios from 'axios'
import router from '../router'

const DOMAIN = 'http://localhost:3000'
const UNAUTHORIZED = 401
const onUnauthorized = () => {
  router.push('/login')
}

const request = (method, url, data) => {
  return axios({
    method,
    url: DOMAIN + url,
    data
  })
    .then(result => result.data)
    .catch(result => {
      const { status } = result.response
      if (status === UNAUTHORIZED) return onUnauthorized()
      throw Error(result)
    })
}

// 보드 관련된 함수들을 모두 여기서 사용한다.
export const board = {
  fetch() {
    return request('get', '/board')
  }
}

// axios에 토큰 정보를 넣을땐 token 값 뺄땐 null 값을 준다.
export const setAuthInHeader = token => {
  axios.defaults.headers.common['Authorization'] = token ? `Bearer ${token}` : null
}

// auth 관련 함수를 모아도 되고
export const auth = {
  login(email, password) {
    return request('post', '/login', { email, password })
  }
}

// 다른 관련 함수들을 모아도 된다.

// 객체로 묶어서 불러서 사용한다고 생각하면 된다.

// 사용하고 싶은 곳에서는 api에 객체를 부르면 된다.
