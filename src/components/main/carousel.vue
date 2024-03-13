<script>
  export default {

    name: 'carousel',

    data() {
      return {
        // slides carasoul images
        slides: [
          {
            src: "/src/assets/slider-autocar-5.jpg",
            alt: "Image 1 for carousel",
          },
          {
            src: "/src/assets/slider-autocar-6.jpg",
            alt: "Image 2 for carousel",
          }
        ],
        activeSlideIndex: 0,      
    };
    },

    methods: {
        prevSlide(){
            this.activeSlideIndex--;
            // se va oltre lo zero 
            if(this.activeSlideIndex < 0){
                this.activeSlideIndex = this.slides.length - 1;
            }
        },
        nextSlide(){
            this.activeSlideIndex++;
            // se va oltre l'ultima slide 
            if(this.activeSlideIndex >= this.slides.length){
                this.activeSlideIndex = 0;
            }
        },
        
        timer() {
            this.autoPlay = setInterval(() => {
                this.nextSlide();
            }, 4500)
        },
        
        stopTimer(){
            clearInterval(this.autoPlay)
        }
    },

    mounted() {
        this.timer();
    },
  };
</script>

<template>
    <div class="carousel">
        
        <div class="slider-wrapper" tabindex="0" v-on:mouseover="stopTimer()" v-on:mouseleave="timer()">
            <div class="item" v-for="(currentImage, index) in slides" v-show="index == activeSlideIndex">
                <!-- immagini -->
                <img 
                    :src="currentImage.src" 
                    :alt="'slide ' + (index + 1)" 
                />
                <!-- testo -->
                <div class="text">

                    <h1>Buy And Sell Your Car At Its Value</h1>
                    <p>Find the right price and dealer.</p>

                    <button class="btn">
                        Learn More  <i class="fa-solid fa-arrow-right"></i>
                    </button>

                </div>
            </div>
            <!-- frecce -->
            <div class="prev-arrow arr" @click="prevSlide()">
                <i class="fa-solid fa-chevron-left"></i>
            </div>
            <div class="next-arrow arr" @click="nextSlide()">
                <i class="fa-solid fa-chevron-right"></i>
            </div>    
        </div>
    </div>
</template>


<style lang="scss">
@use '/src/styles/variables' as *;
@use '/src/styles/mixin.scss' as *;

.carousel {
    margin-bottom: 40px;
    
    .slider-wrapper {
        position: relative;

        .arr {
            @include posAbsoluteCenter;
            @include flexCenter;
            
            color: $textColor;
            cursor: pointer;
            &.prev-arrow {
                left: 70px;
            }
            &.next-arrow {
                right: 70px;
            }
        }
    }
    .item {
        width: 100%;
        height: 800px;
        position: relative;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
        .text {
            color: $textColor;
            position: absolute;
            top: 40%;
            left: 15%;

            max-width: 500px;

            h1 {
                font-size: 50px;
            }
            p {
                margin-bottom: 18px;
            }
            .btn {
                padding: 22px 40px;
            }
        }
    }
}

</style>