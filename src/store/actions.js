// actions 에는 비동기적으로 처리되는 함수들을 적어준다.

import * as api from '../api'
const actions = {
  LOGIN({ commit }, { email, password }) {
    return api.auth.login(email, password).then(({ accessToken }) => commit('LOGIN', accessToken))
  }
}

export default actions
