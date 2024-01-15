<template>
    <div>
        <h1>Planos</h1>

        <div class="ms-4 me-4 grid grid-cols-3 gap-8">
            <template v-for="(plano, index) in planos" :key="index">
                <div class="">
                    <h3 class="titulo-plano">{{ plano?.titulo }}</h3>
                    <p class="descricao-plano" v-html="plano?.descricao"></p>
                    <!-- Preço -->
                    <div>
                        <div>
                            <span><del>{{ toMoney(plano.valor_sem_promo)}}</del></span> <span class="badge-plano">55% OFF</span>
                        </div>
                        <p><strong>{{ toMoney(plano?.valor) }}</strong> equivalente a</p>
                        <p>{{ toMoney(plano?.mensalidade) }}/mês*</p>
                        <router-link class="botao-plano" :to="'/comprar?pid=' + plano?.id">
                            
                            Começar agora
                            
                        </router-link>
                    </div>
                </div>
            </template>
        </div>
    </div>
</template>
<script>
import {ref, onMounted} from "vue";
import {round} from "../../utils/NumberUtil";

export default {
    setup() {
        const planos = ref([]);

        const obterPlanos = () => {
            // TODO adicionar lista de features
            planos.value = [
                {
                    id: 1,
                    titulo: "Hospedagem P",
                    descricao: "Recursos essenciais para quem está <strong>começando um projeto online</strong>",
                    valor_sem_promo: 877.11,
                    valor: 394.70,
                    mensalidade: 10.99
                },
                {
                    id: 2,
                    titulo: "Hospedagem M",
                    descricao: "Para hospedar múltiplos domínios e <strong>continuar crescendo</strong>",
                    valor_sem_promo: 1161.45,
                    valor: 522.65,
                    mensalidade: 14.59
                },
                {
                    id: 3,
                    titulo: "Hospedagem Turbo",
                    descricao: "<strong>2x mais performance</strong> para sites de alto tráfego",
                    valor_sem_promo: 2050.60,
                    valor: 717.71,
                    mensalidade: 19.99
                }
            ]
        }

        const toMoney = function(valor) {
            // não funciona com valores que não são números
            if (typeof valor !== 'number') {
                return valor;
            }

            console.log(valor);
            let str = String(round(valor, 2)).replace(".", ",");
            str = str.replace("_", ".");

            // tratar caso: 10.70 que se torna 10.7
            let splited = str.split(",")[1];
            if (splited.length === 1) { 
                str += "0";
            }

            return "R$ " + str;
        }

        onMounted(() => {
            obterPlanos();
        });

        return {
            planos,
            toMoney,
        }
    }
}
</script>
<style>
.titulo-plano {
    font-size: 24px;
    line-height: 30px;
    font-weight: 700;
    min-height: 60px;
    margin-bottom: 15px;
    padding-right: 45px;
}
.descricao-plano {
    font-size: 18px;
    line-height: 24px;
    margin-top: 10px;
    margin-bottom: 30px;
    min-height: 70px;
}
.badge-plano {
    background: rgb(186, 230, 211);
    color: rgb(0,0,0);
    font-size: 12px;
    text-align: center;
    padding: 2px 8px;
    border-radius: 12px;
}
.botao-plano {
    background-color: rgb(255, 207, 0);
    color: rgb(31, 32, 68);
    cursor: pointer;
    display: block;
    font-weight: 700;
    line-height: 24px;
    margin: 30px 0px;
    padding: 13px 30px 18px 35px;
    text-align: center;
    position: relative;
    width: 100%;
}
.botao-plano::before {
    background-color: rgb(31, 32, 68);
    bottom: 0px;
    content: "";
    display: block;
    position: absolute;
    right: 0px;
    height: 5px;
    left: 0px;
    transition: height 0.2s ease 0s;
}

.botao-plano::after {
    background-color: rgb(31, 32, 68);
    bottom: 0px;
    content: "";
    display: block;
    position: absolute;
    right: 0px;
    top: 0px;
    transition: width 0.2s ease 0s;
    width: 5px;
}
</style>