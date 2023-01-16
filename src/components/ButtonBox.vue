<template>
    <button @click="emit('click')"><slot></slot></button>
</template>

<script setup>
import { defineEmits } from 'vue';

const emit = defineEmits(['click']);
</script>

<style scoped>
button {
    width: 100%;
    height: 100px;
    font-size: 20px;

    border: 8px solid white;
    border-radius: 20px;
    background-color: #b2dfd3;
}

button:hover {
    cursor: pointer;
}
</style>