<template>
  <div>
    <the-header @closeBar="showNavbar = !showNavbar"/>
    <the-sidenav :show="showNavbar" @closeBar="showNavbar = false"/>
    <nuxt/>
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
</style>
