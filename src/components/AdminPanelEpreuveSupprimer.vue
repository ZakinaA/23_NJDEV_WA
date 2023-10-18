<script setup>

import axios from "axios";

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
          "        <span class='btnTabSupprimer' id='buttonSupprimer' data-id='" + data[i].id + "'>Supprimer</span>\n" +
          "      </div>";
      divListAffichageEpreuve.innerHTML += le;
      const buttonResultat = document.getElementById("buttonSupprimer");
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
        const divContentEpreuveSupprimer = document.getElementById("divContentEpreuve" + data[i].id);

        const btnSupprimer = divContentEpreuveSupprimer.getElementsByClassName('btnTabSupprimer');
        for (let j = 0; j < btnSupprimer.length; j++) {
          btnSupprimer[j].addEventListener('click', function() {
            const id = btnSupprimer[j].getAttribute('data-id');
            clicSupprimer(id);
          });
        }
      },500);
    }
  });
}
getEpreuves();

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

function clicSupprimer(id) {
  console.log(id);
  const ApiUrl = "http://localhost:9007/epreuve/" + id;

  axios.delete(ApiUrl).then(response => {
    console.log('Ligne supprimée avec succès. ', response);
    // Vous pouvez mettre à jour l'affichage ici si nécessaire.
    getEpreuves();
  }).catch(error => {
    console.error('Une erreur est survenue lors de la suppression');
  });
}

</script>

<template>
  <div id="div-list-epreuve">
    <div id="div-list-affichage-epreuve">



    </div>
  </div>
</template>

<style scoped>

#div-list-epreuve{
  margin-top: 20px;
}

</style>