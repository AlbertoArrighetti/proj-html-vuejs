<script>
import {store} from '../store.js';

export default {
    name: 'categories',

    data() {
        return {
            categories: [
                'Keywords',
                'Locations',
                'All Categories',
                'Brand',
                'Fuel Type',
                'Transmission',
                'Status'
            ]
        }
    },
}

</script>

<template> 
<div id="categories">
    <div class="container">
        <div class="category" v-for="(currentCategory, index) in categories">
         {{ currentCategory }} <span class="arr-down" :class="index == 0 || index == 1 ? 'block' : '' ">&#11206;</span>
        </div>
        <div class="btn">
            Search
        </div>
    </div>
</div>
    
</template>

<style lang="scss">
#categories {
    .container {
        display: flex;
        justify-content: center;
        gap: 20px;
    
        .category {
            position: relative;
            padding: 28px 0;
            min-width: 160px;
            text-align: center;
            color: #aaaaaa;
            border: 1px solid #aaaaaa;

            .arr-down {
                position: absolute;
                top: 50%;
                transform: translateY(-50%);
                right: 6px;
                font-size: 0.8em;
                
                &.block {
                    display: none;
                }
            }
        }
        .btn {
            padding: 26px 44px;
        }
    }
}
</style>