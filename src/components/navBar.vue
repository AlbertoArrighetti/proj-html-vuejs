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

            // link list navbar
            links: [
                'Home',
                'About Us',
                'Vehicles',
                'Dealers',
                'Packages',
                'Blog',
                'Contact',
            ],
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
    
                <btnItem :content="store.telephoneNumber" :img="'/public/img/headphones.png'"></btnItem>
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
            margin-right: 14px;
            a {
                color: $primaryColor;
                text-decoration: none;
                font-weight: bold;
                padding: 7px 0;
                font-size: .9em;

                &:hover {
                    border-bottom: 2px solid $primaryColor;
                    padding-bottom: calc(7px - 2px);
                }
            }
        }

        .fa-bars-staggered {
            font-size: 2em;
            margin: 0 26px;
            cursor: pointer;
        }
    }

}
</style>