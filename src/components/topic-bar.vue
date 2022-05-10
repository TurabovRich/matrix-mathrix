<template>
  <div class="tab">
    <h1 class="font-semibold">Exam topics</h1>
    <div class="tab__bars flex">
      <a class="tab__link" href="">
        <p>Complex numbers</p>
      </a>
      <a class="tab__link" href="">
        <p>Polynomials</p>
      </a>
      <router-link class="tab__link" to="/exam">
        <p>Quiz</p>
      </router-link>
      <router-link class="tab__link" to="/exercises">
        <p>Exercises</p>
      </router-link>
      <a href="" class="tab__link">
        <p>Vectors</p>
      </a>
      <a href="" class="tab__link">
        <p>Conic sections</p>
      </a>
    </div>
  </div>
</template>

<style scoped>
.tab__bars {
  flex-direction: column;
  gap: 40px;
}

.tab__link {
  font-family: "Poppins";
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: -0.149625px;
  color: #282929;
  margin: 0;
}

.tab__link:hover {
  color: #229a87;
}

h1 {
  font-family: "Poppins";
  font-size: 22px;
  line-height: 33px;
  letter-spacing: -0.0142658px;
  color: #229a87;
  margin-bottom: 42px;
}

div:first-child {
  display: flex;
  flex-direction: column;
  border-right: 1px solid #36a593;
  padding-right: 57px;
  position: sticky;
  top: 0;
  max-height: 100vh;
  top: 100px;
}

@media only screen and (max-width: 426px) {
  div:first-child {
    padding-right: 0;
  }
}
</style>