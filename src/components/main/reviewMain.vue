<script>
import { store } from '/src/store';

export default {
    name: 'review',

    data() {
        return {
            store,
        }
    },
}
</script>

<template>
    <div id="review">
        <div class="container">
            <div class="icon">
                <i class="fa-regular fa-thumbs-up">
                    <div class="stars">
                        <i class="fa-regular fa-star"></i>
                        <i class="fa-regular fa-star"></i>
                        <i class="fa-regular fa-star"></i>
                    </div>
                </i>
            </div>

            <h3>What Are Our Customers Saying?</h3>

            <p>Opinions from our happy customers.</p>

            <div class="reviews">
                <div class="review_card" v-for="currentReview in store.customersReview">
                    <p>{{ currentReview.comment }}</p>
                    <div class="img_wrapper">
                        <img :src="currentReview.picture" alt="profile picture">
                    </div>
                    <span>{{ currentReview.name }}</span>
                    <div class="back_icon">
                        <i class="fa-solid fa-quote-right"></i>
                    </div>
                </div>
            </div>
            
            <div class="separator">
                <div class="black_bar"></div>
                <div class="grey_bar"></div>
            </div>

        </div>
    </div>
</template>

<style lang="scss">
@use '/src/styles/variables' as *;
@use '/src/styles/mixin.scss' as *;

#review {
    background-image: url(/src/assets/comment-bg-autocar.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    width: 100%;
    height: 860px;
    margin-bottom: 60px;
    color: #ffffff;
    text-align: center;

    .icon{
        font-size: 3em;
        padding-top: 86px;
        margin-bottom: 50px;
        .fa-thumbs-up {
            position: relative;
            .stars {
                position: absolute;
                bottom: -18px;
                left: -8px;
                display: flex;
                font-size: 0.4em;
            }
        }
    }
    h3 {
        margin-bottom: 20px;
    }
    p {
        font-size: .8em;
        margin-bottom: 40px;
    }
    .reviews {
        display: flex;
        justify-content: center;
        gap: 22px;
        margin-bottom: 60px;

        .review_card {
            @include flexCenter;
            flex-direction: column;
            position: relative;

            padding: 60px 40px;
            width: calc(100% / 4);
            border-radius: 10px;
            background-color: #ffffff;
            color: $primaryColor;

            .img_wrapper {
                max-width: 100px;
                margin-bottom: 46px;

                img {
                    width: 100%;
                }
            }
            .back_icon {
                position: absolute;
                top: 50px;
                font-size: 5em;
                opacity: .06;
                transform: rotate(12deg);
            }
        }
    }

    .separator{
        display: flex;
        justify-content: center;
        gap: 10px;
        .black_bar, .grey_bar {
            padding: 2px;
            border-radius: 25px;
        }
        .black_bar {
            background-color: #000000;
            width: 100px;
        }
        .grey_bar {
            background-color: #aaaaaa;
            width: 50px;
        }
    }
}
</style>