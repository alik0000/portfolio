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
.works {
  margin-top: 100px;
}
.title {
  font-family: Heebo, sans-serif;
  font-style: normal;
  font-weight: 900;
  font-size: 44px;
  line-height: 60px;
  color: #21243D;
}
@media (max-width: 370px) {
  .title {
    font-size: 24px;
    line-height: 10px;
    text-align: center;
  }
}
</style>
