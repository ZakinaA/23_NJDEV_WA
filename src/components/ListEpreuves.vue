<script setup>

import TabSportEpreuve from "@/components/tabSportEpreuve.vue";
import axios from "axios";
import ResultTab from "@/components/ResultTab.vue";

function calculerAge(dateNaissance) {
  const dateNaissanceObj = new Date(dateNaissance);
  const dateActuelle = new Date();

  const anneeNaissance = dateNaissanceObj.getFullYear();
  const moisNaissance = dateNaissanceObj.getMonth();
  const jourNaissance = dateNaissanceObj.getDate();

  const anneeActuelle = dateActuelle.getFullYear();
  const moisActuel = dateActuelle.getMonth();
  const jourActuel = dateActuelle.getDate();

  let age = anneeActuelle - anneeNaissance;

  if (moisActuel < moisNaissance || (moisActuel === moisNaissance && jourActuel < jourNaissance)) {
    age--;
  }

  return age;
}
function getTabResult(id) {
  axios.get("http://127.0.0.1:9007/epreuve_athlete/"+id).then(response => {

    const data = response.data.sort((a, b) => a.place - b.place);

    const dataLength = Object.keys(data).length;

    // console.log('Réponse de la requête :', data);

    const tbodyresult = document.getElementById("tbody-result");
    const divBackgroundResultTab = document.getElementById("div-background-result-tab");

    let tr = "";

    for (let i = 0; i < dataLength; i++) {
      tr += "<tr>" +
          "          <td>"+data[i].athlete.nom+"</td>" +
          "          <td>"+data[i].athlete.prenom+"</td>" +
          "          <td>"+calculerAge(data[i].athlete.date_naissance)+"</td>" +
          "          <td>"+data[i].athlete.pays.libelle+"</td>" +
          "          <td>"+data[i].place+"</td>" +
          "        </tr>";
    }
    divBackgroundResultTab.style.display = "flex";
    tbodyresult.innerHTML = tr;
  })
      .catch(error => {
        // Gérer les erreurs ici
        console.error('Erreur lors de la requête :', error);
      });
}

axios.get("http://localhost:9007/epreuves").then(response => {

  //Gestion de la reponse
  const data = response.data.sort((a, b) => a.id - b.id);
  const divListAffichageEpreuve = document.getElementById("div-list-affichage-epreuve");


  for (let i = 0; i < data.length; i++) {
    const le = "<div class=\"div-content-epreuve\">\n" +
        "        <p>"+ data[i].libelle +"</p>\n" +
        "        <p class='btnTabresult' id='buttonResultat'>Resultat</p>\n" +
        "      </div>";
    divListAffichageEpreuve.innerHTML += le;
    const buttonResultat = document.getElementById("buttonResultat");
    buttonResultat.id = data[i].id;
    buttonResultat.style.color = "darkcyan";
  }
});

setTimeout(function () {
  const closeResult = document.getElementsByClassName("btnTabresult");
  console.log(closeResult);
  console.log(closeResult.length);
  for (let i = 0; i < closeResult.length; i++) {

    const id = closeResult[i].id;
    const buttonResultat = document.getElementById(id);

    buttonResultat.addEventListener("click", function () {
      getTabResult(id);
    });
  }
}, 500);

document.addEventListener("DOMContentLoaded", function () {
  const closeResult = document.getElementById("closeResult");
  closeResult.addEventListener("click", function () {
    const divBackgroundResultTab = document.getElementById("div-background-result-tab");
    divBackgroundResultTab.style.display = "none";
  });
});

</script>

<template>
  <result-tab/>

  <div id="div-list-epreuve">
    <div id="div-list-affichage-epreuve">



    </div>
  </div>


</template>

<style scoped>

</style>