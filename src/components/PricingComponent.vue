<template>
  <!-- PRICING-2
			============================================= -->
  <section id="pricing-2" class="bg-03 wide-60 pricing-section division">
    <div class="container">
      <div class="row d-flex align-items-center">
        <!-- PRICING TEXT -->
        <div class="col-lg-7">
          <div class="pricing-txt pc-25 mb-40">
            <!-- Title -->
            <h3 class="h5-lg white-color mb-20">Affordable Pricing</h3>
            <p class="white-color mb-20">
              Our prices depend on the urgency of your assignment, your academic
              level, the course subject, and the length of the assignment.
              Basically, more complex assignments will cost more than simpler
              ones. The level of expertise is also a major determinant of the
              price of your assignment.
            </p>
            <div class="row">
              <div class="col-md-4">
                <div class="c2-box text-center">
                  <!-- Text -->
                  <h5>HighSchool</h5>
                  <p>From</p>
                  <div
                    class="d-flex justify-content-center align-items-baseline"
                  >
                    <p>$</p>
                    <h3 class="h3-sm mx-2 rose-color">10</h3>
                    <p>per page</p>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="c2-box text-center">
                  <!-- Text -->
                  <h5>College</h5>
                  <p>From</p>
                  <div
                    class="d-flex justify-content-center align-items-baseline"
                  >
                    <p>$</p>
                    <h3 class="h3-sm mx-2 rose-color">13</h3>
                    <p>per page</p>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="c2-box text-center">
                  <!-- Text -->
                  <h5>University</h5>
                  <p>From</p>
                  <div
                    class="d-flex justify-content-center align-items-baseline"
                  >
                    <p>$</p>
                    <h3 class="h3-sm mx-2 rose-color">14</h3>
                    <p>per page</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- END PRICING TEXT -->

        <!-- PRICE PLAN PREMIUM -->
        <div class="col-lg-5">
          <div class="pricing-table p-4">
            <!-- Plan Price  -->
            <div class="pricing-plan text-center">
              <img
                class="img-75"
                src="assests/images/crown.png"
                alt="price-icon"
              />
              <h5 class="h5-md">Price is based on</h5>
            </div>
            <div class="d-flex">
              <div class="col-4 pe-2">
                <div class="sbox-2" style="height: 80%">
                  <!-- Icon -->
                  <img
                    class="img-30"
                    src="assests/images/icons/bookshelf.png"
                    alt="service-icon"
                  />

                  <!-- Text -->
                  <div class="sbox-2-txt">
                    <!-- Title -->
                    <p>Academic Level</p>
                    <!-- Text -->
                  </div>
                </div>
              </div>
              <div class="col-4 pe-2">
                <div class="sbox-2" style="height: 80%">
                  <!-- Icon -->
                  <img
                    class="img-30"
                    src="assests/images/icons/paper.png"
                    alt="service-icon"
                  />

                  <!-- Text -->
                  <div class="sbox-2-txt">
                    <!-- Title -->
                    <p>Number of Pages</p>
                    <!-- Text -->
                  </div>
                </div>
              </div>
              <div class="col-4 pe-2">
                <div class="sbox-2" style="height: 80%">
                  <!-- Icon -->
                  <img
                    class="img-30"
                    src="assests/images/icons/urgency.png"
                    alt="service-icon"
                  />

                  <!-- Text -->
                  <div class="sbox-2-txt">
                    <!-- Title -->
                    <p>Urgency</p>
                    <!-- Text -->
                  </div>
                </div>
              </div>
            </div>

            <!-- Pricing Table Button -->
            <div class="pricing-plan-btn text-center">
              <a @click.prevent="orderPage" class="btn btn-rose tra-black-hover"
                >Proceed to order page</a
              >
            </div>
          </div>
        </div>
        <!-- END PRICE PLAN PREMIUM -->
      </div>
      <!-- End row -->
    </div>
    <!-- End container -->
  </section>
  <!-- END PRICING-2 -->
</template>

<script setup>
import router from "../router";

const orderPage = () => {
  router.push({ name: "Order" });
};
</script>

<style></style>
