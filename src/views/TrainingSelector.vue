<script setup>
import { inject } from 'vue';


const actividades=inject('actividades')
const agregarActividad=inject('addActivity')
</script>

<template>

<div v-for="actividad in actividades" :key="actividad.id" class="act">
    <img :src="actividad.img"/>
    <p>{{ actividad.title }}</p>
    <p>{{ actividad.calories }}</p>
    <button @click="agregarActividad(actividad.id)"> Registrar actividad</button>
</div>
</template>

<style scoped>

img{
    width: 200px;
}

.act{
    display: flex;
    flex-direction: column;
}

</style>