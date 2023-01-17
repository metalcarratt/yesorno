<template>
    <PlayArea>
        <SpeechBox @playSound="playSound" theme="purple">{{ props.question.text }}</SpeechBox>
        <CharacterImage :character="character()"/>
        <ButtonsWrapper>
            <ButtonBox @click="emit('yes')">Yes / 예</ButtonBox>
            <ButtonBox @click="emit('no')">No / 아니요</ButtonBox>
        </ButtonsWrapper>
    </PlayArea>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';
import SpeechBox from '@/components/SpeechBox.vue';
import ButtonBox from '@/components/ButtonBox.vue';
import CharacterImage from '@/components/CharacterImage.vue';
import PlayArea from '@/components/PlayArea.vue';
import ButtonsWrapper from '@/components/ButtonsWrapper.vue';
import { Question } from '@/questions';

const props = defineProps({
    question: Question
});

const emit = defineEmits(['yes', 'no']);

const playSound = () => {
    props.question.audio.play();
}

const character = () => {
    if (props.question.chara === 'boy') {
        return 'boy-question';
    } else {
        return 'girl-question';
    }
}

playSound();

</script>