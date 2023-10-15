<script setup>

import axios from "axios";
import AdminPanelResultatModif from "@/components/AdminPanelResultatModif.vue";


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
      console.log(optionId + " " + data[i].epreuve.id);
      if (optionId == data[i].epreuve.id){
        tr += "        <tr>\n" +
            "          <th>"+ data[i].athlete.pays.libelle +"</th>\n" +
            "          <th>"+ data[i].athlete.nom + " "+ data[i].athlete.prenom +"</th>\n" +
            "          <th>"+ data[i].place +"</th>\n" +
            "          <th><a class='btnModifResult' id='athlete" + data[i].athlete.id +"'>Resultat</a></th>\n" +
            "        </tr>";
      }
    }
    tbodyTableauAthleteResultat.innerHTML = tr;
    setTimeout(function () {
      const btnModifResult = document.getElementsByClassName("btnModifResult");
      console.log(btnModifResult);
      console.log(btnModifResult.length);
      for (let i = 0; i < btnModifResult.length; i++) {

        const id = btnModifResult[i].id;
        const buttonResultat = document.getElementById(id);

        buttonResultat.addEventListener("click", function () {
          getTabResult(id);
        });
      }
    }, 100);
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
