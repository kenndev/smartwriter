<template>
  <header-component />
  <bread-crumps title="About" />
  <services-component />
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent.vue";
import BreadCrumps from "@/components/BreadCrumps.vue";
import ServicesComponent from "@/components/ServicesComponent.vue";
export default {
  name: "AboutPage",
  components: { HeaderComponent, BreadCrumps, ServicesComponent },
};
</script>

<style></style>
