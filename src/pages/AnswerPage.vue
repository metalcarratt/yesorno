<template>
    <div :class="bgClass()">
        <div class="playArea">
            <SpeechBox @playSound="playSound" :theme="theme()">{{ answer }}</SpeechBox>
            <CharacterImage :character="character()"/>
            <ButtonBox @click="emit('next')">Next / 다음</ButtonBox>
        </div>
    </div>
</template>

<script setup>
import Answer from '../questions';
import SpeechBox from '@/components/SpeechBox.vue';
import ButtonBox from '@/components/ButtonBox.vue';
import CharacterImage from '@/components/CharacterImage.vue';
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
    answer: Answer,
    choice: String
});

const emit = defineEmits(['next']);

const answer = props.choice === 'yes' ? props.answer.yes : props.answer.no;

const theme = () => {
    if (props.answer.type === 'gross') {
        if (props.choice === 'yes') {
            return 'red'
        } else {
            return 'yellow'
        }
    } else {
        if (props.choice === 'yes') {
            return 'green';
        } else {
            return 'blue';
        }
    }
}

const bgClass = () => {
    const classes = ['bg'];
    classes.push(theme());
    return classes;
}

const playSound = () => {
    if (props.choice === 'yes') {
        props.answer.yesAudio.play();
    } else {
        props.answer.noAudio.play();
    }
}

const character = () => {
    if (theme() === 'red') {
        return 'girl-laugh';
    } else if (theme() === 'yellow' || theme() === 'green') {
        return 'girl-agree';
    } else {
        return 'girl-sad';
    }
}

playSound();

</script>

<style scoped>
.bg {
    background-color: #500d56;
    color: white;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
}

.bg.red {
    background-color: #981710;
}

.bg.yellow {
    background-color: #deac17;
}

.bg.green {
    background-color: #17a017;
}

.bg.blue {
    background-color: #4e4ec5;
}

.playArea {
    width: 800px;
    height: 600px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
}

@media (max-width: 800px) {
    .playArea {
        padding: 10px;
        height: calc(100% - 20px);
    }
}

button {
    width: 100%;
    height: 100px;
    font-size: 20px;
}
</style>