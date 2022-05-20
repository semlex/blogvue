<template>
  <div class="posts">
    <post
        v-for="post in posts"
        :post="post"
        :key="post.id"
    />
  </div>
</template>

<script lang="ts">
import Post from '@/components/Post.vue'
import { IPost } from '@/types'
export default {
  components: { Post },
  props: {
    posts: {
      type: Object as () => Array<IPost>
    }
  }
}
</script>

<style scoped lang="scss">
.posts {
  display: flex;
  align-content: flex-start;
  flex-flow: row wrap;
  margin: 0 -20px;
  min-height: calc(100vh - 300px)
}
</style>