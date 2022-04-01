<template>
  <section
    id="services-2"
    class="bg-whitesmoke wide-60 services-section division"
  >
    <div class="container-fluid h-custom">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-md-9 col-lg-6 col-xl-5">
          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
            class="img-fluid"
            alt="Sample image"
          />
        </div>
        <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
          <div v-if="errorsMsg">
            <div class="alert alert-danger alert-dismissible fade show" role="alert">
              {{errorsMsg}}
              <button @click="errorsMsg = ''" type="button" class="btn-close"  aria-label="Close"></button>
            </div>
          </div>
          <div v-if="errorMsg">
            <div class="alert alert-danger alert-dismissible fade show" role="alert">
              {{errorMsg}}
              <button @click="errorMsg = ''" type="button" class="btn-close"  aria-label="Close"></button>
            </div>
          </div>
          <form @submit="login">
            <div
              class="divider d-flex justify-content-center align-items-center my-4"
            >
              <p class="text-center fw-bold mx-3 mb-0">Login</p>
            </div>
            <!-- Email input -->
            <div class="form-outline mb-4">
              <input
                type="email"
                id="form3Example3"
                class="form-control"
                v-model="user.email"
                placeholder="Enter a valid email address"
              />
            </div>

            <!-- Password input -->
            <div class="form-outline mb-3">
              <input
                type="password"
                id="form3Example4"
                class="form-control"
                v-model="user.password"
                placeholder="Enter password"
              />
            </div>

            <div class="d-flex justify-content-between align-items-center">
              <!-- Checkbox -->
              <div class="form-check mb-0">
                <input
                  class="form-check-input me-2"
                  type="checkbox"
                  value=""
                  v-model="user.remember"
                  id="form2Example3"
                />
                <label class="form-check-label" for="form2Example3">
                  Remember me
                </label>
              </div>
              <a href="#!" class="text-body">Forgot password?</a>
            </div>

            <div class="text-center text-lg-start mt-4 pt-2">
              <button
                type="submit"
                class="btn btn-rose tra-black-hover submit"
                style="padding-left: 2.5rem; padding-right: 2.5rem"
              >
                Login
              </button>
              <p class="small fw-bold mt-2 pt-1 mb-0">
                Don't have an account?
                <router-link :to="{ name: 'Register' }" class="link-danger"
                  >Register</router-link
                >
              </p>
              <p class="small fw-bold mt-2 pt-1 mb-0">
               
                <a target="_blank" href="http://expertwritersdashboard.thetradinghut.net/login" class="link-danger"
                  > Login to admin dashboard</a
                >
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import store from "../store";
import { useRouter } from "vue-router";
import { ref } from "vue";

const router = useRouter();

const user = {
  email: "",
  password: "",
  remember: false,
};

const errorMsg = ref("");
const errorsMsg = ref("");

function login(ev) {
  ev.preventDefault();

  store
    .dispatch("login", user)
    .then(() => {
      router.push({
        name: "Profile",
      });
    })
    .catch((err) => {
      errorMsg.value = err.response.data.message;
      errorsMsg.value = err.response.data.error;
      console.log(err.response.data)
    });
}
</script>

<style></style>
