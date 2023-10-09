<script setup>

</script>

<template>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">

<!--  <p class="btn-tabresult" id="64">Test sur l'epreuve 64</p><br>-->
<!--  <p class="btn-tabresult" id="65">Test sur l'epreuve 65</p>-->

  <div id="div-background-result-tab">
    <h1 id="closeResult">x</h1>
    <div id="div-result-tab">
      <table id="result-tab" class="table table-striped table-dark">
        <thead>
          <tr>
            <th>Nom</th>
            <th>Prénom</th>
            <th>Age</th>
            <th>Pays</th>
            <th>Résultat</th>
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
  display: none;
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

#closeResult{
  color: white;
  position: absolute;
  top: 10px;
  right: 30px;
}

#result-tab{
  width: 95%;
  height: 95%;
  margin: 0;
}

#result-tab tr{
  height: 1em;
}

#tbody-result{
  max-height: 300px;
  overflow-y: auto;
}

</style>
