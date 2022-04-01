<template>
  <!-- ABOUT-2
				============================================= -->
  <section id="services-2" class="wide-60 about-section division">

    <div class="container">
      <div class="row d-flex align-items-center">
        <!-- ABOUT IMAGE -->
        <div class="col-md-5 col-lg-6">
          <div class="img-block pc-25 mb-40">
            <img
              class="img-fluid"
              src="/assests/images/image-01.png"
              alt="about-image"
            />
          </div>
        </div>

        <!-- ABOUT TEXT -->
        <div class="col-md-7 col-lg-6">
          <div class="txt-block pc-25 mb-40">
            <!-- Title -->
            <h3 class="h3-sm">About us</h3>

            <!-- Text -->
            <p>
              We are a one-stop-shop for custom written papers. EduBirdies is a
              custom paper writing service that serves students from across the
              world. Here, you can order various custom papers including term
              papers, essays, research papers, case studies, projects,
              dissertations, theses, and much more. We aim to eliminate academic
              writing stress and help students achieve top marks in their
              assignments.
            </p>

            <!-- List -->
            <ul class="txt-list mb-15">
              <li>
                Provide Details of your work. The more detailed your information
                is, the more accurate the custom paper will be. Upload any
                additional files you want us to use when writing your paper.
                Tell us the academic writing system you want us to use when
                writing and formatting your paper. Set a deadline in which you
                want your custom paper delivered.
              </li>

              <li>
                Track your projects with ease: You can manage your order
                directly from your client’s account. Login to сheck the status
                of your order, add funds, or provide more information.
              </li>

              <li>
                The writer we assigned your order will write a quality article
                and submit it to you before the deadline you specified.
              </li>
              <li>
                We guarantee that every custom written paper that you will
                receive from our writers will be of high quality. If you are not
                satisfied with it, request a free revision.
              </li>
            </ul>

            <!-- Button -->
            <a
              @click.prevent="orderPage"
              class="btn btn-md btn-tra-grey rose-hover"
              >Order a paper</a
            >
          </div>
        </div>
        <!-- END ABOUT TEXT -->
      </div>
      <!-- End row -->
    </div>
    <!-- End container -->
  </section>
  <!-- End ABOUT-2 -->
</template>

<script setup>
import router from "../router";

const orderPage = () => {
  router.push({name: 'Order'})
}
</script>

<style></style>
