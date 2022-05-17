<template>
  <div class="container flex justify-center bg-white">
    <transition name="fade">
      <div
        class="modal mt-5 fixed opacity-100"
        v-if="modalOpen"
        :class="{ 'blur-content': (modalOpen = true) }"
      >
        <div class="modal-bg">
          <button
            class="close-btn flex justify-center rounded-full absolute"
            @click="modalOpen = false"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#229A87"
              viewBox="0 0 30 30"
              width="10px"
              height="10px"
            >
              <path
                d="M 7 4 C 6.744125 4 6.4879687 4.0974687 6.2929688 4.2929688 L 4.2929688 6.2929688 C 3.9019687 6.6839688 3.9019687 7.3170313 4.2929688 7.7070312 L 11.585938 15 L 4.2929688 22.292969 C 3.9019687 22.683969 3.9019687 23.317031 4.2929688 23.707031 L 6.2929688 25.707031 C 6.6839688 26.098031 7.3170313 26.098031 7.7070312 25.707031 L 15 18.414062 L 22.292969 25.707031 C 22.682969 26.098031 23.317031 26.098031 23.707031 25.707031 L 25.707031 23.707031 C 26.098031 23.316031 26.098031 22.682969 25.707031 22.292969 L 18.414062 15 L 25.707031 7.7070312 C 26.098031 7.3170312 26.098031 6.6829688 25.707031 6.2929688 L 23.707031 4.2929688 C 23.316031 3.9019687 22.682969 3.9019687 22.292969 4.2929688 L 15 11.585938 L 7.7070312 4.2929688 C 7.5115312 4.0974687 7.255875 4 7 4 z"
              />
            </svg>
          </button>
          <div class="modal__login">
            <div class="modal__title flex">
              <img class="modal__img" src="@/assets/logo3.png" alt="" />
              <h1 class="modal__h1">Log in</h1>
              <span class="modal__p">
                Don't have an account?
                <router-link class="modal__a font-semibold" to="/registr">
                  Registration
                </router-link>
              </span>
            </div>
            <form @submit.prevent="Login" class="modal__form form-inline">
              <div class="input-group">
                <p class="modal__from__input-txt font-semibold">Email</p>
                <input
                  v-model="email"
                  class="pt-2 modal__form__control"
                  type="email"
                  name="email"
                />
              </div>
              <div class="input-group">
                <p class="modal__from__input-txt font-semibold">Password</p>
                <input
                  v-model="password"
                  style="font-size: 40px"
                  class="pt-2 modal__form__control"
                  type="password"
                  min="0"
                  max="15"
                  name="name"
                />
              </div>
              <input
                type="submit"
                value="Login"
                class="
                  modal__btn
                  p-0
                  hover:bg-[#229a87]
                  hover:border-[#229a87]
                  hover:border-2
                  hover:text-white
                  hover:border-solid
                  login-btn
                "
              />
            </form>
            <div class="mt-4 w-[100%] items-center justify-between flex">
              <div class="line"></div>
              <p>or</p>
              <div class="line"></div>
            </div>
            <div class="modal__btns">
              <div
                class="modal__btn font-semibold flex justify-center facebook"
              >
                <svg
                  width="10"
                  height="19"
                  viewBox="0 0 10 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.69223 3.64283H9.61529C9.82759 3.64283 9.9999 3.46753 9.9999 3.25153V0.615311C9.9999 0.410268 9.8449 0.239659 9.64413 0.225181C9.03222 0.180963 7.83684 0.121094 6.97724 0.121094C4.61534 0.121094 3.07689 1.56109 3.07689 4.17814V6.77327H0.384611C0.172306 6.77327 0 6.94857 0 7.16457V9.9037C0 10.1197 0.172306 10.295 0.384611 10.295H3.07689V17.7298C3.07689 17.9458 3.2492 18.1211 3.4615 18.1211H6.15378C6.36609 18.1211 6.5384 17.9458 6.5384 17.7298V10.295H9.31606C9.51221 10.295 9.67682 10.1451 9.69836 9.94675L9.99759 7.20762C10.023 6.97596 9.84452 6.77327 9.61529 6.77327H6.5384V4.81675C6.5384 4.16835 7.05493 3.64283 7.69223 3.64283Z"
                    fill="white"
                  />
                </svg>
                Sign up with Facebook
              </div>
              <div class="modal__btn font-semibold flex justify-center google">
                <svg
                  width="20"
                  height="21"
                  viewBox="0 0 20 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.4541 8.65374V11.8379H14.9916C14.3983 13.7671 12.7858 15.1479 10.4541 15.1479C7.67747 15.1479 5.42664 12.8971 5.42664 10.1212C5.42664 7.3454 7.67747 5.09457 10.4541 5.09457C11.7025 5.09457 12.8425 5.55207 13.7216 6.3054L16.0666 3.9604C14.5858 2.61124 12.6158 1.7879 10.4541 1.7879C5.85081 1.7879 2.11914 5.51874 2.11914 10.1212C2.11914 14.7237 5.85081 18.4546 10.4541 18.4546C17.4508 18.4546 18.995 11.9129 18.3091 8.66457L10.4541 8.65374Z"
                    fill="#FCFCFC"
                  />
                </svg>
                Sign up with Google
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
  <div class="header">
    <div class="container">
      <div class="header__content flex items-center justify-between">
        <a class="z-50" href="">
          <img src="@/assets/logo.svg" alt="logo" />
        </a>
        <div class="absolute w-[90%] h-screen" @click="menuOpen = false"></div>
        <transition name="fade">
          <div
            class="flex gap-3 dropdown-after"
            :class="{ dropdown: (menuOpen = true) }"
            v-if="menuOpen"
          >
            <img
              class="ml-4 top-7 absolute"
              src="@/assets/search.svg"
              alt=""
            />
            <input
              class="search__input pt-2"
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
            <button
              v-on:click="modalOpen = { true: false }"
              class="log font-semibold pt-2.5"
            >
              Log In
            </button>
            <router-link to="/registr">
              <button class="registr font-semibold">Registration</button>
            </router-link>
          </div>
        </transition>
        <div class="flex gap-3 dropdown-after z-50">
          <img
            class="ml-4 top-7 absolute"
            src="@/assets/search.svg"
            alt=""
          />
          <input
            class="search__input pt-2"
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
          <button
            v-on:click="modalOpen = { true: false }"
            class="log font-semibold pt-2.5"
          >
            Log In
          </button>
          <router-link to="/registr" class="registr font-semibold">
            Registration
          </router-link>
        </div>
        <svg
          class="burger z-50"
          @click="menuOpen = { true: !true }"
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
import firebase from "firebase";
import { ref } from "vue";
import { useRouter } from "vue-router";
export default {
  name: "header",
  data() {
    return {
      lessons: ["Terminal ES", "soon", "soon"],
      menuOpen: false,
      modalOpen: false,
    };
  },
  setup() {
    const router = useRouter();
    const email = ref("");
    const password = ref("");

    const Login = () => {
      firebase
        .auth()
        .signInWithEmailAndPassword(email.value, password.value)
        .then((data) => {
          alert(data);
          router.push({ component: "Dashboard" });
        })
        .catch((err) => alert(err.message));
    };

    // const onSubmit = async () => {
    //   await createUser({ ...form });
    //   form.password = "";
    //   form.email = "";
    //   router.push("/dashboard");
    // };

    return { Login, email, password };
  },
};
</script>
<style type="text/css">
@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

.header__content {
  padding-top: 18px;
  padding-bottom: 17.22px;
}

html {
  scroll-behavior: smooth;
}

.container {
  max-width: 1250px;
  margin: 0 auto;
  padding: 0 15px;
}

* {
  margin: 0;
  padding: 0;
}

input {
  outline: none;
  width: 292.4px;
  font-size: 12px;
  color: #e9efee;
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
  background: #229a87;
  border-bottom: 1px solid #60d3c2;
}

.registr:hover,
.log:hover {
  background: #fff;
  color: #229a87;
  border-color: #fff;
}

.search_input {
  transition: 0.1s;
}

.search__input:focus {
  outline-style: solid;
  outline-color: #fff;
  outline-offset: 1px;
}

.search__input::placeholder {
  color: #e9efee;
}

.registr {
  transition: 0.4s;
  border: 2px solid #f9ed35;
  background: #f9ed35;
  color: #282929;
  padding-top: 9px;
  cursor: pointer;
  padding-bottom: 8.31px;
  padding-left: 34px;
  padding-right: 33px;
  font-family: "Poppins";
  font-size: 14px;
  letter-spacing: -0.0142658px;
  border-radius: 6px;
}

.select {
  font-family: "Poppins";
  outline: none;
  font-size: 14px;
  line-height: 21px;
  cursor: pointer;
  letter-spacing: -0.0142658px;
  color: #282929;
}

.log {
  cursor: pointer;
  background: #229a87;
  color: #fff;
  border: 2px solid #ffffff;
  border-radius: 6px;
  font-family: "Poppins";
  font-size: 14px;
  line-height: 21px;
  letter-spacing: -0.0142658px;
  padding-top: 10px;
  padding-bottom: 9px;
  padding-left: 55px;
  padding-right: 54px;
  transition: 0.4s;
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

/* Modal */

.modal {
  z-index: 999;
  max-width: 660px;
  border-radius: 10px;
  border: 1px solid #fff;
  background: #fff;
}

.modal-bg {
  background: url("@/assets/bg3.png");
  z-index: -1;
  padding: 20px 0;
}

.close-btn {
  background: #def9f1;
  border: 1px solid #def9f1;
  right: 34px;
  top: 34px;
  padding: 7px 7px;
}

.close {
  padding: 8px 9px;
  right: 1rem;
}

.modal__title {
  flex-direction: column;
  align-items: center;
}

.modal__h1 {
  font-family: "Poppins";
  font-size: 22px;
  text-align: center;
  letter-spacing: -0.762769px;
  color: #0f947f;
  margin: 0;
  margin-top: 6px;
}

.modal__p {
  font-family: "Open Sans";
  font-weight: 300;
  font-size: 14px;
  line-height: 32px;
  text-align: center;
  letter-spacing: -0.149625px;
  color: #505857;
}

.modal__a {
  color: #0f947f;
  text-decoration: underline;
  font-family: "Poppins";
  font-size: 14px;
  line-height: 21px;
  letter-spacing: 0.0142658px;
}

.modal__from__input-txt {
  font-family: "Poppins";
  font-size: 14px;
  line-height: 21px;
  letter-spacing: -0.0142658px;
  color: #282929;
  margin-bottom: 6px;
}

.modal__login {
  padding: 10px 120.5px;
}

.modal__login .form-inline .modal__form__control {
  width: 100%;
  height: 50px;
  font-size: 14px;
  background: #ffffff;
  border: 1px solid #cbcdcd;
  border-radius: 10px;
  padding-left: 18px;
}

.modal__form__control:focus {
  outline-style: solid;
  outline-color: #ccc;
  outline-offset: 1px;
}

.modal__form__control {
  color: #282929;
}

.modal__form {
  margin-bottom: 16px;
}

.input-group {
  width: 100%;
  margin-bottom: 16px;
}

.modal__btn {
  width: 100%;
  height: 50px;
  font-family: "Poppins";
  transition: 0.4s;
  line-height: 21px;
  font-size: 14px;
  letter-spacing: -0.0142658px;
  border-radius: 10px;
  cursor: pointer;
}

.login-btn {
  color: #282929;
  border: 1px solid #f9ed35;
  background: #f9ed35;
}

.line {
  border-top: 1px solid #36a593;
  width: 40%;
}

.facebook {
  background: #3b5999;
  border: 1px solid #3b5999;
  border-radius: 10px;
  align-items: center;
  font-family: "Poppins";
  font-size: 14px;
  letter-spacing: -0.0142658px;
  color: #ffffff;
  gap: 10px;
  margin-bottom: 16px;
}

.google {
  background: #4285f4;
  border: 1px solid #4285f4;
  border-radius: 10px;
  align-items: center;
  font-family: "Poppins";
  font-size: 14px;
  letter-spacing: -0.0142658px;
  color: #ffffff;
  gap: 11.54px;
}

@media only screen and (min-width: 1070px) {
  .burger {
    display: none;
  }
}

@media only screen and (max-width: 1070px) {
  .dropdown-after {
    display: none;
  }

  .dropdown-after {
    height: calc(100vh - 50px);
    transition: 0.5s;
  }

  .dropdown {
    border-radius: 10px;
    height: 400px;
    background-color: #ccc;
    flex-direction: column;
    margin-top: 330px;
    display: flex;
    position: fixed;
    z-index: 1;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }
}
.blur-content > {
  backdrop-filter: blur(5px);
}

/* fade animation*/

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 200ms ease-out;
}
</style>