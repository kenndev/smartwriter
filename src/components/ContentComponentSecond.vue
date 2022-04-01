<template>
  <!-- ABOUT-3
			============================================= -->
  <section id="about-3" class="pt-80 bg-whitesmoke about-section division">
    <div class="container">
      <div class="row d-flex align-items-center">
        <!-- ABOUT IMAGE -->
        <div class="col-md-5 col-lg-4">
          <div class="img-block">
            <img
              class="img-fluid"
              src="assests/images/image-05.png"
              alt="about-image"
            />
          </div>
        </div>
        <!-- ABOUT TEXT -->
        <div class="col-md-7 col-lg-8">
          <div class="txt-block pc-25 mb-20">
            <!-- Title -->
            <h3 class="h3-sm">Get custom papers created by academic experts</h3>

            <!-- Text -->
            <p>
              Hiring good writers is one of the key points in providing
              high-quality services. That’s why we have entry tests for all
              applicants who want to work for us. We try to make sure all
              writers working for us are professionals, so when you purchase
              custom-written papers, they are of high quality and
              non-plagiarized.
            </p>

            <!-- List -->
            <p>
              Our cheap essay writing service employs only writers who have
              outstanding writing skills. The quality of all custom papers
              written by our team is important to us; that is why we are so
              attentive to the application process and employ only those writers
              who can produce great essays and other kinds of written
              assignments.
            </p>
            <!-- Button -->
            <a
              @click.prevent="orderPage"
              class="btn btn-md btn-rose tra-black-hover"
              >Proceed to order page</a
            >
          </div>
        </div>
        <!-- END ABOUT TEXT -->
      </div>
      <!-- End row -->
    </div>
    <!-- End container -->
  </section>
  <!-- End ABOUT-3 -->
</template>

<script setup>
import router from "../router";

const orderPage = ()=>{
  router.push({name: 'Order'});
}
</script>

<style></style>
