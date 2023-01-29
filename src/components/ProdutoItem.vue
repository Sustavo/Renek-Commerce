<template>
  <div class="produto" v-if="produto">
    <router-link class="produto-img" :to="{name: 'produto', params: {id: produto.id}}">
        <img v-if="produto.fotos" :src="produto.fotos[0].src" :alt="produto.fotos[0].titulo">
        <p>Ver Produto</p>
    </router-link>
    <div class="info">
        <p class="preco">{{ produto.preco | numeroPreco }}</p>
        <h2 class="titulo">{{ produto.nome }}</h2>
        <slot></slot>
    </div>

  </div>
</template>

<script>
export default {
    name: "ProdutoItem",
    props: ["produto"]
}
</script>

<style scoped>

</style>