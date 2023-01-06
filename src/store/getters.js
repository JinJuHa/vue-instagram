// computed랑 비슷한 성격을 띈다고 보면 된다.

const getters = {
  isAuth(state) {
    return !!state.token
  }
}

export default getters
