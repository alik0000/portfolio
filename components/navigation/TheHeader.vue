<template>
  <header class="header">
    <div class="header-container">
      <div class="navigation">
        <ul class="navigation-list">
          <li class="navigation-item">
            <nuxt-link to="/works">
              Works
            </nuxt-link>
          </li>
          <li class="navigation-item">
            <nuxt-link to="/block">
              Block
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
    padding: 0 60px;
    box-sizing: border-box;
    z-index: 100;
    display: flex;
    justify-content: flex-end;
  }
  @media (max-width: 375px) {
    .navigation {
      display: none;
    }
    .header-container {
      padding: 0 15px;
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
