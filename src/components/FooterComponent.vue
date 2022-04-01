<template>
  <!-- FOOTER-1
			============================================= -->
  <footer id="footer-1" class="footer division">
    <div class="container">
      <!-- FOOTER CONTENT -->
      <div class="row">
        <!-- FOOTER INFO -->
        <div class="col-md-12 col-xl-6">
          <div class="footer-info mb-40">
            <!-- Footer Logo -->
            <!-- For Retina Ready displays take a image with double the amount of pixels that your image will be displayed (e.g 344 x 80 pixels) -->
            <img
              src="assests/images/logs.png"
              width="172"
              height="40"
              alt="footer-logo"
            />
            <!-- Text -->
            <p>
              If you need a custom written term, thesis or research paper as
              well as an essay or dissertation sample, choosing Expert Writers -
              a relatively cheap custom writing service - is a great option. Get
              any needed writing assistance at a price that every average
              student can afford.
            </p>
          </div>
        </div>

        <div class="col-md-3 col-lg-3 col-xl-3">
          <div class="footer-links mb-40">
            <!-- Title -->
            <h5 class="h5-md">Quick Links</h5>

            <!-- Footer Links -->
            <ul class="foo-links clearfix">
              <li><router-link :to="{ name: 'Home' }">Home</router-link></li>
              <li><router-link :to="{ name: 'About' }">About Us</router-link></li>
              <li><router-link :to="{ name: 'ContactUs' }">Contact US</router-link></li>
              <li><router-link :to="{ name: 'Login' }">Login</router-link></li>
              <li><a href="http://expertwritersdashboard.thetradinghut.net/login">Admin Dashboard</a></li>
            </ul>
          </div>
        </div>

        <!-- FOOTER COMPANY LINKS -->
        <!-- FOOTER COMPANY LINKS -->
        <div class="col-md-4 col-lg-3 col-xl-3">
          <div class="footer-links mb-40">
            <!-- Title -->
            <h5 class="h5-md">Work with us</h5>

            <!-- Text -->
            <p>Looking to be freelancer writter? Get in touch with us</p>

            <!-- Button -->
            <a
              href="mailto:yourdomain@mail.com"
              class="btn btn-tra-grey rose-hover"
              >hello@yourdomain.com</a
            >
          </div>
        </div>
      </div>
      <!-- END FOOTER CONTENT -->



      <!-- BOTTOM FOOTER -->
      <div class="bottom-footer">
        <div class="row">
          <!-- FOOTER COPYRIGHT -->
          <div class="col-lg-10">
            <ul class="bottom-footer-list">
              <li>
                <p>&copy; Copyright Expert Writers</p>
              </li>
              <li>
                <p>Developed with lots of love and coffee by <a href="mailto:murimi.kenn@mail.com">Creative Kenn</a></p>
              </li>
              <li>
                <p><a href="tel:+254704103356">+254 704 103 356</a></p>
              </li>
            </ul>
          </div>

          <!-- FOOTER SOCIALS LINKS -->
          <div class="col-lg-2 text-right">
            <ul class="foo-socials text-center clearfix">
              <li>
                <a href="#" class="ico-facebook"
                  ><i class="fab fa-facebook-f"></i
                ></a>
              </li>
              <li>
                <a href="#" class="ico-twitter"
                  ><i class="fab fa-twitter"></i
                ></a>
              </li>
              <li>
                <a href="#" class="ico-google-plus"
                  ><i class="fab fa-google-plus-g"></i
                ></a>
              </li>
              <li>
                <a href="#" class="ico-tumblr"><i class="fab fa-tumblr"></i></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!-- END BOTTOM FOOTER -->
    </div>
    <!-- End container -->
  </footer>
  <!-- END FOOTER-1 -->
</template>

<script>
export default {};
</script>

<style></style>
