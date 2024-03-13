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
    <li class="cardWrapper car_list_item">
        <div class="img_wrapper">
            <img :src="card.img" :alt="card.model">
        </div>
        <div class="car_brand">
            {{ card.model }} <i :class="card.avaible == true ? 'fa-solid fa-circle-check' : 'fa-solid fa-circle-xmark' "></i>
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
    padding: 18px;
    box-shadow: 2px 2px 4px 1px rgb(241, 241, 241);
    display: flex;
    flex-direction: column;
    gap: 12px;
    
    &.car_list_item {
        width: calc(100% / 4);
    }

    img {
        width: 100%;
    }
    .car_type {
        font-size: 0.9em;
    }
    .details {
        display: flex;
        gap: 8px;
        position: relative;

        .like {
            position: absolute;
            right: 0;
            color: #aaaaaa;
            cursor: pointer;

            transition: .3s linear;
            &:hover {
                color: #B31312;
                transform: scale(1.3);
            }
        }
    }
}
</style>