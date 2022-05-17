<template>
  <div class="registration">
    <div class="container flex justify-center">
      <div class="modal mt-5 fixed modal-active opacity-100">
        <div class="modal__contact">
          <div class="modal__title flex">
            <h1 class="modal__h1">Registration</h1>
          </div>
          <form @submit.prevent="Registr" class="form form-inline">
            <div class="input-group">
              <p class="input-txt font-semibold">Email</p>
              <input
                v-model="email"
                class="mail-input pt-2 form__control"
                type="email"
                name="email"
              />
            </div>
            <div class="input-group">
              <p class="input-txt font-semibold">Password</p>
              <input
                v-model="password"
                style="font-size: 40px"
                class="passwrd-input pt-2 form__control"
                type="password"
                min="0"
                max="15"
                name="name"
              />
            </div>
            <inpnut
              type="submit"
              value="Registration"
              class="modal__btn login-btn"
            />
          </form>
          <div class="or-block justify-between flex">
            <div class="line"></div>
            <p>or</p>
            <div class="line"></div>
          </div>
          <div class="modal__btns">
            <div class="modal__btn font-semibold flex justify-center facebook">
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
  </div>
</template> 

<script>
import firebase from "firebase";
import { ref } from "vue";
export default {
  setup() {
    console.log(firebase);
    const email = ref("");
    const password = ref("");
    const Registr = () => {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email.value, password.value)
        .then((user) => {
          alert(user);
        })
        .catch((err) => alert(err.message));
    };
    return {
      Registr,
      email,
      password,
    };
  },
};
</script>

<style scoped>
h1 {
  font-family: "Poppins";
  font-size: 24px;
  line-height: 38px;
  letter-spacing: -0.762769px;
  text-align: center;
  color: #229a87;
}

.donation {
  margin-top: 100px;
  flex-direction: column;
  align-items: center;
}

.navigation {
  text-decoration: none;
  color: #000;
  font-family: "Poppins";
  font-size: 14px;
}

img {
  width: 600px;
}

h3 {
  font-family: "Poppins";
  font-size: 22px;
  text-align: center;
  line-height: 38px;
  letter-spacing: -0.762769px;
  color: #229a87;
}
</style>