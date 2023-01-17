<template>
    <PlayArea theme="grey">
        <HeaderField>Your score is {{ Questions.score() }} !!</HeaderField>
        <ButtonBox @click="nav.goto(Page.Title)">Finish</ButtonBox>
    </PlayArea>
</template>

<script setup>
import PlayArea from '@/components/PlayArea.vue';
import Questions from '@/questions';
import HeaderField from '@/components/HeaderField.vue';
import ButtonBox from '@/components/ButtonBox.vue';
import nav, { Page } from '@/utils/nav';
</script>