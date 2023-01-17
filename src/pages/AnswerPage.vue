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
import SpeechBox from '@/components/SpeechBox.vue';
import ButtonBox from '@/components/ButtonBox.vue';
import CharacterImage from '@/components/CharacterImage.vue';
import PlayArea from '@/components/PlayArea.vue';
import ButtonsWrapper from '@/components/ButtonsWrapper.vue';
import { defineProps, defineEmits, computed } from 'vue';
import Questions from '@/questions';

const props = defineProps({
    choice: String
});

const AnswerT = computed(() => Questions.getQuestion().answer);

const emit = defineEmits(['next']);

const answer = props.choice === 'yes' ? AnswerT.value.yes : AnswerT.value.no;

const theme = () => {
    if (AnswerT.value.type === 'gross') {
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
        AnswerT.value.yesAudio.play();
    } else {
        AnswerT.value.noAudio.play();
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