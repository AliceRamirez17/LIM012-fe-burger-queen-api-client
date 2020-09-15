<template>
  <div class="credentials">
    <div class="login-form">
      <img src="../assets/logo-2.png" alt="">
      <h2>Inicia sesión</h2>
      <input v-model="email" class="input" type="email" placeholder="email">
      <input v-model="password" class="input" type="password" placeholder="contraseña">
      <router-link to="/home" tag="button" class="login-btn" 
      @click.native="handleSendForm" >
        Entrar
      </router-link>
    </div>
  </div>
</template>

<script>
import auth from '../controllers/auth';

export default {
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    handleSendForm(e) {
      e.preventDefault();
      const userCredentials = {
        email: this.email,
        password: this.password
        };
      auth(userCredentials)
        .then((resp)=> {
          console.log(userCredentials, resp);
          if (resp.token){
            window.localStorage.setItem('token', resp.token);
            this.$router.push('/home');
          }
        })
    },
  },
};

</script>

<style lang="scss">

@mixin width-height($width, $height) {
    width: $width;
    height: $height;
};

.credentials {
    display: grid;
    align-items: center;
    height: 100vh;
    grid-template-columns: 10% 80% 10%;
    grid-template-rows: 100%;
}

.login-form {
    height: 70%;
    grid-column: 2 / 3;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;

    h2 {font-size: 24px}

    img {max-width: 200px}
}

.input {
    @include width-height(260px, 40px);
    border: 2px solid black;
    text-align: center;
    font-size: 24px;
    color: #AFAFAF;
    border-radius: 10px;
    outline: none;
}

.login-btn {
    @include width-height(200px, 40px);
    background-color: #000;
    color: #AFAFAF;
    font-size: 24px;
    border: none;
    outline: none;
    cursor: pointer;
    border-radius: 10px;
    color: white;
}

@media (min-width: 768px){

    .credentials {

        .login-form {
            height: 80%;

            h2 {font-size: 36px}

            img {max-width: 240px}

        }

        .input {
            @include width-height(430px, 60px);
            font-size: 36px;
        }

        .login-btn {
            @include width-height(300px, 60px);
            font-size: 36px;
        }
    }
}
</style>
