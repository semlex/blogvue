<template>
  <input
      :value="modelValue"
      @input="updateInput"
      type="text"
  />
</template>

<script>
export default {
  name: 'my-input',
  props: {
    modelValue: [String, Number]
  },
  methods: {
    updateInput(e) {
      this.$emit('update:modelValue', e.target.value)
    }
  }
}
</script>

<style scoped lang="scss">
input {
  width: 100%;
  border: 1px solid #000;
  padding: 5px 0;
  margin-bottom: 15px;

  &[data-error="true"], &:invalid {
    border: 1px solid #ff0000;
    background: #f7ecec;

    &:focus {
      border-color: #999999;
    }
  }
 }
</style>