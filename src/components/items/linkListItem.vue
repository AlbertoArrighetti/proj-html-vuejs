<script>
import { store } from '/src/store';

export default {
    name: 'linkListItem',

    props: {
        linkList: Object,
    },

    data() {
        return {
            store,
        }
    },
}
</script>

<template>
    <ul class="footer_list"> 
        <li class="listTitle">
            {{ linkList.title }}
        </li>

        <li class="link" v-for="currentLink in linkList.links">
            <a href="#">
                - {{ currentLink }}
            </a>
        </li>
    </ul>
</template>

<style lang="scss">
@use '/src/styles/variables' as *;
@use '/src/styles/mixin.scss' as *;

.footer_list {
    list-style-type: none;
    .listTitle {
        margin-bottom: 20px;
        font-weight: bold;
    }
    .link {
        margin-bottom: 10px;

        a {
            text-decoration: none;
            color: $textColor;
            font-size: .9em;
        }
    }
}
</style>