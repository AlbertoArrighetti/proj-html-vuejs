<script>
import {store} from '../store.js';

// components
import carousel from './main/carousel.vue';
import categories from './main/categories.vue';
import carList from './main/carList.vue';
import knowUs from './main/knowUs.vue';

export default {
    name: 'mainContent',

    components: {
        carousel,
        categories,
        carList,
        knowUs,
    },
}

</script>

<template> 
    <carousel></carousel>
    <categories></categories>
    <carList></carList>
    <knowUs></knowUs>
</template>

<style lang="scss">
</style>