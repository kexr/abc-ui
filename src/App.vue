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
  height: calc(100vh - 3.8rem);
}

body {
  margin: 0;
  padding: 0;
}
</style>
