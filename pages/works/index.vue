<template>
  <section class="works">
    <div class="container works-container">
      <h5 class="title">Works</h5>
      <works-list/>
    </div>
  </section>
</template>

<script>
import WorksList from "~/components/works/WorksList";

export default {
  name: "index",
  components: {WorksList}
}
</script>

<style lang="scss" scoped>
.title {
  font-family: Heebo, sans-serif;
  font-style: normal;
  font-weight: 900;
  font-size: 44px;
  line-height: 60px;
  color: #21243D;
}
</style>
