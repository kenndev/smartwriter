<template>
  <div id="page" class="page" :class="path == '/home'? '': 'inner-page-wrapper'">
    <header-component />
    <router-view />
    <footer-component />
  </div>
</template>

<script setup>
import FooterComponent from "./FooterComponent.vue";
import HeaderComponent from "./HeaderComponent.vue";
import { useRoute } from "vue-router";
import {computed} from "vue";
const route = useRoute();
const path = computed(() => route.path);
</script>

<style></style>
