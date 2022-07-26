<script setup>
import { getAuth } from 'firebase/auth';
import { collection, getDocs } from 'firebase/firestore/lite';
import { db } from '../main';
import { useRouter } from 'vue-router';
import { onBeforeUnmount, onMounted, ref } from 'vue';

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
  getAnillos(db);
});

async function getAnillos(db) {
  const querySnapshot = await getDocs(collection(db, 'anillos'));
  querySnapshot.forEach(doc => {
    console.log(doc.id, doc.data());
    dataBase = doc.id, doc.data().nombre;
  });
}
</script>

<template>
    <section>
        <h1>Base de datos</h1>
        <p>{{ dataBase }}</p>
    </section>
</template>

<style>

</style>
