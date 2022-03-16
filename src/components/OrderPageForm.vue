<template>
  <form
    name="myForm"
    class=""
    @submit.prevent="placeOrder"
    enctype="multipart/form-data"
  >
    <!-- Type of Paper Select Options -->
    <div class="row mb-3">
      <label for="inputEmail3" class="col-sm-3 col-form-label"
        >Type of paper<span class="must-fill">*</span></label
      >
      <div class="col-sm-9">
        <Multiselect
          v-model="form.type_of_paper"
          :label="'paper_type'"
          :track-by="'paper_type'"
          :valueProp="'id'"
          :searchable="true"
          :options="resources.paper_type"
          :maxHeight="500"
          placeholder="Select Type of Paper"
          @select="emitEvent"
        />
      </div>
    </div>

    <!--Academic Level Select Options -->
    <div class="row mb-3">
      <label for="inputEmail3" class="col-sm-3 col-form-label"
        >Academic level<span class="must-fill">*</span></label
      >
      <div class="col-sm-9">
        <Multiselect
          v-model="form.academic_level"
          :label="'academic_level'"
          :track-by="'academic_level'"
          :valueProp="'id'"
          :searchable="true"
          :options="resources.academic_level"
          placeholder="Select Type of Paper"
          @select="emitEvent"
        />
      </div>
    </div>

    <!--Discipline Select Options -->
    <div class="row mb-3">
      <label for="inputEmail3" class="col-sm-3 col-form-label"
        >Discipline</label
      >
      <div class="col-sm-9">
        <Multiselect
          v-model="form.discipline"
          :label="'discipline'"
          :track-by="'discipline'"
          :valueProp="'id'"
          :searchable="true"
          :options="resources.disciplines"
          placeholder="Select a Discipline"
          @select="emitEvent"
        />
      </div>
    </div>

    <!--Topic Input text -->
    <div class="row mb-3">
      <label for="TopIc" class="col-sm-3 col-form-label"
        >Topic<span class="must-fill">*</span></label
      >
      <div class="col-sm-9">
        <input
          id="TopIc"
          type="text"
          class="form-control"
          name="topic"
          v-model="form.topic"
          required
          aria-label="TopIc"
          @input="emitEvent"
        />
      </div>
    </div>

    <!--Paper instructions Text area -->
    <div class="row mb-3">
      <label for="exampleFormControlTextarea1" class="col-sm-3 col-form-label"
        >Paper Instructions</label
      >
      <div class="col-sm-9">
        <textarea
          class="form-control"
          id="exampleFormControlTextarea1"
          v-model="form.paper_instruction"
          rows="3"
          required
        ></textarea>
      </div>
    </div>

    <!--Upload Materials -->
    <div class="row mb-3">
      <label for="inputEmail3" class="col-sm-3 col-form-label"
        >Additional Materials</label
      >
      <div class="col-sm-9">
        <DropZone
          @drop.prevent="drop"
          @change="selectedFile"
          name="imagesArray"
        />
        <!-- <DropZone @drop.prevent="drop" @chooseImages="onChange" /> -->
        <span class="file-info"
          ><p v-for="item in form.files" :key="item">{{ item.name }}</p></span
        >
      </div>
    </div>

    <!--Paper format radio button -->
    <div class="row mb-3">
      <label for="inputEmail3" class="col-sm-3 col-form-label"
        >Paper Format</label
      >
      <div class="col-sm-9 radioButtons">
        <section class="plan cf">
          <input
            type="radio"
            name="paper_format"
            id="apa"
            value="Apa"
            v-model="form.paper_format"
            checked
          /><label class="apa-label four col" for="apa">APA</label>
          <input
            type="radio"
            name="paper_format"
            id="chicago"
            value="Chicago/ Turabian"
            v-model="form.paper_format"
          /><label class="chicago-label four col" for="chicago"
            >Chicago/ Turabian</label
          >
          <input
            type="radio"
            name="paper_format"
            id="mla"
            value="MLA"
            v-model="form.paper_format"
          /><label class="mla-label four col" for="mla">MLA</label>
          <input
            type="radio"
            name="paper_format"
            id="notApplicable"
            value="Not Applicable"
            v-model="form.paper_format"
          /><label class="notApplicable-label four col" for="notApplicable"
            >Not Applicable</label
          >
        </section>
      </div>
    </div>

    <!--Deadline radio buttons -->
    <div class="row mb-3">
      <label for="inputEmail3" class="col-sm-3 col-form-label"
        >Deadline<span class="must-fill">*</span></label
      >
      <div class="col-sm-9 radioButtons">
        <section class="plan cf">
          <div class="col" v-for="item in resources.deadlines" :key="item.id">
            <input
              :checked="checkedMe(item.id)"
              type="radio"
              name="deadline"
              :id="item.deadline"
              :value="item.id"
              v-model="form.dead_line"
              @change="emitEvent"
            />
            <label class="deadline-label four col" :for="item.deadline">{{
              item.deadline
            }}</label>
          </div>
        </section>
      </div>
    </div>

    <!--Number of pages -->
    <div class="row mb-3">
      <label for="inputNumberOfPages" class="col-sm-3 col-form-label"
        >Number of Pages<span class="must-fill">*</span></label
      >
      <div class="col-sm-9">
        <div class="input-group">
          <button
            @click="
              form.no_ofpages > 1 ? form.no_ofpages-- : '';
              emitEvent();
            "
            type="button"
            class="input-group-text"
          >
            -
          </button>
          <input
            type="number"
            class="form-control"
            id="inputNumberOfPages"
            required
            v-model="form.no_ofpages"
            @input="emitEvent"
          />
          <button
            type="button"
            @click="
              form.no_ofpages++;
              emitEvent();
            "
            class="input-group-text"
          >
            +
          </button>
        </div>
      </div>
    </div>

    <!--Number of sources -->
    <div class="row mb-3">
      <label for="inputNumberOfSources" class="col-sm-3 col-form-label"
        >Number of sources</label
      >
      <div class="col-sm-9">
        <div class="input-group">
          <button
            @click="form.no_of_sources > 0 ? form.no_of_sources-- : ''"
            type="button"
            class="input-group-text"
          >
            -
          </button>
          <input
            type="number"
            class="form-control"
            id="inputNumberOfSources"
            required
            v-model="form.no_of_sources"
          />
          <button
            type="button"
            @click="form.no_of_sources++"
            class="input-group-text"
          >
            +
          </button>
        </div>
      </div>
    </div>

    <!--Number of charts -->
    <div class="row mb-3">
      <label for="inputNumberOfCharts" class="col-sm-3 col-form-label"
        >Number of charts</label
      >
      <div class="col-sm-9">
        <div class="input-group">
          <button
            @click="form.no_of_charts > 0 ? form.no_of_charts-- : ''"
            type="button"
            class="input-group-text"
          >
            -
          </button>
          <input
            type="number"
            class="form-control"
            id="inputNumberOfCharts"
            required
            v-model="form.no_of_charts"
          />
          <button
            type="button"
            @click="form.no_of_charts++"
            class="input-group-text"
          >
            +
          </button>
        </div>
      </div>
    </div>

    <!--Power point slides -->
    <div class="row mb-3">
      <label for="inputNumberOfSlides" class="col-sm-3 col-form-label"
        >Powerpoint Slides</label
      >
      <div class="col-sm-9">
        <div class="input-group">
          <button
            @click="
              form.no_of_power_point_slides > 0
                ? form.no_of_power_point_slides--
                : ''
            "
            type="button"
            class="input-group-text"
          >
            -
          </button>
          <input
            type="number"
            class="form-control"
            id="inputNumberOfSlides"
            required
            v-model="form.no_of_power_point_slides"
          />
          <button
            type="button"
            @click="form.no_of_power_point_slides++"
            class="input-group-text"
          >
            +
          </button>
        </div>
      </div>
    </div>

    <hr />

    <!-- <div class="col-md-12 form-btn d-flex flex-row justify-content-center">
      <button
        type="sumbit"
        class="w-50 btn btn-md btn-rose tra-black-hover submit"
      >
        Place Order
      </button>
    </div> -->
  </form>
</template>

<script setup>
import { reactive, ref, onMounted, defineEmits } from "vue";
import { useRoute } from "vue-router";
import router from "../router";
import Multiselect from "@vueform/multiselect";
import useArticles from "../composable/articles";
import DropZone from "./DropZone.vue";
import store from "../store";

//Instatiation of variables
const academicSelectArry = ref([]);
const paperTypeSelectArry = ref([]);
const deadlineSelectArry = ref([]);
const {
  resources,
  prices,
  getResources,
  getApproximatePrice,
  placePaperOrder,
} = useArticles();
const no_of_pages = ref(1);
const no_of_sources = ref(0);
const no_of_charts = ref(0);
const no_of_power_point_slides = ref(0);

const typeOfPaper = ref();
const academicLevel = ref();
const deadLine = ref();
const pages = ref();
const user = ref([]);
//Emit event to refresh price div
const emit = defineEmits(["refreshPriceDiv"]);
//Form Object
const form = reactive({
  type_of_paper: "",
  academic_level: "",
  dead_line: "",
  no_ofpages: "",
  topic: "",
  paper_instruction: "",
  paper_format: "Apa",
  no_of_sources: no_of_sources.value,
  no_of_charts: no_of_charts.value,
  no_of_power_point_slides: no_of_power_point_slides.value,
  discipline: "",
  price: "",
  files: "",
  price_per_page: "",
});

let dropzoneFile = ref("");

//get academic deadline papertypes from api
const getRes = async () => {
  await getResources();
};
//On drop images
const drop = (event) => {
  form.files = event.dataTransfer.files;
};
//On select files using button
const selectedFile = () => {
  form.files = document.querySelector(".dropzoneFile").files;
};
const onChange = (data) => {
  form.files = data;
};

const checkedMe = (deadline) => {
  if (deadline == form.dead_line) {
    return "checked";
  }
};

function validateForm() {
  let x = form.topic;
  if (x == "") {
    alert("Topic must be filled out");
    return false;
  } else {
    return true;
  }
}

//Place Order and send to API
const placeOrder = async (orderDetails) => {
  console.log(orderDetails);
  if (!store.state.user.token) {
    router.push({ name: "Login" });
  } else {
    const formData = new FormData();
    for (const i of Object.keys(form.files)) {
      formData.append("files[]", form.files[i]);
    }
    formData.append("academic_level", form.academic_level);
    formData.append("type_of_paper", form.type_of_paper);
    formData.append("dead_line", form.dead_line);
    formData.append("no_ofpages", form.no_ofpages);
    formData.append("topic", form.topic);
    formData.append("paper_instruction", form.paper_instruction);
    formData.append("paper_format", form.paper_format);
    formData.append("no_of_sources", form.no_of_sources);
    formData.append("no_of_charts", form.no_of_charts);
    formData.append("no_of_power_point_slides", form.no_of_power_point_slides);
    formData.append("price", form.price);
    formData.append("discipline", form.discipline);
    formData.append("order_id", orderDetails.order_id);
    formData.append("status", orderDetails.status);
    formData.append("email", orderDetails.email);
    formData.append("given_name", orderDetails.given_name);
    formData.append("surname", orderDetails.surname);
    formData.append("price_per_page", form.price_per_page);
    formData.append("user_id", form.price_per_page);

    await placePaperOrder(formData);
  }
};

//Emit event to parent Order Page
const emitEvent = async () => {
  await getApproximatePrice(form);
  form.price = prices.value[0].price * form.no_ofpages;
  form.price_per_page = prices.value[0].price;
  emit("refreshPriceDiv", resources, prices.value[0].price);
};

onMounted(() => {
  getRes();
  typeOfPaper.value = useRoute().query.paperType;
  academicLevel.value = useRoute().query.academicLevel;
  deadLine.value = useRoute().query.deadLine;
  pages.value = useRoute().query.pages;

  form.no_ofpages = pages.value >= 1 ? pages.value : 1;
  form.type_of_paper = typeOfPaper.value >= 1 ? typeOfPaper.value : 1;
  form.academic_level = academicLevel.value >= 1 ? academicLevel.value : 1;
  form.dead_line = deadLine.value >= 1 ? deadLine.value : 1;
  emitEvent();
});

defineExpose({
  placeOrder,
  foRM: form,
  validateForm,
});
</script>

<style scoped>
.multiselect-options {
  max-height: 300px !important;
}
.file-info {
  padding-top: 10px;
  margin-top: 32px !important;
}

.input-group {
  max-width: 30%;
}
.must-fill {
  color: #ff1f59;
}

.four {
  width: auto;
}

/* COLUMNS */

.col {
  display: block;
  float: left;
  margin: 1% 0 1% 1.6%;
}

.col:first-of-type {
  margin-left: 0;
}

/* CLEARFIX */

.cf:before,
.cf:after {
  content: " ";
  display: table;
}

.cf:after {
  clear: both;
}

.cf {
  *zoom: 1;
}

.radioButtons .plan input,
.form .payment-plan input,
.form .payment-type input {
  display: none;
}

.radioButtons label {
  padding: 6px 10px;
  position: relative;
  color: #fff;
  background-color: #aaa;
  text-align: center;
  display: block;
  cursor: pointer;
  border: 3px solid transparent;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  border-radius: 3px;
}

.radioButtons .plan input:checked + label,
.form .payment-plan input:checked + label,
.form .payment-type input:checked + label {
  border: 3px solid #333;
  background-color: #ff1f59;
}

.radioButtons .plan input:checked + label:after,
form .payment-plan input:checked + label:after,
.form .payment-type input:checked + label:after {
  content: "\2713";
  width: 20px;
  height: 20px;
  line-height: 15px;
  border-radius: 100%;
  border: 2px solid #333;
  background-color: #ff1f59;
  z-index: 999;
  position: absolute;
  top: -10px;
  right: -10px;
}
</style>
<style src="@vueform/multiselect/themes/default.css"></style>
