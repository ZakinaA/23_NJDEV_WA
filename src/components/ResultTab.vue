<script setup>
import axios from "axios";

axios.get("http://127.0.0.1:9007/epreuve_athlete/64")
    .then(response => {
      // Gérer la réponse ici
      const data = response.data;

      const epreuveLength = Object.keys(data.epreuve).length;
      const athleteLength = Object.keys(data.athlete).length;

      console.log('Réponse de la requête :', data);

      const tbodyresult = document.getElementById("tbody-result");

      for (let i = 0; i < athleteLength; i++) {

        console.log(data.athlete.nom);
      }

      const tr = "<tr>" +
          "          <td>AGBEGNENOU</td>" +
          "          <td>Clarisseo</td>" +
          "          <td>31</td>" +
          "          <td>FRANCE</td>" +
          "        </tr>";

      tbodyresult.innerHTML = tr;


    })
    .catch(error => {
      // Gérer les erreurs ici
      console.error('Erreur lors de la requête :', error);
    });

</script>

<template>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
  <div id="div-background-result-tab">
    <div id="div-result-tab">
      <table id="result-tab" class="table table-striped table-dark">
        <thead>
        <tr>
          <th>Nom</th>
          <th>Prénom</th>
          <th>Age</th>
          <th>Pays</th>
        </tr>
        </thead>
        <tbody id="tbody-result">

        </tbody>
      </table>
    </div>
  </div>

</template>

<style scoped>

#div-background-result-tab{
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
}

#div-result-tab{
  width: 60%;
  height: 60vh;
  background-color: beige;
  display: flex;
  justify-content: center;
  align-items: start;
  background-color: #212529;
  border-radius: 20px;
}

#result-tab{
  width: 95%;
  height: 95%;
  margin: 0;
}

#result-tab tbody{
  max-height: 300px;
  overflow: auto;
}

#result-tab tr{
  height: 40px;
}

</style>
