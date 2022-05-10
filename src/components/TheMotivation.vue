<template>
  <div class="container">
    <div class="motivation flex flex-wrap gap-12">
      <div class="motivation__card" v-for="card in cards" :key="card">
        <img class="motivation__img" :src="card.img" alt="" />
        <p class="motivation__txt font-semibold">{{ card.text }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    data() {
    return {
      cards: [
        {
          img: require("../assets/video-png1.png"),
          text: "Are you studying and still can’t do it?",
        },
        {
          img: require("../assets/video-png2.png"),
          text: "How to better service?",
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
  .motivation {
    justify-content: center;
  }
}
.motivation__card {
  gap: 41px;
  max-width: 368px;
  cursor: pointer;
  transition: 0.4s;
  text-align: center;
  border-radius: 20px;
  background: #ffffff;
  padding: 16px 17px 11px 17px;
  box-shadow: 5px 0px 30px rgba(185, 213, 208, 0.5);
}

.motivation__card:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 20px 3px rgba(0, 0, 0, 0.2);
}

.motivation__card:active {
  box-shadow: 0 3px 13px 3px rgba(0, 0, 0, 0.25);
}

.motivation__txt {
  font-family: "Open Sans";
  font-size: 14px;
  line-height: 28px;
  letter-spacing: -0.149625px;
  color: #282929;
  margin-top: 19px;
  margin-bottom: 26px;
}

.motivation__img {
  height: 210px;
  max-width: 335px;
  border-radius: 10px;
}
</style>