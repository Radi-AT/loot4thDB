<script setup>
import { getAuth } from 'firebase/auth';
import { collection, getDocs } from 'firebase/firestore/lite';
import { db } from '../main';
import { useRouter } from 'vue-router';
import { onBeforeUnmount, onMounted, ref } from 'vue';
import items from '../assets/testItems';

const router = useRouter();
const auth = getAuth();
let dataBase = ref();
const authListener = auth.onAuthStateChanged(function(user) {
  if (!user) {
    alert('Debes estar autenticado para acceder a esta pagina. Redirigiendo a la pagina principal...');
    router.push('/');
  }
});

onBeforeUnmount(() => {
  // Clear up listener
  authListener();
});

onMounted(() => {
  getRings(db);
});

async function getRings(db) {
  const querySnapshot = await getDocs(collection(db, 'anillos'));
  let ringList = [];
  querySnapshot.forEach(doc => {
    console.log(doc.id, doc.data());
    ringList.push({
      id: doc.id,
      name: doc.data().nombre,
      lvl: doc.data().nivel,
      lore: doc.data().lore,
      skill: doc.data().poder,
      price: doc.data().precio,
      property: doc.data().propiedad,
      slot: doc.data().slot,
    });
  });

  dataBase.value = ringList;
}
</script>

<template>
    <section>
        <h1>Base de datos</h1>
        <div v-for="item in dataBase" :key="item.id" class="item">
          <p>ID: {{ item.id }}</p>
          <p>NOMBRE: {{ item.name }}</p>
          <p>NIVEL: {{ item.lvl }}</p>
          <p>LORE: {{ item.lore }}</p>
          <p>PODER: {{ item.skill }}</p>
          <p>PRECIO: {{ item.price }}</p>
          <p>PROPIEDAD: {{ item.property }}</p>
          <p>SLOT: {{ item.slot }}</p>
        </div>
         <h1>Base de items</h1>
        <div v-for="item in items" :key="item.ID" class="item">
          <p>ID: {{ item.ID }}</p>
          <p>NOMBRE: {{ item.Name }}</p>
          <p>Cost: {{ item.Cost }}</p>
          <p>Level: {{ item.Level }}</p>
          <p>Category: {{ item.Category }}</p>
          <p>Enhancement: {{ item.Enhancement }}</p>
          <p>IsMundane: {{ item.IsMundane }}</p>
          <p>FinalCost: {{ item.FinalCost }}</p>
          <p>Source: {{ item.Source }}</p>
          <p>Teaser: {{ item.Teaser }}</p>
          <div v-html="item.Txt"></div>
          <p>Rarity: {{ item.Rarity }}</p>
          <p>CostSort: {{ item.CostSort }}</p>
          <p>LevelSort: {{ item.LevelSort }}</p>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.item {
  border: 5px solid peru;
  max-width: 650px;
  margin: 0 auto 20px auto;
  padding: 20px;
}
</style>
