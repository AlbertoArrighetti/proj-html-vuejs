<script>
import {store} from '../store.js';

// items
import btnItem from './items/btnItem.vue';

export default {
    name: 'navBar',

    components: {
        btnItem,
    },

    data() {
        return {
            store,

            links: [
                'Home',
                'About Us',
                'Vehicles',
                'Dealers',
                'Packages',
                'Blog',
                'Contact'
            ],

            telephoneNumber: '+1 (234) 567 89 10'
        }
    },
}

</script>

<template>
    <nav id="navBar">
        <div class="container">

            <div class="logo">
                <img src="../assets/logo-autocar11.png" alt="Logo Autocar">
            </div>

            <div class="nav-infos">
                <div class="links">
                    <a href="#" v-for="currentLink in links">{{ currentLink }}</a>
                </div>
    
                <btnItem :content="'My Account'" :img="'/public/img/padlock.png'"></btnItem>
                <btnItem :content="'Add Cart'" :img="'/public/img/add.png'"></btnItem>
    
                <i class="fa-solid fa-bars-staggered fa-rotate-180"></i>
    
                <btnItem :content="telephoneNumber" :img="'/public/img/headphones.png'"></btnItem>
            </div>

        </div>
    </nav>    
</template>

<style lang="scss">
@use '../styles/variables' as *;
@use '/src/styles/mixin.scss' as *;

#navBar {
    .container {
        @include flexCenter;
        justify-content: space-between;

        .logo {
            width: 200px;
            margin: 10px 30px 0 0;
            img {
                width: 100%;
            }
        }
        .nav-infos {
            @include flexCenter;
        }
        .links {
            display: flex;
            gap: 18px;

            a {
                color: $primaryColor;
                text-decoration: none;
                font-weight: bold;
                
                &:last-of-type {
                    padding-right: 8px;
                }
            }
        }

        .fa-bars-staggered {
            font-size: 2em;
            margin: 0 26px;
        }
    }

}
</style>