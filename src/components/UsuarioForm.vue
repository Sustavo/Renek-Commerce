<template>
  <form>
    <label for="nome">Nome</label>
    <input type="text" class="nome" name="nome" v-model="nome">
    <label for="email">Email</label>
    <input type="email" class="email" name="email" v-model="email">
    <label for="senha">senha</label>
    <input type="password" class="senha" name="senha" v-model="senha">
    <label for="cep">Cep</label>
    <input type="text" class="cep" name="cep" v-model="cep" @keyup="preencherCep">
    <label for="rua">Rua</label>
    <input type="text" class="rua" name="rua" v-model="rua">
    <label for="numero">Numero</label>
    <input type="text" class="numero" name="numero" v-model="numero">
    <label for="bairro">Bairro</label>
    <input type="text" class="bairro" name="bairro" v-model="bairro">
    <label for="cidade">Cidade</label>
    <input type="text" class="cidade" name="cidade" v-model="cidade">
    <label for="estado">Estado</label>
    <input type="text" class="estado" name="estado" v-model="estado">
    <div class="button">
        <slot></slot>
    </div>
  </form>
</template>

<script>
import { mapFields } from '@/helpers.js';
import { getCep } from '@/services.js'

export default {
    name: "UsuarioForm",
    computed: {
        ...mapFields({
            fields: ["nome","email","senha","cep","rua","numero","bairro","cidade","estado"],
            base: "usuario",
            mutation: "UPDATE_USUARIO"
        }),
    },
    methods: {
        preencherCep() {
                const cep = this.cep.replace(/\D/g, "");
                if(cep.length === 8) {
                    getCep(cep).then(response => {
                        console.log(response)
                        this.rua = response.data.logradouro;
                        this.bairro = response.data.bairro;
                        this.cidade = response.data.localidade;
                        this.estado = response.data.uf;
                    })
                }
        }
    }
}
</script>

<style scoped>
    form {
        display: grid;
        grid-template-columns: 80px 1fr;
        align-items: center;
    }

    .button {
        grid-column: 2;
        margin-top: 10px;
    }
</style>