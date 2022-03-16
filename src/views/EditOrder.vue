<template>
  <BreadCrumps>
    <ol class="breadcrumb">
      <li class="breadcrumb-item">
        <router-link :to="{ name: 'Home' }">Home</router-link>
      </li>
      <li class="breadcrumb-item">
        <router-link :to="{ name: 'Profile' }">Orders</router-link>
      </li>
      <li class="breadcrumb-item active" aria-current="page">Edit Order</li>
    </ol>
  </BreadCrumps>
  <EditOrderForm />
</template>

<script setup>
import EditOrderForm from "../components/EditOrderForm.vue";
import BreadCrumps from "../components/BreadCrumps.vue";
</script>

<style></style>
