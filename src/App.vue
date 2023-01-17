<template>

    <TitlePage
      v-if="nav.at(Page.Title)"
    />

    <QuestionPage
      :question="question.question"
      @yes="chooseYes"
      @no="chooseNo"
      v-else-if="nav.at(Page.Question)"
    />

    <AnswerPage
      :answer="question.answer"
      :choice="choice"
      @next="nextQuestion"
      v-else-if="nav.at(Page.Answer)"
    />

</template>

<script setup>
import TitlePage from './pages/TitlePage.vue';
import QuestionPage from './pages/QuestionPage.vue';
import AnswerPage from './pages/AnswerPage.vue';
import { newQuestion } from './questions';
import { ref } from 'vue';
import nav, { Page } from '@/utils/nav';

const question = ref(newQuestion());
const choice = ref('');

const chooseYes = () => {
  choice.value = 'yes';
  nav.goto(Page.Answer);
}
const chooseNo = () => {
  choice.value = 'no';
  nav.goto(Page.Answer);
}

const nextQuestion = () => {
  choice.value = '';
  nav.goto(Page.Question);
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
