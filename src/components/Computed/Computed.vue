<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <h1>Show Product Computed</h1>
          <input v-model="search" type="text" placeholder="Search By Name" />
          <hr />
        </div>
        <div class="col-md-3" v-for="show in Filter" :key="show.id">
          <div class="card" style="width: 18rem;">
            <div class="card-body">
              <h5 class="card-title">{{ show.name }}</h5>
              <p class="card-text">{{ show.price }}</p>
              <router-link :to="'/show/info/' + show.id" class="btn btn-primary form-control">Info</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  mounted() {
    this.getProductList();
  },
  data() {
    return {
      search: "",
      productList: []
    };
  },
  methods: {
    getProductList() {
      axios
        .get("/api/product")
        .then(response => {
          this.productList = response.data;
        })
        .catch(error => {
          console.log(error.response);
        });
    }
  },
  computed: {
    Filter() {
      return this.productList.filter(show => {
        return show.name.includes(this.search);
      });
    }
  }
};
</script>
