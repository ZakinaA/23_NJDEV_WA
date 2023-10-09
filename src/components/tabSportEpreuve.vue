<script setup>
import axios from "axios";

function toggleDiv(divId) {
  console.log("EXEC")
  var div = document.getElementById(divId);
  if (div.style.display === 'none') {
    div.style.display = 'flex';
  } else {
    div.style.display = 'none';
  }
}

    axios.get('http://127.0.0.1:9007/epreuves')
    .then(response => {

      const data = response.data;
      console.log(data)

      const divcontainer = document.getElementById("div-container");
      const divSportcontent = document.getElementById("div-sport-content")


      const divContainerText =
          "<div class=\"div-item\" id=\"sport1\" @click=\"toggleDiv('sport1content')\">" +
          "      {{ sport_nom }}" +
          "      <span style=\"color: #f54454\" class=\"div-fleche\">▼</span>" +
          "    </div>";

      const divSportContentText =
          "<div class=\"div-sport-content\" id=\"sport1content\">" +
          "      {{ epreuve_nom }}" +
          "      <button class=\"button-result\">RESULTAT</button>" +
          "    </div>";

      divcontainer.innerHTML = divContainerText;
      divSportcontent.innerHTML = divSportContentText;

      //comment je peux récupérer des données d'une api sur ma webapp en vue js et enregistrer les information dans des variable avec axios ?

    })
    .catch(error => {
      // Gérer les erreurs ici
      console.error('Erreur lors de la requête API :', error);
    });

</script>

<template>
  <div class="div-container">



  </div>
</template>

<style scoped>
.div-container {
  display: flex;
  flex-direction: column;
}

.div-item {
  padding: 10px;
  border: 1px solid #ccc;
  background-color: #f9f9f9;
  margin-bottom: 5px;
}

.div-sport-content {
  display: none;
  padding: 10px;
  border: 1px solid #ccc;
  background-color: #f9f9f9;
}

.button-result{
  background-color: red;
  border: none;

}

</style>
