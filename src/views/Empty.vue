<template>

    <div>

    </div>
</template>

<script setup>

import { onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const router = useRouter();

onMounted(()=>{
    
    router.push(router.pathTo.replace('/', ''))
})
</script>
