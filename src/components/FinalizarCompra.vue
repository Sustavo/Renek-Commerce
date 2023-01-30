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
        
    },
    methods: {
        
        
    }
}
</script>

<style scoped>

</style>