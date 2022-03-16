import { ref } from "vue";
import axiosClient from "../axios";
import { useToast } from "vue-toastification";
export default function useArticles() {
  const resources = ref([]);
  const orders = ref([]);
  const prices = ref([]);
  const errors = ref([]);
  const order = ref([]);

  const toast = useToast();

  const getResources = async () => {
    let response = await axiosClient.get("get-resources");
    resources.value = response.data.data;
  };

  const getApproximatePrice = async (data) => {
    errors.value = "";
    try {
      let response = await axiosClient.post("search-data", data);
      prices.value = response.data.data;
    } catch (e) {
      if (e.response.status === 422) {
        errors.value = e.response.data.errors;
      }
    }
  };

  const placePaperOrder = async (data) => {
    errors.value = "";
    try {
      let response = await axiosClient.post("place-order", data, {
        headers: { "content-type": "multipart/form-data" },
      });
      console.log(response);
    } catch (error) {
      if (error.response.status === 422) {
        errors.value = error.response.data.errors;
      }
    }
  };

  const getOrders = async () => {
    let response = await axiosClient.get("get_order");
    orders.value = response.data.data;
  };

  const getResourcesAndEditDetails = async (order_id) => {
    let response = await axiosClient.get("get-resources-details/" + order_id);
    resources.value = response.data.data;
  };

  const updatePaperOrder = async (data) => {
    errors.value = "";
    try {
      let response = await axiosClient.post("update-order", data, {
        headers: { "content-type": "multipart/form-data" },
      });
      toast.success(response.data.data.success, {
        timeout: 2000,
      });
    } catch (error) {
      if (error.response.status === 422) {
        errors.value = error.response.data.errors;
      }
    }
  };

  const getOrderDetails = async (order_id) => {
    let response = await axiosClient.get("get-order/" + order_id);
    order.value = response.data.data;
  };

  const deleteOrderFile = async (id) => {
    let response = await axiosClient.delete("delete-file/" + id);

    toast.success(response.data.data.success, {
      timeout: 2000,
    });
  };

  return {
    resources,
    prices,
    errors,
    orders,
    order,
    getResources,
    getApproximatePrice,
    placePaperOrder,
    getOrders,
    getResourcesAndEditDetails,
    updatePaperOrder,
    getOrderDetails,
    deleteOrderFile,
  };
}
