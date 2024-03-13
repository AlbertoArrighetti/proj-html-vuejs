<script>
import {store} from '/src/store.js';

export default {
    name: 'footerInfos',

    data() {
        return {
            store,
        }
    },
}
</script>

<template> 
    <div id="footerInfos">
        <div class="logo">
            <img src="/src/assets/logo-footer-autocar11.png" alt="Company Logo">
        </div>
        <div class="info"> <i class="fa-solid fa-location-dot"></i> {{ store.companyPosition }}</div>
        <div class="info"> <i class="fa-solid fa-phone-volume"></i> {{ store.telephoneNumber }}</div>
        <div class="info"> <i class="fa-regular fa-envelope"></i> {{ store.companyEmail }}</div>
        <div class="socials">
            <i class="fa-brands fa-facebook-f"></i>
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-twitter"></i>
        </div>
    </div>
</template>

<style lang="scss">
@use '/src/styles/variables' as *;
@use '/src/styles/mixin.scss' as *;

#footerInfos {
    display: flex;
    flex-direction: column;
    gap: 20px;
    .logo {
        width: 200px;
        img {
            width: 100%;
        }
    }
    .info {
        display: flex;
        gap: 10px;
        align-items: center;
        i {
            font-size: 1.6em;
            padding-right: 6px;
        }
    }
    .socials {
        display: flex;
        justify-content: center;
        gap: 40px;
    }
}
</style>