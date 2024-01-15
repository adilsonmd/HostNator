<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <router-link class="nav-link main-link active" aria-current="page" to="#">HostNator</router-link>
                    </li>
                    <li class="nav-item my-auto">
                        <router-link class="nav-link normal-link " to="#">Domínios</router-link>
                    </li>
                    <li class="nav-item my-auto">
                        <router-link class="nav-link normal-link" to="#">Hospedagem</router-link>
                    </li>
                    <li class="nav-item my-auto">
                        <router-link class="nav-link normal-link" to="#">Servidores</router-link>
                    </li>
                    <li class="nav-item my-auto">
                        <router-link class="nav-link normal-link" to="#">Segurança</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>
<style scoped>
.main-link {
    font-size: 24px;
    font-weight: 700;
}
.normal-link {
    font-weight: 600;
}
@media screen and (min-width: 992px) {
    .navbar {
        padding-left: 200px;
        padding-right: 100px;
    }
}


</style>