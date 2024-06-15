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
    width: 30%;
    height: 15%;
    font-size: 13px;
    padding: 2px;
    text-align: center;
}
</style>