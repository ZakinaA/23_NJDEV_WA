<script setup>
import AdminPanelEpreuveAjout from "@/components/AdminPanelEpreuveAjout.vue";
import AdminPanelEpreuveSupprimer from "@/components/AdminPanelEpreuveSupprimer.vue";
import {ref} from "vue";



function showAjouter(){
  const divViewEpreuveAjout = document.getElementById("div-view-epreuve-ajout");
  divViewEpreuveAjout.style.display = "block";

}

function hideAjouter(){
  const divViewEpreuveAjout = document.getElementById("div-view-epreuve-ajout");
  divViewEpreuveAjout.style.display = "none";

}

function showSupprimer(){
  const divViewEpreuveSupprimer = document.getElementById("btn-Supp-Epreuve");
  divViewEpreuveSupprimer.style.display = "block";

}

function hideSupprimer(){
  const divViewEpreuveSupprimer = document.getElementById("btn-Supp-Epreuve");
  divViewEpreuveSupprimer.style.display = "none";

}

// setTimeout(function (){
//
//   showAjouter();
//
//   const btnAjoutEpreuve = document.getElementById("btn-Ajout-Epreuve");
//   btnAjoutEpreuve.addEventListener("click", function (){
//     hideSupprimer();
//     showAjouter();
//   });
//
//   const btnSupprimerEpreuve = document.getElementById("btn-Supp-Epreuve");
//   btnSupprimerEpreuve.addEventListener("click", function (){
//     hideAjouter();
//     showSupprimer();
//   })
//
// }, 500);

const viewEpreuveAdmin = ref('Ajouter'); // Par défaut, afficher "Resultat"

function switchView(viewEpreuve) {
  viewEpreuveAdmin.value = viewEpreuve;
}

</script>

<template>
  <div id="button-nav">

    <p id="btn-Ajout-Epreuve" @click="switchView('Ajouter')">Ajouter</p>

    <p id="btn-Supp-Epreuve" @click="switchView('Supprimer')">Supprimer</p>

  </div>
  <AdminPanelEpreuveAjout v-if="viewEpreuveAdmin === 'Ajouter'"/>
  <AdminPanelEpreuveSupprimer v-if="viewEpreuveAdmin === 'Supprimer'"/>


</template>

<style scoped>

#button-nav{
  display: flex;
  flex-direction: row;
}

#btn-Ajout-Epreuve{
  background-color: #7283ED;
  color: white;

  text-align: center;

  width: 159px;
  height: 25px;
}

#btn-Supp-Epreuve{
  background-color: #7283ED;
  color: white;

  text-align: center;

  width: 159px;
  height: 25px;

  margin-left: 15px;
}

</style>