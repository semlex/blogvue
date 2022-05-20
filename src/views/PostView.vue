<template>
  <div class="container" v-if="this.post">
    <my-button @click="$router.back()">
      Назад
    </my-button>
    <h1 class="title">Запись "{{ post.title }}"</h1>
    <form @submit.prevent="">
      <my-input v-model="title"/>
      <my-textarea v-model="text" class="big"/>
      <div class="buttons">
        <my-button @click="modalOpen=true" class="red">
          Удалить
        </my-button>
        <my-button @click="handleSave">
          Сохранить
        </my-button>
      </div>
    </form>
  </div>
  <my-modal :show="modalOpen" @close="modalOpen = false">
    <div class="confirm-delete">
      <div class="confirm-delete__title">
        Удалить запись?
      </div>
      <div class="confirm-delete__buttons">
        <my-button @click="handleDelete">
          Да
        </my-button>
        <my-button @click="modalOpen=false">
          Нет
        </my-button>
      </div>
    </div>
  </my-modal>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import router from "@/router";
export default {
  data() {
    return {
      modalOpen: false,
      title: '',
      text: ''
    }
  },
  methods: {
    ...mapMutations({
      editPost: 'post/editPost',
      deletePost: 'post/deletePost'
    }),
    handleSave() {
      this.editPost({
        id: this.post.id,
        title: this.title,
        text: this.text
      })
    },
    handleDelete() {
      this.deletePost(this.post.id)
      router.push({ path: '/', replace: true })
    }
  },
  computed: {
    ...mapGetters({
      getPost: 'post/getPost'
    }),
    post() {
      return this.getPost(this.$route.params.id)
    }
  },
  beforeMount() {
    if (this.post) {
      this.title = this.post.title
      this.text = this.post.text
    } else {
      router.back()
    }
  }
}
</script>

<style scoped lang="scss">
.container {
  max-width: 900px;
  margin: 0 auto;
  padding: 15px 20px;
}
.title {
  margin: 25px 0 15px 0;
  font-size: 20px;
  font-weight: 500;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: '…"';
}
.buttons {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}
.confirm-delete {
  &__title {
    text-align: center;
    margin: 10px 0 40px 0;
  }

  &__buttons {
    display: flex;
    justify-content: space-around;
  }
}
</style>