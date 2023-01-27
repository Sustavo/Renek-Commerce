import Vue from "vue";
import Vuex from "vuex";
import { api } from "./services";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        login: false,
        usuario: {
            id: "",
            nome: "",
            email: "",
            senha: "",
            cep: "",
            rua: "",
            numero: "",
            bairro: "",
            cidade: "",
            estado: ""
        }
    },
    mutations: {
        UPDATE_LOGIN(state, payload) {
            state.login = payload;
        },
    },
    actions: {

    }
})