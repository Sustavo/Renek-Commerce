<template>
  <section>
    <h2>Crie a Sua Conta</h2>
    <transition mode="out-in">
      <button v-if="!criar" class="btn " @click="criar = true">Criar Conta</button>
      <UsuarioForm v-else>
        <button class="btn btn-form">Criar Usuário</button>
      </UsuarioForm>
    </transition>
  </section>
</template>

<script>
import UsuarioForm from "@/components/UsuarioForm.vue"

export default {
    name: "LoginCriar",
    components: {
      UsuarioForm
    },
    data() {
      return {
        criar: false,
      }
    }

}
</script>

<style scoped>

</style>