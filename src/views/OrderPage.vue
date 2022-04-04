<template>
  <BreadCrumps>
    <ol class="breadcrumb">
      <li class="breadcrumb-item">
        <router-link :to="{ name: 'Home' }">Home</router-link>
      </li>
      <li class="breadcrumb-item active" aria-current="page">Order page</li>
    </ol>
  </BreadCrumps>
  <!-- COURSE DETAILS
				============================================= -->
  <section id="" class="wide-40 bg-whitesmoke course-section division">
    <div class="container">
      <div class="row">
        <!-- COURSE DESCRIPTION -->
        <div class="col-lg-8">
          <div class="course-txt pr-30">
            <!-- HERO REGISTER FORM -->
            <OrderPageForm
              @refreshPriceDiv="refreshCheckoutDiv"
              ref="placeOrder"
            />
            <!-- END HERO REGISTER FORM -->
          </div>
        </div>
        <!-- END COURSE DESCRIPTION -->

        <!-- COURSE DATA -->
        <div class="col-lg-4 stick">
          <div class="course-data">
            <!-- Course Price -->
            <div class="course-data-list">
              <h5 class="h3-xl mb-4">{{ formD.topic }}</h5>
              <span class="mb-4" v-for="item in paperType" :key="item">
                {{ item.paper_type }}
              </span>
              <span class="mb-4" v-for="item in academicLevel" :key="item">{{
                item.academic_level
              }}</span>
              <span class="mb-4" v-for="item in deadLine" :key="item">{{
                item.dead_line
              }}</span>
              <div class="mb-4 d-flex flex-row justify-content-between">
                <span class="d-flex"
                  >No of Pages: {{ formD.no_ofpages }} X $ {{ price }}</span
                >
                <span class="d-flex">$ {{ formD.price }}</span>
              </div>
              <hr />
              <div class="d-flex flex-row justify-content-between">
                <h5 class="h3-xl">Total:</h5>
                <h5 class="h3-xl">$ {{ formD.price }}</h5>
              </div>
            </div>

            <div class="course-data-links">
              <hr />
              <div id="smart-button-container" v-if="store.state.user.token">
                <div style="text-align: center">
                  <div id="paypal-button-container"></div>
                </div>
              </div>
              <div id="smart-button-container" v-if="!store.state.user.token">
                <div style="text-align: center">
                  <router-link
                    :to="{ name: 'Login' }"
                    type="button"
                    class="btn btn-md btn-rose tra-grey-hover"
                  >
                    Login to place order
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- END COURSE DATA -->
      </div>
      <!-- End row -->
    </div>
    <!-- End container -->
  </section>
  <!-- END COURSE DETAILS -->
</template>
<script setup>
import OrderPageForm from "../components/OrderPageForm.vue";
import { reactive, ref } from "vue";
import store from "../store";
import useArticles from "../composable/articles";
import router from "../router";
import BreadCrumps from "@/components/BreadCrumps.vue";

const formD = ref([]);
const topic = ref("");
const academicLevel = ref([]);
const deadLine = ref([]);
const paperType = ref([]);
const price = ref(0);
const { placePaperOrder } = useArticles();
const placeOrder = ref();
const orderDetails = reactive({
  order_id: "",
  status: "",
  email: "",
  given_name: "",
  surname: "",
});

const actionStatus = ref();

const refreshCheckoutDiv = (resources, price_per_unit) => {
  formD.value = placeOrder.value.foRM;
  academicLevel.value = resources.value.academic_level.filter((a) => {
    if (a.id == formD.value.academic_level) {
      return a;
    }
  });
  deadLine.value = resources.value.deadlines.filter((a) => {
    if (a.id == formD.value.dead_line) {
      return a;
    }
  });
  paperType.value = resources.value.paper_type.filter((a) => {
    if (a.id == formD.value.type_of_paper) {
      return a;
    }
  });
  price.value = price_per_unit;
};

//Place Order and send to API
const checkOut = () => {
  placeOrder.value.placeOrder();
};

const initPayPalButton = () => {
  if (store.state.user.token) {
    let actionStatus;
    paypal
      .Buttons({
        style: {
          shape: "rect",
          color: "gold",
          layout: "vertical",
          label: "paypal",
        },

        onInit: function (data, actions) {
          actions.enable();
        },

        onClick: function () {
          if (!placeOrder.value.validateForm()) {
            //actions.disable();
            return false;
          } else {
            //actions.enable();
            return true;
          }
        },
        createOrder: function (data, actions) {
          return actions.order.create({
            purchase_units: [
              { amount: { currency_code: "USD", value: formD.value.price } },
            ],
          });
        },

        onApprove: async function (data, actions) {
          const order = await actions.order.capture();

          orderDetails.order_id = order.id;
          orderDetails.status = order.status;
          orderDetails.email = order.payer.email_address;
          orderDetails.given_name = order.payer.name.given_name;
          orderDetails.surname = order.payer.name.surname;

          placeOrder.value.placeOrder(orderDetails);

          router.push({ name: "Profile" });
        },

        onError: function (err) {
          console.log(err);
        },
      })
      .render("#paypal-button-container");
  }
};

const script = document.createElement("script");
script.src =
  "https://www.paypal.com/sdk/js?client-id=AR416IKRz9fv_7XYoBfvdyQAzYVpp3tFlDfFI5reE8MRfEvJ8coTZtRwW5ikQBXXW_1OSdWDy8zGkaqK&enable-funding=venmo&currency=USD";
script.addEventListener("load", initPayPalButton);
document.body.appendChild(script);
</script>

<style scoped>
.stick {
  position: relative !important;
  position: sticky !important;
  position: -webkit-sticky !important;
  top: 5rem !important;
  height: 100% !important;
}

@media (min-width: 576px) {
  .stick {
    top: 5rem !important;
    height: 100% !important;
  }
}

@media (min-width: 768px) {
  .stick {
    top: 5rem !important;
    height: 100% !important;
  }
}
</style>
