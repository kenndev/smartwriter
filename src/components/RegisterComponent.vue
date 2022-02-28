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
          <form @submit="register">
            <div
              class="divider justify-content-center d-flex align-items-center my-4"
            >
              <p class="text-center fw-bold mx-3 mb-0">Register</p>
            </div>
            <!-- Email input -->
            <div class="form-outline mb-4">
              <input
                type="text"
                id="form3Example3"
                class="form-control"
                v-model="user.name"
                placeholder="Enter your full name"
              />
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

            <div class="form-outline mb-3">
              <input
                type="password"
                id="form3Example4"
                class="form-control"
                v-model="user.password_confirmation"
                placeholder="Confirm password"
              />
            </div>

            <div class="text-center mt-4 pt-2">
              <button
                type="submit"
                class="btn btn-rose tra-black-hover submit"
                style="padding-left: 2.5rem; padding-right: 2.5rem"
              >
                Register
              </button>
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

const router = useRouter();

const user = {
  name: "",
  email: "",
  password: "",
  password_confirmation: "",
};

const register = (ev) => {
  ev.preventDefault();
  store.dispatch('register', user)
    .then(() => {
        router.push({
          name: 'Profile'
        })
    })
};
</script>

<style></style>
