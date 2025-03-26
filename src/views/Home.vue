<template>
  <div class="h-100 d-flex flex-column container-fluid">
    <Navbar></Navbar>
    <RouterView :tableData="dataModified" class="container-fluid mt-4"></RouterView>
  </div>

</template>

<script setup>
import { computed, onMounted, ref, watch } from 'vue';
import Navbar from '../components/Navbar.vue';
import { useRouter } from 'vue-router';

const tableData = ref([])
const router = useRouter();

function generateTransitionMatrix(size) {
  let matrix = [];

  for (let i = 0; i < size; i++) {
    let row = [];
    let sum = 0;

    // Generate random probabilities
    for (let j = 0; j < size; j++) {
      row.push(0);

    }

    matrix.push(row);

    tableData.value = matrix;
  }
}



function updateTransitionMatrix(fromState, toState) {
  let size = tableData.value.length;
  console.log(tableData.value)
  // Increase the transition count
  console.log(fromState, toState)
  if(fromState == undefined || toState == undefined){
    return;
  }
  tableData.value[fromState][toState] += 1;

  // Re-normalize the row
  let sum = tableData.value[fromState].reduce((acc, val) => acc + val, 0);
  tableData.value[fromState] = tableData.value[fromState].map(value => value / sum);
}

const dataModified = computed(() => {
  if (!tableData.value) return []
  return tableData.value.map((row, index) => {
    console.log(row)
    return {
      "FromTo": index,
      0: (row[0] * 100).toFixed(0) + ' %',
      1: (row[1] * 100).toFixed(0) + ' %',
      2: (row[2] * 100).toFixed(0) + ' %',
      3: (row[3] * 100).toFixed(0) + ' %',
      4: (row[4] * 100).toFixed(0) + ' %',
      Total: (row.reduce((acc, val) => acc + val, 0) * 100).toFixed(0) + ' %'


    }
  })

})

watch(() => router.currentRoute.value, (newRoute, oldRoute) => {
  const pathFrom = oldRoute?.path;
  const pathTo = newRoute?.path;

  console.log(pathFrom, pathTo)

  if (!pathFrom || !pathTo) {
    return;
  }

  const fromState = parseInt(pathFrom.replace(/\D/g, ''), 10);
  const toState = parseInt(pathTo.replace(/\D/g, ''), 10);

  if (!isNaN(fromState) && !isNaN(toState)) {
    updateTransitionMatrix(fromState, toState);
  }else if(!isNaN(toState)){
    updateTransitionMatrix(toState,toState)
  }
});




onMounted(() => {
  // Generate a 5x5 transition matrix
  generateTransitionMatrix(5);


})
</script>