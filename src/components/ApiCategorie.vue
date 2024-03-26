<template>
  <div>
    <h1>Data Flask Categorie</h1>
    <nav>
      <router-link to="/addc">Ajouter</router-link> |
      <router-link to="/listc">Liste</router-link>
    </nav>

    <router-view></router-view>
  </div>
</template>

<script>


export default {
  name: 'ApiCategories',

}
</script>

<style scoped>

</style>