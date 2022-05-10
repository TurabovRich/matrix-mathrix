<template>
  <Header></Header>
  <UserInfo />
  <nav class="flex justify-center">
    <ul class="flex justify-center">
      <li class="flex justify-center" v-for="(tab, index) in tabs" :key="index">
        <button
          class="tab font-semibold"
          @click="setTabActive(index)"
          :class="{ active: index === activeTab }"
        >
          <span class="tab-copy">{{ tab.name }}</span>
        </button>
      </li>
    </ul>
  </nav>
  <div class="container">
    <div>
      <div v-if="activeTab === 0">
        <div class="content">
          <Lessons />
        </div>
      </div>
      <div v-if="activeTab === 1">
        <div class="content">
          <p>Access success</p>
          <TheMotivation />
        </div>
        <div class="content">
          <p>Ask Methrix show</p>
          <TheMotivation />
        </div>
      </div>
      <div v-if="activeTab === 2">
        <div class="content">
          <p>Your training</p>
          <Training title="Continue" />
        </div>
        <div class="content">
          <p>All trainings available</p>
          <Training title="More info" />
        </div>
      </div>
    </div>
  </div>
  <OurApp />
  <Footer />
</template>
<script>
import Header from "@/components/TheHeader2.vue";
import UserInfo from "@/components/UserInfo.vue";
import Lessons from "@/components/Lessons.vue";
import TheMotivation from "@/components/TheMotivation.vue";
import Training from "@/components/Training.vue";
import OurApp from "@/components/OurApp.vue";
import Footer from "@/components/TheFooter.vue";
export default {
  name: "dashboard",
  components: {
    Header,
    UserInfo,
    Lessons,
    TheMotivation,
    Training,
    OurApp,
    Footer,
    TabContent: {
      props: {
        data: Object,
      },
    },
  },
  data() {
    return {
      activeTab: 0,
      tabs: [
        {
          name: "Subjects",
        },
        {
          name: "Motivation",
        },
        {
          name: "Training",
        },
      ],
    };
  },
  computed: {
    tabContent() {
      return this.tabs[this.activeTab];
    },
  },
  methods: {
    setTabActive(tab) {
      this.activeTab = tab;
    },
  },
};
</script>

<style scoped>
.content p {
  font-family: "Poppins";
  font-weight: 500;
  margin-bottom: 16px;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.0142658px;
  color: #86c9be;
}

.content {
  margin: 36px 0;
}

nav {
  width: 100%;
}
nav ul {
  flex-direction: row;
  width: 100%;
  padding: 0;
}

nav ul li {
  border-bottom: 1px solid #36a593;
  list-style-type: none;
  width: 26.8%;
}

nav .tab {
  font-family: "Poppins";
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.0142658px;
  color: #b7c2bf;
  outline: none;
  cursor: pointer;
  border: none;
  padding-bottom: 14px;
  background: none;
}
nav ul li .tab.active {
  border-bottom: 4px solid #36a593;
  width: 100%;
}

nav .tab.active {
  color: #229a87;
  width: 100%;
}
</style>