<template>
  <div class="header">
    <div class="overlay" v-if="userBtn" @click="userBtn = false"></div>
    <div class="overlay" v-if="menuOpen" @click="menuOpen = false"></div>

    <div
      class="overlay"
      v-if="notifications"
      @click="notifications = false"
    ></div>
    <div class="container">
      <div
        style="padding-top: 18px; padding-bottom: 17.22px"
        class="flex relative justify-between items-center"
      >
        <router-link to="">
          <img src="@/assets/logo.svg" alt="logo" />
        </router-link>
        <div class="dropdown-after flex" :class="{ dropdown: menuOpen }">
          <img class="srch-icon" src="@/assets/search.svg" alt="" />
          <input
            class="search"
            type="text"
            placeholder="Find what interests you"
          />
          <select class="select font-semibold term font-semibold">
            <option class="select font-semibold" value="" disabled>
              Select a lesson
            </option>
            <option
              class="select font-semibold"
              v-for="lesson in lessons"
              v-bind:key="lesson"
            >
              {{ lesson }}
            </option>
          </select>
          <button class="premium-btn font-semibold">Get premium</button>
          <button
            class="user-btn flex font-semibold"
            @click="userBtn = { true: !true }"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <ellipse
                cx="10.0001"
                cy="3.96825"
                rx="4.16669"
                ry="3.96825"
                fill="#505857"
              />
              <path
                d="M0 18.9806C0 13.4577 4.47715 8.88885 10 8.88885V8.88885C15.5228 8.88885 20 13.4577 20 18.9806V18.9806C20 19.5385 19.5478 20 18.9899 20H1.0101C0.452237 20 0 19.5385 0 18.9806V18.9806Z"
                fill="#505857"
              />
            </svg>
          </button>
          <div class="settings flex" v-if="userBtn">
            <button class="flex">
              <svg
                width="30"
                height="31"
                viewBox="0 0 30 31"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  y="0.247559"
                  width="30"
                  height="30"
                  rx="15"
                  fill="#DEF9F1"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M21.0454 13.3385H20.7273C20.6406 13.0649 20.5343 12.798 20.4091 12.5398L20.6286 12.3203C21.0008 11.9476 21.0008 11.3439 20.6286 10.9712L19.2795 9.6221C18.9069 9.24989 18.3031 9.24989 17.9305 9.6221L17.7045 9.83847C17.4463 9.7133 17.1794 9.60696 16.9059 9.52029V9.2021C16.9059 8.67492 16.4785 8.24756 15.9514 8.24756H14.0423C13.5151 8.24756 13.0877 8.67492 13.0877 9.2021V9.52029C12.8142 9.60696 12.5473 9.7133 12.2891 9.83847L12.0695 9.61892C11.6969 9.24671 11.0931 9.24671 10.7205 9.61892L9.37136 10.968C8.99915 11.3407 8.99915 11.9444 9.37136 12.3171L9.59091 12.5366C9.46573 12.7948 9.35939 13.0617 9.27273 13.3353H8.95455C8.42736 13.3353 8 13.7626 8 14.2898V16.1989C8 16.7261 8.42736 17.1535 8.95455 17.1535H9.27273C9.35939 17.427 9.46573 17.6939 9.59091 17.9521L9.37136 18.1716C8.99915 18.5443 8.99915 19.1481 9.37136 19.5207L10.7205 20.8698C11.0931 21.242 11.6969 21.242 12.0695 20.8698L12.2955 20.6566C12.5536 20.7818 12.8206 20.8882 13.0941 20.9748V21.293C13.0941 21.8202 13.5215 22.2476 14.0486 22.2476H15.9577C16.4849 22.2476 16.9123 21.8202 16.9123 21.293V20.9748C17.1858 20.8882 17.4527 20.7818 17.7109 20.6566L17.9305 20.8762C18.3031 21.2484 18.9069 21.2484 19.2795 20.8762L20.6286 19.5271C21.0008 19.1544 21.0008 18.5507 20.6286 18.178L20.4091 17.9585C20.5343 17.7003 20.6406 17.4334 20.7273 17.1598H21.0454C21.5726 17.1598 22 16.7325 22 16.2053V14.2962C22.0008 14.0425 21.9006 13.7989 21.7215 13.6192C21.5424 13.4395 21.2992 13.3385 21.0454 13.3385ZM15.0025 12.702C13.5967 12.702 12.457 13.8417 12.457 15.2475C12.457 16.6533 13.5967 17.7929 15.0025 17.7929C16.4083 17.7929 17.5479 16.6533 17.5479 15.2475C17.5479 13.8417 16.4083 12.702 15.0025 12.702ZM15.0016 16.8384C14.1229 16.8384 13.4106 16.1262 13.4106 15.2475C13.4106 14.3689 14.1229 13.6566 15.0016 13.6566C15.8802 13.6566 16.5925 14.3689 16.5925 15.2475C16.5925 16.1262 15.8802 16.8384 15.0016 16.8384Z"
                  fill="#229A87"
                />
              </svg>
              Account settings
            </button>
            <button class="flex" @click="Logout">
              <svg
                width="30"
                height="31"
                viewBox="0 0 30 31"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  y="0.247437"
                  width="30"
                  height="30"
                  rx="15"
                  fill="#DEF9F1"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M9.82724 8.2478H20.1728C21.1778 8.2478 22 9.07024 22 10.0753V10.8269H14.375C12.8952 10.8269 11.6842 12.0378 11.6842 13.5176V16.9782C11.6842 18.458 12.895 19.669 14.375 19.669H22V20.4206C22 21.4256 21.1778 22.248 20.1728 22.248H9.82724C8.82223 22.248 8 21.4256 8 20.4206V10.0753C8 9.07024 8.82223 8.2478 9.82724 8.2478ZM13.7906 14.444C12.7335 14.444 12.7335 16.0518 13.7906 16.0518H18.4834L17.5728 16.9624C16.825 17.7102 17.9618 18.8469 18.7096 18.0991L20.9882 15.8209C21.2952 15.5138 21.3209 15.0078 20.9882 14.6749L18.7096 12.3963C17.9618 11.6489 16.825 12.7857 17.5728 13.533L18.4834 14.444H13.7906Z"
                  fill="#229A87"
                />
              </svg>
              Log Out
            </button>
          </div>
          <button
            @click="notifications = { true: !true }"
            class="notifiction-btn"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M9.99994 3.59713C9.99994 6.33176 7.76138 8.54862 4.99997 8.54862C4.08926 8.54862 3.23543 8.3075 2.5 7.88621V12.282C2.5 12.7311 2.12572 13.0951 1.66754 13.0951H2.08718C0.93446 13.0951 0 14.0045 0 15.1253V15.5329C0 15.9811 0.372891 16.3445 0.833912 16.3445H19.1661C19.6266 16.3445 20 15.9843 20 15.5329V15.1253C20 14.004 19.0691 13.0951 17.9128 13.0951H18.3325C17.8727 13.0951 17.5 12.7339 17.5 12.282V7.40835C17.5 3.3707 14.143 0.0975342 10 0.0975342C9.53982 0.0975342 9.08933 0.137912 8.65204 0.215234C9.48812 1.10031 9.99994 2.28953 9.99994 3.59713ZM10 20C11.6108 20 12.9167 18.7271 12.9167 17.1568H7.08333C7.08333 18.7271 8.38917 20 10 20Z"
                fill="#505857"
              />
              <path
                d="M4.72251 6.602C6.56347 6.602 8.05587 5.12409 8.05587 3.301C8.05587 1.47791 6.56347 0 4.72251 0C2.88155 0 1.38916 1.47791 1.38916 3.301C1.38916 5.12409 2.88155 6.602 4.72251 6.602Z"
                fill="#FF444F"
              />
            </svg>
          </button>
          <div v-if="notifications" class="notifications">
            <img src="@/assets/notifacation.png" alt="" />
          </div>
        </div>
        <svg
          class="burger"
          @click="menuOpen = !menuOpen"
          width="25"
          height="20"
          viewBox="0 0 14 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M1.29289 1.29289C1 1.58579 1 2.05719 1 3V13C1 13.9428 1 14.4142 1.29289 14.7071C1.58579 15 2.05719 15 3 15C3.94281 15 4.41421 15 4.70711 14.7071C5 14.4142 5 13.9428 5 13V3C5 2.05719 5 1.58579 4.70711 1.29289C4.41421 1 3.94281 1 3 1C2.05719 1 1.58579 1 1.29289 1.29289ZM9.29289 1.29289C9 1.58579 9 2.05719 9 3V13C9 13.9428 9 14.4142 9.29289 14.7071C9.58579 15 10.0572 15 11 15C11.9428 15 12.4142 15 12.7071 14.7071C13 14.4142 13 13.9428 13 13V3C13 2.05719 13 1.58579 12.7071 1.29289C12.4142 1 11.9428 1 11 1C10.0572 1 9.58579 1 9.29289 1.29289Z"
            fill="#7E869E"
            fill-opacity="0.25"
          />
          <path
            d="M1.6 3C1.6 2.51163 1.60127 2.20572 1.63126 1.98268C1.65893 1.7769 1.70077 1.73354 1.71716 1.71716L0.868629 0.868629C0.592121 1.14514 0.487519 1.48393 0.441962 1.82278C0.398726 2.14437 0.4 2.54556 0.4 3H1.6ZM1.6 13V3H0.4V13H1.6ZM1.71716 14.2828C1.70077 14.2665 1.65893 14.2231 1.63126 14.0173C1.60127 13.7943 1.6 13.4884 1.6 13H0.4C0.4 13.4544 0.398726 13.8556 0.441962 14.1772C0.487519 14.5161 0.592121 14.8549 0.868629 15.1314L1.71716 14.2828ZM3 14.4C2.51163 14.4 2.20572 14.3987 1.98268 14.3687C1.7769 14.3411 1.73354 14.2992 1.71716 14.2828L0.868629 15.1314C1.14514 15.4079 1.48393 15.5125 1.82278 15.558C2.14437 15.6013 2.54556 15.6 3 15.6V14.4ZM4.28284 14.2828C4.26646 14.2992 4.2231 14.3411 4.01732 14.3687C3.79428 14.3987 3.48837 14.4 3 14.4V15.6C3.45444 15.6 3.85563 15.6013 4.17722 15.558C4.51607 15.5125 4.85486 15.4079 5.13137 15.1314L4.28284 14.2828ZM4.4 13C4.4 13.4884 4.39873 13.7943 4.36874 14.0173C4.34107 14.2231 4.29923 14.2665 4.28284 14.2828L5.13137 15.1314C5.40788 14.8549 5.51248 14.5161 5.55804 14.1772C5.60127 13.8556 5.6 13.4544 5.6 13H4.4ZM4.4 3V13H5.6V3H4.4ZM4.28284 1.71716C4.29923 1.73354 4.34107 1.7769 4.36874 1.98268C4.39873 2.20572 4.4 2.51163 4.4 3H5.6C5.6 2.54556 5.60127 2.14437 5.55804 1.82278C5.51248 1.48393 5.40788 1.14514 5.13137 0.868629L4.28284 1.71716ZM3 1.6C3.48837 1.6 3.79428 1.60127 4.01732 1.63126C4.2231 1.65893 4.26646 1.70077 4.28284 1.71716L5.13137 0.868629C4.85486 0.592121 4.51607 0.487519 4.17722 0.441962C3.85563 0.398726 3.45444 0.4 3 0.4V1.6ZM1.71716 1.71716C1.73354 1.70077 1.7769 1.65893 1.98268 1.63126C2.20572 1.60127 2.51163 1.6 3 1.6V0.4C2.54556 0.4 2.14437 0.398726 1.82278 0.441962C1.48393 0.487519 1.14514 0.592121 0.868629 0.868629L1.71716 1.71716ZM9.6 3C9.6 2.51163 9.60127 2.20572 9.63126 1.98268C9.65893 1.7769 9.70077 1.73354 9.71716 1.71716L8.86863 0.868629C8.59212 1.14514 8.48752 1.48393 8.44196 1.82278C8.39873 2.14437 8.4 2.54556 8.4 3H9.6ZM9.6 13V3H8.4V13H9.6ZM9.71716 14.2828C9.70077 14.2665 9.65893 14.2231 9.63126 14.0173C9.60127 13.7943 9.6 13.4884 9.6 13H8.4C8.4 13.4544 8.39873 13.8556 8.44196 14.1772C8.48752 14.5161 8.59212 14.8549 8.86863 15.1314L9.71716 14.2828ZM11 14.4C10.5116 14.4 10.2057 14.3987 9.98268 14.3687C9.7769 14.3411 9.73354 14.2992 9.71716 14.2828L8.86863 15.1314C9.14514 15.4079 9.48393 15.5125 9.82278 15.558C10.1444 15.6013 10.5456 15.6 11 15.6V14.4ZM12.2828 14.2828C12.2665 14.2992 12.2231 14.3411 12.0173 14.3687C11.7943 14.3987 11.4884 14.4 11 14.4V15.6C11.4544 15.6 11.8556 15.6013 12.1772 15.558C12.5161 15.5125 12.8549 15.4079 13.1314 15.1314L12.2828 14.2828ZM12.4 13C12.4 13.4884 12.3987 13.7943 12.3687 14.0173C12.3411 14.2231 12.2992 14.2665 12.2828 14.2828L13.1314 15.1314C13.4079 14.8549 13.5125 14.5161 13.558 14.1772C13.6013 13.8556 13.6 13.4544 13.6 13H12.4ZM12.4 3V13H13.6V3H12.4ZM12.2828 1.71716C12.2992 1.73354 12.3411 1.7769 12.3687 1.98268C12.3987 2.20572 12.4 2.51163 12.4 3H13.6C13.6 2.54556 13.6013 2.14437 13.558 1.82278C13.5125 1.48393 13.4079 1.14514 13.1314 0.868629L12.2828 1.71716ZM11 1.6C11.4884 1.6 11.7943 1.60127 12.0173 1.63126C12.2231 1.65893 12.2665 1.70077 12.2828 1.71716L13.1314 0.868629C12.8549 0.592121 12.5161 0.487519 12.1772 0.441962C11.8556 0.398726 11.4544 0.4 11 0.4V1.6ZM9.71716 1.71716C9.73354 1.70077 9.7769 1.65893 9.98268 1.63126C10.2057 1.60127 10.5116 1.6 11 1.6V0.4C10.5456 0.4 10.1444 0.398726 9.82278 0.441962C9.48393 0.487519 9.14514 0.592121 8.86863 0.868629L9.71716 1.71716Z"
            fill="white"
          />
        </svg>
      </div>
    </div>
  </div>
</template>
<script>
import { ref, onBeforeMount } from "vue";
import firebase from "firebase";
export default {
  data() {
    return {
      lessons: ["Terminal ES", "soon", "soon"],
      menuOpen: false,
      notifications: false,
      userBtn: false,
    };
  },

  mounted() {
    this.selected = "BMW";
  },
  methods: {
    openSettings() {
      this.userBtn = true;
    },
    if(userBtn = true) {
      document.body.style.overflow = "hidden";
    },
  },
  setup() {
    const name = ref("")
    onBeforeMount(() => {
      const user = firebase.auth().currentUser;
      if (user) {
        name.value = user.email.split("@")[0];
      }
    });

    const Logout = () => {
      firebase
      .auth()
      .signOut()
      .then(() => console.log("Signed out"))
      .catch(err => console.log(err.message))
    }

    return {name, Logout}
  },
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
.notifications {
  position: absolute;
  right: -46px;
  z-index: 100;
  top: 40px;
}

.settings {
  position: absolute;
  z-index: 100;
  flex-direction: column;
  background: #ffffff;
  border-radius: 20px;
  right: 55px;
  top: 80px;
  text-align: left;
  padding: 5px 10px;
  box-shadow: 5px 0px 30px rgba(185, 213, 208, 0.5);
}

.settings::after {
  content: "";
  display: inline-block;
  width: 20px;
  height: 20px;
  position: absolute;
  transform: rotate(145deg);
  top: -4px;
  right: 10px;
  background: #fff;
}

.settings button {
  align-items: center;
  font-family: "Open Sans";
  gap: 10px;
  font-weight: 400;
  font-size: 14px;
  cursor: pointer;
  padding: 5px 10px;
  background: #fff;
  border: 1px solid #fff;
  line-height: 28px;
  letter-spacing: -0.149625px;
  color: #292828;
}

.header .overlay {
  position: fixed;
  z-index: 98;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.container {
  max-width: 1250px;
  margin: 0 auto;
  padding: 0 15px;
}

body.modal-active {
  overflow: hidden;
}

* {
  margin: 0;
  padding: 0;
}

.premium-btn {
  transition: 0.4s;
  cursor: pointer;
  font-size: 14px;
  color: #282929;
  line-height: 21px;
  border-radius: 6px;
  background: #f9ed35;
  font-family: "Poppins";
  border: 1px solid #f9ed35;
  letter-spacing: -0.0142658px;
  padding: 9px 26px 8.31px 25px;
}

.premium-btn:hover {
  color: green;
  border: green 1px solid;
}
.premium-btn:active {
  box-shadow: 0 3px 13px 3px rgba(0, 0, 0, 0.25);
}

.user-btn {
  padding: 10px;
  font-size: 14px;
  color: #282929;
  line-height: 21px;
  border-radius: 6px;
  text-align: center;
  font-style: normal;
  align-items: center;
  cursor: pointer;
  background: #ffffff;
  font-family: "Poppins";
  border: 1px solid #fff;
  letter-spacing: -0.0142658px;
}

.notifiction-btn {
  padding: 9px 10px 9px 10px;
  border: 1px solid #fff;
  background: #ffffff;
  cursor: pointer;
  border-radius: 6px;
}

.srch-icon {
  top: 28px;
  margin-left: 15px;
  position: absolute;
}

input {
  outline: none;
  width: 292.4px;
  font-size: 12px;
  color: #e9efee;
  padding-top: 8px;
  font-weight: 400;
  line-height: 25px;
  border-radius: 6px;
  padding-left: 45px;
  background: #6dc4b2;
  padding-bottom: 7.5px;
  font-family: "Open Sans";
  letter-spacing: -0.149625px;
  border: 1px solid #6dc4b2;
}

.header {
  border-bottom: 1px solid #60d3c2;
  border-bottom-left-radius: 40px;
  background: #229a87;
  position: fixed;
  width: 100%;
  z-index: 99;
  top: 0;
}

.select {
  cursor: pointer;
  font-family: "Poppins";
  letter-spacing: -0.0142658px;
  line-height: 21px;
  color: #282929;
  font-size: 14px;
  outline: none;
}

.term {
  padding-left: 22px;
  padding-right: 23px;
  padding-top: 9.47px;
  padding-bottom: 8.72px;
  background: #fff;
  border-radius: 6px;
  border: 1px solid #fff;
  font-family: "Poppins";
  font-size: 14px;
  line-height: 21px;
  letter-spacing: -0.0142658px;
}

.gap-3 {
  gap: 12px;
}

.dropdown-after {
  gap: 12px;
}
@media only screen and (min-width: 1070px) {
  .burger {
    display: none;
  }
}

@media only screen and (max-width: 1070px) {
  .dropdown-after {
    display: none;
    transition: 0.5s;
    height: calc(100vh - 50px);
  }

  .dropdown {
    border-radius: 10px;
    height: 400px;
    background-color: #ccc;
    transition: 0.5s;
    display: flex;
    flex-direction: column;
    position: absolute;
    margin-top: 330px;
    z-index: 1;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }
}
</style>