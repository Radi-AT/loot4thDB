<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const email = ref('');
const password = ref('');
const errMsg = ref('');
const router = useRouter();
const auth = getAuth();

const login = () => {
  signInWithEmailAndPassword(auth, email.value, password.value) // Need .value because ref()
    .then((data) => {
      console.log('Successfully log in! ', data);
      router.push('/feed'); // Redirect to the feed
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

const loginWithGoogle = () => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider)
    .then((result) => {
      console.log('Successfully log in! ', result.user);
      router.push('/feed'); // Redirect to the feed
    }).catch((error) => {
      alert(error.message);
    });
};
</script>

<template>
  <section>
    <h1>Create an Account</h1>
    <form @submit.prevent="login">
      <div class="form-group">
        <label for="inputEmail1">Email address</label>
        <input v-model="email" type="email" class="form-control" id="inputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
      </div>
      <div class="form-group">
        <label for="inputPassword1">Password</label>
        <input v-model="password" type="password" class="form-control" id="inputPassword1" placeholder="Password">
      </div>
      <p v-if="errMsg">{{ errMsg }}</p>
      <button type="submit" class="btn btn-success">Log in</button>
    </form>
    <button @click="loginWithGoogle" class="btn btn-success">Log in con Google</button>
  </section>
</template>

<style lang="scss" scoped>
form {
  max-width: 300px;
  margin: 20px auto;

  & .btn {
    margin-top: 20px;
  }

  & .form-group{
    margin-top: 20px;
  }
}

</style>