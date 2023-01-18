<template>

    <TitlePage
      v-if="nav.at(Page.Title)"
    />

    <QuestionPage
      @yes="chooseYes"
      @no="chooseNo"
      v-else-if="nav.at(Page.Question)"
    />

    <AnswerPage
      :choice="choice"
      @next="nextQuestion"
      v-else-if="nav.at(Page.Answer)"
    />

    <ResultPage
      v-else-if="nav.at(Page.Result)"
    />

</template>

<script setup>
import TitlePage from './pages/TitlePage.vue';
import QuestionPage from './pages/QuestionPage.vue';
import AnswerPage from './pages/AnswerPage.vue';
import ResultPage from './pages/ResultPage.vue';
import Questions, { AnswerType } from './questions';
import { ref } from 'vue';
import nav, { Page } from '@/utils/nav';

const choice = ref('');

const chooseYes = () => {
  choice.value = 'yes';
  if (Questions.getQuestion().answer.type === AnswerType.Normal) {
    Questions.pointUp();
  }
  nav.goto(Page.Answer);
}

const chooseNo = () => {
  choice.value = 'no';
  if (Questions.getQuestion().answer.type === AnswerType.Gross) {
    Questions.pointUp();
  }
  nav.goto(Page.Answer);
}

const nextQuestion = () => {
  choice.value = '';
  if (Questions.hasMore()) {
    Questions.nextQuestion();
    nav.goto(Page.Question);
  } else {
    nav.goto(Page.Result);
  }
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
