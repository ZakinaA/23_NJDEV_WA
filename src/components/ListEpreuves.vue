<script setup>

import TabSportEpreuve from "@/components/tabSportEpreuve.vue";
import axios from "axios";


  axios.get("http://localhost:9007/epreuves").then(response => {

    //Gestion de la reponse
    const data = response.data.sort((a, b) => a.id - b.id);
    const divListAffichageEpreuve = document.getElementById("div-list-affichage-epreuve");


    for (let i = 0; i < data.length; i++) {
      const le = "<p>"+ data[i].libelle+"</p>" +
          "<button class='btn-tabresult' id='button-resultat'>Resultat</button>";
      divListAffichageEpreuve.innerHTML += le;
      const buttonResultat = document.getElementById("button-resultat");
      buttonResultat.id = data[i].id;


    }

  })



</script>

<template>

  <div id="div-list-epreuve">
    <div id="div-list-affichage-epreuve">

    </div>
  </div>

</template>

<style scoped>

</style>