<template>
  <BreadCrumps>
    <ol class="breadcrumb">
      <li class="breadcrumb-item">
        <router-link :to="{ name: 'Home' }">Home</router-link>
      </li>
      <li class="breadcrumb-item active" aria-current="page">About Us</li>
    </ol>
  </BreadCrumps>
  <AboutComponent />
  <GuaranteeServices />
  <HeroComponent />
</template>

<script setup>
import HeaderComponent from "@/components/HeaderComponent.vue";
import BreadCrumps from "@/components/BreadCrumps.vue";
import AboutComponent from "@/components/AboutComponent.vue";
import GuaranteeServices from "@/components/GuaranteesServices.vue";
import HeroComponent from "../components/HeroComponent.vue";
</script>

<style></style>
