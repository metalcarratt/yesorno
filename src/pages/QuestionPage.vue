<template>
    <div class="bg">
        <div class="playArea">
            <SpeechBox @playSound="playSound" theme="purple">{{ props.question.text }}</SpeechBox>
            <CharacterImage character="boy-question"/>
            <div class="btns">
                <ButtonBox @click="emit('yes')">Yes / 예</ButtonBox>
                <ButtonBox @click="emit('no')">No / 아니요</ButtonBox>
            </div>
        </div>
    </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';
import SpeechBox from '@/components/SpeechBox.vue';
import ButtonBox from '@/components/ButtonBox.vue';
import CharacterImage from '@/components/CharacterImage.vue';
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
    align-items: center;
}

@media (max-width: 800px) {
    .playArea {
        padding: 10px;
        height: calc(100% - 20px);
    }
}

.btns {
    width: 100%;
    display: flex;
    flex-direction: row;
    gap: 10px;
}

</style>