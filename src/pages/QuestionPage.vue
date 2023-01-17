<template>
    <PlayArea>
        <SpeechBox @playSound="playSound" theme="purple">{{ QuestionT.text }}</SpeechBox>
        <CharacterImage :character="character()"/>
        <ButtonsWrapper>
            <ButtonBox @click="emit('yes')">Yes / 예</ButtonBox>
            <ButtonBox @click="emit('no')">No / 아니요</ButtonBox>
        </ButtonsWrapper>
    </PlayArea>
</template>

<script setup>
import { defineEmits, computed } from 'vue';
import SpeechBox from '@/components/SpeechBox.vue';
import ButtonBox from '@/components/ButtonBox.vue';
import CharacterImage from '@/components/CharacterImage.vue';
import PlayArea from '@/components/PlayArea.vue';
import ButtonsWrapper from '@/components/ButtonsWrapper.vue';
import Questions from '@/questions';

const QuestionT = computed(() => Questions.getQuestion().question);

const emit = defineEmits(['yes', 'no']);

const playSound = () => {
    QuestionT.value.audio.play();
}

const character = () => {
    if (QuestionT.value.chara === 'boy') {
        return 'boy-question';
    } else {
        return 'girl-question';
    }
}

playSound();

</script>