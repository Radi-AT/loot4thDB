<template>
  <div class="authWrapper">
    <form class="login">
      <p class="title">Log in</p>
      <input type="text" placeholder="Username" autofocus/>
      <i class="fa fa-user"></i>
      <input type="password" placeholder="Password" />
      <i class="fa fa-key"></i>
      <a href="#">Forgot your password?</a>
      <button id="logInEmail">
        <i class="spinner"></i>
        <span class="state">Log in</span>
      </button>
      <button id="logInGoogle" class="googlebtn">
        <i class="spinner"></i>
        <span class="state">Log in with Google</span>
      </button>
    </form>
  </div>
</template>


<script>
export default {
  props: {
    placeholder: {
      type: String,
      default: 'Filter...'
    }
  },
  data() {
    return {
      filterText: '',
      // searchIcon: require('../assets/icons/searchIcon.svg'),
    };
  },
  computed:{
    filterValue: function() {
      this.$emit('input', this.filterText);
      return this.filterText;
    }
  },
  methods:{
    clearSearch: function () {
      this.filterText = '';
    }
  }
};
</script>

<style lang="scss" scoped>
$c-primary: #2196F3;
$c-google: #dd4b39;

body {
  font-family: "Open Sans", sans-serif;
  height: 100vh;
  background: url("https://i.imgur.com/HgflTDf.jpg") 50% fixed;
  background-size: cover;
}

@keyframes spinner {
  0% { transform: rotateZ(0deg); }
  100% { transform: rotateZ(359deg); }
}

* {
  box-sizing: border-box;
}

.authWrapper {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  min-height: 100%;
  padding: 20px;
  background: rgba(darken($c-primary,40%), 0.85);
}


.login {

  border-radius: 2px 2px 5px 5px;
  padding: 10px 20px 20px 20px;
  width: 90%;
  max-width: 320px;
  background: #ffffff;
  position: relative;
  box-shadow: 0px 1px 5px rgba(0,0,0,0.3);

  &.loading {
    button {
      max-height: 100%;
      padding-top: 50px;
      .spinner {
        opacity: 1;
        top: 40%;
      }
    }
  }

  &.ok {
    button {
      background-color: #8bc34a;
      .spinner{
        border-radius: 0;
        border-top-color: transparent;
        border-right-color: transparent;
        height: 20px;
        animation: none;
        transform: rotateZ(-45deg);
      }
    }
  }

  input {
    display: block;
    padding: 15px 10px;
    margin-bottom: 10px;
    width: 100%;
    border: 1px solid #ddd;
    transition: border-width 0.2s ease;
    border-radius: 2px;
    color: #ccc;

    &+ i.fa {
      color: #fff;
      font-size: 1em;
      position: absolute;
      margin-top: -47px;
      opacity: 0;
      left: 0;
      transition: all 0.1s ease-in;
    }

    &:focus {
      &+ i.fa {
        opacity: 1;
        left: 30px;
        transition: all 0.25s ease-out;
      }
      outline: none;
      color: #444;
      border-color: $c-primary;
      border-left-width: 35px;
    }

  }

  a {
    font-size: 0.8em;
    color: $c-primary;
    text-decoration: none;
  }

  .title {
    color: #444;
    font-size: 1.2em;
    font-weight: bold;
    margin: 10px 0 30px 0;
    border-bottom: 1px solid #eee;
    padding-bottom: 20px;
  }

  button {
    width: 100%;
    height: 60px;
    background: $c-primary;
    color: #fff;
    display: block;
    border: none;
    margin-top: 20px;
    border: 0px solid rgba(0,0,0,0.1);
    border-radius: 0 0 2px 2px;
    transform: rotateZ(0deg);
    transition: all 0.1s ease-out;
    border-bottom-width: 7px;

    &.googlebtn {
      background-color: $c-google;
    }

    .spinner {
      display: block;
      width: 40px;
      height: 40px;
      position: absolute;
      border: 4px solid #ffffff;
      border-top-color: rgba(255,255,255,0.3);
      border-radius: 100%;
      left: 50%;
      top: 0;
      opacity: 0;
      margin-left: -20px;
      margin-top: -20px;
      animation: spinner 0.6s infinite linear;
      transition: top 0.3s 0.3s ease,
                opacity 0.3s 0.3s ease,
                border-radius 0.3s ease;
      box-shadow: 0px 1px 0px rgba(0,0,0,0.2);
    }

  }

    &:not(.loading) button:hover {
      box-shadow: 0px 1px 3px $c-primary;
    }
    &:not(.loading) button:focus {
      border-bottom-width: 4px;
    }


}
</style>