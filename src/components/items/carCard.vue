<script>
import { store } from '/src/store';

export default {
    name: 'carCard',

    props: {
        card: Object,
    },

    data() {
        return {
            store,
        }
    },
}
</script>

<template>
    <li class="cardWrapper">
        <div class="img_wrapper">
            <img :src="card.img" :alt="card.model">
        </div>
        <div class="car_brand">
            {{ card.model }} <i class="fa-solid fa-circle-check"></i>
        </div>
        <div class="car_type">
            {{ card.type }}
        </div>

        <div class="details">
            <span class="price"> <i class="fa-solid fa-dollar-sign"></i> {{ card.price }} </span>
            <span class="brand"> <i class="fa-solid fa-car"></i> {{ card.brand }} </span>
            <span class="alimentation"> <i class="fa-solid fa-gas-pump"></i> {{ card.alimentation }} </span>
        
            <div class="like">  <i class="fa-solid fa-heart"></i>  </div>
        </div>
    </li>
</template>

<style lang="scss">
@use '/src/styles/variables' as *;
@use '/src/styles/mixin.scss' as *;

.cardWrapper {
    list-style-type: none;
    width: calc(100% / 4);
    padding: 18px;
    box-shadow: 0px 0px 4px 1px rgb(241, 241, 241);

    img {
        width: 100%;
    }
}
</style>