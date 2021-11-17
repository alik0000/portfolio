<template>
  <div class="body">
    <the-header @closeBar="showNavbar = !showNavbar"/>
    <the-sidenav :show="showNavbar" @closeBar="showNavbar = false"/>
    <div class="main">
      <nuxt/>
    </div>
    <the-footer/>
  </div>
</template>

<script>
import TheHeader from "~/components/navigation/TheHeader";
import TheSidenav from "~/components/navigation/TheSidenav";
import TheFooter from "~/components/TheFooter";

export default {
  name: "default",
  data () {
    return {
      showNavbar: false
    }
  },
  components: {TheSidenav, TheHeader, TheFooter}
}
</script>

<style lang="scss" scoped>
.body {
  display: flex;
  flex-direction: column;
  height: 100vh;
}
.main {
  position: relative;
  flex: 1 1 auto;
}
</style>
