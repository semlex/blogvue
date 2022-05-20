<template>
<my-modal :show="modelValue" @close="cancel">
  <form @submit.prevent="submit">
    <my-input v-model="title"/>
    <my-input v-model="text"/>
    <div class="buttons">
      <my-button type="button" @click="cancel">Отменить</my-button>
      <my-button type="submit">Сохранить</my-button>
    </div>
  </form>
</my-modal>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  props: {
    modelValue: Boolean
  },
  data() {
    return {
      title: '',
      text: ''
    }
  },
  methods: {
    ...mapMutations({
      addPost: 'post/addPost'
    }),
    submit() {
      const title = this.title
      const text = this.text
      this.addPost({ title, text })
      this.cancel()
    },
    cancel() {
      this.title = ''
      this.text = ''
      this.$emit('update:modelValue', false)
    }
  }
}
</script>

<style scoped lang="scss">
.buttons {
  display: flex;
  justify-content: flex-end;
  margin: 10px -8px 0 -8px;
}
</style>