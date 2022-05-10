<template>
  <div>
    <div class="screen-2">
      <div class="container">
        <div class="title-section flex mb-50">
          <img src="@/assets/yello-crown.svg" alt="" class="crow1-svg block" />
          <h1 class="title font-semibold">They witness!</h1>
          <p class="subtitle">What YouTube users say about us</p>
        </div>
        <div class="slider-section">
          <carousel
            :currentSlide="0"
            :transition="400"
            :autoplay="4000"
            :items-to-show="3"
            :wrap-around="true"
          >
            <slide v-for="slide in slides" :key="slide">
              <div
                class="
                  carousel__item
                  flex flex-col
                  feedback-card
                  inline-block
                  flex
                "
              >
                <img class="icon02" :src="slide.icon" alt="" />
                <div class="user flex">
                  <img class="user-img" :src="slide.authorImg" alt="" />
                  <p class="user-name font-semibold">{{ slide.author }}</p>
                </div>
                <p class="feedback-txt">
                  {{ slide.text }}
                </p>
              </div>
            </slide>

            <template #addons>
              <navigation />
              <pagination />
            </template>
          </carousel>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";

export default {
  name: "witness",
  components: { Carousel, Slide, Pagination, Navigation },
  data() {
    return {
      slides: [
        {
          text: "«My kids and I LOVE Mathrix! The courses are amazing, the teachers are interesting and experienced. Too bad we found out about Mathrix just now.»",
          author: "Julio Rilc",
          authorImg: require("@/assets/girl.png"),
          icon: require("@/assets/vec2.svg"),
        },
        {
          text: "I improved my knowledge of everything I thought of and got the best grades in school! Learning is really easy and fun!",
          author: "Georgia Lynch",
          authorImg: require("@/assets/girl.png"),
          icon: require("@/assets/vec2.svg"),
        },
        {
          text: "I hate Mathrix, i don't recomende it and at last learning is so so",
          author: "Turabov Bobur",
          authorImg: require("@/assets/girl.png"),
          icon: require("@/assets/vec2.svg"),
        },
        {
          text: "Mmm ..., Mathrix is takoy",
          author: "Ibrohim Olimjonov",
          authorImg: require("@/assets/girl.png"),
          icon: require("@/assets/vec2.svg"),
        },
        {
          text: "hey! Lazy guy is here:) Mathrix is good platform. There are so many educated teachers *PS follow me me@elzodxon.uz",
          author: "Elzodxon Sharofanddinov",
          authorImg: require("@/assets/girl.png"),
          icon: require("@/assets/vec2.svg"),
        },
        {
          text: "«My kids and I LOVE Mathrix! The courses are amazing, the teachers are interesting and experienced. Too bad we found out about Mathrix just now.»",
          author: "Julio Rilc",
          authorImg: require("@/assets/girl.png"),
          icon: require("@/assets/vec2.svg"),
        },
      ],
    };
  },
};
</script>

<style type="text/css">
.screen-2 {
  margin-top: 70px;
  margin-bottom: 39px;
  padding-bottom: 100px;
  background: url("@/assets/pattterns2.png");
  background-position-y: 50px;
  background-position-x: 40px;
  background-repeat: no-repeat;
}

.title {
  font-family: "Poppins";
  font-size: 22px;
  line-height: 38px;
  letter-spacing: -0.762769px;
  color: #0f947f;
}

.title-section {
  flex-direction: column;
}

.mb-50 {
  margin-bottom: 50px;
}

.crow1-svg {
  margin: 0 auto;
}

.title {
  font-family: "Poppins";
  font-size: 22px;
  line-height: 38px;
  text-align: center;
  letter-spacing: -0.762769px;
  color: #0f947f;
  cursor: default;
}

.subtitle {
  font-family: Open Sans;
  font-weight: 300;
  font-size: 14px;
  line-height: 28px;
  letter-spacing: -0.149625px;
  color: #282929;
  text-align: center;
  cursor: default;
}

.feedback-card {
  background: #ffffff;
  box-shadow: 5px 0px 30px rgba(185, 213, 208, 0.5);
  border-radius: 20px;
  width: 368px;
  height: 216px;
}

.user {
  margin-top: 38px;
  align-items: center;
  margin-bottom: 10px;
  margin-left: 30px;
}

.user-img {
  border-radius: 50%;
}

.user-name {
  font-family: "Poppins";
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.762769px;
  color: #282929;
  margin-left: 11px;
}

.feedback-txt {
  font-family: "Open Sans";
  font-weight: 300;
  margin: 0 30px;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: -0.1575px;
  color: #414947;
  text-align: left;
  margin-bottom: 20px;
}

.icon02 {
  position: absolute;
  margin-top: -50px;
}

@media only screen and (max-width: 1166px) {
  .feedback-card {
    margin-right: 48px;
    margin-bottom: 30px;
  }
}

@media only screen and (max-width: 620px) {
  .feedback-card {
    margin-right: 0;
  }
}

/* Vue2 carousel */

.carousel__pagination-button--active {
  background-color: #229a87 !important;
  width: 32px !important;
}

.carousel__pagination-button {
  width: 15px;
  background-color: #a3d1c7;
  transition: 0.4s;
}

.carousel__prev,
.carousel__next {
  display: none !important;
}

.carousel__track {
  height: 365px;
  transition: 0.4s;
}

.carousel__slide > .carousel__item {
  transform: scale(1);
  opacity: 0.5;
  transition: 0.5s;
}
.carousel__slide--visible > .carousel__item {
  opacity: 1;
  transform: rotateY(0);
}
.carousel__slide--next > .carousel__item {
  transform: scale(0.9) translate(-10px);
}
.carousel__slide--prev > .carousel__item {
  transform: scale(0.9) translate(10px);
}
.carousel__slide--active > .carousel__item {
  transform: scale(1.1);
}
</style>