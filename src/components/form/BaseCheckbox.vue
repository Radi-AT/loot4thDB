<script setup>

const props = defineProps({
  label: {
    type: String,
    default: '',
  },
  modelValue: {
    type: Boolean,
    default: false,
  },
});

</script>

<template>
  <div class="form-check">
    <input
      type="checkbox"
      class="form-check-input"
      :checked="modelValue"
      @change="$emit('update:modelValue', $event.target.checked)" />
    <label
      v-if="label"
      class="form-check-label">{{ props.label }}</label>
  </div>
</template>

<style lang="scss" scoped>
  .form-check {
    margin-bottom: 10px;

    .form-check-input {
      margin-right: 1em;
      float: none;
    }
  }
</style>