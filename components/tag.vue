<template>
    <div class="tag-container">
        <span>#</span>
        <span class="tag-title">
            <slot />
        </span>
    </div>
</template>



<style lang="scss" scoped>
.tag-container {
    border: 1px solid blueviolet;
    border-radius: 3px;
    color: blueviolet;
    width: 9vw;
    height: 2vh;
    font-size: 13px;
    padding: 2px;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>