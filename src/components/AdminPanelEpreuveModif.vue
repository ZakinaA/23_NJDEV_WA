<script setup>

import axios from "axios";


axios.get("http://localhost:9007/sports").then(response => {

  const data = response.data.sort((a, b) => a.id - b.id);
  const selectSportAffichage = document.getElementById("list-epreuve-sport");

});

function getEpreuves() {
  axios.get("http://localhost:9007/epreuves").then(response => {

    //Gestion de la reponse
    const data = response.data.sort((a, b) => a.id - b.id);
    const divListAffichageEpreuve = document.getElementById("div-list-affichage-epreuve");

    divListAffichageEpreuve.innerHTML = "";

    let color = true;
    for (let i = 0; i < data.length; i++) {
      const le = "<div class=\"div-content-epreuve\" id=\"div-content-epreuve\">\n" +
          "        <span>"+ data[i].libelle +"</span>\n" +
          "        <span class='btnTabModifier' id='buttonModifier' data-id='" + data[i].id + "'>Modifier</span>\n" +
          "      </div>";
      divListAffichageEpreuve.innerHTML += le;
      const buttonResultat = document.getElementById("buttonModifier");
      buttonResultat.id = data[i].id;
      buttonResultat.style.color = "#7283ED";

      const divContentEpreuveId = document.getElementById("div-content-epreuve");
      if (color){
        divContentEpreuveId.style.backgroundColor = "#2C3034";
        color = false;
      }else{
        divContentEpreuveId.style.backgroundColor = "#212529";
        color = true;
      }
      divContentEpreuveId.id = "divContentEpreuve"+data[i].id;

      const divContentEpreuve = document.getElementsByClassName("div-content-epreuve");
      for (let j = 0; j < divContentEpreuve.length; j++) {
        divContentEpreuve[j].style.display = "flex";
        divContentEpreuve[j].style.width = "75%";
        divContentEpreuve[j].style.height = "50px";
        divContentEpreuve[j].style.justifyContent = "space-between";
        divContentEpreuve[j].style.alignItems = "center";
        divContentEpreuve[j].style.flexDirection = "row";
        divContentEpreuve[j].style.padding = "0 30px 0 30px";
        divContentEpreuve[j].style.color = "#FFF";

      }
      setTimeout(function (){
        const divContentEpreuveModifier = document.getElementById("divContentEpreuve" + data[i].id);

        const btnModifier = divContentEpreuveModifier.getElementsByClassName('btnTabModifier');
        for (let j = 0; j < btnModifier.length; j++) {
          btnModifier[j].addEventListener('click', function() {
            const id = btnModifier[j].getAttribute('data-id');

          });
        }
      },500);
    }
  });
}
getEpreuves();
</script>

<template>
  <div id="div-list-epreuve">

    <table>
      <thead>
        <tr>
          <th>libelle</th>
          <th>Sport</th>
          <th>date début</th>
          <th>date Fin</th>
        </tr>
      </thead>

      <tbody id="tbody-modifier-epreuve">

      </tbody>
    </table>
    <div id="div-list-affichage-epreuve">



    </div>
  </div>
</template>

<style scoped>

#div-list-epreuve{
  margin-top: 20px;
}

</style>