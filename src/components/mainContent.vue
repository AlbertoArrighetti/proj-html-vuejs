<script>
import {store} from '../store.js';

// components
import carousel from './main/carousel.vue';
import categories from './main/categories.vue';
import carList from './main/carList.vue';

export default {
    name: 'mainContent',

    components: {
        carousel,
        categories,
        carList,
    },
}

</script>

<template> 
    <carousel></carousel>
    <categories></categories>
    <carList></carList>
</template>

<style lang="scss">
</style>