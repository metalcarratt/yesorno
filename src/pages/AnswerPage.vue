<template>
    <PlayArea :theme="theme()">
        <SpeechBox @playSound="playSound" :theme="theme()">{{ answer }}</SpeechBox>
        <CharacterImage :character="character()"/>
        <ButtonsWrapper>
            <ButtonBox @click="emit('next')">Next / 다음</ButtonBox>
        </ButtonsWrapper>
    </PlayArea>
</template>

<script setup>
import Answer from '../questions';
import SpeechBox from '@/components/SpeechBox.vue';
import ButtonBox from '@/components/ButtonBox.vue';
import CharacterImage from '@/components/CharacterImage.vue';
import PlayArea from '@/components/PlayArea.vue';
import ButtonsWrapper from '@/components/ButtonsWrapper.vue';
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