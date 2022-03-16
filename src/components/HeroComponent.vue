<template>
  <!-- HERO-9
			============================================= -->
  <section id="hero-9" class="bg-scroll hero-section division">
    <div class="container">
      <div class="row d-flex align-items-center">
        <!-- HERO TEXT -->
        <div class="col-md-7">
          <div class="hero-txt mb-40 white-color">
            <!-- Title -->
            <h3>Online and in-class learning <span>with eTreeks</span></h3>

            <!-- Text -->
            <p class="p-md">
              Feugiat primis ligula risus auctor egestas an augue mauri viverra
              tortor in iaculis placerat eugiat mauris ipsum viverra in tortor
              and gravida purus lorem in tortor dolor and iaculis
            </p>

            <!-- Button -->
            <a
              href="categories-list.html"
              class="btn btn-md btn-rose tra-white-hover"
              >View All Categories</a
            >
          </div>
        </div>
        <!-- END HERO TEXT -->

        <!-- HERO REGISTER FORM -->
        <div class="col-md-5">
          <div id="register-form">
              <OrderForm />
          </div>
        </div>
        <!-- END HERO REGISTER FORM -->
      </div>
      <!-- End row -->
    </div>
    <!-- End container -->
  </section>
  <!-- END HERO-9 -->
</template>

<script setup>
import OrderForm from "./OrderForm.vue";
</script>

<style></style>
