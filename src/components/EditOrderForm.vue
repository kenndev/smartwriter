<template>
  <section
    id="content-2"
    class="bg-whitesmoke wide-60 pt-50 content-section division"
  >
    <div class="container">
      <div class="row d-flex align-items-center">
        <form
          name="myForm"
          class=""
          @submit.prevent="updateOrder"
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
              />
            </div>
          </div>

          <!--Paper instructions Text area -->
          <div class="row mb-3">
            <label
              for="exampleFormControlTextarea1"
              class="col-sm-3 col-form-label"
              >Paper Instructions</label
            >
            <div class="col-sm-9">
             <ckeditor :editor="ClassicEditor" v-model="form.paper_instruction" :config="editorConfig"></ckeditor>
              <!-- <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                v-model="form.paper_instruction"
                rows="3"
                required
              ></textarea> -->
            </div>

          </div>

          <!--Upload Materials -->
          <div class="row mb-12 mt-10">
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
                ><p v-for="item in form.files" :key="item">
                  {{ item.name }}
                </p></span
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
                /><label
                  class="notApplicable-label four col"
                  for="notApplicable"
                  >Not Applicable</label
                >
              </section>
            </div>
          </div>

          <hr />

          <div
            class="col-md-12 form-btn d-flex flex-row justify-content-center"
          >
            <button
              type="sumbit"
              class="w-50 btn btn-md btn-rose tra-black-hover submit"
            >
              Update Order
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup>
import OrderPageForm from "./OrderPageForm.vue";
import { reactive, onMounted } from "vue";
import router from "../router";
import { useRoute } from "vue-router";
import Multiselect from "@vueform/multiselect";
import useArticles from "../composable/articles";
import DropZone from "./DropZone.vue";
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const { resources, getResourcesAndEditDetails, updatePaperOrder } = useArticles();

const editorConfig = reactive({
  
})

const form = reactive({
  type_of_paper: "",
  topic: "",
  paper_instruction: "",
  paper_format: "",
  files: "",
});

const getAllResources = async () => {
  await getResourcesAndEditDetails(useRoute().query.order_id);
  form.type_of_paper = resources.value.order.type_paper;
  form.topic = resources.value.order.topic;
  form.paper_instruction = resources.value.order.paper_instruction;
  form.paper_format = resources.value.order.paper_format;
};

//On drop images
const drop = (event) => {
  form.files = event.dataTransfer.files;
};
//On select files using button
const selectedFile = () => {
  form.files = document.querySelector(".dropzoneFile").files;
};
//On change asign files to files reactive
const onChange = (data) => {
  form.files = data;
};

//Update Order
const updateOrder = async () => {
  const formData = new FormData();
  for (const i of Object.keys(form.files)) {
    formData.append("files[]", form.files[i]);
  }
  formData.append("type_of_paper", form.type_of_paper);
  formData.append("paper_format", form.paper_format);
  formData.append("paper_instruction", form.paper_instruction);
  formData.append("topic", form.topic);
  formData.append("order_id", resources.value.order.order_id);
  await updatePaperOrder(formData);

  router.push({ name: "Profile" });
};

onMounted(() => {
  getAllResources();
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
