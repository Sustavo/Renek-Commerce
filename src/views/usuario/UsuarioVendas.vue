<template>
  <section>
    <div v-if="vendas">
      <h2>Vendas</h2>
      <div class="produtos-wrapper" v-for="(venda, index) in vendas" :key="index">
        <ProdutoItem v-if="venda.produto" :produto="venda.produto">
          <p class="vendedor">
            <span>Comprador:</span>
            {{ venda.comprador_id }}
          </p>
        </ProdutoItem>
        <div class="entrega">
          <h3>Entrega: </h3>
          <ul v-if="venda.endereco">
            <li v-for="(value,key) in venda.endereco" :key="key">
              {{ key }}: {{ value }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ProdutoItem from '@/components/ProdutoItem.vue';
import { api } from '@/services';

export default {
  components: {
    ProdutoItem
  },
  

}
</script>

<style scoped>

</style>