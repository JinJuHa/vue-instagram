<template>
  <div>
    <!-- 동적라우팅 개념 -->
    <!-- router-link에서 : (v-bind)의 차이는 매우 크다. -->
    <!-- 템플릿 리터널을 사용하고 싶으면 :to= "``" 형식으로 사용해야 한다. -->
    <h1>board {{ ID }}</h1>
    <router-link :to="`/board/${ID}/card/1`">Card1</router-link> |
    <router-link :to="`/board/${ID}/card/2`">Card2</router-link>
    <hr />
    <!-- 자식 컴포넌트를 보여주는 곳이 router-view이다. -->
    <router-view></router-view>
  </div>
</template>

<script>
import { board } from '../api'
export default {
  name: 'HomeView',
  data() {
    return {
      ID: '',
      boardData: ''
    }
  },
  watch() {},
  created() {
    console.log(this.$route)
    this.ID = this.$route.params.id
  },
  methods: {
    // axios를 이렇게 불러올 수 있다.
    fetchData() {
      board
        .fetch()
        // 성공
        .then(data => {
          this.boardData = data
        })
        // 실패
        .catch()
        // 성공 실패 상관 없이 마지막에
        .finally()
    }
  }
}
</script>

<style lang="scss" scoped></style>
