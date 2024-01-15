<template>
    <footer class="bg-footer">
        <section class="flex min-h-52 mb-4">
            <div class="grid grid-cols-3 px-5 my-5">
                <div>
                    <h2 class="footer-title">Hospedagem de site com até 50% OFF</h2>
                </div>
                <div class="flex justify-center">

                    <div class="block">
                        <p class="text-1">A partir de</p>
                        <p class="text-2">R$ {{valorMensalidade}}/mês*</p>
                        <p class="text-3">+ Domínio Grátis</p>
                    </div>
                </div>

                <div>
                    <a href="" class="link-button">Começar agora</a>
                </div>
            </div>
        </section>
        <section>
            <div class="text-center">
                <p>© {{ anoAtual }} - HostNator Brasil - Todos os direitos reservados</p>
                
                <br/>
                <p>Reprodução do site feito por Adilson Alves Mattos</p>
            </div>
        </section>
    </footer>
</template>
<script>
import {ref, inject} from "vue";

export default {

    setup() {
        const anoAtual = ref(new Date().getFullYear());
        const valorMensalidade = inject("valorMensalidade");
        return {
            anoAtual,
            valorMensalidade
        }
    }
}
</script>
<style scoped>
footer {
    padding-top: 50px;
    padding-bottom: 10px;
    color: white;
}
.footer-title {
color: rgb(255,255,255);
font-size: 40px;
font-weight: 700;
line-height: 54px;
}

.bg-footer{
    background-color: rgb(24, 25, 54);
}

.text-1 {
    color: rgb(255,255,255);
    font-size: 18px;
    font-weight: 400;
    line-height: 24px;
}
.text-2 {
    color: rgb(46,147,238);
    font-size: 30px;
    font-weight: 700;
    line-height: 36px;
}
.text-3 {
    color: rgb(255,255,255);
    font-size: 19px;
    font-weight: 700;
    line-height: 22px;
}
.link-button {
    background-color: rgb(255,207,0);
    color: rgb(31,32,68);
    cursor: pointer;
    display: inline-block;
    font-size: 22px;
    font-weight: 700;
    line-height: 36px;
    padding: 12px 45px 17px 50px;
    position: relative;
    text-decoration: none;
}
</style>