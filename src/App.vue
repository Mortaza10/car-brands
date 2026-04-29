<template>
  <Layout>
    <router-view :key="$route.fullPath"/>
  </Layout>  
</template>


<script setup>
import Layout from './components/Layout.vue';
</script>


<style scoped></style>
