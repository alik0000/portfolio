<template>
  <section class="works">
    <div class="container works-container">
      <h5 class="title-content">Works</h5>
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
.works {
  margin-top: 90px;
}
</style>
