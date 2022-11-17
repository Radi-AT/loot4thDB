<script setup>
import { onBeforeMount, ref } from 'vue';

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  cssClass: {
    type: String,
    default: '',
  },
  color: {
    type: String,
    default: '',
  },
  height: {
    type: String,
    default: '150px'
  },
  width: {
    type: String,
    default: '150px'
  },
});

function classes() {
  return `svgWrapper ${props.cssClass}`;
}
let svgIcon = ref('');

const getSvgIcon = () => {
  import(`../assets/svg/${props.name}.svg?raw`).then((mod) => {
    svgIcon.value = mod.default;
  });
};

onBeforeMount(() => {
  getSvgIcon();
});

</script>

<template>
  <div v-html="svgIcon" :class=classes()></div>
</template>

<style lang="scss" scoped>
.svgWrapper {
    display: inline-flex;
    fill: v-bind(color);
    height: v-bind(height);
    width: v-bind(width);
}
</style>