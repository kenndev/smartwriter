<template>
  <!-- BREADCRUMB
				============================================= -->
  <div id="breadcrumb" class="division">
    <div class="container">
      <div class="row">
        <!-- BREADCRUMB NAV -->
        <div class="col-md-12">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <router-link :to="{ name: 'Home' }">Home</router-link>
              </li>
              <li class="breadcrumb-item active" aria-current="page">
                {{ title }}
              </li>
            </ol>
          </nav>
        </div>
      </div>
      <!-- End row -->
    </div>
    <!-- End container -->
  </div>
  <!-- END BREADCRUMB -->
</template>

<script>
export default {
  props: {
    title: String,
  },
};
</script>

<style></style>
