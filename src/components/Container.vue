<template>
  <div>
    <Post v-for="(a, i) in userbody" :key="i" :realbody="userbody[i]" />
  </div>
</template>

<script>
import Post from './Post.vue'
export default {
  components: {
    Post
  },
  props: ['userbody']
  //   mounted() {
  //     console.log(this.userbody)
  //   }
}
</script>

<style lang="scss" scoped></style>
