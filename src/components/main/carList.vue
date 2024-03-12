<script>
import {store} from '/src/store.js';

import carCard from '../items/carCard.vue';
import carCategories from '../items/carCategories.vue';

export default {
    name: 'carList',

    components: {
        carCard,
        carCategories,
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
        <ul class="car_categories">
            <carCategories v-for="currentCategory in store.carType" :categoryCard="currentCategory">
            </carCategories>
        </ul>
        <ul class="cars">
            <carCard v-for="currentCar in store.cars" :card="currentCar">
            </carCard>
        </ul>

        <div class="btn_wrapper">
            <button class="btn">
                Show All Cars  <i class="fa-solid fa-arrow-right"></i>
            </button>
        </div>
    </div>
</div>
</template>

<style lang="scss">

#carList {
    margin-bottom: 20px;

    .car_categories {
        display: flex;
    }
    
    .cars {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        gap: 20px 0;
        margin-bottom: 12px;
    }
    .btn_wrapper {
        display: flex;
        justify-content: center;

        .btn {
            padding: 24px 50px;
        }
    }
        
}


</style>