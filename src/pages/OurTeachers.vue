<template>
  <TheHeader />
  <div class="navigation">
    <div class="container">
      <div class="nav-bar flex items-center">
        <router-link to="/" class="nav-a">
          Home Page
        </router-link>
        <span>>></span>
        <a class="nav-a nav-a__active" href="">Teachers</a>
        <router-link to="/OurTeachers" class="nav-a nav-a__active">
          Teachers
        </router-link>
      </div>
    </div>
  </div>
  <Info />
  <TheTeachers />
  <OurApp />
  <Footer />
</template>

<script>
import TheHeader from "@/components/TheHeader.vue";
import Info from "@/components/page-info.vue";
import TheTeachers from "@/components/Teachers.vue";
import OurApp from "@/components/OurApp.vue";
import Footer from "@/components/TheFooter.vue";
export default {
  name: "OurTeachers",
  components: {
    TheHeader,
    Info,
    TheTeachers,
    OurApp,
    Footer,
  },
};
</script>

<style >
.navigation {
  margin-top: 38px;
  margin-bottom: 21px;
}

.nav-a {
  font-family: "Open Sans";
  font-weight: 300;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: -0.149625px;
  color: #505857;
}

.nav-a__active {
  color: #229A87;
}

.nav-bar {
  flex-wrap: wrap;
  gap: 12px;
}
</style>