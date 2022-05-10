<template>
  <TheHeader />
  <div class="navigation">
    <div class="container">
      <div class="nav-bar flex items-center">
        <a class="nav-a" href="/dashboard">Dashboard</a>
        <span>>></span>
        <a class="nav-a nav-a__active" href="">Philosophy</a>
      </div>
    </div>
  </div>
  <div class="main">
     <div class="container">
        <div class="main__content justify-between flex">
        <SubjBar />
        <TaskCompletion title="Philosophy" img="/img/lesson1.aaea15ed.png" />
      </div>
     </div>
  </div>
  <OurApp />
  <Footer />
</template>

<style scoped>
.main__content {
  width: 100%;
  position: relative;
}

.main {
  margin-bottom: 100px;
}


.navigation {
  margin-top: 120px;
  margin-bottom: 38px;
}
</style>

<script>
import TheHeader from "@/components/TheHeader2.vue";
import SubjBar from "@/components/subj-bar.vue";
import TaskCompletion from '@/components/TaskCompletion.vue'
import OurApp from "@/components/OurApp.vue";
import Footer from "@/components/TheFooter.vue";

export default {
  components: {
    TheHeader,
    SubjBar,
    TaskCompletion,
    OurApp,
    Footer,
  },
};
</script>
