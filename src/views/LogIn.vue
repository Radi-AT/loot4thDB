<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import firebase from "firebase/compat/app";
import 'firebase/compat/auth';

const email = ref('');
const password = ref('');
const errMsg = ref('');
const router = useRouter();

const login = () => {
  firebase
    .auth() // get the auth api
    .signInWithEmailAndPassword(email.value, password.value) // need .value because ref()
    .then((data) => {
      console.log('Successfully log in! ', data);
      router.push('/feed'); // redirect to the feed
    })
    .catch(error => {
      switch (error.code) {
      case 'auth/invalid-email':
        errMsg.value = 'Invalid email';
        break;
      case 'auth/user-not-found':
        errMsg.value = 'No account with that email was found';
        break;
      case 'auth/wrong-password':
        errMsg.value = 'Incorrect password';
        break;
      default:
        errMsg.value = 'Email or password was incorrect';
        break;
      }
    });
};
</script>

<template>
  <section>
    <h1>Create an Account</h1>
    <p><input type="text" placeholder="Email" v-model="email" /></p>
    <p><input type="password" placeholder="Password" v-model="password" /></p>
    <p><button @click="login">Submit</button></p>
    <p v-if="errMsg">{{ errMsg }}</p>
  </section>
</template>

<style>

</style>