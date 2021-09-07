import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

const estado = {
    token: null,
    usuario: {}
}

const mutations = {
    DEFINIR_USUARIO_LOGADO (state, { token , usuario}) {
        state.usuario = usuario
        state.token = token
    }
}

export default new Vuex.Store({
    state: estado,
    mutations
})