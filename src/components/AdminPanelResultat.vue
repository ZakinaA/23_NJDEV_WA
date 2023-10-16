<script setup>

import axios from "axios";
import AdminPanelResultatModif from "@/components/AdminPanelResultatModif.vue";
import {isReadonly} from "vue";


function getSport() {
  axios.get("http://127.0.0.1:9007/sports").then(response => {

    const data = response.data.sort((a, b) => a.nom - b.nom);

    const dataLength = Object.keys(data).length;

    // console.log('Réponse de la requête :', data);

    const Sport = document.getElementById("Sport");

    let tr = "";

    for (let i = 0; i < dataLength; i++) {
      tr += "<option value=\""+ data[i].id +"\">"+ data[i].nom +"</option>";
    }
    Sport.innerHTML = tr;
  })
      .catch(error => {
        // Gérer les erreurs ici
        console.error('Erreur lors de la requête :', error);
      });
}

function getEpreuve() {
  axios.get("http://127.0.0.1:9007/epreuves").then(response => {

    const data = response.data.sort((a, b) => a.libelle - b.libelle);

    const dataLength = Object.keys(data).length;

    // console.log('Réponse de la requête :', data);

    const epreuve = document.getElementById("Epreuve");

    let tr = "";
    const sport = document.getElementById("Sport");

    const selectedOption = sport.options[sport.selectedIndex];
    const optionId = selectedOption.value;

    for (let i = 0; i < dataLength; i++) {
      if (optionId == data[i].sport.id){
        tr += "<option value=\""+ data[i].id +"\">"+ data[i].libelle +"</option>";
      }
    }
    epreuve.innerHTML = tr;
  })
      .catch(error => {
        // Gérer les erreurs ici
        console.error('Erreur lors de la requête :', error);
      });
}

function showModif(epreuveId, athleteId) {
  const divBackgroundResultModif = document.getElementById("div-background-result-modif");
  const h3Modif = document.getElementById("h3-modif");
  const position = document.getElementById("position");



  axios.get("http://127.0.0.1:9007/resultatAthlete/"+epreuveId).then(response => {

    const data = response.data.sort((a, b) => a.athlete.nom - b.athlete.nom);

    const dataLength = Object.keys(data).length;

    for (let i = 0; i < dataLength; i++) {
      if ("athlete"+data[i].athlete.id === athleteId){
        console.log(data[i]);
        h3Modif.innerText = "Modification de " + data[i].athlete.nom + " " + data[i].athlete.prenom;
        if (data[i].place === null){
          position.value = 0;
        }else{
          position.value = data[i].place;
        }
        divBackgroundResultModif.style.display = "flex";

        const closeResult = document.getElementById("closeResult");
        console.log(closeResult);
        closeResult.addEventListener("click", function () {
          const divBackgroundResultModif = document.getElementById("div-background-result-modif");
          console.log(divBackgroundResultModif);
          divBackgroundResultModif.style.display = "none";
        });
        const submitResult = document.getElementById("submitResult");
        submitResult.addEventListener("click", function () {
          saveResult(data[i], position.value);
          setTimeout(function (){
            getAthlete();
            divBackgroundResultModif.style.display = "none";
          },100);
        });

      }
    }
  })
}

function saveResult(data, place) {
  const currentDate = new Date().toISOString().split('T')[0];

  axios.put("http://127.0.0.1:9007/resultatAthlete/"+data.id, {athlete: {id:data.athlete.id}, epreuve:{id:data.epreuve.id}, place: place, dateResultat:currentDate}).then(response => {
    console.log('Mise à jour réussie !', response.data);
  }).catch(error => {
    console.error('Erreur lors de la mise à jour :', error);
  });
}

function getAthlete() {

  const tbodyTableauAthleteResultat = document.getElementById("tbody-tableau-athlete-resultat");
  tbodyTableauAthleteResultat.innerHTML = "";
  axios.get("http://127.0.0.1:9007/resultsAthletes").then(response => {

    const data = response.data.sort((a, b) => a.athlete.nom - b.athlete.nom);

    const dataLength = Object.keys(data).length;

    // console.log('Réponse de la requête :', data);

    const epreuve = document.getElementById("Epreuve");

    let tr = "";
    const tbodyTableauAthleteResultat = document.getElementById("tbody-tableau-athlete-resultat");

    const selectedOption = epreuve.options[epreuve.selectedIndex];
    const optionId = selectedOption.value;

    for (let i = 0; i < dataLength; i++) {
      if (optionId == data[i].epreuve.id){
        tr += "        <tr>\n" +
            "          <th>"+ data[i].athlete.pays.libelle +"</th>\n" +
            "          <th>"+ data[i].athlete.nom + " "+ data[i].athlete.prenom +"</th>\n" +
            "          <th>"+ data[i].place +"</th>\n" +
            "          <th><a class='btnModifResult' value='"+data[i].athlete.id+"' id='athlete" + data[i].athlete.id +"'>Resultat</a></th>\n" +
            "        </tr>";
      }
    }
    tbodyTableauAthleteResultat.innerHTML = tr;
    setTimeout(function () {
      const btnModifResult = document.getElementsByClassName("btnModifResult");
      for (let i = 0; i < btnModifResult.length; i++) {
        const buttonResultat = document.getElementById(btnModifResult[i].id);
        const epreuve = document.getElementById("Epreuve");
        const selectedOption = epreuve.options[epreuve.selectedIndex];
        const epreuveId = selectedOption.value;

        buttonResultat.addEventListener("click", function () {
          showModif(epreuveId,btnModifResult[i].id);
        });
      }
    }, 10);
  })
      .catch(error => {
        // Gérer les erreurs ici
        console.error('Erreur lors de la requête :', error);
      });
}



setTimeout(function () {
  const sport = document.getElementById("Sport");
  sport.addEventListener("change", function() {
    getEpreuve();
    setTimeout(function (){
      getAthlete();
    },100);
  });

  const epreuve = document.getElementById("Epreuve");
  epreuve.addEventListener("change", function() {
    getAthlete();
  });

  getSport();
  getEpreuve();
  getAthlete();
},1);


</script>

<template>
  <div id="div-view-resultat">
    <div>
      <label for="Sport">Sport :</label>
      <select name="Sport" id="Sport">
        <option value="TEST">TEST</option>
      </select>
    </div>
    <div>
      <label for="Epreuve">Epreuve :</label>
      <select name="Epreuve" id="Epreuve">
        <option value="TEST">TEST</option>
      </select>
    </div>

    <div id="table-container">
      <table>
        <thead>
          <tr>
            <th>Nation</th>
            <th>Nom Prénom</th>
            <th>Position</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody id="tbody-tableau-athlete-resultat">

        </tbody>
      </table>
    </div>
    <AdminPanelResultatModif/>
  </div>
</template>

<style scoped>
/* tableau modif */
table {
  border-collapse: collapse;
  width: 100%;
}

th, td {
  padding: 8px;
  text-align: center;
}

tr:nth-child(even) {
  background-color: var(--color-background-mute);
}

thead {
  background-color: var(--color-background-mute);
  color: var(--color-text);
}

tbody {
  max-height: 300px;
  overflow-y: scroll;
}

#table-container {
  max-height: 300px;
  overflow-y: auto;
}
</style>
