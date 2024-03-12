<script>
import {store} from '../store.js';

// components
import carousel from './main/carousel.vue';
import categories from './main/categories.vue';
import carList from './main/carList.vue';
import knowUs from './main/knowUs.vue';
import review from './main/reviewMain.vue';

export default {
    name: 'mainContent',

    components: {
        carousel,
        categories,
        carList,
        knowUs,
        review,
    },
}

</script>

<template> 
    <carousel></carousel>
    <categories></categories>
    <carList></carList>
    <knowUs></knowUs>
    <review></review>
</template>

<style lang="scss">
</style>