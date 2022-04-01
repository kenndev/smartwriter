<template>
  <hero-component />
  <GuaranteeServices />
  <pricing-component />
  <ContentComponent />
  <ContentComponentSecond />
</template>

<script>
import HeroComponent from "../components/HeroComponent.vue";
import PricingComponent from "../components/PricingComponent.vue";
import GuaranteeServices from "@/components/GuaranteesServices.vue";
import ContentComponent from "@/components/ContentComponent.vue";
import ContentComponentSecond from "@/components/ContentComponentSecond.vue";
export default {
  components: {
    HeroComponent,
    PricingComponent,
    GuaranteeServices,
    ContentComponent,
    ContentComponentSecond,
  },
};
</script>

<style></style>
