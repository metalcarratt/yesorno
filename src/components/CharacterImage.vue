<template>
    <img v-if="props.character === 'girl-laugh'" src="@/assets/images/girl-laughing.png"/>
    <img v-else-if="props.character === 'girl-agree'" src="@/assets/images/girl-agree.png"/>
    <img v-else-if="props.character === 'girl-sad'" src="@/assets/images/girl-sad.png"/>
    <img v-else-if="props.character === 'boy-question'" src="@/assets/images/man-delivery.png"/>
    <img v-else-if="props.character === 'girl-question'" src="@/assets/images/girl-asking.png"/>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    character: String
})
</script>

<style scoped>
img {
    max-width: 300px;
}
</style>