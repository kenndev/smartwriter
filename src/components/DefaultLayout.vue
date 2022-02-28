<template>
  
    <header-component />
    <router-view />
    <footer-component />

</template>

<script>
import FooterComponent from "./FooterComponent.vue";
import HeaderComponent from "./HeaderComponent.vue";
export default {
  components: { HeaderComponent, FooterComponent },
  name: "DefaultLayout",
};
</script>

<style></style>
