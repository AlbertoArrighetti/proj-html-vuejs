<script>
import { store } from '/src/store';

export default {
    name: 'carCategories',

    props: {
        categoryCard: Object,
    },

    data() {
        return {
            store,
        }
    },
}
</script>

<template>
    <li class="cardWrapper car_categories_item">
        <img :src="'/src/assets/'+categoryCard.src+'.jpg'" :alt="categoryCard.type">
        <div>{{ categoryCard.type }}</div>

        <div class="listing">{{ categoryCard.listing }} Listings</div>
    </li>
</template>

<style lang="scss">
@use '/src/styles/variables' as *;
@use '/src/styles/mixin.scss' as *;

.car_categories_item {
    width: calc(100% / 6);
    text-align: center;

    .listing {
        opacity: 0.6;
    }
}
</style>