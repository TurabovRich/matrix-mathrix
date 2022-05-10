<template>
  <div>
    <footer class="footer">
      <div class="container">
        <div class="footer__info justify-evenly flex">
          <a href=""><img src="@/assets/logo2.svg" alt="" class="logo" /></a>
          <div class="row flex-row flex gap-12">
            <div class="row flex-row flex">
              <span class="footer__links flex">
                <p class="footer__title">Classes</p>
                <a href="#">5th</a>
                <a href="#">4th</a>
                <a href="#">3rd</a>
                <a href="#">second</a>
                <a href="#">first</a>
                <a href="#">Terminal L</a>
                <a href="#">Terminal ES</a>
                <a href="#">Terminal S</a>
              </span>
              <span class="footer__links flex">
                <p class="footer__title">Subjects</p>
                <a href="#">Mathematics</a>
                <a href="#">Physical</a>
                <a href="#">SVT</a>
                <a href="#">French</a>
                <a href="#">Chemistry</a>
                <a href="#">Technology</a>
              </span>
            </div>
            <div class="row flex-row flex">
              <span class="footer__links flex">
                <p class="footer__title">Company</p>
                <a href="#">About Us</a>
                <a href="#">Contact</a>
                <a href="#">Help</a>
                <a href="#">Support community</a>
                <a href="#">Share your story</a>

                <a href="">settings</a>
              </span>
              <span class="footer__links flex">
                <p class="footer__title">Follow Us</p>
                <span class="footer__btns flex">
                  <button class="footer__btn flex justify-center items-center">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.6922 9.4615H15.6153C15.8276 9.4615 15.9999 9.2892 15.9999 9.07689V6.48576C15.9999 6.28423 15.8449 6.11654 15.6441 6.10231C15.0322 6.05885 13.8368 6 12.9772 6C10.6153 6 9.07689 7.41537 9.07689 9.98765V12.5384H6.38461C6.17231 12.5384 6 12.7107 6 12.923V15.6153C6 15.8276 6.17231 15.9999 6.38461 15.9999H9.07689V23.3075C9.07689 23.5198 9.2492 23.6921 9.4615 23.6921H12.1538C12.3661 23.6921 12.5384 23.5198 12.5384 23.3075V15.9999H15.3161C15.5122 15.9999 15.6768 15.8526 15.6984 15.6576L15.9976 12.9653C16.023 12.7376 15.8445 12.5384 15.6153 12.5384H12.5384V10.6153C12.5384 9.97804 13.0549 9.4615 13.6922 9.4615Z"
                        fill="#505857"
                      />
                    </svg>
                  </button>
                  <button class="footer__btn flex justify-center items-center">
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M5.71781 2.19922L7.03781 6.15922V8.79922H7.91781V6.15922L9.23781 2.19922H8.35781L7.47781 4.83922L6.59781 2.19922H5.71781ZM10.5578 3.95922C10.0886 3.95922 9.85828 4.03313 9.57125 4.26859C9.29625 4.50063 9.22063 4.67938 9.23781 5.27922V7.47922C9.23781 7.9175 9.31 8.20625 9.57469 8.46234C9.84969 8.71844 10.1092 8.79922 10.5578 8.79922C11.027 8.79922 11.2831 8.71844 11.5478 8.46234C11.8228 8.21656 11.8778 7.9175 11.8778 7.47922V5.27922C11.8778 4.89078 11.8091 4.52297 11.5427 4.27719C11.2677 4.02453 10.9841 3.95922 10.5578 3.95922ZM12.7578 3.95922V7.91922C12.7578 8.34719 13.1892 8.79922 13.6378 8.79922C14.0864 8.79922 14.3236 8.57406 14.5178 8.35922V8.79922H15.3978V3.95922H14.5178V7.47922C14.5127 7.78 14.1586 7.91922 14.0778 7.91922C13.9867 7.91922 13.6378 7.90031 13.6378 7.47922V3.95922H12.7578ZM10.5578 4.83922C10.6902 4.83922 10.9978 4.8375 10.9978 5.27922V7.47922C10.9978 7.90547 10.7005 7.91922 10.5578 7.91922C10.4255 7.91922 10.1178 7.91406 10.1178 7.47922V5.27922C10.1178 4.92 10.3086 4.83922 10.5578 4.83922ZM4.39781 9.67922C2.81656 9.67922 1.75781 10.7277 1.75781 12.3192V16.4992C1.75781 18.0908 2.81656 19.3592 4.39781 19.3592H17.5978C19.1791 19.3592 20.2378 18.3108 20.2378 16.7192V12.3192C20.2378 10.7277 19.1791 9.67922 17.5978 9.67922H4.39781ZM5.27781 11.4392H7.91781V12.3192H7.03781V17.5992H6.15781V12.3192H5.27781V11.4392ZM11.4378 11.4392H12.3178V13.1992C12.4192 13.0411 12.5705 12.9156 12.7148 12.8452C12.8558 12.773 12.9984 12.7317 13.1428 12.7317C13.4281 12.7317 13.6516 12.8348 13.8045 13.0273C13.9575 13.2216 14.0778 13.4794 14.0778 13.8592V16.4992C14.0778 16.8258 13.9678 17.0286 13.8234 17.2022C13.6825 17.3758 13.4711 17.5958 13.1978 17.5992C12.7355 17.6044 12.488 17.3569 12.3178 17.1592V17.5992H11.4378V11.4392ZM7.91781 12.7592H8.79781V16.2792C8.79781 16.3806 8.91641 16.7227 9.23781 16.7192C9.59531 16.7158 9.59875 16.3823 9.67781 16.2792V12.7592H10.5578V17.5992H9.67781V17.1592C9.51453 17.3517 9.43031 17.4119 9.24641 17.503C9.06422 17.6061 8.87859 17.5992 8.70672 17.5992C8.49359 17.5992 8.25125 17.4067 8.13781 17.2623C8.03641 17.13 7.91781 16.9942 7.91781 16.7192V12.7592ZM15.9255 12.7592C16.3431 12.7592 16.637 12.8486 16.8588 13.0823C17.0856 13.3161 17.1578 13.5894 17.1578 14.0294V15.3992H15.3978V16.0798C15.3978 16.3256 15.4305 16.482 15.4941 16.5748C15.5542 16.6763 15.6763 16.7209 15.8378 16.7192C16.0166 16.7175 16.13 16.6814 16.1902 16.6006C16.252 16.5284 16.2778 16.3239 16.2778 16.0592V15.8392H17.1578V16.1005C17.1578 16.58 17.12 16.9375 16.8828 17.1713C16.6594 17.417 16.3105 17.5305 15.8533 17.5305C15.4356 17.5305 15.1091 17.4067 14.8753 17.1523C14.6416 16.898 14.5195 16.5491 14.5195 16.1005V14.0294C14.5195 13.6306 14.6588 13.335 14.9148 13.072C15.1211 12.8606 15.5078 12.7592 15.9255 12.7592ZM12.7578 13.4192C12.5155 13.4192 12.3213 13.6375 12.3178 13.8592V16.4992C12.3213 16.6264 12.5155 16.7192 12.7578 16.7192C13.0002 16.7192 13.1978 16.5319 13.1978 16.2895V14.0792C13.1978 13.6392 13.0002 13.4192 12.7578 13.4192ZM15.8378 13.6392C15.5955 13.6392 15.4013 13.8438 15.3978 14.0792V14.5192H16.2778V14.0792C16.2778 13.8094 16.0802 13.6392 15.8378 13.6392Z"
                        fill="#505857"
                      />
                    </svg>
                  </button>
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>
<script>
export default {
  name: "footer",
};
</script>

<style type="text/css">
.footer {
  padding-top: 82px;
}

.logo {
  height: 39px;
}

.footer__links {
  flex-direction: column;
}

.footer__title {
  font-family: 'Poppins';
  font-weight: bold;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: -0.0142658px;
  color: #282929;
  margin-bottom: 21px;
  cursor: default;
}

.footer__links a {
  font-family: 'Open Sans';
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.149625px;
  color: #535353;
  margin-bottom: 18px;
}

.footer__btns {
  gap: 14px;
}

.footer__btn {
  height: 40px;
  width: 40px;
  border-radius: 6px;
  background: #ffffff;
  border: 1px solid #fff;
  box-shadow: 0px 3px 8px rgba(216, 218, 225, 0.8);
  transition: 0.4s;
  cursor: pointer;
}

a {
  transition: 0.4s;
}

a:hover {
  color: #229a87;
}

.footer__btn:hover {
  background: #229a87;
  border: 1px solid #229a87;
}

.footer__btn:hover svg path {
  fill: #fff;
}

.row {
  gap: 49px;
}

@media only screen and (max-width: 775px) {
  .footer__info {
    flex-direction: column;
    align-items: center;
  }
  .row {
    display: grid;
    grid-template-columns: auto auto;
  }
  .gap-12 {
    gap: 48px;
  }
}

@media only screen and (max-width: 570px) {
  .gap-12 {
    display: flex;
    flex-direction: column !important;
  }
}

</style>