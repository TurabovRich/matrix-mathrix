<template>
  <div class="teachers">
    <div class="container">
      <div class="cards flex">
        <div class="teacher-card">
          <img
            class="teach-img"
            src="@/assets/Teacher.png"
            alt="Teachers img:)"
          />
          <img
            class="lesson-img"
            src="@/assets/pic_subject.png"
            alt="Teaches subject ..."
          />
          <div class="txt">
            <p class="name font-semibold">{{ name }}</p>
            <p class="subj">{{ subject }}</p>
            <p class="teach_info">
              {{ teach_info }}
            </p>
          </div>
        </div>
           <div class="teacher-card">
        <img
          class="teach-img"
          src="@/assets/Teacher.png"
          alt="Teachers img:)"
        />
        <img class="lesson-img" src="@/assets/pic_subject.png" alt="Teaches subject ..." />
        <div class="txt">
          <p class="name">{{ name }}</p>
          <p class="subj">{{ subject }}</p>
          <p class="teach_info">
            {{ teach_info }}
          </p>
        </div>
      </div>   <div class="teacher-card">
        <img
          class="teach-img"
          src="@/assets/Teacher.png"
          alt="Teachers img:)"
        />
        <img class="lesson-img" src="@/assets/pic_subject.png" alt="Teaches subject ..." />
        <div class="txt">
          <p class="name">{{ name }}</p>
          <p class="subj">{{ subject }}</p>
          <p class="teach_info">
            {{ teach_info }}
          </p>
        </div>
      </div>   <div class="teacher-card">
        <img
          class="teach-img"
          src="@/assets/Teacher.png"
          alt="Teachers img:)"
        />
        <img class="lesson-img" src="@/assets/pic_subject.png" alt="Teaches subject ..." />
        <div class="txt">
          <p class="name">{{ name }}</p>
          <p class="subj">{{ subject }}</p>
          <p class="teach_info">
            {{ teach_info }}
          </p>
        </div>
      </div>   <div class="teacher-card">
        <img
          class="teach-img"
          src="@/assets/Teacher.png"
          alt="Teachers img:)"
        />
        <img class="lesson-img" src="@/assets/pic_subject.png" alt="Teaches subject ..." />
        <div class="txt">
          <p class="name">{{ name }}</p>
          <p class="subj">{{ subject }}</p>
          <p class="teach_info">
            {{ teach_info }}
          </p>
        </div>
      </div>   
      <div class="teacher-card">
        <img
          class="teach-img"
          src="@/assets/Teacher.png"
          alt="Teachers img:)"
        />
        <img class="lesson-img" src="@/assets/pic_subject.png" alt="Teaches subject ..." />
        <div class="txt">
          <p class="name">{{ name }}</p>
          <p class="subj">{{ subject }}</p>
          <p class="teach_info">
            {{ teach_info }}
          </p>
        </div>
      </div>   <div class="teacher-card">
        <img
          class="teach-img"
          src="@/assets/Teacher.png"
          alt="Teachers img:)"
        />
        <img class="lesson-img" src="@/assets/pic_subject.png" alt="Teaches subject ..." />
        <div class="txt">
          <p class="name">{{ name }}</p>
          <p class="subj">{{ subject }}</p>
          <p class="teach_info">
            {{ teach_info }}
          </p>
        </div>
      </div>   <div class="teacher-card">
        <img
          class="teach-img"
          src="@/assets/Teacher.png"
          alt="Teachers img:)"
        />
        <img class="lesson-img" src="@/assets/pic_subject.png" alt="Teaches subject ..." />
        <div class="txt">
          <p class="name">{{ name }}</p>
          <p class="subj">{{ subject }}</p>
          <p class="teach_info">
            {{ teach_info }}
          </p>
        </div>
      </div>   <div class="teacher-card">
        <img
          class="teach-img"
          src="@/assets/Teacher.png"
          alt="Teachers img:)"
        />
        <img class="lesson-img" src="@/assets/pic_subject.png" alt="Teaches subject ..." />
        <div class="txt">
          <p class="name">{{ name }}</p>
          <p class="subj">{{ subject }}</p>
          <p class="teach_info">
            {{ teach_info }}
          </p>
        </div>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Teachers',
  data: function () {
    return {
      name: "Ella Hubbard",
      subject: "Math teacher",
      teach_info:
        "Management of course allocation, teaching material, curricula, quality assurance of courses.",
    };
  },
};
</script>

<style scoped>
.teachers {
  background: url("@/assets/bg2.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  margin-top: 80px;
  margin-bottom: 100px;
}

.txt {
  padding-left: 16px;
  padding-right: 15px;
  padding-bottom: 19px;
  padding-top: 10px;
}

.teacher-card {
  border-radius: 6px;
  width: 264px;
  position: relative;
  text-align: center;
  background: #fff;
  margin-bottom: 48px;
}

.cards {
    flex-wrap: wrap;
    gap: 48px;
}

.teach-img {
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}

.lesson-img {
  position: absolute;
  margin-left: -190px;
  margin-top: 195px;
}

.name {
  font-family: "Poppins";
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.762769px;
  color: #282929;
}

.subj {
  font-family: "Poppins";
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: -0.0142658px;
  color: #b7c2bf;
  margin-bottom: 12px;
}

.teach_info {
  font-family: "Open Sans";
  font-weight: 300;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: -0.1575px;
  color: #414947;
}

.title {
  font-size: 32px;
  text-align: inherit;
}

.icon03 {
  position: absolute;
  margin-top: -22px;
  margin-left: 340px;
}

.subtitle {
  text-align: inherit;
}

@media screen and (max-width: 605px) {
  .cards {
    justify-content: center;
  }
}
</style>
