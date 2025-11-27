<script setup>
import { inject } from 'vue';


const actividadLog=inject('actividadesSelecionadas')
console.log(actividadLog)
</script>

<template>

<h1>Historial d'activitats</h1>
<div>
    <ul>
        <li v-for="act in actividadLog" :key="act.id">
            <p>{{ act.title }}</p>
            <p>{{ act.calories }}</p>
        </li>
    </ul>
</div>


</template>

<style scoped>

img{
    width: 200px;
}
</style>