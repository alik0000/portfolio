<template>
  <div class="works_margin-img image-dashboard" :style="{'background-image': `url(${imgUrl})`}">
  </div>
</template>

<script>
export default {
  name: "WorkImg",
  props: {
    imgUrl: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.image-dashboard {
  @include img;
}
</style>
