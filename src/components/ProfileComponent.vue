<template>
  <!-- TEAM-3
				============================================= -->
  <section id="team-3" class="pt-100 team-section division">
    <div class="container">
      <div class="row">
        <!-- TEACHER PHOTO -->
        <div class="col-md-4">
          <div class="team-3-photo text-center">
            <!-- Teacher Photo -->
            <div class="t-3-photo mb-25">
              <img
                class="img-fluid"
                src="images/team-5.jpg"
                alt="team-member-foto"
              />
            </div>

            <!-- Social Icons -->
            <div class="tm-3-social clearfix">
              <ul class="text-center clearfix">
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
                  <a href="#" class="ico-linkedin"
                    ><i class="fab fa-linkedin-in"></i
                  ></a>
                </li>
              </ul>
            </div>

            <!-- Links -->
            <div class="t-3-links">
              <a href="#" class="btn btn-md btn-tra-grey rose-hover">Website</a>
              <a @click="logout" class="btn btn-md btn-rose grey-hover"
                >Logout</a
              >
            </div>
          </div>
        </div>
        <!-- END TEACHER PHOTO -->

        <!-- TEACHER DATA -->
        <div class="col-md-8">
          <div class="team-3-txt pc-45">
            <!-- Name -->
            <h3 class="h3-xs">{{ user.name }}</h3>
            <span>IT & Software Courses</span>

            <!-- Data -->
            <p class="teacher-data">
              14,622 Total Students &bull; 9 Courses &bull; 4.63 Rating (738
              Reviews)
            </p>

            <!-- Small Title -->
            <h5 class="h5-xl mt-40">About Me</h5>

            <!-- Text -->
            <p>
              Aliqum mullam blandit tempor sapien gravida donec ipsum porta
              justo. Velna vitae auctor congue magna nihil impedit ligula risus.
              Mauris donec ociis magnis sapien sagittis sapien sem congue tempor
              gravida donec an enim ipsum porta justo integer odio velna a purus
              efficitur ipsum primis in cubilia laoreet
            </p>

            <!-- List -->
            <ul class="txt-list mb-15">
              <li>Maecenas gravida porttitor nunc tempor laoreet turpis</li>

              <li>
                Integer congue magna at pretium purus pretium ligula at rutrum
                risus luctus dolor auctor ipsum blandit purus aliqum mullam
                blandit tempor
              </li>

              <li>
                Risus at congue etiam aliquam sapien egestas posuere gravida
              </li>

              <li>Porttitor nunc, quis vehicula magna luctus tempor laoreet</li>

              <li>
                Magna at pretium purus pretium ligula at rutrum risus luctus
                dolor auctor ipsum blandit purus aliqum mullam blandit tempor
              </li>
            </ul>

            <!-- Text -->
            <p>
              Maecenas gravida porttitor nunc, quis vehicula magna luctus
              tempor. Quisque laoreet turpis urna augue, viverra a augue eget,
              dictum tempor magnis. Pulvinar consectetur and placerat imperdiet
              dui varius viverr ac massa lorem fusce
            </p>
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

<script>
import { useStore } from "vuex";
import { computed } from "vue";
import { useRouter } from "vue-router";
export default {
  name: "ProfileComponent",

  setup() {
    const store = useStore();
    const router = useRouter();

    const logout = () => {
      store.dispatch("logout").then(() => {
        router.push({
          name: "Login",
        });
      });
    };

    return {
      user: computed(() => store.state.user.data),
      logout,
    };
  },
};
</script>

<style></style>
