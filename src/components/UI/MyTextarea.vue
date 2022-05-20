<template>
  <textarea
      :value="modelValue"
      @input="updateTextarea"
  />
</template>

<script>
export default {
  name: 'my-textarea',
  props: {
    modelValue: [String, Number]
  },
  methods: {
    updateTextarea(e) {
      this.$emit('update:modelValue', e.target.value)
    }
  }
}
</script>

<style scoped lang="scss">
textarea {
  width: 100%;
  border: 1px solid #000;
  font-size: 14px;
  padding: 35px 0;
  height: 100px;
  resize: none;

  &[data-error="true"], &:invalid {
    border: 1px solid #ff0000;
    background: #f7ecec;

    &:focus {
      border-color: #999999;
    }
  }
}
.big {
  height: 300px;
  padding: 130px 0;
}
</style>