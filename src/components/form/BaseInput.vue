<script setup>
/* eslint-disable vue/no-multiple-template-root */

const props = defineProps({
  label: {
    type: String,
    default: '',
  },
  placeholder: {
    type: String,
    default: '',
  },
  modelValue: {
    type: [String, Number],
    default: '',
  },
});

</script>

<template>
  <label
    class="form-label">{{ props.label }}</label>
  <input
    class="form-control"
    v-bind="$attrs"
    :placeholder="placeholder"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"/>
</template>

<style lang="scss" scoped>
  input {
    margin-bottom: 20px;
  }
</style>