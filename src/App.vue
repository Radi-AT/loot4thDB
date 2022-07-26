<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { getAuth } from 'firebase/auth';


const router = useRouter();
const isLoggedIn = ref(true);
const auth = getAuth();

auth.onAuthStateChanged(function(user) {
  if (user) {
    isLoggedIn.value = true;
  } else {
    isLoggedIn.value = false;
  }
});

const signOut = () => {
  auth.signOut();
  router.push('/');
};
</script>

<template>
  <div class="mainWrapper">
    <nav class="navbar navbar-expand-lg bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Loot4thDB</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <router-link to="/" class="nav-link"> Home </router-link>
            <router-link to="/feed" class="nav-link"> Feed </router-link>
            <router-link to="/register" class="nav-link"  v-if="!isLoggedIn"> Register </router-link>
            <router-link to="/log-in" class="nav-link" v-if="!isLoggedIn"> Login </router-link>
          </div>
        </div>
        <div class="d-flex">
          <button class="btn btn-danger btn-sm" @click="signOut" v-if="isLoggedIn">Logout</button>
        </div>
      </div>
    </nav>
    <router-view />
  </div>
</template>

<style lang="scss">
@import './scss/theme-colors.scss';

body {
  background-color: $dark;
  height: 100vh;
}

.mainWrapper {
  text-align: center;
  color: $secondary;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: $primary;
  max-width: 60%;
  height: 100%;
  margin: 0 auto;
}

</style>
