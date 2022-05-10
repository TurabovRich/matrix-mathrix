<template>
  <div>
    <div class="container">
      <div class="screen-4__content flex">
        <div class="title-section">
          <img
            src="@/assets/yello-crown.svg"
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
            alt=""
            class="crow1-svg"
          />
          <h1 class="title" style="margin-bottom: 4px">
            You can learn anything
          </h1>
          <p class="subtitle">
            Build a deep, solid understanding in math, scienc e, and more.
          </p>
        </div>
        <img src="@/assets/laptop.svg" alt="" />
        <div class="justify-center flex gap-5">
          <img class="arrows" src="@/assets/arrow1.svg" alt="" />
          <button class="btn more-btn">I want to know more</button>
          <img class="arrows" src="@/assets/arrow2.svg" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutUs",
};
</script>

<style type="text/css">
.screen-4__content {
  margin-top: 40px;
  flex-direction: column;
  margin-bottom: 45px;
}

.screen-4__content p {
  margin-bottom: 31px;
}

.more-btn {
  width: 220px !important;
}
</style>