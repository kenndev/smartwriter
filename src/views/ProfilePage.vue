<template>
  <BreadCrumps>
    <ol class="breadcrumb">
      <li class="breadcrumb-item">
        <router-link :to="{ name: 'Home' }">Home</router-link>
      </li>
      <li class="breadcrumb-item active" aria-current="page">
        Profile Page
      </li>
    </ol>
  </BreadCrumps>
  <profile-component />
</template>

<script>
import BreadCrumps from "@/components/BreadCrumps.vue";
import ProfileComponent from "@/components/ProfileComponent.vue";
export default {
  name: "ProfilePage",
  components: { BreadCrumps, ProfileComponent },
};
</script>

<style></style>
