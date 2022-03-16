<template>
  <section
    id="content-2"
    class="bg-whitesmoke wide-60 pt-50 content-section division"
  >
    <div class="container">
      <div class="row d-flex align-items-center">
        <!-- COURSE DESCRIPTION -->
        <div class="col-lg-8">
          <div class="course-txt pr-30">
            <!-- Course Title -->
            <div
              class="d-flex flex-row justify-content-start align-items-baseline"
            >
              <h3 class="h3-sm pe-2">
                {{ order_details.topic }}
              </h3>
              <i
                @click="edit(order_details.order_id)"
                class="align-self-start icons fa fa-light fa-pen fa-sm border border-success p-2 rounded-circle"
              />
            </div>

            <!-- Course Shot Description -->
            <p class="p-md">
              {{ order_details.paper_instruction }}
            </p>
            <div class="d-flex flex-row gx-5 justify-content-start">
              <!-- Course Short Data -->
              <p class="w-25 course-short-data">Order Id:</p>
              <p>{{ order_details.order_id }}</p>
            </div>
            <div class="d-flex flex-row justify-content-start">
              <!-- Course Short Data -->
              <p class="w-25 course-short-data">Paper Type:</p>
              <p>{{ order_details.paper_type }}</p>
            </div>
            <div class="d-flex flex-row justify-content-start">
              <!-- Course Short Data -->
              <p class="w-25 course-short-data">Paper Formart:</p>
              <p class="px-6">{{ order_details.paper_format }}</p>
            </div>
            <div class="d-flex flex-row justify-content-start">
              <!-- Course Short Data -->
              <p class="w-25 course-short-data">Academic Level:</p>
              <p class="px-6">{{ order_details.academic_level }}</p>
            </div>
            <div
              class="d-flex flex-row justify-content-start"
              v-if="order_details.discipline"
            >
              <!-- Course Short Data -->
              <p class="w-25 course-short-data">Discipline:</p>
              <p class="px-6">{{ order_details.discipline }}</p>
            </div>
            <div class="d-flex flex-row justify-content-start">
              <!-- Course Short Data -->
              <p class="w-25 course-short-data">Number of Pages:</p>
              <p class="px-6">{{ order_details.no_of_pages }}</p>
            </div>
            <div
              class="d-flex flex-row justify-content-start"
              v-if="order_details.number_of_charts > 0"
            >
              <!-- Course Short Data -->
              <p class="w-25 course-short-data">Number of Charts:</p>
              <p class="px-6">{{ order_details.no_of_charts }}</p>
            </div>
            <div
              class="d-flex flex-row justify-content-start"
              v-if="order_details.number_of_sources > 0"
            >
              <!-- Course Short Data -->
              <p class="w-25 course-short-data">Number of Sources:</p>
              <p class="px-6">{{ order_details.number_of_sources }}</p>
            </div>

            <!-- Course Rating -->
            <div class="course-rating clearfix">
              <span v-for="files in order.files" :key="files.id">
                <div class="course-rating">
                  <!-- Icon -->
                  <div class="d-flex flex-column justify-content-center">
                    <img
                      @click="download(files.file_url)"
                      class="img-40 mx-1"
                      src="assests/images/icons/photo.png"
                      alt="category-icon"
                    />
                    <i
                      @click="deleteFile(files.id)"
                      class="mx-1 mt-2 text-center icons fa fa-times fa-sm border p-1 rounded-1"
                    />
                  </div>
                </div>
              </span>
            </div>
          </div>
        </div>
        <div class="col-lg-4">
          <OrderForm />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import OrderForm from "./OrderForm.vue";
import { onMounted, reactive, ref } from "vue";
import useArticles from "../composable/articles";
import { useRoute } from "vue-router";
import router from "../router";

const { order, getOrderDetails, deleteOrderFile } = useArticles();

const id_order = ref("");

const order_details = reactive({
  order_id: "",
  topic: "",
  paper_instruction: "",
  paper_type: "",
  academic_level: "",
  paper_format: "",
  discipline: "",
  no_of_pages: "",
  no_of_charts: "",
  number_of_sources: "",
});

const getDetailsOrder = async () => {
  await getOrderDetails(id_order.value);
  order_details.order_id = order.value.order_details.order_id;
  order_details.topic = order.value.order_details.topic;
  order_details.paper_instruction = order.value.order_details.paper_instruction;
  order_details.paper_type = order.value.order_details.paper_type;
  order_details.academic_level = order.value.order_details.academic_level;
  order_details.paper_format = order.value.order_details.paper_format;
  order_details.no_of_pages = order.value.order_details.no_of_pages;
  order_details.no_of_charts = order.value.order_details.no_of_charts;
  order_details.number_of_sources = order.value.order_details.number_of_sources;
};

const download = async (file_url) => {
  window.open(file_url, "_blank");
};

const deleteFile = async (id) => {
  if (confirm("are you sure you want to delete this?")) {
    await deleteOrderFile(id);
    getDetailsOrder();
  }
};

const edit = (id) => {
  router.push({
    name: "Orderedit",
    query: {
      order_id: id,
    },
  });
};

onMounted(() => {
  id_order.value = useRoute().query.order_id;
  getDetailsOrder();
});
</script>

<style>
.course-rating:hover {
  cursor: pointer;
}
</style>
