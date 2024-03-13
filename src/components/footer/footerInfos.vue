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
            <a href="#">
                <i class="fa-brands fa-facebook-f"></i>
            </a>
            <a href="#">
                <i class="fa-brands fa-instagram"></i>
            </a>
            <a href="#">
                <i class="fa-brands fa-twitter"></i>
            </a>
            
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
        font-size: 1.6em;
        
        a {
            text-decoration: none;
            color: $textColor;

            i {
                transition: .3s linear;
            }

            &:hover .fa-facebook-f {
                color: #0863f7;
                transform: scale(1.3);
            }
            &:hover .fa-instagram {
                background-image: linear-gradient(45deg, #e6437a, #8848d4);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                transform: scale(1.3);
            }
            &:hover .fa-twitter {
                color: #1da1f2;
                transform: scale(1.3);
            }
            
        }
    }   
}
</style>