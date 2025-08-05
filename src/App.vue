<template>
  <div class="container-fluid p-0">
    <Header/>
    <router-view></router-view>
  </div>
</template>

<script setup>
import Header from '@/components/layout-folder/Header.vue';
</script>

<style lang="scss" scoped></style>
