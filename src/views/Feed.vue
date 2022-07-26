<script setup>
import { getAuth } from 'firebase/auth';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../main';
import { useRouter } from 'vue-router';
import { onBeforeUnmount, onMounted } from 'vue';

const router = useRouter();
const auth = getAuth();
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
  });
}
</script>

<template>
    <section>
        <h1>FEED</h1>
        <p>{{ data }}</p>
    </section>
</template>

<style>

</style>
