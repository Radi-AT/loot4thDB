<script setup>

const props = defineProps({
  label: {
    type: String,
    default: '',
  },
  modelValue: {
    type: [String, Number],
    default: '',
  },
  value: {
    type: [String, Number],
    required: true,
  },
});

</script>

<template>
  <div class="form-check">
    <input
      type="radio"
      class="form-check-input"
      v-bind="$attrs"
      :value="value"
      :checked="modelValue === value"
      @change="$emit('update:modelValue', value)" />
    <label
      v-if="label"
      class="form-check-label">{{ props.label }}</label>
  </div>
</template>

<style lang="scss" scoped>
</style>