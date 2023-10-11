<script setup>

</script>

<template>
  <div id="div-view-resultat">
    <div>
      <label for="Olympiade">Olympiade :</label>
      <select name="Olympiade" id="Olympiade">
        <option value="TEST">TEST</option>
      </select>
    </div>
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

    <div>
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
        <tbody>
        <tr>
          <td>France</td>
          <td>Dupont, Jean</td>
          <td>Attaquant</td>
          <td>3-1</td>
          <td>8.5</td>
        </tr>
        <!-- Ajoutez plus de lignes ici si nécessaire -->
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
  margin: 20px 0;
}

th, td {
  border: 1px solid #ccc;
  padding: 8px;
  text-align: center;
}

tr:nth-child(even) {
  background-color: #f2f2f2;
}

thead {
  background-color: #333;
  color: #fff;
}

tbody {
  display: block;
  max-height: 200px;
  overflow-y: auto;
}

th:first-child, td:first-child {
  text-align: left;
}

</style>