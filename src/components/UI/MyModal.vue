<template>
  <div class="modal" v-if="show" @click.stop="$emit('close')">
    <div class="modal__content" @click.stop>
      <slot/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'my-modal',
  props: {
    show: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped lang="scss">
.modal {
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.75);;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;

  &__content {
    flex: 1;
    max-width: 500px;
    position: relative;
    background: #fafafa;
    padding: 15px 10px;
    max-height: calc(100vh - 30px);
    overflow-y: auto;
  }
}
</style>