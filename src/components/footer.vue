<script>
import {store} from '../store.js';

// components
import footerInfos from './footer/footerInfos.vue';
import footerForm from './footer/footerForm.vue';
import footerLinks from './footer/footerLinks.vue';

export default {
    name: 'footerContent',

    data() {
        return {
            store,
        }
    },
    components: {
        footerInfos,
        footerForm,
        footerLinks,
    },
}

</script>

<template> 
<footer>
    <div class="container">
        <footerInfos></footerInfos>
        <footerForm></footerForm>
        <footerLinks></footerLinks>
    </div>
    <div class="copyright">
        <i class="fa-regular fa-copyright"></i>
        2022 Autocar - All Rights Reserved
    </div>
</footer>
</template>

<style lang="scss">
@use '../styles/variables' as *;
@use '/src/styles/mixin.scss' as *;

footer {
    background-color: $primaryColor;
    color: #ffffff;

    .container {
        display: flex;
        padding: 60px 0 50px;
        gap: 170px;
    }
    .copyright {
        text-align: center;
        padding-bottom: 50px;
    }
}
</style>