<template>
  <!-- TEAM-3
				============================================= -->
  <section id="team-3" class="bg-whitesmoke pt-50 team-section division">
    <div class="container">
      <div class="row">
        <!-- TEACHER PHOTO -->
        <div class="col-md-5 stick">
          <div id="register-form">
            <OrderForm />
          </div>
        </div>

        <!-- END TEACHER PHOTO -->

        <!-- TEACHER DATA -->
        <div class="col-md-7">
          <div class="team-3-txt">
            
            <OrderComponent />
          </div>
        </div>
        <!-- END TEACHER DATA -->
      </div>
      <!-- End row -->
    </div>
    <!-- End container -->
  </section>
  <!-- END TEAM-3 -->
</template>

<script setup>
import OrderForm from "./OrderForm.vue";
import OrderComponent from "./OrderComponent.vue";
</script>

<style></style>
