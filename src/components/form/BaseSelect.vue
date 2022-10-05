<script setup>
/* eslint-disable vue/no-multiple-template-root */

const props = defineProps({
  label: {
    type: String,
    default: '',
  },
  modelValue: {
    type: [String, Number],
    default: '',
  },
  options: {
    type: Array,
    required: true,
  },
});

</script>

<template>
  <label
    v-if="label"
    class="form-label">{{ props.label }}</label>
  <select
    :value="modelValue"
    v-bind="{
      ...$attrs,
      onChange: ($event) => { $emit('update:modelValue', $event.target.value) }
    }"
    class="form-select">
    <option
      v-for="option in options"
      :key="option"
      :value="option"
      :selected="option === modelValue">
    {{ option }}
    </option>
  </select>
</template>

<style lang="scss" scoped>
  select {
    margin-bottom: 20px;
  }
</style>