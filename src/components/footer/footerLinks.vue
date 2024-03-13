<script>
import {store} from '/src/store.js';

// components 
import linkListItem from '../items/linkListItem.vue'

export default {
    name: 'footerLinks',

    components: {
        linkListItem,
    },

    data() {
        return {
            store,
        }
    },
}
</script>

<template> 
    <div id="footerLinksList">
        <linkListItem class="linkList" v-for="currentList in store.footerLinks" :linkList="currentList"></linkListItem>
    </div>
</template>

<style lang="scss">
@use '/src/styles/variables' as *;
@use '/src/styles/mixin.scss' as *;

#footerLinksList {
    display: flex;
    gap: 80px;
}
</style>