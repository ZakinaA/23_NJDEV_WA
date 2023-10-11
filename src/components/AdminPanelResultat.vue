<script setup>

import axios from "axios";


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

// function getTabResult(id) {
//   axios.get("http://127.0.0.1:9007/epreuve_athlete/"+id).then(response => {
//
//     const data = response.data.sort((a, b) => a.place - b.place);
//
//     const dataLength = Object.keys(data).length;
//
//     // console.log('Réponse de la requête :', data);
//
//     const tbodyresult = document.getElementById("tbody-result");
//     const divBackgroundResultTab = document.getElementById("div-background-result-tab");
//
//     let tr = "";
//
//     for (let i = 0; i < dataLength; i++) {
//       tr += "<tr>" +
//           "          <td>"+data[i].athlete.nom+"</td>" +
//           "          <td>"+data[i].athlete.prenom+"</td>" +
//           "          <td>"+calculerAge(data[i].athlete.date_naissance)+"</td>" +
//           "          <td>"+data[i].athlete.pays.libelle+"</td>" +
//           "          <td>"+data[i].place+"</td>" +
//           "        </tr>";
//     }
//     divBackgroundResultTab.style.display = "flex";
//     tbodyresult.innerHTML = tr;
//   })
//       .catch(error => {
//         // Gérer les erreurs ici
//         console.error('Erreur lors de la requête :', error);
//       });
// }
getSport();
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
            <th>Résultat</th>
            <th>Note</th>
          </tr>
        </thead>

        <tbody id="tbody-tableau-athlete-resultat">

        </tbody>
      </table>
    </div>

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
