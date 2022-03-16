<template>
  <div class="cbox-5 b-bottom" v-for="order in orders" :key="order.id">
    <div class="row">
      <!-- Course Description -->
      <div class="col-sm-7 cbox-5-txt">
        <h5 class="h5-xs">
          {{ order.topic }}
        </h5>
        <ul class="txt-list mb-15">
          <li>
            {{ order.paper_type }}
          </li>
          <li>{{ order.academic_level }}</li>

          <li v-if="order.discipline">
            {{ order.discipline }}
          </li>
        </ul>
        <p class="p-sm grey-color">{{ order.paper_instruction }}</p>
        <!-- Rating -->
        <i
          @click="edit(order)"
          class="icons fa fa-light fa-pen fa-sm border border-success p-2 rounded-1"
          >edit</i
        >
        <i
          @click="details(order)"
          class="icons fa fa-light fa-pen fa-sm border border-warning p-2 rounded-1 ms-2"
          >Details</i
        >
      </div>

      <!-- Course Data -->
      <div class="col-sm-3 cbox-5-data text-center clearfix">
        <p class="grey-color"></p>
      </div>

      <!-- Course Price -->
      <div class="col-sm-2 cbox-5-price text-right clearfix">
        <span class="course-price">${{ order.total_price }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import useArticles from "../composable/articles";
import { ref, onMounted } from "vue";
import router from "../router";
//get orders from composable
const { orders, getOrders } = useArticles();

//get My orders
const getMyOrders = async () => {
  await getOrders();
};

const details = (order) => {
  router.push({
    name: "Details",
    query: {
      order_id: order.order_id,
    },
  });
};

const edit = (order) => {
  router.push({
    name: "Orderedit",
    query: {
      order_id: order.order_id,
    },
  });
};

//Load orders in lifecycle on load
onMounted(() => {
  getMyOrders();
});
</script>

<style>
.icons:hover {
  background: #ff1f59;
  transition: 0.5s;
  cursor: pointer;
}
</style>
