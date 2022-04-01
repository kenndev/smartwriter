<template>
  <BreadCrumps>
    <ol class="breadcrumb">
      <li class="breadcrumb-item">
        <router-link :to="{ name: 'Home' }">Home</router-link>
      </li>
      <li class="breadcrumb-item active" aria-current="page">Login</li>
    </ol>
  </BreadCrumps>
  <register-component />
</template>

<script>
import RegisterComponent from "@/components/RegisterComponent.vue";
import BreadCrumps from "@/components/BreadCrumps.vue";
export default {
  components: { RegisterComponent, BreadCrumps },
  name: "RegisterPage",
};
</script>

<style></style>
