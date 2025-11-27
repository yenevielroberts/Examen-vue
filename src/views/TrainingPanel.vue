<script setup>
import { ref, provide} from 'vue';
import TrainingSelector from './TrainingSelector.vue';
import ActivityLog from './ActivityLog.vue';

const actividades=ref([
  { id: 'cardio20', title: 'Cardio 20 min', calories: 220, img: './img/cardio.jpg' },
  { id: 'upperStrength', title: 'Força tren superior', calories: 320, img: 'trensuperior.jpg' },
  { id: 'hiit10', title: 'HIIT 10 min', calories: 180, img: './img/hiit.jpg' },
  { id: 'stretch', title: 'Estiraments guiats', calories: 60, img: './img/estiraments.jpg' }
])

const actividadesSelecionadas=ref([])
provide('actividades',actividades)


const addActivity=(id)=>{

    const actividad=actividades.value.find(act=>act.id===id)
    actividadesSelecionadas.value.push(actividad)

}

provide('addActivity',addActivity)
provide('actividadesSelecionadas',actividadesSelecionadas)
</script>

<template>
<div class="containerAct">
<TrainingSelector />
</div>
<div class="actLog">
    <ActivityLog />
</div>

</template>


<style scoped>

img{
    width: 200px;
}
.containerAct{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
</style>