<template>
    <div class="tag-container border border-[#8a2be2] rounded-[3px] text-[#8a2be2] p-[1px] text-[13px] w-[75px] h-[20px] flex items-center justify-center">
        <span>#</span>
        <span class="tag-title">
            <slot />
        </span>
    </div>
</template>



<style lang="scss" scoped>
.tag-container {

}
</style>