<script setup>

import axios from "axios";

const boutonAjouter = document.getElementById('bouton-ajouter-epreuve');

axios.get("http://localhost:9007/sports").then(response => {

  const data = response.data.sort((a, b) => a.id - b.id);
  const selectSportAffichage = document.getElementById("list-epreuve-sport");

  for(let i = 0; i < data.length; i++){
    const le = "<option id='option-select-sport' value="+parseInt(data[i].id)+">"+data[i].nom+"</option>";
    selectSportAffichage.innerHTML += le;
  }

});

function ajoutEpreuve(){
  let insertEpreuve = 0;

  const apiUrl = 'http://localhost:9007/epreuve';

  const textAreaDateDebut = document.getElementById("textarea-insert-date-debut-epreuve");
  const textAreaDateFin = document.getElementById("textarea-insert-date-fin-epreuve");
  const textAreaLibelle= document.getElementById("text-area-insert-libelle-epreuve");
  const selectSportAffichage = document.getElementById("list-epreuve-sport");
  const messageInsertionvalider = document.getElementById("message-donner-ajouter");

  const le = "<p> Donner Enregistrer</p>";
  const er = "<p> Enregistrement échoué</p>";

  const date_Debut = textAreaDateDebut.value;
  const date_Fin = textAreaDateFin.value;
  const libelle = textAreaLibelle.value;

  const selectedOption = selectSportAffichage.options[selectSportAffichage.selectedIndex];
  const sport = selectedOption.value;

  console.log(sport);

  const dataToInsert = {
    dateDebut: date_Debut,
    dateFin: date_Fin,
    libelle: libelle,
    sport: {
      id: sport
    }
  };

  axios.post(apiUrl, dataToInsert).then(response => {
    console.log('Insertion réussie !');
    console.log(response.data);

    messageInsertionvalider.innerHTML = le;
    setTimeout(function () {
      messageInsertionvalider.innerHTML = "";
    }, 5000);

    insertEpreuve = 1;

  }).catch(error => {

    messageInsertionvalider.innerHTML = er;
    setTimeout(function () {
      messageInsertionvalider.innerHTML = "";
    }, 5000);

    console.error('Erreur lors de la requête Axios :', error);

    insertEpreuve = -1;
  });

  return insertEpreuve;
}

</script>

<template>
  <div id="div-view-epreuve-ajout">

    <h2 id="titre-form-ajout-epreuve">Formulaire d'ajout Epreuve :</h2>

    <div class="nom-epreuve">
      <h3 class="nom-epreuve-titre">Nom de l'épreuve : </h3>
      <input id="text-area-insert-libelle-epreuve">
    </div>

    <div class="date-debut-epreuve">
      <h3 class="date-debut-epreuve-titre">Date du début de l'épreuve : </h3>
      <input id="textarea-insert-date-debut-epreuve" type="date">
    </div>

    <div class="date-fin-epreuve">
      <h3 class="date-fin-epreuve-titre">Date du fin de l'épreuve : </h3>
      <input id="textarea-insert-date-fin-epreuve" type="date">
    </div>

    <div class="sport-epreuve">
      <h3 class="sport-epreuve-titre">Sport de l'épreuve : </h3>
      <select name="list-sport" id="list-epreuve-sport">

      </select>
    </div>

    <p id="message-donner-ajouter"></p>
    <button id="bouton-ajouter-epreuve" @click="ajoutEpreuve">Ajouter</button>

  </div>
</template>

<style scoped>

#div-view-epreuve-ajout{

  margin-top: 20px;
}

h2{
  color: white;
}

h3{
  color: white;
}

#message-donner-ajouter{
  color: white;

}

#div-view-epreuve-ajout{
  display: block;
}

#bouton-ajouter-epreuve{
  background-color: #7283ED;

  text-align: center;

  width: 75px;
  height: 20px;
  border: none;

  margin-left: 1140px;
}

#bouton-ajouter-epreuve:active{
  background-color: white;
  color: black;

}

input{
  margin: 10px;

  width: 1198px;
  height: 25px;
  left: 29px;
  right: -29px;
  top: 482px;
  bottom: -458px;

  background: rgb(44, 48, 52);

  color: white;

  border: none;
}

select{
  margin: 10px;

  width: 1198px;
  height: 25px;
  left: 29px;
  right: -29px;
  top: 482px;
  bottom: -458px;

  background: rgb(44, 48, 52);

  color: white;

  border: none;
}



</style>