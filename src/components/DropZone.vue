<template>
  <div
    @dragenter.prevent="toggleActive"
    @dragleave.prevent="toggleActive"
    @dragover.prevent
    @drop.prevent="toggleActive"
    :class="{ 'active-dropzone': active }"
    class="dropzone"
  >
    <span>Drag and Drop Files</span>
    <span>OR</span>
    <label for="dropzoneFile">Select Files</label>
    <input
      type="file"
      id="dropzoneFile"
      class="dropzoneFile"
      name="imagesArray"
      multiple
    />
  </div>
</template>

<script setup>
import { ref, defineEmits } from "vue";

const emit = defineEmits(["chooseImages"]);
const active = ref(false);

const toggleActive = () => {
  active.value = !active.value;
};

</script>

<style>
.dropzone {
  width: auto;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 2px dashed #ff1f59;
  background-color: #fff;
  transition: 0.3s ease all;
}
.dropzone label {
  padding: 8px 12px;
  margin-bottom: 5px;
  color: #fff;
  background-color: #ff1f59;
  border-radius: 4px;
  transition: 0.3s ease all;
}

.dropzone label:hover {
  background-color: #fff;
  border: 2px solid #ff1f59;
  color: #ff1f59;
}

.dropzone input {
  display: none;
}

.active-dropzone {
  color: #fff;
  border-color: #fff;
  background-color: #109d87;
}

.active-dropzone label {
  background-color: #fff;
  color: #109d87;
}
</style>
