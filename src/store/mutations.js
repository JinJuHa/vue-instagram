// mutations에는 동기적인 함수들을 사용한다.

const mutations = {
  LOGIN(state, token) {
    console.log('로그인 함수')
  },
  LOGOUT(state) {
    console.log('로그아웃 함수')
  },
  SET_IS_ADD_BOARD(state, toggle) {
    console.log('보드 추가 함수')
  }
}

export default mutations
