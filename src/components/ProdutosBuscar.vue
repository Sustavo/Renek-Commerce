<template>
    <section>
        <form action="">
            <input name="busca" id="busca" type="text" v-model="busca" placeholder="Buscar...">
            <input type="submit" id="lupa" value="Buscar" @click.prevent="buscarProdutos">
        </form>
    </section>
</template>

<script>
export default {
    data() {
        return {
            busca: ""
        }
    },
    methods: {
        buscarProdutos() {
            this.$router.push({ query: { q: this.busca } })
        }
    }
}
</script>

<style scoped>
form {
    max-width: 600px;
    margin: 30px auto 60px auto;
    position: relative;
}

#busca {
    width: 100%;
    padding: 20px;
    border: none;
}

#busca:focus,
#busca:hover {
    transform: scale(1.1);

}


</style>