<template>
  <div class="container">
    <div class="subject flex">
      <div
        v-for="(card, index) in cards"
        :key="index"
        class="input-checkbox checkbox-alias flex"
        :class="{ 'active-subject': card.id === activeSubject }"
        @click.stop="onChange(card.id)"
      >
        <router-link :to="'/' + card.route">
          <img :src="card.img" alt="" />
        </router-link>
        <p class="subtitle3 font-semibold">{{ card.text }}</p>
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
          route: "math",
          id: 1,
          img: require("../assets/NumericScience.png"),
          text: "Mathematics",
        },
        {
          route: "ourTeachers",
          id: 2,
          img: require("../assets/NumericScience.png"),
          text: "Physical",
        },
        {
          route: "ourTeachers",
          id: 3,
          img: require("../assets/NumericScience.png"),
          text: "SVT",
        },
        {
          route: "ourTeachers",
          id: 4,
          img: require("../assets/NumericScience.png"),
          text: "History",
        },
        {
          route: "ourTeachers",
          id: 5,
          img: require("../assets/NumericScience.png"),
          text: "Chemistry",
        },
        {
          route: "ourTeachers",
          id: 6,
          img: require("../assets/NumericScience.png"),
          text: "Numeric Science",
        },
        {
          route: "ourTeachers",
          id: 7,
          img: require("../assets/NumericScience.png"),
          text: "Technology",
        },
        {
          route: "philosophy",
          id: 8,
          img: require("../assets/NumericScience.png"),
          text: "Philosophy",
        },
        {
          route: "ourTeachers",
          id: 9,
          img: require("../assets/NumericScience.png"),
          text: "Geographi",
        },
        {
          route: "ourTeachers",
          id: 10,
          img: require("../assets/NumericScience.png"),
          text: "French",
        },
      ],
      activeSubject: undefined,
    };
  },
  methods: {
    onChange(id) {
      console.log(id);
      this.activeSubject = id;
    },
  },
};
</script>


<style >
.checkbox-alias {
  height: 200px;
  width: 264px;
  border-radius: 20px;
  background-color: #fff;
  position: relative;
  transition: all 250ms ease-out;
  cursor: pointer;
  border: 1px solid #fff;
  box-shadow: 5px 0px 30px rgba(185, 213, 208, 0.5);
  flex-direction: column;
  align-items: center;
}

.input-checkbox:hover {
  border: 3px solid green;
}

.active-subject {
  border: 3px solid green;
}

.checkbox-alias p {
  line-height: 18px;
  bottom: 19px;
  position: absolute;
}

.subtitle3 {
  margin: 0;
  text-align: center;
  font-family: "Poppins";
  font-size: 18px;
  letter-spacing: -0.762769px;
  color: #282929;
}

.subject {
  flex-wrap: wrap;
  margin: 16px 0 80px 0;
  gap: 31px 40px;
}

@media screen and (max-width: 1024px) {
  .subject {
    justify-content: center;
  }
}
</style>