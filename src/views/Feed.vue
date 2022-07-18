<script>
import { db, auth } from '../main';
import { useRouter } from 'vue-router';
import { onBeforeUnmount, onMounted, ref } from 'vue';

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

let data = ref('');

onMounted(() => {
  data = db.collection('/anillos');

  console.log(data);
});


// async function getCities(db) {
//   const citiesCol = collection(db, 'cities');
//   const citySnapshot = await getDocs(citiesCol);
//   const cityList = citySnapshot.docs.map(doc => doc.data());
//   return cityList;
// }
</script>

<template>
    <section>
        <h1>FEED</h1>
        <p>{{ data }}</p>
    </section>
</template>

<style>

</style>
