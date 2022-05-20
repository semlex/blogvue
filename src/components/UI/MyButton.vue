<template>
  <button class="button">
    <slot/>
  </button>
</template>

<script>
export default {
  name: 'my-button'
}
</script>

<style scoped lang="scss">
button {
  cursor: pointer;
  margin: 0 8px;
  padding: 7px 30px;
  background: #dfe8ff;
  border: 1px solid #80a8ff;
  border-radius: 0;

  &:hover {
    background: #cfdfff;
  }
}
.red {
  background: #ffc3c3;
  border-color: #ff9898;

  &:hover {
    background: #ffbebe;
  }
}
</style>