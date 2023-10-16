<script setup>
import AdminPanelEpreuveAjout from "@/components/AdminPanelEpreuveAjout.vue";



function showAjouter(){
  const divViewEpreuveAjout = document.getElementById("div-view-epreuve-ajout");
  divViewEpreuveAjout.style.display = "block";

}

setTimeout(function (){

  showAjouter();

  const btnAjoutEpreuve = document.getElementById("btn-Ajout-Epreuve");
  btnAjoutEpreuve.addEventListener("click", function (){
    showAjouter();
    //unShowmodif();
  });


}, 500);



</script>

<template>
  <div id="button-nav">

    <p id="btn-Ajout-Epreuve">Ajouter</p>

  </div>
  <AdminPanelEpreuveAjout/>


</template>

<style scoped>

#btn-Ajout-Epreuve{
  background-color: #7283ED;

  text-align: center;

  width: 159px;
  height: 25px;
}

</style>