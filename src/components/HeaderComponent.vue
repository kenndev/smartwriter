<template>
  <header id="header" class="header white-menu navbar-dark">
    <div class="header-wrapper">
      <!-- MOBILE HEADER -->
      <div class="wsmobileheader clearfix">
        <a id="wsnavtoggle" class="wsnavtoggle wsanimated-arrow"
          ><span></span
        ></a>
        <span class="smllogo smllogo-black"
          ><img
            src="assests/images/logs.png"
            width="172"
            height="40"
            alt="mobile-logo"
        /></span>
        <span class="smllogo smllogo-white"
          ><img
            src="assests/images/logs.png"
            width="172"
            height="40"
            alt="mobile-logo"
        /></span>
      </div>

      <!-- NAVIGATION MENU -->
      <div class="wsmainfull menu clearfix">
        <div class="wsmainwp clearfix">
          <!-- LOGO IMAGE -->
          <!-- For Retina Ready displays take a image with double the amount of pixels that your image will be displayed (e.g 344 x 80 pixels) -->
          <div class="desktoplogo">
            <router-link :to="{ name: 'Home' }" class="logo-black"
              ><img
                src="assests/images/logs.png"
                width="172"
                height="40"
                alt="header-logo"
            /></router-link>
          </div>
          <div class="desktoplogo">
            <router-link :to="{ name: 'Home' }" class="logo-white"
              ><img
                src="assests/images/logo-white.png"
                width="172"
                height="40"
                alt="header-logo"
            /></router-link>
          </div>

          <!-- MAIN MENU -->
          <nav class="wsmenu clearfix">
            <ul class="wsmenu-list">
              <!-- SIMPLE NAVIGATION LINK -->
              
              <li
                v-for="link in navigation"
                :key="link.name"
                class="nl-simple"
                aria-haspopup="true"
              >
                <a @click="hrefClicked(link.to.name)">{{ link.name }}</a>
              </li>
              <li
                v-if="store.state.user.token"
                class="nl-simple"
                aria-haspopup="true"
              >
                <a @click="hrefClicked('Profile')">Orders</a>
              </li>
              <li
                v-if="!store.state.user.token"
                class="nl-simple"
                aria-haspopup="true"
              >
               <a @click="hrefClicked('Login')">Login</a>
              </li>

              <li
                class="nl-simple nav-item dropdown ms-auto"
                aria-haspopup="true"
                v-if="store.state.user.token"
              >
                <a
                  href="#"
                  class="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                  >Admin</a
                >
                <div class="dropdown-menu dropdown-menu-end">
                  <a href="#" class="dropdown-item">Profile</a>
                  <div class="dropdown-divider"></div>
                  <a @click.prevent="logout" class="dropdown-item">Logout</a>
                </div>
              </li>
            </ul>
          </nav>
          <!-- END MAIN MENU -->
        </div>
      </div>
      <!-- END NAVIGATION MENU -->
    </div>
    <!-- End header-wrapper -->
  </header>
</template>

<script setup>
import store from "../store";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

const navigation = [
  { name: "Home", to: { name: "Home" }, current: true },
  { name: "About", to: { name: "About" }, current: false },
  { name: "Contact", to: { name: "ContactUs" }, current: false },
];
const userstore = useStore();
const router = useRouter();

const logout = () => {
  userstore.dispatch("logout").then(() => {
    router.push({
      name: "Login",
    });
  });
};

const hrefClicked = (URL) => {
  jQuery("body").toggleClass("wsactive");
  jQuery("body").removeClass("wsactive");
  router.push({ name: URL });
};


</script>

<style></style>
