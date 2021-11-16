<template>
  <footer class="footer">
    <div class="container footer-container">
      <div class="footer__icons">
        <img src="../assets/img/icons/fb.png" alt="facebook" class="icons">
        <img src="../assets/img/icons/insta.png" alt="instagram" class="icons">
        <img src="../assets/img/icons/twitter.png" alt="twitter" class="icons">
        <img src="../assets/img/icons/linkedin.png" alt="linkedin" class="icons">
      </div>
      <div class="footer__copyright">
        Copyright ©2020 All rights reserved
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "TheFooter"
}
</script>

<style lang="scss" scoped>
.footer {
  position: relative;
  width: 100%;
  height: 152px;
  z-index: 10000;
  -webkit-box-shadow: inset -18px 108px 300px -11px rgba(127,255,212,0.74);
  -moz-box-shadow: inset -18px 108px 300px -11px rgba(127,255,212,0.74);
  box-shadow: inset -18px 108px 300px -11px rgba(127,255,212,0.74);
  &-container {
    position: relative;
    display: flex;
    flex-direction: column;
    padding-top: 50px;
    text-align: center;
  }
  &__copyright {
    font-family: Heebo, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 21px;
    text-align: center;
    color: #21243D;
    margin-top: 10px;
  }
}
</style>
