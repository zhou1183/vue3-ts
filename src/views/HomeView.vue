<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
  </div>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <div class="home1">
      <img alt="Vue logo" src="../assets/logo.png" />
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from "vue"

  export default defineComponent({
    name: "HomeView",
  })
</script>
<style lang="scss">
  .home {
    .home1 {
      background: red;
    }
  }
</style>
