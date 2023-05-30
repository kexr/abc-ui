<template>
    <div class="component_index">
        <div class="left_side">
            <el-menu default-active="/table" class="el-menu-vertical-demo" @select="selectMenu">
                <el-menu-item index="/table">
                    <span>Table表格</span>
                </el-menu-item>
                <el-menu-item index="/detailDataList">
                    <span>信息列表</span>
                </el-menu-item>
                <el-menu-item index="/userTitle">
                    <span>头像信息卡片</span>
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
    }

    .content {
        flex: 1;
        height: 100%;
        overflow: auto;
    }
}
</style>