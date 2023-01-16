<template>

    <QuestionPage
      :question="question.question"
      @yes="chooseYes"
      @no="chooseNo"
      v-if="showQuestion"
    ></QuestionPage>

    <AnswerPage
      :answer="question.answer"
      :choice="choice"
      @next="nextQuestion"
      v-else
    ></AnswerPage>

</template>

<script setup>
import QuestionPage from './pages/QuestionPage.vue';
import AnswerPage from './pages/AnswerPage.vue';
import { newQuestion } from './questions';
import { ref } from 'vue';

const question = ref(newQuestion());
const showQuestion = ref(true);
const choice = ref('');

const chooseYes = () => {
  choice.value = 'yes';
  showQuestion.value = false;
}
const chooseNo = () => {
  choice.value = 'no';
  showQuestion.value = false;
}

const nextQuestion = () => {
  choice.value = '';
  showQuestion.value = true;
  question.value = newQuestion();
}
</script>

<style>
html, body, #app {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}
</style>
