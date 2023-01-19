<template>
  <section class="produtos-container">
    <div >
        
    </div>
  </section>
</template>

<script>
export default {
    nome: "ProdutosLista",
    data() {
        return {
            produtos: null,
        }
    },
    methods: {
        getProdutos() {
            fetch("http://localhost:3000/produto")
            .then(response => response.json())
            .then(response => {
                this.produtos = response;
            })
        }
    },
    created() {
        this.getProdutos()
    }
}
</script>

<style>

</style>