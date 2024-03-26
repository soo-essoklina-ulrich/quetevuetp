<template>
  <div>
    <nav class=" navbar-expand-lg bg-body-tertiary text-center">
      <!-- Lien pour afficher le composant ApiProjet -->
      <router-link :to="{ name: 'projet' }">Voir les projets</router-link> |

      <!-- Lien pour afficher le composant ApiCategorie -->
      <router-link :to="{ name: 'categorie' }">Voir les catégories</router-link>

    </nav>


    <!-- Affichage du composant correspondant à la sous-route -->
    <div class="container">
      <router-view/>
    </div>
  </div>

</template>

<script>


export default {
  name: 'APIViews',
  components: {

  }

}

</script>

<style scoped>
  nav {
    padding: 30px;
    text-align: center;
  }

  nav a {
    font-weight: bold;
    color: #2c3e50;
  }

  nav a.router-link-exact-active {
    color: #42b983;
  }
</style>