<template>
  <div class="post">
    <div class="post__body">
      <div class="post__title">
        {{ post.title }}
      </div>
      <div class="post__content">
        <div class="post__text">
          {{ post.text }}
        </div>
      </div>
      <router-link :to="`/post/${post.id}`" class="post__link">
        перейти
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped lang="scss">
.post {
  width: 310px;
  padding: 20px;

  &__title {
    margin: 0;
    text-align: center;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  &__content {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fff;
    border: 1px solid #000;
    width: 100%;
    height: 90px;
    padding: 0 3px;
  }

  &__text {
    display: -webkit-box;
    word-break: break-word;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
  }

  &__link {
    display: block;
    text-align: center;
    width: 100%;
    font-size: 12px;
    margin-top: 10px;
    padding: 5px 15px;
    color: #000;
    background: #dfe8ff;
    border: 1px solid #80a8ff;
    border-radius: 5px;

    &:hover {
      background: #cfdfff;
    }
  }
}
</style>