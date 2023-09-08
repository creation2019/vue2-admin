<script setup lang="ts">
defineOptions({
  name: 'HomeView',
})
</script>

<template>
  <el-container class="layout-container flex-center layout-backtop">
    <el-header>Header</el-header>
    <el-container>
      <el-aside width="200px">Aside</el-aside>
      <el-main>Main</el-main>
    </el-container>
  </el-container>
</template>

<style lang="scss" scoped>
.HomeView {
  height: 100vh;
}
</style>
