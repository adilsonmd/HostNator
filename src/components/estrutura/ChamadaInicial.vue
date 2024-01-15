<template>
    <section class="bighero grid grid-cols-2">
      <div class="principal">
        
        <h1 class="text-white text-uppercase">Hospedagem de site</h1>
        <h2 class="text-[36px] fw-bold text-white leading-10">Seu site preparado para <span class="bg-green-400 text-[#1F2044]">crescer, engajar e converter</span></h2>
        <h3 class="text-white text-[16px] fw-semibold mt-4">Venha para a HostNator e tenha absolutamente tudo para o seu sucesso</h3>
        
        <!-- Vantagens -->
        <ul class="text-white mt-4 d-flex mb-4">
          
          <li class="me-2">Mais seguro</li>
          <li class="ms-5 me-2">Site rápido</li>
          <li class="ms-5 me-2">Sempre disponível</li>
          <li class="ms-5 me-2">Suporte 24/7/365</li>
        </ul>

        <div class="price-section">
          <router-link to="/planos" class="bighero-button">Comece com até 60% OFF</router-link>
          <p class="d-flex flex-column text-price my-auto">
            <span class="fw-bold">+ Domínio grátis</span>
            <span class="fw-bold">A partir de <span class="bighero-text text-2xl">R$ {{valorMensalidade}}/mês*</span></span>
          </p>
        </div>
      </div>
    </section>
    <div class="bg-pink">
      <section>
        <div>
          <img src="../../assets/br-grow-destop.svg" alt=""/>
        </div>
      </section>
    </div>
</template>

<script>
import {inject,ref} from "vue";

export default {
    components: {

    },
    setup() {
        
        const valorMensalidade = inject("valorMensalidade");
        const linkComecarAgora = ref("/planos")
        return {
            valorMensalidade,
            linkComecarAgora
        }
    }
}
</script>

<style scoped>
.bighero {
  padding: 20px 20px 100px;
  background-color: #181936;
}
.bighero-button {
  background-color: rgb(255,207,0);
  color: rgb(31,32,68);
  display: inline-block;
  font-weight: 700;
  position: relative;
  text-align: center;
  text-decoration: none;
  margin-right: 32px;
  padding: 9px 24px 15px 24px;
}
.bighero-text {
  color: rgb(255,207,0);
  font-size: 24px;
  font-weight: 700;
  margin-left: 4px;
}
.price-section {
  display: flex;
  align-items: center;
  -webkit-box-align: center;
  margin: 40px 0px 24px;
}
.text-price {
  color: rgb(250 250, 250);
  font-weight: 400;
  font-size: 16px;
  line-height: 26px;
}
.principal::before {
    background-size: cover;
    background-image: url('@/assets/br-banner-snake.svg');
    background-repeat: no-repeat;
    content: "";
    display: block;
    height: 653px;
    left: -630px;
    position: absolute;
    top: -80px;
    width: 600px;
    z-index: 0;
}

@media (max-width: 991px) {
  .bighero-button {
    font-size: 16px;
    line-height: 22px;
    margin-bottom: 8px;
    max-height: 46px;
  }
}
</style>