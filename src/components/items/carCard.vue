<script>
import { store } from '/src/store';

export default {
    name: 'carCard',

    props: {
        carCard: Object,
    },

    data() {
        return {
            store,
        }
    },
}
</script>

<template>
    <div class="cardWrapper">
        
    </div>
</template>

<style lang="scss">
@use '/src/styles/variables' as *;
@use '/src/styles/mixin.scss' as *;


</style>