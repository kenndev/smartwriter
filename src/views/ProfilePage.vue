<template>  
  <bread-crumps title="Profile"/>
  <profile-component />
</template>

<script>
import BreadCrumps from "@/components/BreadCrumps.vue";
import ProfileComponent from '@/components/ProfileComponent.vue';
export default {
  name: "ProfilePage",
  components: { BreadCrumps, ProfileComponent },
};
</script>

<style></style>
