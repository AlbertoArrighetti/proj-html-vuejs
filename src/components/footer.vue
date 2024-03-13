<script>
import {store} from '../store.js';

// components
import footerInfos from './footer/footerInfos.vue';
import footerForm from './footer/footerForm.vue';

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
    },
}

</script>

<template> 
<footer>
    <div class="container">
        <footerInfos></footerInfos>
        <footerForm></footerForm>
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
        padding: 40px 0;
        gap: 100px;
    }
}
</style>