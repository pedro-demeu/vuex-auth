<template>
  <div class="container">
    <h1>Gerentes</h1>
    <div class="row">
      <Gerente
        v-for="gerente in gerentes"
        :key="gerente.numero"
        :gerente="gerente"
      />
    </div>
  </div>
</template>

<script>
import Gerente from "@/components/Gerente.vue";

export default {
  components: {
    Gerente,
  },
  data() {
    return {
      gerentes: [],
    };
  },
  mounted () {

    if (!this.$store.state.token) {
      this.$router.push({ name: 'login'})
    }

    this.$http.get('gerentes')
    .then(r => this.gerentes = r.data)
    .catch(err => console.log(err))
  }
};
</script>

<style>
</style>