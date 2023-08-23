<script setup lang="ts">
import Menu from './layouts/menu-com.vue'
</script>

<template>
  <a-layout style="width: 100vw; height: 100vh">
    <a-layout-sider class="siderStyle"><Menu /></a-layout-sider>
    <a-layout-content class="contentStyle"> <RouterView /></a-layout-content>
  </a-layout>
</template>

<style scoped lang="less">
.siderStyle {
  width: 200px;
  height: 100%;
  text-align: 'center';
  line-height: '120px';
  background-color: '#3ba0e9';
}
.contentStyle {
  width: calc(100% - 200px);
  height: 100%;
  text-align: 'center';
  min-height: 120;
  line-height: '120px';
  background-color: '#108ee9';
}
</style>
