<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <h1>Edit Product</h1>
          <label>Product Name</label>
          <input
            v-model="name"
            type="text"
            placeholder="Product Name"
            class="form-control"
          />
          <label>Product Price</label>
          <input
            v-model="price"
            type="number"
            placeholder="Product Price"
            class="form-control"
          />
          <button @click="Edit()" class="btn btn-warning form-control mt-3">
            Edit !!
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  mounted() {
    this.getProductInfo();
  },
  data() {
    return {
      name: "",
      price: ""
    };
  },
  methods: {
    getProductInfo() {
      axios
        .get("http://103.74.254.140//api/product/" + this.$route.params.id + "/edit")
        .then(response => {
          this.name = response.data.name;
          this.price = response.data.price;
        })
        .catach(error => {
          console.log(error.response);
        });
    },
    Edit() {
      axios
        .put("http://103.74.254.140//api/product/" + this.$route.params.id, {
          name: this.name,
          price: this.price
        })
        .then(response => {
          console.log(response);
          this.$router.push("/crud");
        })
        .catch(error=>{
          console.log(error.response);
        });
    }
  }
};
</script>
