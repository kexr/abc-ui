<template>
  <div class="app-main">
    <LogoTitle></LogoTitle>
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts" name="App">
import LogoTitle from './components/LogoTitle.vue'
</script>

<style>
.component_index {
  height: 100vh;
}

body {
  margin: 0;
  padding: 0;
}
</style>
