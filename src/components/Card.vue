<template>
  <!-- 보드의 자식 컴포넌트이다.  -->
  <!-- 보드와 연관 지어서 보면 된다. 바로 랜더링 안되는 부분을 watch로 해결했다. -->
  <div>
    <h1>Card {{ ID }}</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ID: 0
    }
  },
  // 라우터를 지켜보고 있다가 바뀌면 바꿔주게 함
  watch: {
    $route() {
      this.ID = this.$route.params.cid
    }
  },
  created() {
    this.ID = this.$route.params.cid
  }
}
</script>

<style lang="scss" scoped></style>
