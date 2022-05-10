<template>
  <TheHeader />
  <Main />
  <AboutUs />
  <Work />
  <Witness />
  <Video />
  <Join />
  <OurApp />
  <Footer />
</template>

<style type="text/css">
* {
  text-decoration: none;
  box-sizing: border-box;
}

.cursor {
  width: 50px;
  height: 50px;
  border-radius: 100%;
  border: 1px solid black;
  transition: all 200ms ease-out;
  position: fixed;
  pointer-events: none;
  left: 0;
  top: 0;
  transform: translate(calc(-50% + 15px), -50%);
}

.cursor2 {
  width: 20px;
  height: 20px;
  border-radius: 100%;
  background-color: black;
  opacity: 0.3;
  position: fixed;
  transform: translate(-50%, -50%);
  pointer-events: none;
  transition: width 0.3s, height 0.3s, opacity 0.3s;
}

.hover {
  background-color: red;
  opacity: 0.5;
}

.cursorinnerhover {
  width: 50px;
  height: 50px;
  opacity: 0.5;
}
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
</style>
<script>
import TheHeader from "@/components/TheHeader.vue";
import Main from "@/components/Main.vue";
import AboutUs from "@/components/AboutUs.vue";
import Work from "@/components/Works.vue";
import Video from "@/components/video-sec.vue";
import Witness from "@/components/Wintess.vue";
import Join from "@/components/join.vue";
import OurApp from "@/components/OurApp.vue";
import Footer from "@/components/TheFooter.vue";
export default {
  components: {
    TheHeader,
    Main,
    AboutUs,
    Work,
    Video,
    Witness,
    Join,
    OurApp,
    Footer,
  },
};
</script>

