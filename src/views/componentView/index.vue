<template>
    <div class="component_index">
        <div class="left_side">
            <el-menu default-active="/table" class="el-menu-vertical-demo" @select="selectMenu">
                <div class="left_side_title">开发指南</div>
                <!-- <el-menu-item index="/install">
                    <span>安装</span>
                </el-menu-item> -->
                <el-menu-item index="/startedQ">
                    <span>快速上手</span>
                </el-menu-item>
                <div class="left_side_title">基础组件</div>
                <el-menu-item index="/table">
                    <span>Table表格</span>
                </el-menu-item>
                <el-menu-item index="/detailDataList">
                    <span>detailDataList列表</span>
                </el-menu-item>
                <el-menu-item index="/userTitle">
                    <span>userTitle卡片</span>
                </el-menu-item>
                <el-menu-item index="/chipMenu">
                    <span>chipMenu瓷片区</span>
                </el-menu-item>
            </el-menu>
        </div>
        <div class="content">
            <router-view></router-view>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter();

const menuAct = ref(1)

const selectMenu = (index) => {
    console.log(index)
    menuAct.value = index
    router.push({
        path: index,
    });
}
</script>

<style lang='scss' scoped>
$content_margin: 8px;

.component_index {
    // background-color: #eff2f5;
    background-color: #eff5fb; 
    display: flex;

    .left_side {
        .el-menu-vertical-demo {
            height: 100%;
            width: 11rem;
        }
        .el-menu{
            padding-top: 10px;
        }
        .el-menu-item {
            height: 40px;
        } 
        .left_side_title {
            font-weight: 600;
            text-align: left;
            padding: 10px;
            padding-left: 20px;
        }
    }

    .content {
        width: calc(100% - 11rem);
        // flex: 1;
        height: 100%;
        overflow: auto;
    }
}
</style>