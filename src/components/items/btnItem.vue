<script>
export default {
    name: 'btnItem',

    props: {
        content: String,
        img: String,
    },
}
</script>

<template>
    <div class="btn">
        <img :src="img" alt="">
        <span> {{ content }} </span>
    </div>
</template>

<style lang="scss">
@use '/src/styles/variables' as *;
@use '/src/styles/mixin.scss' as *;

.btn {
    @include btnStyle;
    padding: 10px;
    margin: 3px;
    border-radius: 6px;

    img {
        max-width: 40px;
        filter: grayscale(1) invert(1);
    }

    span {
        font-size: 14px;
    }
}
</style>