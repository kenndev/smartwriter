<template>
  <form name="registerForm" class="row register-form">
    <!-- Form Input -->
    <div id="input-name" class="col-md-12 mb-4">
      <p>Paper Type*</p>
      <select
        class="form-control form-select"
        name="type_of_paper"
        v-model="form.type_of_paper"
      >
        <option
          v-for="paper_type in resources.paper_type"
          :key="paper_type.id"
          v-bind:value="paper_type.id"
        >
          {{ paper_type.paper_type }}
        </option>
      </select>
    </div>

    <!-- Form Input -->
    <div id="input-email" class="col-md-12 mb-4">
      <p>Academic Level*</p>
      <select
        class="form-control form-select"
        name="academic_level"
        v-model="form.academic_level"
        v-on:change="calculatePrice()"
      >
        <option
          v-for="academic_level in resources.academic_level"
          :key="academic_level.id"
          v-bind:value="academic_level.id"
        >
          {{ academic_level.academic_level }}
        </option>
      </select>
    </div>

    <!-- Form Input -->
    <div id="input-phone" class="col-md-12 d-lg-flex">
      <div class="col-lg-6 col-md-12 col-sm-12 mb-md-4">
        <p>Deadline*</p>
        <select
          class="form-control form-select"
          name="dead_line"
          v-model="form.dead_line"
          v-on:change="calculatePrice()"
          required
        >
          <option
            v-for="deadline in resources.deadlines"
            :key="deadline.id"
            v-bind:value="deadline.id"
          >
            {{ deadline.deadline }}
          </option>
        </select>
      </div>

      <div class="col-lg-6 col-md-12 px-lg-2 col-sm-12 mb-3">
        <p>Number of pages</p>
        <div class="input-group">
          <button
            type="button"
            @click="form.no_ofpages > 1 ? form.no_ofpages-- : ''"
            class="input-group-text"
          >
            -
          </button>
          <input
            type="number"
            class="form-control"
            required
            v-model="form.no_ofpages"
            aria-label="Amount (to the nearest dollar)"
          />
          <button type="button" @click="form.no_ofpages++" class="input-group-text">
            +
          </button>
        </div>
      </div>
    </div>

    <!-- Form Button -->
    <div class="col-md-12 form-btn d-flex flex-row justify-content-between">
      <button
        type="button"
        @click="orderPage()"
        class="btn btn-md btn-rose tra-black-hover submit"
      >
        Order Now
      </button>
      <p
        class="d-flex align-items-center"
        v-for="price in prices"
        :key="price.id"
      >
        Approximate Price: {{ price.price * form.no_ofpages }}
      </p>
    </div>

    <!-- Form Message -->
    <div class="col-md-12 register-form-msg text-center">
      <span class="loading"></span>
    </div>
  </form>
</template>

<script setup>
import useArticles from "../composable/articles";
import { ref, reactive } from "vue";
import router from "../router";
import { onMounted } from "vue";


const { resources, prices, getResources, getApproximatePrice } = useArticles();
const no_of_pages = ref(1);
const form = reactive({
  type_of_paper: 1,
  academic_level: 1,
  dead_line: 1,
  no_ofpages: no_of_pages.value,
});

onMounted(() => {
  getResources();
  calculatePrice();
});

const calculatePrice = async () => {
  await getApproximatePrice({ ...form });
};

const orderPage = () => {
  router.push({
    name: "Order",
    query: {
      academicLevel: form.academic_level,
      paperType: form.type_of_paper,
      deadLine: form.dead_line,
      pages: form.no_ofpages,
    },
  });
};
</script>

<style></style>
