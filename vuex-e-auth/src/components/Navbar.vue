<template>
  <nav class="navbar navbar-expand-lg navbar-bytebank">
    <a class="navbar-brand" href="#">ByteBank</a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <navbar-logado v-if="usuarioEstaLogado" />
      <navbar-deslogado v-else />
      
    </div>
  </nav>
</template>

<script>
import NavbarDeslogado from './NavbarDeslogado.vue';
import NavbarLogado from './NavbarLogado.vue';
import {mapGetters } from 'vuex'
 export default {
  components: { NavbarDeslogado, NavbarLogado },
  
  computed: {
    ...mapGetters(['usuarioEstaLogado'])
  },
};
</script>

<style>
</style>