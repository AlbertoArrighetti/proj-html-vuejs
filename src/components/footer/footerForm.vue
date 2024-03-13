<script>
import {store} from '/src/store.js';

export default {
    name: 'footerForm',

    data() {
        return {
            store,
        }
    },
}
</script>

<template> 
<div id="form">
    <h4>Join Our Newsletter</h4>
    <p>Subscribe to be informed about our services and products</p>

    <div class="form">
        <input type="mail" placeholder="Your Email Address" v-model="store.userEmail">
        <button>
            <div class="btnText">
                Subscribe <i class="fa-solid fa-arrow-right"></i>
            </div>
        </button>
    </div>
</div>
</template>

<style lang="scss">
@use '/src/styles/variables' as *;
@use '/src/styles/mixin.scss' as *;

#form {
    h4 {
        font-size: 1.6em;
        margin-bottom: 10px;
    }
    p {
        margin-bottom: 36px;
    }
    .form {
        input, button {
            padding: 24px;
            border-radius: 6px;
            width: 100%;
            background-color: #ffffff;

            .btnText {
                opacity: 0.6;
            }
        }
    }
}
</style>