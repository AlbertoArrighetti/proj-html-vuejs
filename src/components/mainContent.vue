<script>
import {store} from '../store.js';

// components
import carousel from './carousel.vue';
import categories from './categories.vue'

export default {
    name: 'mainContent',

    components: {
        carousel,
        categories,
    },
}

</script>

<template> 
    <carousel></carousel>
    <categories></categories>
</template>

<style lang="scss">
</style>