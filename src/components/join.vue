<template>
  <div class="screen-3">
    <div class="container">
      <div class="screen-3__content flex">
        <div class="title-section">
          <img src="@/assets/yello-crown.svg" alt="" class="crow1-svg" />
          <h1 class="title">Join now</h1>
          <p class="subtitle">
            For every student, every classroom. Real results.
          </p>
        </div>
        <div class="justify-center flex gap-5 flex-wrap">
          <img class="arrows" src="@/assets/arrow1.svg" alt="" />
          <button class="btn">Student</button>
          <button class="btn">Parent</button>
          <button class="btn">Teacher</button>
          <img class="arrows" src="@/assets/arrow2.svg" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "join",
};
</script>

<style type="text/css">
.screen-3__content {
  flex-direction: column;
}

@media only screen and (max-width: 426px) {
  .arrows {
    display: none;
  }
}

.screen-3__content p {
  margin-bottom: 38px;
}

.screen-3 {
  margin-top: 85px;
  margin-bottom: 85px;
}</style>