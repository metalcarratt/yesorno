<template>
    <div class="bg">
        <div class="playArea">
            <h1>{{ props.question.text }} <a @click.prevent="playSound" href="#">다시 듣기</a></h1>
            <div class="btns">
                <button @click="emit('yes')">Yes / 예</button>
                <button @click="emit('no')">No / 아니요</button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';
import { Question } from '@/questions';

const props = defineProps({
    question: Question
});

const emit = defineEmits(['yes', 'no']);

const playSound = () => {
    props.question.audio.play();
}

playSound();

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

@media (max-width: 800px) {
    .playArea {
        padding: 10px;
        height: calc(100% - 20px);
    }
}


h1 {
    font-size: 48px;
    font-family: Poppins;
}

h1 a {
    font-size: 16px;
    color: #f0adad;
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