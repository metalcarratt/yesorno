<template>
    <div :class="bgClass()">
        <div class="playArea">
            <h1>{{ answer }} <a @click.prevent="playSound" href="#">다시 듣기</a></h1>
            <button @click="emit('next')">Next / 다음</button>
        </div>
    </div>
</template>

<script setup>
import Answer from '../questions';
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
    answer: Answer,
    choice: String
});

const emit = defineEmits(['next']);

const answer = props.choice === 'yes' ? props.answer.yes : props.answer.no;

const bgClass = () => {
    const classes = ['bg'];
    if (props.answer.type === 'gross') {
        if (props.choice === 'yes') {
            classes.push('eww');
        } else {
            classes.push('lucky');
        }
    } else {
        if (props.choice === 'yes') {
            classes.push('like');
        } else {
            classes.push('dislike');
        }
    }
    return classes;
}

const playSound = () => {
    if (props.choice === 'yes') {
        props.answer.yesAudio.play();
    } else {
        props.answer.noAudio.play();
    }
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

.bg.eww {
    background-color: #981710;
}

.bg.lucky {
    background-color: #deac17;
}

.bg.like {
    background-color: #17a017;
}

.bg.dislike {
    background-color: #4e4ec5;
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

button {
    width: 100%;
    height: 100px;
    font-size: 20px;
}
</style>