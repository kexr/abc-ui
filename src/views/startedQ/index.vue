<template>
    <div class="install">
        <ContentModel title="快速上手">
            <template #content>
                <div class="title">npm安装</div>
                <div>推荐使用 npm 的方式安装，它能更好地和打包工具配合使用。</div>
                <highlightjs code="npm i gocopy-ui" />
                <div class="title">全局注册</div>
                <div>全局注册后，你可以在 app 下的任意子组件中使用注册的 GoCopy 组件。</div>
                <highlightjs autodetect :code="`import { Button } from 'vant';
import { createApp } from 'vue';

const app = createApp();
app.use(Button);
`" ></highlightjs>
                <div class="title">局部注册</div>
                <div>局部注册后，你可以在当前组件中使用注册的 GoCopy 组件。</div>
                <highlightjs autodetect :code="`import { Table } from 'gocopy-ui/ui'

export default {
  components: {
    Table: Table,
  },
};`" ></highlightjs>
            <div>在setup中可以直接使用 GoCopy 组件，不需要进行组件注册。</div>
            <highlightjs autodetect :code="`import { Table } from 'gocopy-ui/ui'`" ></highlightjs>
            <highlightjs autodetect :code="`<template>
  <Table />
</template>`" ></highlightjs>
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