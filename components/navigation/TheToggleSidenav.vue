<template>
  <div class="sidenav" @click="$emit('closeBar')">
    <span class="bar"></span>
    <span class="bar"></span>
    <span class="bar"></span>
  </div>
</template>

<script>
export default {
  name: "TheToggleSidenav",
  emits: ['closeBar']
}
</script>

<style lang="scss" scoped>
.sidenav {
  width: 35px;
  height: 30px;
  margin: 20px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  cursor: pointer;
}
.bar {
  width: 100%;
  height: 3px;
  background-color: rgba(0, 0, 0, 0.86);
}
@media (min-width: 375px) {
  .sidenav {
    display: none;
  }
}
</style>
