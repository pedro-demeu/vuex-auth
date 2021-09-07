<template>
  <div class="container">
    <h1>Login</h1>
    <form @submit.prevent="efetuarLogin()">
      <div class="form-group">
        <label for="email">E-mail</label>
        <input type="email" class="form-control" v-model="usuario.email" />
      </div>
      <div class="form-group">
        <label for="senha">Senha</label>
        <input type="password" class="form-control" v-model="usuario.senha" />
      </div>
      <button type="submit" class="btn btn-primary brn-block">Logar</button>
      <router-link :to="{ name: 'novo.usuario' }">
        Não possui um cadastro, cadastre-se aqui!
      </router-link>
    </form>
  </div>
</template> 

<script>
export default {
  data() {
    return {
      usuario: {},
    };
  },
  methods: {
    efetuarLogin() {
      this.$http
        .post("auth/login", this.usuario)
        .then((response) => {
          console.log(response);
          //localStorage.setItem('token', response.data.access_token)

          //jeito errado de fazer, pois com vuex não é possível mudar na unha esses dados no token
          //-this.$store.state.token = response.data.access_token;
          //this.$store.state.usuario = response.data.user;

          this.$store.commit('DEFINIR_USUARIO_LOGADO', {
              token:response.data.access_token,
              usuario:response.data.user
          })
          this.$router.push({ name: "gerentes" });
        })
        .catch((err) => console.log(err));
    },
  },
};
</script>

<style>
</style>