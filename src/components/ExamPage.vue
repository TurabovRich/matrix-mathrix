<template>
  <div class="container">
    <header class="flex justify-between items-center plan">
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
      <div class="time items-center flex">
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
      <div id="quizText" class="questions">
        <div v-for="quest in quests" :key="quest" class="question">
          <h3 class="font-semibold">{{ quest.theme }}</h3>
        </div>
      </div>
      <router-link class="btn items-center flex justify-center" to="/finish"
        >Finish</router-link
      >
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      quests: [
        {
          theme:
            "1. Over which interval does h have a negative average rateof change?",
        },
        {
          theme: "2. Translate the following sentences in terms of limits.",
        },
        {
          theme:
            "3. Over which interval does h have a negative average rateof change?",
        },
        { theme: "4. What means 'That is why'?" },
      ],
    };
  },
  mounted() {
    let sec = 30;
    let time = setInterval(myTimer, 1000);
    // .addEventListener('click', stopInterval())

    function stopInterval() {
      clearInterval(time);
    }
    function myTimer() {
      if (sec == -1) {
        alert("Time out!! :(");
        clearInterval(time);
        let quizText = (document.getElementById("quizText").style.display =
          "none");
      } else if (document.getElementsByClassName("btn").clicked == true) {
        // finish.addEventListener("click", stopInterval());
        document.getElementById("timer").innerHTML = "Time left:";
        return !sec--
      } else {
        document.getElementById("timer").innerHTML = "Time left:" + sec;
        sec--;
      }
    }
  },
};
</script>

<style>
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
  border-bottom: 1px solid #36a593;
}

.questions h3 {
  font-family: "Poppins";
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.0142658px;
  margin-bottom: 40px;
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