<script setup>
import { ref, onBeforeMount } from 'vue';

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

const svgImport = ref({});
const svgWrapper = ref([]);

function classes() {
  return `svgWrapper ${props.cssClass}`;
}

function getSVG() {
  const svgList = import.meta.glob('../assets/svg/*.svg', { as: 'raw' });
  const match = svgList[`../assets/svg/${props.name}.svg`];
  svgImport.value = match;
}

onBeforeMount(() => {
  getSVG();
});
</script>

<template>
  <div v-html="svgImport" :class=classes() ref="svgWrapper"></div>
</template>

<style lang="scss" scoped>
.svgWrapper {
    display: inline-flex;
    fill: v-bind(color);
    height: v-bind(height);
    width: v-bind(width);
}
</style>