<template>
  <div id="Home">
    <page-bg class="pageBg"></page-bg>
    <img alt="Vue logo" src="@/assets/logo.png" />
  </div>
</template>

<script>

export default {
  name: "Home",
  components: {}
};
</script>

<style scoped>
  #Home{
    width:100%;
    height:auto;
    position: relative;
  }
  #Home .pageBg{
    position: absolute;
    top: 0;
    left:0;
    z-index: -100;
  }
</style>