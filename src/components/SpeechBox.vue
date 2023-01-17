<template>
    <h1 :class="props.theme">
        <slot></slot>
        <span class="play">
            ( 
            <a @click.prevent="emit('playSound')" href="#">다시 듣기</a>
             )
        </span>
    </h1>
</template>

<script setup>
import { defineEmits, defineProps } from 'vue';

const props = defineProps({
    theme: String
})

const emit = defineEmits(['playSound']);
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');

h1 {
    border: 6px solid white;
    border-radius: 20px;
    padding: 20px;
    

    font-size: 48px;
    font-family: Poppins;
}

@media (max-width: 560px) {
    h1 {
        font-size: 30px;
        padding: 10px;
    }
}

h1.yellow {
    background-color: #e3e3c9;
    color: #c2911a;
}

h1.red {
    background-color: #e3c9c9;
    color: #c21a1a;
}

h1.blue {
    background-color: #c9cce3;
    color: #1a1dc2;
}

h1.green {
    background-color: #d2e3c9;
    color: #37c21a;
}

h1.purple {
    background-color: #dcc9e3;
    color: #951ac2;
}

h1 .play {
    font-size: 16px;
    display: block;
    color: #987216;
}

h1 a {
    color: #987216;    
}
</style>