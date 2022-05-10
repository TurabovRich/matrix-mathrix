<template>
  <div class="container">
    <div class="training flex">
      <div class="training__card justify-between flex" v-for="card in cards" :key="card">
        <div class="training__top">
          <img class="training__img" :src="card.img" alt="" />
          <p class="subtitle3 training_txt">{{ card.text }}</p>
        </div>
        <div class="training__bottom">
          <div class="training__infos justify-center flex">
            <div class="training__info flex">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="20" cy="20" r="20" fill="#DEF9F1" />
                <path
                  d="M25.987 26.1536C25.987 22.6066 21.6188 21.5819 21.6188 20C21.6188 18.4181 25.987 17.3934 25.987 13.8464C26.5464 13.8464 27 13.4331 27 12.9232C27 12.4133 26.5464 12 25.987 12H15.013C14.4536 12 14 12.4133 14 12.9232C14 13.4331 14.4536 13.8464 15.013 13.8464C15.013 17.3934 19.381 18.4181 19.381 20C19.381 21.5819 15.013 22.6066 15.013 26.1536C14.4536 26.1536 14 26.5669 14 27.0768C14 27.5867 14.4536 28 15.013 28H25.987C26.5464 28 27 27.5867 27 27.0768C27 26.5669 26.5464 26.1536 25.987 26.1536Z"
                  fill="#229A87"
                />
              </svg>
              <p>2 hours total</p>
            </div>
            <div class="training__info flex">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="20" cy="20" r="20" fill="#DEF9F1" />
                <path
                  d="M29.3014 14.7104C29.1088 14.5026 28.904 14.3077 28.6882 14.1268C26.3018 12.2629 22.8879 13.1252 21.0318 13.7871C20.8703 13.8485 20.7309 13.961 20.633 14.1093C20.535 14.2575 20.4833 14.4341 20.4849 14.6145V25.0663C20.4846 25.2143 20.5202 25.36 20.5884 25.4895C20.6565 25.619 20.7549 25.7282 20.8744 25.8066C20.9938 25.8851 21.1302 25.9303 21.2709 25.9379C21.4115 25.9455 21.5517 25.9153 21.6781 25.8502C22.5133 25.4433 23.4116 25.1984 24.3297 25.1273C24.5534 25.1273 24.7606 25.1273 24.976 25.1273C26.1218 25.1335 27.2526 25.401 28.2905 25.9112C28.417 25.9763 28.5571 26.0065 28.6978 25.9988C28.8384 25.9912 28.9749 25.9461 29.0943 25.8676C29.2137 25.7892 29.3121 25.68 29.3802 25.5505C29.4484 25.4209 29.484 25.2753 29.4837 25.1273V15.3026C29.4944 15.0883 29.4295 14.8774 29.3014 14.7104Z"
                  fill="#229A87"
                />
                <path
                  d="M18.4638 13.7908C16.6077 13.1258 13.2172 12.2594 10.8332 14.1321C10.6156 14.3136 10.4089 14.5094 10.2145 14.7184C10.0751 14.8811 9.9985 15.0936 10 15.3135V25.1232C9.99974 25.2719 10.0352 25.4182 10.103 25.5484C10.1709 25.6785 10.2689 25.7882 10.3877 25.867C10.5066 25.9458 10.6425 25.9912 10.7825 25.9988C10.9225 26.0065 11.062 25.9762 11.1879 25.9107C12.4304 25.2915 13.8043 25.029 15.1723 25.1494C16.0863 25.2208 16.9806 25.4669 17.8121 25.8757C17.938 25.9412 18.0775 25.9715 18.2175 25.9638C18.3575 25.9562 18.4934 25.9108 18.6123 25.832C18.7312 25.7532 18.8292 25.6435 18.897 25.5134C18.9648 25.3832 19.0003 25.2369 19 25.0882V14.5871C18.9956 14.4129 18.9422 14.2439 18.8466 14.102C18.7511 13.9602 18.6178 13.8518 18.4638 13.7908Z"
                  fill="#229A87"
                />
              </svg>
              <p>for 4th classes</p>
            </div>
          </div>
          <span class="line flex"></span>
          <p class="next flex justify-center items-center font-semibold">
            {{ title }}
            <svg
              width="18"
              height="10"
              viewBox="0 0 18 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M17.9808 5.14773C18.0423 4.85155 17.9542 4.5441 17.7451 4.32506L13.87 0.304483C13.6423 0.0540756 13.2961 -0.0529644 12.9664 0.0250951C12.6367 0.103155 12.3756 0.353956 12.285 0.679721C12.1943 1.00549 12.2885 1.35464 12.5307 1.59107L14.893 4.06527H0.930039C0.416393 4.06527 0 4.48067 0 4.99309C0 5.50552 0.416393 5.92092 0.930039 5.92092H15.0108L12.4005 8.30852C12.1025 8.51369 11.951 8.87275 12.0121 9.22878C12.0732 9.58481 12.3359 9.87309 12.6854 9.96762C13.0348 10.0622 13.4075 9.94578 13.6406 9.66933L17.6707 5.95803C17.9049 5.75767 18.0215 5.45276 17.9808 5.14773V5.14773Z"
                fill="#229A87"
              />
            </svg>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Training",
  data() {
    return {
      cards: [
        {
          img: require("../assets/video-png1.png"),
          text: "Math exam preparation",
        },
        {
          img: require("../assets/video-png2.png"),
          text: "Increasing and decreasing functions and others",
        },
      ],
    };
  },

  props: {
    title: {
      type: String,
      default: "",
    },
  },
};
</script>

<style scoped>
@media only screen and (max-width: 835px) {
  .training {
    justify-content: center;
  }
}

@media only screen and (max-width: 376px) {
  .training__card {
    width: 100% !important;
    height: 100% !important;
  }
  .training__img {
    width: 100% !important;
    height: 100% !important;
  }
}

.training {
  gap: 48px;
  flex-wrap: wrap;
}
.training__card {
  gap: 41px;
  max-width: 368px;
  cursor: pointer;
  transition: 0.4s;
  text-align: center;
  border-radius: 20px;
  background: #ffffff;
  flex-direction: column;
  padding: 29px 29px 20px 29px;
  box-shadow: 5px 0px 30px rgba(185, 213, 208, 0.5);
}

.training__card:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 20px 3px rgba(0, 0, 0, 0.2);
}

.training__card:active {
  box-shadow: 0 3px 13px 3px rgba(0, 0, 0, 0.25);
}

.training__card:hover .next svg {
  margin-left: 10px;
}

.training__img {
  height: 213px;
  max-width: 310px;
  border-radius: 10px;
  margin-bottom: 43px;
}

.training__txt {
  line-height: 18px;
  margin-bottom: 41px;
}

.line {
  border-bottom: 1px solid #e1f1ef;
  width: 100%;
}

.training__infos {
  gap: 33px;
}

.training__info {
  align-items: center;
  flex-direction: column;
}

.training__info p {
  letter-spacing: -0.149625px;
  font-family: "Open Sans";
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
  color: #b7b7b7;
}

.next {
  gap: 5px;
  font-size: 16px;
  color: #229a87;
  margin: 0;
  margin-top: 18px;
  text-align: center;
  line-height: 24px;
  font-family: "Poppins";
  letter-spacing: -0.0142658px;
}

.next svg {
  transition: 0.4s;
}
</style>