<template>
  <div class="start">
    <div class="container">
      <div class="start__content items-center flex">
        <img src="@/assets/logo4.png" alt="" />
        <h1 class="font-semibold">Well done</h1>
        <p>
          We have sent answers to ur gmail:)
        </p>
        <router-link to="/quiz" class="log">Restart</router-link>
        <router-link to="/dashboard" class="items-center flex justify-between">Go home</router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
h1 {
  font-family: "Poppins";
  font-size: 32px;
  line-height: 64px;
  text-align: center;
  letter-spacing: -0.762769px;
  color: #229a87;
}

.start {
  background: url("@/assets/bg3.png") no-repeat;
  background-size: 100% 100%;
  width: 100%;
  height: 100vh;
  padding-top: 197px;
}

.start__content {
  flex-direction: column;
}

p {
  max-width: 506px;
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 28px;
  text-align: center;
  letter-spacing: -0.149625px;
  color: #282929;
  margin-bottom: 27px;
}
</style>

<script>
export default {};
</script>
