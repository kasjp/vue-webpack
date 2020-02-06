<template>
  <div class="container">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "Base-Container"
};
</script>
<style lang="scss" scoped>
.container {
  width: 90%;
  margin: 0 auto;
}
</style>