<script setup>
import { ref } from 'vue';
import AdminPanelResultat from "@/components/AdminPanelResultat.vue";
import AdminPanelEpreuve from "@/components/AdminPanelEpreuve.vue";

const viewAdmin = ref('Resultat'); // Par défaut, afficher "Resultat"

function switchView(viewName) {
  viewAdmin.value = viewName;
}
</script>

<template>
  <div>
    <a @click="switchView('Epreuve')">Epreuve </a>
    <a @click="switchView('Resultat')">Resultat</a>

    <div id="divViewAdmin">
      <AdminPanelResultat v-if="viewAdmin === 'Resultat'" />
      <AdminPanelEpreuve v-if="viewAdmin === 'Epreuve'" />
    </div>
  </div>
</template>

<style scoped>

</style>