<template>
  <header class="header">
    <div class="header-container">
      <div class="header__logo">
        <nuxt-link to="/"> Ali </nuxt-link>
      </div>
      <div class="navigation">
        <ul class="navigation-list">
          <li class="navigation-item">
            <nuxt-link to="/works">
              Works
            </nuxt-link>
          </li>
          <li class="navigation-item">
            <nuxt-link to="/blog">
              Blog
            </nuxt-link>
          </li>
          <li class="navigation-item">
            <nuxt-link to="contact">
              Contact
            </nuxt-link>
          </li>
        </ul>
      </div>
      <the-toggle-sidenav @closeBar="$emit('closeBar')"/>
    </div>
  </header>
</template>

<script>
import TheToggleSidenav from "~/components/navigation/TheToggleSidenav";
export default {
  name: "TheHeader",
  emits: ['closeBar'],
  components: {TheToggleSidenav}
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Heebo:wght@400;500;700;900&family=IBM+Plex+Sans&family=Montserrat&family=Petemoss&display=swap');
.header__logo {
  width: 50px;
  height: 50px;
  font-family: 'Petemoss', cursive;
  font-weight: 600;
  color: #747BCC;
  font-size: 40px;
  border-radius: 50px;
  padding: 5px;
  -webkit-box-shadow: inset 10px 9px 104px 98px rgb(255, 100, 100);
  -moz-box-shadow: inset 10px 9px 104px 98px rgb(255, 100, 100);
  box-shadow: inset 10px 9px 104px 98px rgba(255, 100, 100, 0.76);
}
.header {
  height: 70px;
  position: relative;
  &-container {
    left: 0;
    top: 0;
    position: fixed;
    width: 100%;
    height: 70px;
    background-color: rgba(127, 255, 212, 0.64);
    padding: 0 15%;
    box-sizing: border-box;
    z-index: 100;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  @media (max-width: 375px) {
    .navigation {
      display: none;
    }
    .header-container {
      background-color: #7FFFD4FF;
      padding: 0 15px;
      z-index: 10000;
    }
  }
}
.navigation {
  &-list {
    display: flex;
    padding: 0;
  }
  &-item {
    font-family: Heebo, sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 29px;
    margin: 0 10px;
    a {
      color: #000;
      cursor: pointer;
      &:hover {
        color: #FF6464;
      }
    }
  }
}
</style>
