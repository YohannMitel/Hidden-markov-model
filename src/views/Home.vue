<template>
  <div class="h-100 d-flex flex-column container-fluid">
    <Navbar></Navbar>
    <RouterView :tableData="dataModified" class="container-fluid mt-4"></RouterView>
  </div>

</template>

<script setup>
import { computed, onMounted, ref } from 'vue';
import Navbar from '../components/Navbar.vue';
import { useRouter } from 'vue-router';

const tableData = ref(null)

function generateTransitionMatrix(size) {
  let matrix = [];

  for (let i = 0; i < size; i++) {
    let row = [];
    let sum = 0;

    // Generate random probabilities
    for (let j = 0; j < size; j++) {
      row.push(rand);
      sum += rand;
    }

    // Normalize the row so that it sums to 1
    row = row.map(value => value / sum);
    matrix.push(row);
  }

  return matrix;
}



function updateTransitionMatrix(matrix, fromState, toState) {
  let size = matrix.length;

  // Increase the transition count
  matrix[fromState][toState] += 1;

  // Re-normalize the row
  let sum = matrix[fromState].reduce((acc, val) => acc + val, 0);
  matrix[fromState] = matrix[fromState].map(value => value / sum);
}

const dataModified = computed(() => {
  if (!tableData.value) return []
  return tableData.value.map((row, index) => {

    return {
      "FromTo": index,
      0: (row[0] * 100).toFixed(0) +' %',
      1: (row[1] * 100).toFixed(0) +' %',
      2: (row[2] * 100).toFixed(0) +' %',
      3: (row[3] * 100).toFixed(0) +' %',
      4: (row[4] * 100).toFixed(0) +' %',
      Total: (row.reduce((acc, val) => acc + val, 0) * 100).toFixed(0) +' %'


    }
  })

})


onMounted(() => {
  // Generate a 5x5 transition matrix
  tableData.value = generateTransitionMatrix(5);


})
</script>