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
    padding: 1px;
    font-size: 13px;
    width: 75px;
    height: 20px;
    display: flex;
    align-self: center;
    justify-content: center;
}
</style>