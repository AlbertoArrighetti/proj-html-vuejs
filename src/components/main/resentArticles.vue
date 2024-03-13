<script>
import { store } from '/src/store';

export default {
    name: 'resentArticles',

    data() {
        return {
            store,
        }
    },
}
</script>

<template>
    <section id="resentArticles">
        <div class="container">

            <div class="icon">
                <i class="fa-regular fa-thumbs-up"></i>
            </div>

            <h3>Resent Articles</h3>

            <p>Useful information about car.</p>

            <div class="articles">
                <div class="cardWrapper" v-for="currentArticle in store.resentArticlesInfos">
                    <div class="img_wrapper">
                        <img :src="currentArticle.img" alt="article image">
                        <div class="date">{{ currentArticle.date }} - Auto Car</div>
                    </div>
                    <h4>{{ currentArticle.title }}</h4>
                    <p>{{ currentArticle.desc }}</p>

                    <div class="btn_wrapper">
                        <div class="btn">
                            More
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </section>
</template>

<style lang="scss">
@use '/src/styles/variables' as *;
@use '/src/styles/mixin.scss' as *;

#resentArticles {
    margin-bottom: 100px;
    
    .container {
        display: flex;
        flex-direction: column;
        align-items: center;

        .icon {
            width: 100px;
            height: 100px;
            background-color: $primaryColor;
            border-radius: 50%;
            @include flexCenter;
            color: #ffffff;
            margin-bottom: 20px;

            .fa-thumbs-up {
                font-size: 2em;
            }
        }
        h3 {
            font-size: 1.7em;
            margin-bottom: 10px;
        }
        p {
            margin-bottom: 10px;
        }
    }
    .articles {
        display: flex;
        gap: 60px;
        margin: 0 20px;
        .cardWrapper {
            border-radius: 15px;
            padding: 24px;
            gap: 16px;

            .img_wrapper {
                width: 240px;

                .date {
                    text-align: center;
                    font-size: .8em;
                    font-weight: 600;
                }
            }
            h4 {
                text-align: center;
            }
            p {
                font-size: 0.8em;
            }
            .btn_wrapper {
                display: flex;
                justify-content: center;

                .btn {
                    padding: 20px 40px;
                }
            }

        }
    }

}
</style>