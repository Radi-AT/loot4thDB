<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const router = useRouter();
const isLoggedIn = ref(true);

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    isLoggedIn.value = true;
  } else {
    isLoggedIn.value = false;
  }
});

const signOut = () => {
  firebase.auth().signOut();
  router.push('/');
};
</script>

<template>
  <div class="mainWrapper">
    <nav>
      <router-link to="/"> Home </router-link> |
      <span v-if="isLoggedIn">
        <router-link to="/feed"> Feed </router-link> |
        <button @click="signOut">Logout</button>
      </span>
      <span v-else>
        <router-link to="/register"> Register </router-link> |
        <router-link to="/log-in"> Login </router-link>
      </span>
    </nav>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
