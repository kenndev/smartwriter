<template>
  <BreadCrumps>
    <ol class="breadcrumb">
      <li class="breadcrumb-item">
        <router-link :to="{ name: 'Home' }">Home</router-link>
      </li>
      <li class="breadcrumb-item active" aria-current="page">Login</li>
    </ol>
  </BreadCrumps>
  <login-component />
</template>

<script>
import LoginComponent from "@/components/LoginComponent.vue";
import BreadCrumps from "@/components/BreadCrumps.vue";
export default {
  name: "LoginPage",
  components: {
    LoginComponent,
    BreadCrumps,
  },
};
</script>
