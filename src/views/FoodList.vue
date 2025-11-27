<script setup>
import { reactive,ref } from 'vue';
import FoodItem from './FoodItem.vue';

const aliments=[
  {
    name: 'Salmó Atlàntic',
    type: 'Proteïna',
    properties: ['Alt Omega-3', 'Ajuda a la recuperació', 'Vitamina D'],
    img: './img/salmo.jpeg'
  },
  {
    name: 'Civada integral',
    type: 'Hidrat de carboni',
    properties: ['Alliberament energètic sostingut', 'Rica en ferro', 'Fibra soluble'],
    img: './img/civada.jpeg'
  },
  {
    name: 'Alvocat',
    type: 'Greix saludable',
    properties: ['Greixos monoinsaturats', 'Alt en fibra', 'Conté potassi'],
    img: './img/alvocat.jpeg'
  },
  {
    name: 'Ou de gallina',
    type: 'Proteïna',
    properties: ['Alto valor biològic', 'Rics en aminoàcids essencials', 'Vitamina B12'],
    img: './img/ou.jpeg'
  }
]

let alimentSeleccionado=ref([])
const verDetalle=(name)=>{

  alimentSeleccionado.length=0
  const alimento=aliments.find(a=>a.name===name)
  alimentSeleccionado.value=[alimento]

}
</script>

<template>

<div>
   <h1>Recomanador d'aliments</h1>
    <p></p>
    <ul class="targeta">
        <li v-for="alimento in aliments" :key="alimento.name">
            <FoodItem :alimento="alimento" @verDetalle="verDetalle"/>
        </li>
    </ul> 
    <div v-if="alimentSeleccionado.length>0" class="containerAlimentos">
       <div v-for="alimento in alimentSeleccionado">
         <h2>Aliment seleccionat</h2>
        <img :src="alimento.img" class="img"/>
        <p>{{ alimento.name }}</p>
        <p>Tipus: {{ alimento.type }}</p>
        <ul>
            <li v-for="ingrediente in alimento.properties" :key="ingrediente">
                {{ ingrediente }}
            </li>
        </ul>
       </div>
    </div>
</div>

</template>

<style scoped>
img{
    width: 200px;
}
</style>