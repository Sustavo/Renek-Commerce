<template>
  <transition>
    <ul class="erro" v-if="erros.length > 0">
        <li v-for="(erro, index) in erros" :key="index" v-html="erro"></li>
    </ul>
  </transition>
</template>

<script>
export default {
    name: "ErroNotificacao",
    props: {
        erros: Array
    }
}
</script>

<style scoped>  
</style>