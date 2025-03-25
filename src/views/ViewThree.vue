<template>
    <div>
    <div id="table" ref="table"></div>
        
    </div>
</template>

<script setup>
import { onMounted } from 'vue';

const props = defineProps({
    tableData: Array
})


onMounted(()=>{

//initialize table
var table = new Tabulator("#table", {
    data:props.tableData, //assign data to table
    layout:"fitColumns",
    columns:[                 //define the table columns
        {title:"FromTo", field:"FromTo"}, // Ensure FromTo is the first column
        {title:"0", field:"0"},
        {title:"1", field:"1"},
        {title:"2", field:"2"},
        {title:"3", field:"3"},
        {title:"4", field:"4"},
        {title:"Total", field:"Total"},


    ],

});
})


</script>
<style>
@import "../libs/tabulator/tabulator_bootstrap5.min.css";
</style>