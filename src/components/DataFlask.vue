<template>
  <div>
    <h1>Data Flask</h1>
    <p>
      This is a data flask component.
    </p>
    <div class="card">
      <div class="card-body">

        <!-- Table with stripped rows -->
        <table class="table table-striped">
          <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">libelle</th>
            <th scope="col">description</th>
            <th scope="col">categorie</th>
            <th scope="col">image</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="(item, index) in donne" :key="index">
            <th scope="row">{{index}}</th>
            <td>{{item.libelle}}</td>
            <td>{{item.description}}</td>
            <td>{{item.categorie}}</td>
            <td> <img :src="getimagebyurl(item.image)" :alt="item.libelle" width="100" height="100"></td>
          </tr>

          </tbody>
        </table>
        <!-- End Table with stripped rows -->

      </div>
    </div>
  </div>
</template>

<script>

import axios from 'axios';

const url = 'http://127.0.0.1:8081/';
export default {
  name: 'DataFlask',
  data() {
    return {
      donne: []
    }
  },
  mounted() {
    this.getDataFromApi();
  },
  methods: {
    async getDataFromApi() {
      await axios
          .get(url + 'charity-api/data')
          .then(value => {
            this.donne = value.data.projets
          })
          .catch(error => {
            console.log(error)
          })
    },
    getimagebyurl(nom){
        return url + 'charity-api/static/img/' + nom
    }
  },
  props: {}
}
</script>

<style scoped>

</style>