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
            <form name="registerForm" class="row register-form">
              <!-- Form Input -->
              <div id="input-name" class="col-md-12">
                <p>Your Name*</p>
                <input
                  type="text"
                  name="name"
                  class="form-control name"
                  placeholder="Enter Your Name*"
                  required
                />
              </div>

              <!-- Form Input -->
              <div id="input-email" class="col-md-12">
                <p>Your Email*</p>
                <input
                  type="email"
                  name="email"
                  class="form-control email"
                  placeholder="Enter Your Email*"
                  required
                />
              </div>

              <!-- Form Input -->
              <div id="input-phone" class="col-md-12">
                <p>Your Pnone Number*</p>
                <input
                  type="tel"
                  name="phone"
                  class="form-control phone"
                  placeholder="Enter Your Phone Number*"
                  required
                />
              </div>

              <!-- Form Button -->
              <div class="col-md-12 form-btn">
                <button
                  type="submit"
                  class="btn btn-md btn-rose tra-black-hover submit"
                >
                  Register Now
                </button>
              </div>

              <!-- Form Message -->
              <div class="col-md-12 register-form-msg text-center">
                <span class="loading"></span>
              </div>
            </form>
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

<script>
export default {};
</script>

<style></style>
