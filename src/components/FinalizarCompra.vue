<template>
    <section>
        <h2>Endereço de envio</h2>
        <UsuarioForm>
            <button class="btn" @click.prevent="finalizarCompra">Finalizar Compra</button>
        </UsuarioForm>
    </section>
</template>

<script>
import UsuarioForm from '@/components/UsuarioForm.vue';
import { api } from "@/services.js"
import { mapState } from 'vuex';

export default {
    name: "FinalizarCompra",
    props: ["produto"],
    components: {
        UsuarioForm
    },
    computed: {
        ...mapState(["usuario"]),
        compra() {
            return {
                comprador_id: this.usuario.email,
                vendedor_id: this.produto.usuario_id,
                produto: this.produto,
                endereco: {
                    cep: this.usuario.cep,
                    rua: this.usuario.rua,
                    numero: this.usuario.numero,
                    bairro: this.usuario.bairro,
                    cidade: this.usuario.cidade,
                    estado: this.usuario.estado,
                }
            }
        }
    },
    methods: {
        
        
    }
}
</script>

<style scoped>

</style>