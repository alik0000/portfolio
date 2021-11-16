<template>
  <transition name="slide-side">
    <div v-if="show" class="sidenav">
      <ul class="navigation-list" @click="$emit('closeBar')">
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
  </transition>
</template>

<script>
export default {
  name: "TheSidenav",
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  emits: ['closeBar']
}
</script>

<style lang="scss" scoped>
.sidenav {
  background: #fff;
  position: fixed;
  left: 0;
  top: 60px;
  width: 100%;
  height: 100%;
  z-index: 1000;
  box-sizing: border-box;
}
.navigation-list {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
}
.navigation-item {
  font-family: Heebo, sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 29px;
  text-align: center;
  padding: 10px 0;
  width: 100%;
  a {
    color: #000;
  }
  &:hover, :active {
    background-color: rgba(112, 111, 111, 0.49);
  }
}
@media (min-width: 375px) {
  .sidenav {
    display: none;
  }
}
.slide-side-enter-active,
.slide-side-leave-active {
  transition: all 1.3s linear;
  transform: translateY(70px);
}
.slide-side-enter,
.slide-side-leave-to {
  transition: all 1.3s ease-out;
  transform: translateY(-100%);
}


</style>
