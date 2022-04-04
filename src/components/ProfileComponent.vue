<template>
  <!-- TEAM-3
				============================================= -->
  <section id="team-3" class="bg-whitesmoke pt-50 team-section division">
    <div class="container">
      <div class="row">
         <!-- TEACHER DATA -->
        <div class="col-md-7">
          <div class="team-3-txt">
            <OrderComponent />
          </div>
        </div>
        <!-- END TEACHER DATA -->
        <!-- TEACHER PHOTO -->
        <div class="col-md-5 stick">
          <div id="register-form">
            <OrderForm />
          </div>
        </div>

        <!-- END TEACHER PHOTO -->

       
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

<style scoped>
.stick {
  position: relative !important;
  position: sticky !important;
  position: -webkit-sticky !important;
  top: 5rem !important;
  height: 100% !important;
}
</style>
