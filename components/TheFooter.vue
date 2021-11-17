<template>
  <footer class="footer">
    <div class="container footer-container">
      <div class="footer__icons">
        <a href="https://t.me/Kurbanov1999" class="icon">
          <fa :icon="['fab', 'telegram']" size="2x"/>
        </a>
        <a href="https://vk.com/id443479474" class="icon">
          <fa :icon="['fab', 'vk']" size="2x"/>
        </a>
        <a href="https://wa.me/89234773583?text=hi" class="icon">
          <fa :icon="['fab', 'whatsapp']" size="2x"/>
        </a>
        <a href="https://github.com/alijonKurbanov1999" class="icon">
          <fa :icon="['fab', 'github']" size="2x"/>
        </a>
      </div>
      <p class="footer__copyright">
        Copyright ©2021 All rights reserved
      </p>
    </div>
  </footer>
</template>

<script>
export default {
  name: "TheFooter"
}
</script>

<style lang="scss" scoped>
.icon {
  color: #e82ce5;
}
.icon:hover {
  color: #1a39d7;
}
.footer {
  width: 100%;
  height: 152px;
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
    font-size: 18px;
    line-height: 21px;
    text-align: center;
    color: #21243D;
    margin-top: 10px;
  }
  &__icons {
    align-self: center;
    width: 200px;
    display: flex;
    justify-content: space-between;
  }
  @media (max-width: 370px) {
    .footer__copyright {
      font-size: 16px;
    }
  }
}
</style>
