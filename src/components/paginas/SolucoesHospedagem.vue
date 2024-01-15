<template>
    <div class="mb-5">
      <div class="mx-auto my-5">
        <h2 class="big-titulo">De hospedagem de sites a registro de domínio. Temos todas as soluções para você!</h2>
      </div>

      <div class="d-flex flex-row mx-5 px-5">

        <div class="pe-3">
          <img src="../../assets/itens/download.svg" class="h-12 mb-4" alt="">
          <a href="" class="">
            <h3 class="titulo-link">Hospedagem de Sites</h3>
          </a>
          <p class="mb-4 min-h-100">Completo e acessível, com várias ferramentas para criar seu site.</p>
          <p class="d-flex flex-column min-h-5">Comece a partir de<br/>
            <span class="fw-bold block mb-4">R$ {{valorMensalidade}}/mês*</span>
            <a href="" class="cor-link">Ver planos</a>
          </p>
        </div>

        <div class="pe-3">
          <img src="../../assets/itens/carrinho.svg" class="h-12 mb-4" alt="">
          <span class="d-block badge badge-bighero ">Novo produto</span>
          <a href="">
            <h3 class="titulo-link">DLoja Virtual</h3>
          </a>
          <p class="mb-4 min-h-100">Todos os recursos para facilitar a criação de uma loja virtual lucrativa.</p>
          <p class="d-flex flex-column min-h-5">Confira os valores<br/>
            <span class="fw-bold block mb-4">promocionais</span>
            <a href="" class="cor-link">Saiba mais</a>
          </p>
        </div>

        <div class="pe-3">
          <img src="../../assets/itens/email.svg" class="mb-4" alt="" style="max-width: 43px; max-height: 44px;">
          <a href="">
            <h3 class="titulo-link">E-mail profissional Titan</h3>
          </a>
          <p class="mb-4 min-h-100">Impulsione sua marca com um e-mail personalizado.</p>
          <p class="d-flex flex-column min-h-5">Comece a partir de<br/>
            <span class="fw-bold block mb-4">R$ 8,99/mês*</span>
            <a href="" class="cor-link">Ver planos</a>
          </p>
        </div>

        <div class="pe-3">
          <img src="../../assets/itens/montanha.svg" class="h-12 mb-4" alt="">
          <a href="">
            <h3 class="titulo-link">Servidor VPS</h3>
          </a>
          <p class="mb-4 min-h-100">Acesso root em um ambiente de hospedagem totalmente escalável.</p>
          <p class="d-flex flex-column min-h-5">Comece a partir de<br/>
            <span class="fw-bold block mb-4">R$ 111,99/mês*</span>
            <a href="" class="cor-link">Ver planos</a>
          </p>
        </div>

        <div class="pe-3">
          <img src="../../assets/itens/servidor.svg" class="h-12 mb-4" alt="">
          <a href="">
            <h3 class="titulo-link">Servidor Dedicado</h3>
          </a>
          <p class="mb-4 min-h-100">O melhor em desempenho. Obtenha controle total do servidor.</p>
          <p class="d-flex flex-column min-h-5">Comece a partir de<br/>
            <span class="fw-bold block mb-4">R$ 418,09/mês*</span>
            <a href="" class="cor-link">Ver planos</a>
          </p>
        </div>
      </div>
    </div>
</template>
<script>
import {inject} from "vue";

export default {
    components: {

    },
    setup() {
        
        const valorMensalidade = inject("valorMensalidade");
        return {
            valorMensalidade
        }
    }
}
</script>

<style>
.big-titulo {
  color: rgb(31, 32, 68);
    font-size: 45px;
    font-weight: 700;
    line-height: 50px;
    margin: 0px auto 65px;
    text-align: center;
}
.titulo-link {
  color: rgb(31,32,68);
  font-size: 20px;
  line-height: 28px;
  margin-bottom: 24px;
  font-weight: 700;
  min-height: 32px;
  transition: color 0.2s ease 0s;
}
a:has(.titulo-link) {
  text-decoration: none;
}

.cor-link {
  color: #2E9AF1;
  font-weight: 700;
  font-size: 18px;
  text-decoration: none;
}

.badge-bighero {
    background-color: rgb(255, 232, 133);
    border-radius: 20px;
    color: rgb(31, 32, 68) !important;
    display: flex;
    font-size: 12px;
    font-weight: 700;
    line-height: 16px;
    margin-bottom: 10px;
    padding: 0px 10px;
    width: fit-content;
}

.min-h-100 {
  min-height: 100px;
}
</style>
