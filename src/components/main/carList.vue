<script>
import {store} from '/src/store.js';

import carCard from '../items/carCard.vue';
export default {
    name: 'carList',

    components: {
        carCard,
    },

    data() {
        return {
            store,
        }
    },
}

</script>

<template> 
<div id="carList">
    <div class="container">
        <ul class="cars">
            <carCard v-for="(currentCar, index) in store.cars" :card="currentCar">
            </carCard>
        </ul>
    </div>
</div>
</template>

<style lang="scss">

#carList {

    .cars {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        gap: 20px 0;
    }
}


</style>