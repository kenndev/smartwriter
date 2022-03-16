<template>
  <header-component />
  <BreadCrumps>
    <ol class="breadcrumb">
      <li class="breadcrumb-item">
        <router-link :to="{ name: 'Home' }">Home</router-link>
      </li>
      <li class="breadcrumb-item active" aria-current="page">About Us</li>
    </ol>
  </BreadCrumps>
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
