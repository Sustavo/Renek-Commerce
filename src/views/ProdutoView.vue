<template>
  <section >
    <div v-if="produto" class="produto">
      <ul class="fotos" v-if="produto.fotos">
        <li v-for="(foto, index) in produtos.fotos" :key="index">
          <img :src="foto.src" :alt="foto.titulo" >
        </li>
      </ul>
      <div class="info">
        <h1>{{ produto.nome }}</h1>
        <p class="preco">{{ produto.preco | numeroPreco }}</p>
        <p class="descricao">{{ produto.descricao }}</p>
        <button class="btn" v-if="produto.vendido === 'false'">Comprar</button>
        <button class="btn" disabled v-else>Produto Vendido</button>
      </div>
    </div>
    <PaginaCarregando v-else/>
  </section>
</template>

<script>


export default {
    name: "ProdutoView",
    props: ["id"],

}
</script>

<style scoped>


</style>