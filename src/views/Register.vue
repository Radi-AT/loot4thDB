<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const email = ref('');
const password = ref('');
const router = useRouter();
const auth = getAuth();

const register = () => {
  createUserWithEmailAndPassword(auth, email.value, password.value) // Need .value because ref()
    .then((data) => {
      console.log('Successfully registered! ', data);
      router.push('/DbViewer'); // Redirect to the DbViewer
    })
    .catch(error => {
      alert(error.message);
    });
};

const registerWithGoogle = () => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider)
    .then((data) => {
      console.log('Successfully registered! ', data);
      router.push('/DbViewer'); // Redirect to the DbViewer
    })
    .catch(error => {
      alert(error.message);
    });
};
</script>

<template>
  <section>
    <h1>Create an Account</h1>
    <form @submit.prevent="register">
      <div class="form-group">
        <label for="inputEmail1">Email address</label>
        <input v-model="email" type="email" class="form-control" id="inputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
        <small id="emailHelp" class="form-text text-muted">Tranqui tu email estara a salvo en la mazmorra.</small>
      </div>
      <div class="form-group">
        <label for="inputPassword1">Password</label>
        <input v-model="password" type="password" class="form-control" id="inputPassword1" placeholder="Password">
      </div>
      <p>Minimo 6 caracteres</p>
      <div class="form-check">
        <input type="checkbox" class="form-check-input" id="Check1">
        <label class="form-check-label" for="check1">Renuncio a todos mis derechos</label>
      </div>
      <button type="submit" class="btn btn-success">Enviar</button>
    </form>
    <button @click="registerWithGoogle" class="btn btn-success">Registrarse con Google</button>
  </section>
</template>

<style lang="scss" scoped>
form {
  max-width: 300px;
  margin: 20px auto;
}

.form-check {
  display: flex;
  margin-top: 20px;
  justify-content: center;

  & label {
    margin-left: 10px;
    margin-bottom: 15px;;
  }
}
</style>


