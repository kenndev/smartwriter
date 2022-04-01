<template>
  <BreadCrumps>
    <ol class="breadcrumb">
      <li class="breadcrumb-item">
        <router-link :to="{ name: 'Home' }">Home</router-link>
      </li>
      <li class="breadcrumb-item active" aria-current="page">Contact Us</li>
    </ol>
  </BreadCrumps>
  <ContactUsComponent />
</template>

<script>
import BreadCrumps from "@/components/BreadCrumps.vue";
import ContactUsComponent from "@/components/ContactusComponent.vue";
export default {
  name: "AboutPage",
  components: {
    BreadCrumps,
    ContactUsComponent,
  },
};
</script>

<style></style>
