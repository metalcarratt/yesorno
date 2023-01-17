<template>
    <div :class="['bg', props.theme]">
        <div class="playArea">
            <slot></slot>
        </div>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    theme: String
})
</script>

<style scoped>
.bg {
    background-color: #500d56;
    color: white;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
}

.bg.red {
    background-color: #981710;
}

.bg.yellow {
    background-color: #deac17;
}

.bg.green {
    background-color: #17a017;
}

.bg.blue {
    background-color: #4e4ec5;
}

.bg.grey {
    background-color: #dedbd1;
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

</style>