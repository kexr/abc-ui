<template>
    <div class="install">
        <ContentModel title="安装">
            <template #content>
                <div class="title">npm安装</div>
                <div>推荐使用 npm 的方式安装，它能更好地和打包工具配合使用。</div>
                <highlightjs code="npm i gocopy-ui" />
            </template>
        </ContentModel>
    </div>
</template>

<script setup>
import ContentModel from '../../pubComponents/ContentModel.vue'
</script>

<style lang='scss' scoped>
.title {
    text-align: left;
    padding: 1rem 0;
    font-size: 1.3rem;
    font-weight: bold;

    &.h5 {
        font-size: 1rem;
    }

    &.sub {
        font-size: 1rem;
        padding: 0.3rem 0;
    }
}
</style>