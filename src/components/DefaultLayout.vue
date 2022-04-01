<template>
  <div
    id="page"
    class="page"
    :class="path == '/home' ? '' : 'inner-page-wrapper'"
  >
    <header-component />
    <vue-progress-bar></vue-progress-bar>
    <router-view />
    <footer-component />
  </div>
</template>

<script setup>
import FooterComponent from "./FooterComponent.vue";
import HeaderComponent from "./HeaderComponent.vue";
import { useRoute } from "vue-router";
import { computed } from "vue";
import { getCurrentInstance } from "vue";
const route = useRoute();
const path = computed(() => route.path);

const internalInstance = getCurrentInstance();
//  [App.vue specific] When App.vue is first loaded start the progress bar
internalInstance.appContext.config.globalProperties.$Progress.start();
setTimeout(() => {
  internalInstance.appContext.config.globalProperties.$Progress.finish();
}, 3500);
</script>

<style></style>
