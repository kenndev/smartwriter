<template>
  <header id="header" class="header white-menu navbar-dark">
    <div class="header-wrapper">
      <!-- MOBILE HEADER -->
      <div class="wsmobileheader clearfix">
        <a id="wsnavtoggle" class="wsanimated-arrow"><span></span></a>
        <span class="smllogo smllogo-black"
          ><img
            src="assests/images/logo.png"
            width="172"
            height="40"
            alt="mobile-logo"
        /></span>
        <span class="smllogo smllogo-white"
          ><img
            src="assests/images/logo-white.png"
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
            <a href="#hero-9" class="logo-black"
              ><img
                src="assests/images/logo.png"
                width="172"
                height="40"
                alt="header-logo"
            /></a>
          </div>
          <div class="desktoplogo">
            <a href="#hero-9" class="logo-white"
              ><img
                src="assests/images/logo-white.png"
                width="172"
                height="40"
                alt="header-logo"
            /></a>
          </div>

          <!-- MAIN MENU -->
          <nav class="wsmenu clearfix">
            <ul class="wsmenu-list">
              <!-- SIMPLE NAVIGATION LINK -->
              <li v-for="link in navigation" :key="link.name" class="nl-simple" aria-haspopup="true">
                <router-link :to="link.to">{{link.name}}</router-link>
              </li>
             
              <li class="nl-simple" aria-haspopup="true">
                <router-link :to="{name: 'Login'}" class="btn btn-rose tra-black-hover last-link"> Login </router-link>
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

<script>
export default {
   setup() {
     const navigation = [
       { name: 'Home', to: {name: 'Home'}, current: true},
       { name: 'About', to: {name: 'About'}, current: false},
       { name: 'Blog', to: {name: 'Home'}, current: false},
       { name: 'Contact', to: {name: 'Home'}, current: false},
       { name: 'Profile', to: {name: 'Profile'}, current: false},
     ]

     return {
       navigation
     }
   }
};
</script>

<style></style>
