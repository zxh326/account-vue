<template>
  <div>
    <li v-for="type in types">
        {{type.type}}
        {{type.count}}
    </li>
    {{pay}}{{types}}
  </div>
</template>



<script>
import axios from "axios";
axios.defaults.withCredentials = true;
export default {
  name: "count",
  data() {
    return {
      pay: [],
      types: []
    };
  },
  created() {
    axios.get("/count/pay").then(resp => {
      this.pay = resp.data;
    });
    axios.get("/count/type").then(resp => {
      this.types = resp.data;
    });
  }
};
</script>
