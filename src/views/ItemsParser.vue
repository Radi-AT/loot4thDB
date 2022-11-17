<script setup>
import { onBeforeMount, ref } from 'vue';

onBeforeMount(() => {
  // Clear up listener
});

let itemToParse = ref('');
let parsedResult = ref('');

const clearAreas = () => {
  itemToParse.value = '';
  parsedResult.value = '';
};

</script>

<template>
  <div class="parser__main">
    <div class="mb-3">
      <label for="itemToParse" class="form-label">Item to parse:</label>
      <textarea v-model="itemToParse" class="form-control" id="itemToParse" rows="10"></textarea>
    </div>
    <div class="mb-3">
      <label for="parsedResult" class="form-label">Result:</label>
      <textarea v-model="parsedResult" class="form-control" id="parsedResult" rows="10"></textarea>
    </div>
    <button type="button" class="btn btn-primary me-3">Primary</button>
    <button @click="clearAreas" type="button" class="btn btn-primary">Limpiar</button>
  </div>
</template>

<style lang="scss">
  .parser__main {
    max-width: 550px;
    margin: 0 auto;
    margin-top: 50px;
  }
</style>