<template>
  <div>
    <h1>Data Flask Projet</h1>
    <nav>
      <router-link to="/addp">Ajouter</router-link> |
      <router-link to="/listp">Liste</router-link>
    </nav>

    <router-view></router-view>

  </div>

</template>

<script>

export default {
  name: 'ApiProjet',

}
</script>

<style scoped>

</style>