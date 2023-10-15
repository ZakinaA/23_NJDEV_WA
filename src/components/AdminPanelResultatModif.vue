<script setup>

</script>

<template>

  <div id="div-background-result-modif">
    <h1 id="closeResult">x</h1>
    <div id="div-result-modif">

    HERE

    </div>
  </div>
</template>

<style scoped>

#div-background-result-modif{
  position: fixed;
  display: flex;
  top: 0;
  left: 0;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
}

#div-result-modif{
  width: 60%;
  height: 60vh;
  display: flex;
  justify-content: center;
  background-color: var(--color-background);
  align-items: start;
  border-radius: 20px;
}

#closeResult{
  color: white;
  position: absolute;
  top: 10px;
  right: 30px;
}

</style>