<template>
    <div class="btns">
        <slot></slot>
    </div>
</template>

<style scoped>
.btns {
    width: 100%;
    display: flex;
    flex-direction: row;
    gap: 10px;
}
</style>