<script setup>

const props=defineProps({
    alimento:{}
})

const emit=defineEmits(['verDetalle'])

const handlerVerDetalle=()=>{
    emit('verDetalle',props.alimento.name)
}

</script>

<template>

<div>
    <img :src="props.alimento.img" />
    <h2>{{ props.alimento.name }}</h2>
    <p>{{ props.alimento.type }}</p>
    <button @click="handlerVerDetalle">Ver detalle</button>
</div>
</template>

<style scoped>
img{
    width: 200px;
}
</style>