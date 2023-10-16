<script setup>

</script>

<template>

  <div id="div-background-result-modif">
    <h1 id="closeResult">x</h1>
    <div id="div-result-modif">

      <h3 id="h3-modif">Modification de </h3>
      <input type="number" min="0" step="1" id="position"/>
      <input type="submit" value="VALIDER" id="submitResult">

    </div>
  </div>
</template>

<style scoped>

#div-background-result-modif{
  position: fixed;
  display: none;
  top: 0;
  left: 0;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
}

#div-result-modif{
  width: 20%;
  height: 10vh;
  display: flex;
  justify-content: space-around;
  background-color: var(--color-background);
  align-items: center;
  flex-direction: column;
  border-radius: 20px;
}

#closeResult{
  color: white;
  position: absolute;
  top: 10px;
  right: 30px;
}

</style>