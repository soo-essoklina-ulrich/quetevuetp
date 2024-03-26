<script >
import axios from 'axios';

const url = 'http://127.0.0.1:8081/';
export default {
  name: "ListProjet",
  data() {
    return {
      donne: []
    }
  },
  mounted() {
    this.getDataFromApiP();
  },
  methods: {
    async getDataFromApiP() {
      await axios
          .get(url + 'charity-api/list-p')
          .then(value => {
            console.log(value)
            this.donne = value.data.projets
          })
          .catch(error => {
            console.log(error)
          })
    },
    getimagebyurlP(nom){
      return url + 'charity-api/static/img/' + nom
    }
  },
}
</script>

<template>
  <div>
    <h1>Liste des projets</h1>

    <table class="table table-hover">
      <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">libelle</th>
        <th scope="col">categorie</th>
        <th scope="col">image</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(item, index) in donne" :key="index">
        <th scope="row">{{index}}</th>
        <td>{{item.libelle}}</td>
        <td>{{item.categorie}}</td>
        <td> <img :src="getimagebyurl(item.image)" :alt="item.libelle" width="100" height="100"></td>
      </tr>

      </tbody>
    </table>

  </div>
</template>

<style scoped>
</style>