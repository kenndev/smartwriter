<template>
  <BreadCrumps>
    <ol class="breadcrumb">
      <li class="breadcrumb-item">
        <router-link :to="{ name: 'Home' }">Home</router-link>
      </li>
      <li class="breadcrumb-item">
        <router-link :to="{ name: 'Profile' }">Orders</router-link>
      </li>
      <li class="breadcrumb-item active" aria-current="page">Order Details</li>
    </ol>
  </BreadCrumps>
  <OrderDetails />
</template>

<script setup>
import BreadCrumps from "@/components/BreadCrumps.vue";
import OrderDetails from "../components/OrderDetails.vue";
</script>

<style></style>
