<script>
  export default {
    data() {
      return {
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
            }, 5000)
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
        
        <div class="slider-wrapper" tabindex="0"
            v-on:mouseover="stopTimer()"
            v-on:mouseleave="timer()">

                <div class="item"
                    v-for="(currentImage, index) in slides" 
                    v-show="index == activeSlideIndex">

                    <!-- immagini -->
                    <img 
                        :src="currentImage.src" 
                        :alt="'slide ' + (index + 1)" />


                    <div class="text">

                        content goes here

                    </div>
                </div>

                <div class="arrows">
                    
                    <!-- frecce -->
                    <div class="prev" @click="prevSlide()">
                        <i class="fa-solid fa-chevron-left"></i>
                    </div>
                    <div class="next" @click="nextSlide()">
                        <i class="fa-solid fa-chevron-right"></i>
                    </div>


                </div>

        </div>
    </div>
</template>



















<style lang="scss">
  .carousel {

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
            position: absolute;

            // to adjust
            left: 10px;
            top: 10px;
            color: white;
        }


    }
  }

</style>