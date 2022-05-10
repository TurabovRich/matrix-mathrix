<template>
  <div class="container">
    <header class="plan justify-between flex">
      <span></span>
      <h1 class="font-semibold">The complex plane</h1>
      <router-link to="/math" class="close">
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M13.5971 0.43575C13.1166 -0.0441842 12.3382 -0.0441842 11.8577 0.43575L7.1892 5.29329L2.11047 0.370108C1.79686 0.049534 1.33372 -0.0750755 0.901614 0.0448602C0.469504 0.164796 0.136829 0.510291 0.0332874 0.946647C-0.0702544 1.383 0.0717284 1.84114 0.403881 2.14246L5.44979 7L0.403881 11.8575C0.0717284 12.1589 -0.0702544 12.617 0.0332874 13.0534C0.136829 13.4897 0.469504 13.8352 0.901614 13.9551C1.33372 14.0751 1.79686 13.9505 2.11047 13.6299L7.1892 8.70671L11.8577 13.5643C12.159 13.8964 12.6171 14.0384 13.0534 13.9349C13.4897 13.8313 13.8352 13.4986 13.9551 13.0665C14.0751 12.6343 13.9505 12.1712 13.6299 11.8575L8.9286 6.93436L13.6299 2.01117C14.0006 1.54693 13.9868 0.884146 13.5971 0.43575Z"
            fill="#229A87"
          />
        </svg>
      </router-link>
    </header>
  </div>

  <div class="main">
    <div class="container">
      <div class="time flex">
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="20" cy="20" r="20" fill="#DEF9F1" />
        </svg>
        <p id="timer"></p>
      </div>
      <div class="questions mb-10 flex justify-center">
        <div v-for="(question, index) in quiz.questions" :key="question">
          <div
            class="flex flex-col justify-center items-center"
            v-show="index === questionIndex"
          >
            <h2 class="questions__txt">{{ question.text }}</h2>
            <ul class="list-none flex mb-2.5">
              <li
                class="cursor-pointer flex justify-center"
                v-for="response in question.responses"
                :key="response"
              >
                <label
                  class="
                    cursor-pointer
                    flex
                    items-center
                    justify-center
                    bg-white
                  "
                >
                  <input
                    class="hidden"
                    type="radio"
                    v-bind:value="response.correct"
                    v-bind:name="index"
                    v-model="userResponses[index]"
                  />
                  {{ response.text }}
                </label>
              </li>
            </ul>
            <div class="rules gap-4 flex">
              <button v-if="questionIndex > 0" v-on:click="prev">prev</button>
              <button v-on:click="next">next</button>
            </div>
          </div>
        </div>
        <div class="rules" v-show="questionIndex === quiz.questions.length">
          <h2>Quiz finished</h2>
          <p>Total score: {{ score() }} / {{ quiz.questions.length }}</p>
        </div>
      </div>
      <router-link class="btn flex justify-center" to="/finish">Finish</router-link>
    </div>
  </div>
</template>

<script>
let quiz = {
  title: "My quiz",
  questions: [
    {
      text: "9+9",
      responses: [
        { text: "19" },
        { text: "238" },
        { text: "18", correct: true },
      ],
    },
    {
      text: "Question 2",
      responses: [
        { text: "Right answer", correct: true },
        { text: "Wrong answer" },
        { text: "Wrong answer" },
      ],
    },
  ],
};
export default {
  data() {
    return {
      numbers: [],
      // quests: [
      //   {
      //     theme: "63 - 24",
      //   },
      //   { theme: "15 + 12" },
      //   {
      //     theme: "√16",
      //   },
      //   { theme: "4. What means 'That is why'?" },
      // ],
      quiz: quiz,
      questionIndex: 0,
      userResponses: Array(quiz.questions.length).fill(false),
    };
  },

  methods: {
    next: function () {
      this.questionIndex++;
    },
    prev: function () {
      this.questionIndex--;
    },
    score: function () {
      return this.userResponses.filter(function (val) {
        return val;
      }).length;
    },
  },
  mounted: function () {
    // var sec = 30;
    // var time = setInterval(myTimer, 1000);
    // function myTimer() {
    //   document.getElementById("timer").innerHTML = "Time left:" + sec;
    //   sec--;
    //   if (sec == -1) {
    //     clearInterval(time);
    //     alert("Time out!! :(");
    //   }
    // }
    let arr = [];
    for (let i = 0; i < 10; i++) {
      let num = Math.floor(Math.random() * 100);
      let num2 = Math.floor(Math.random() * 100);
      let numbers = {
        num1: num,
        num2: num2,
      };
      arr.push(numbers);
    }
    // console.log(arr);
    // this.numbers = arr;
    // let number = num1;
    // let number2 = num2;
    // document.getElementById("no").innerHTML = Math.floor(Math.random() * 100);
  },
};
</script>


<style type="text/css" scoped>
.plan {
  border-bottom: 1px solid #36a593;
}

.rules {
  font-family: "Open Sans";
  font-weight: 400;
  font-size: 14px;
  line-height: 25px;
  letter-spacing: -0.149625px;
  color: #505857;
}

label {
  width: 180px;
  height: 55px;
  font-family: "Poppins";
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.0142658px;
  color: #229a87;
  transition: 0.4s;
  border-radius: 10px;
  box-shadow: 5px 0px 30px rgba(185, 213, 208, 0.5);
}

label:hover,
label:target {
  color: #fff;
  background: #229a87;
}

.questions__txt {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 27px;
  letter-spacing: -0.0142658px;
  color: #282929;
  margin-bottom: 67px;
}

ul {
  gap: 46px;
}

li {
  width: 180px;
  height: 55px;
  border-radius: 10px;
}

.btn {
  padding: 10px 25px;
  margin-top: 20px;
}

.time {
  font-family: "Open Sans";
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.149625px;
  color: #b7b7b7;
  align-items: center;
  gap: 12px;
}

.plan h1 {
  font-family: "Poppins";
  font-size: 22px;
  line-height: 38px;
  letter-spacing: -0.762769px;
  color: #229a87;
  margin-bottom: 18px;
  margin-top: 12px;
}

.plan {
  align-items: center;
}

.close {
  margin: 0;
}

.questions p {
  font-family: "Poppins";
  font-size: 18px;
  line-height: 27px;
  letter-spacing: -0.0142658px;
  color: #282929;
}

.questions {
  margin-top: 35px;
  background: #ffffff;
  box-shadow: 5px 0px 30px rgba(185, 213, 208, 0.5);
  border-radius: 20px;
  padding: 50px 50px 39px 50px;
}

.main {
  margin-top: 65px;
}
</style>