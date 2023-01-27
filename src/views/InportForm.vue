<script setup>
import { ref, onMounted } from 'vue';
import { doc, setDoc, collection, addDoc } from 'firebase/firestore/lite';
import { db } from '../services/firestoreService';
import BaseInput from '../components/form/BaseInput.vue';
import BaseSelect from '../components/form/BaseSelect.vue';
import BaseCheckbox from '../components/form/BaseCheckbox.vue';
import BaseRadio from '../components/form/BaseRadio.vue';

const event = ref({});
event.value.opciones = {};
const tipos = ['Anillo', 'Armadura', 'Arma'];

onMounted(() => {
  event.value.tipo = tipos[0];
});

async function setData() {
  // Add a new document in collection "test"
  await setDoc(doc(db, "test", "LA hola"), {
    name: "Los Angeles",
    state: "CA",
    country: "EEUU"
  });
}

async function addData() {
  // Add a new document with a generated id.
  await addDoc(collection(db, "test"), {
    name: "Tokyo",
    country: "Japan"
  });
}

// let x = await (async function() {return "hello";})();

</script>

<template>
<div class="importForm">
  <h1>IMPORTAR DATOS</h1>
  <form @submit.prevent>
    <BaseInput
      v-model="event.testInput"
      label="Input Base 2"
      placeholder="Nombre quizas?"
      type="text" />
    <BaseSelect
      :options="tipos"
      v-model="event.tipo"
      label="Select label" />
    <BaseCheckbox
      v-model="event.opciones.unico"
      label="El item es unico?" />
    <BaseCheckbox
      v-model="event.opciones.epico"
      label="El item es epico?" />
    <BaseRadio
      v-model="event.sabor"
      :value="0"
      label="Vainilla"
      name="sabores"/>
    <BaseRadio
      v-model="event.sabor"
      :value="1"
      label="Chocolate"
      name="sabores"/>
    <BaseRadio
      v-model="event.sabor"
      :value="2"
      label="Pistacho"
      name="sabores"/>
    <button class="btn btn-primary btn-lg" type="submit" @click="setData">Set Data</button>
    <button class="btn btn-primary btn-lg" type="submit" @click="addData">Add Data</button>
    <button class="btn btn-primary btn-lg" type="submit" @click="setData">Delete Data</button>
    <button class="btn btn-primary btn-lg" type="submit" @click="setData">Algo mas</button>
  </form>

</div>
</template>

<style lang="scss">
.importForm {
  max-width: 550px;
  margin: 0 auto;
}
</style>