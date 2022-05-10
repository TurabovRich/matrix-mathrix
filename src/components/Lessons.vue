<template>
  <div class="container">
    <p>Your active course</p>
  </div>
  <Activity />
  <div class="container">
    <p>All subjects</p>
  </div>
  <Subjects />
</template>

<script>
import Activity from "@/components/Activity.vue";
import Subjects from "@/components/Subjects.vue";
export default {
  name: "Lessons",
  components: {
    Activity,
    Subjects,
  },
};
</script>

<style scoped>
p {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.0142658px;
  color: #86c9be;
}
</style>
