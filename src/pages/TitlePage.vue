<template>
    <PlayArea theme="grey">
        <h1>😀 Yes or No 🤮</h1>
        <div class="list" @click="nav.goto(Page.Question)">Would you like?</div>
    </PlayArea>
</template>

<script setup>
import PlayArea from '@/components/PlayArea.vue';
import nav, { Page } from '@/utils/nav';
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Nanum+Pen+Script&display=swap');

h1 {
    font-size: 48px;
    font-family: "Nanum Pen Script";
    color: #dcb250;
}

.list {
    width: calc(100% - 40px);
    border: 2px solid #b4b2af;
    padding: 40px;
    font-family: "Nanum Pen Script";
    font-size: 30px;
    background-color: #f2f2df;
    color: #b4b2af;
    text-align: center;
}

.list:hover {
    cursor: pointer;
}

@media (max-width: 800px) {
    .list {
        padding: 20px;

    }
}

@media (max-width: 360px) {
    h1 {
        font-size: 30px;
    }
}
</style>