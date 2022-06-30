<script>
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { useRouter } from 'vue-router';
import { onBeforeUnmount } from 'vue';

const router = useRouter();
const authListener = firebase.auth().onAuthStateChanged(function(user) {
  if (!user) { // not logged in
    alert('you must be logged in to view this. redirecting to the home page');
    router.push('/');
  }
});

onBeforeUnmount(() => {
  // clear up listener
  authListener();
});
</script>
<template>
    <section>
        <h1>FEED</h1>
    </section>
</template>

<style>

</style>
