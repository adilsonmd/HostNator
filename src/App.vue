<template>
  <div class="">
    
    <nav>
      <PageHeader></PageHeader>
    </nav>
  </div>
  
  <div class="">

    <ChamadaInicial></ChamadaInicial>

    <section style="margin-top: 150px; margin-bottom: 100px;">
      <router-view></router-view>
    </section>
    
  </div>

  <PageFooter></PageFooter>
</template>

<script>
import SolucoesHospedagem from "./components/paginas/SolucoesHospedagem.vue";
import ChamadaInicial from "./components/estrutura/ChamadaInicial.vue";
import PageHeader from "./components/estrutura/PageHeader.vue";
import PageFooter from "./components/estrutura/PageFooter.vue";
import {provide, ref} from "vue";

export default {
  components: {
    SolucoesHospedagem,
    ChamadaInicial,
    PageHeader,
    PageFooter
  },
  setup() {

    const valorMensalidade = ref("12,19");
    
    provide("valorMensalidade", valorMensalidade);

    return {
      valorMensalidade
    }
  }
}
</script>



<style scoped>
* {
  font-family: 'Galano', Helvetica, Arial, sans-serif;
}


</style>
