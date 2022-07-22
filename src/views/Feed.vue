<script setup>
import { db, auth } from '../main';
import { useRouter } from 'vue-router';
import { onBeforeUnmount } from 'vue';

const router = useRouter();
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

// onMounted(() => {
//   data = db.collection('/anillos');

//   console.log(data);
// });

async function getCities(db) {
  const citiesCol = await db.collection('anillos');
  return citiesCol;
}

console.log(getCities(db));
const data = getCities(db);

</script>

<template>
    <section>
        <h1>FEED</h1>
        <p>{{ data }}</p>
    </section>
</template>

<style>

</style>
