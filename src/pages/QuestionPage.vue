<template>
    <div class="bg">
        <div class="playArea">
            <h1>{{ props.question }}</h1>
            <div class="btns">
                <button @click="emit('yes')">Yes</button>
                <button @click="emit('no')">No</button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
    question: String
});

const emit = defineEmits(['yes', 'no']);
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');

.bg {
    background-color: #500d56;
    color: white;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
}

.playArea {
    width: 800px;
    height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

h1 {
    font-size: 48px;
    font-family: Poppins;
}
.btns {
    width: 100%;
    display: flex;
    flex-direction: row;
}

button {
    width: 100%;
    height: 100px;
    font-size: 20px;
}

</style>