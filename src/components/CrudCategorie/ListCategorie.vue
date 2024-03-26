<script>
import axios from "axios";

const url = 'http://127.0.0.1:8081/';
export default {
  name: "ListCategorie",
  data(){
    return{
      donne: []
    }
  },
  mounted(){
    this.getDataFromApiC();
  },
  methods: {
    async getDataFromApiC() {
      await axios
          .get(url + 'charity-api/list-c')
          .then(value => {
            console.log(value)
            this.donne = value.data.projets
          })
          .catch(error => {
            console.log(error)
          })
    },
    getimagebyurlC(nom){
      return url + 'charity-api/static/img/' + nom
    }
  }
}
</script>

<template>
  <div>
    <h1>Liste des catégories</h1>

    <table class="table table-hover">
      <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Libelle</th>
        <th scope="col">Desciption</th>
        <th scope="col">Action</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(item , index) in donne" :key ="index">
        <th scope="row">1</th>
        <td>{{item.libelle}}</td>
        <td>{{item.desciption}}</td>
        <td></td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>

</style>