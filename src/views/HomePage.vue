<template>
  <hero-component />
  <services-component />
  <pricing-component />
</template>

<script>
import HeroComponent from "../components/HeroComponent.vue";
import ServicesComponent from "../components/ServicesComponent.vue";
import PricingComponent from "../components/PricingComponent.vue";
export default {
  components: {
    HeroComponent,
    ServicesComponent,
    PricingComponent,
  },
};
</script>

<style></style>
