<script setup>

import TabSportEpreuve from "@/components/tabSportEpreuve.vue";
import axios from "axios";


  axios.get("http://localhost:9007/epreuves").then(response => {

    //Gestion de la reponse
    const data = response.data.sort((a, b) => a.id - b.id);
    const divListEpreuve = document.getElementById("div-list-epreuve");

    let le = "";

    for (let i = 0; i < data.length; i++) {
      le += "<p>"+ data[i].libelle+"</p>" +
          "<button id='button-resultat-epreuve'>Resultat</button>"
    }
    divListEpreuve.innerHTML = le;
  })

</script>

<template>

  <div id="div-list-epreuve">

  </div>

</template>

<style scoped>

</style>