<template>
  <Layout>
    <CookieConsent />
    <router-view :key="$route.fullPath"/>
  </Layout>  
</template>


<script setup>
import Layout from './components/Layout.vue';
import CookieConsent from '@/components/CookieConsent.vue';
</script>
