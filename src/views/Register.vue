<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { auth } from '../main';

const email = ref('');
const password = ref('');
const router = useRouter();

const register = () => {
  auth
    .createUserWithEmailAndPassword(email.value, password.value) // need .value because ref()
    .then((data) => {
      console.log('Successfully registered! ', data);
      router.push('/feed'); // redirect to the feed
    })
    .catch(error => {
      console.log(error.code);
      alert(error.message);
    });
};
</script>

<template>
  <section>
    <form @submit.prevent="register">
      <h1>Create an Account</h1>
      <p><input type="text" placeholder="Email" v-model="email" /></p>
      <p><input type="password" placeholder="Password" v-model="password" /></p>
      <p>Minimo 6 caracteres</p>
      <p><button @click="register" type="submit">Submit</button></p>
    </form>
  </section>
</template>

<style>

</style>


