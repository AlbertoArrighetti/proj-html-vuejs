<script>
export default {

    name: 'knowUs',


    data() {
        return {

            // infos list
            aboutUsInfos: [
                {
                    iconClass: 'fa-solid fa-car-rear',
                    title: 'Model Vehicles',
                    paragraph: 'We are sure that you will find vehicles of suitable models on our website.',
                },
                {
                    iconClass: 'fa-solid fa-toolbox',
                    title: '2nd Hand Vehicles',
                    paragraph: 'You can put your used vehicles for sale by adding them to our website.',
                },
            ]
        }
    },
    
}
</script>

<template>
    <section id="know_us">
        <div class="container">
            
            <div class="img_wrapper">
                <img src="/src/assets/aoutcar-about-1.png" alt="car">

                <div class="banner first">
                    <div class="num">
                        24
                    </div>
                    <div class="banner_text">
                        Years of Experience
                    </div>
                </div>
                <div class="banner second">
                    <div class="num">
                        240
                    </div>
                    <div class="banner_text">
                        Special Expert Team
                    </div>
                </div>

            </div>

            <div class="text_wrapper">
                <h2>Want to buy or sell a vehicle?</h2>

                <p>
                    You can put your vehicles for sale by registering on our website. Whether you are a dealer or sell personally. 
                    Sell your vehicle in the most profitable way. With this system, wich has millions of members, you will be able 
                    to buy and sell vehicles quickly.
                </p>
            
                <img src="/src/assets/divider.jpg" alt="divider">

                <ul>
                    <li v-for="currentInfo in aboutUsInfos">
                    <i :class="currentInfo.iconClass"></i>
                    <div>
                        <h3>{{ currentInfo.title }}</h3>
                        <p>{{ currentInfo.paragraph }}</p>
                    </div>
                    </li>
                </ul>
            </div>


        </div>
    </section>
</template>


<style lang="scss">
@use '/src/styles/variables' as *;
@use '/src/styles/mixin.scss' as *;

#know_us {
    margin-bottom: 100px;

    .container {
        display: flex;
        padding: 0 140px;

        .img_wrapper {
            background-image: url(/src/assets/circle-auto-car-1.png);
            background-repeat: no-repeat;
            position: relative;

            .banner {
                position: absolute;
                width: 180px;
                height: 180px;
                padding-top: 10px;
                border-radius: 50%;
                flex-direction: column;
                @include btnStyle;

                .num {
                    font-size: 3em;
                }
                .banner_text {
                    width: 100px;
                    text-align: center;
                }
                &.first {
                    left: 60px;
                    top: 60px;
                }
                &.second {
                    right: 60px;
                    bottom: 60px;
                }
            }
        }
        .text_wrapper {
            margin-left: 40px;
            display: flex;
            flex-direction: column;
            justify-content: center;

            h2 {
                font-size: 1.7em;
                margin-bottom: 20px;
            }
            p {
                margin-bottom: 16px;
            }
            img {
                width: 120px;
            }
            ul {
                list-style-type: none;
                padding: 24px 0 0 0;
                li {
                    display: flex;
                    align-items: center;
                    gap: 14px;
                    i {
                        font-size: 2.5em;
                    }
                    h3 {
                        margin-bottom: 12px;
                    }
                }
            }
        }
    }
}

</style>