<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <h1>CRUD Workshop</h1>
        <router-link to="/create" class="btn btn-success">Create</router-link>
        <hr />
        <table class="table table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">ชื่อสินค้า</th>
              <th scope="col">ราคา</th>
              <th scope="col">แก้ไข</th>
              <td scope="col">ลบ</td>
            </tr>
          </thead>
          <tbody>
            <tr v-for="show in product" :key="show.id">
              <th scope="row">1</th>
              <td>{{show.name}}</td>
              <td>{{show.price}}</td>
              <td><router-link :to="'/'+show.id+'/edit'" class="btn btn-warning">แก้ไข</router-link></td>
              <td><button class="btn btn-danger">ลบ</button></td>
            </tr>
          </tbody>
        </table>
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
      product: []
    };
  },
  methods: {
    getProductList() {
      axios
        .get("http://103.74.254.140/api/product")
        .then(response => {
          this.product = response.data;
        })
        .catch(error => {
          console.log(error.response);
        });
    },
    Delete(id) {
      axios
        .delete("http://103.74.254.140/api/product/" + id)
        .then(response => {
          this.product = response.data;
        })
        .catch(error => {
          console.log(error.response);
        });
    }
  }
};
</script>
