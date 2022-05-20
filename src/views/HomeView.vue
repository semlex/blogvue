<template>
  <div class="container">
    <h1 class="title">
      Блог
    </h1>
    <posts-list :posts="posts"/>
    <div class="buttons">
      <my-button @click="modalOpen=true">
        + Добавить
      </my-button>
    </div>
  </div>
  <add-post
      v-model="modalOpen"
  />
</template>

<script>
import { mapGetters } from 'vuex'
import AddPost from '@/components/AddPost'
import PostsList from '@/components/PostsList'
export default {
  components: { AddPost, PostsList },
  data() {
    return {
      modalOpen: false
    }
  },
  computed: {
    ...mapGetters({
      posts: 'post/allPosts'
    })
  }
}
</script>

<style scoped lang="scss">
.container {
  max-width: 930px;
  margin: 0 auto;
  padding: 10px;
}
.title {
  text-align: center;
}
.buttons {
  display: flex;
  justify-content: flex-end;
  margin-top: 30px;
}
</style>