<template>

  <header id="header-menu">

  <router-link to="/">Accueil</router-link>
  <router-link to="/epreuves">Epreuves</router-link>
  <router-link to="/Dashboard">Dashboard</router-link>

  </header>
  <div id="div-view-router">

    <router-view></router-view>

  </div>
</template>

<script>

</script>

<style>

#header-menu{
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
}

#div-view-router{
  width: 85%;
  min-height: 100vh;
}

</style>