<template>
    <div class="flex userTitle">
        <img class="headimg" :src="headimg">
        <div class="msg-group">
            <div class="pri" >{{ userName }}</div>
            <div class="pln">{{ userMsg }}</div>
        </div>
        <div class="right_btn">
            <slot name="rightBtn"></slot>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        headimg: {
            type: String,
            default: ''
        },
        userName: {
            type: String,
            default: ''
        },
        userMsg: {
            type: String,
            default: ''
        },
    },
    methods: {}
}
</script>

<style lang='scss' scoped>
.flex {
    display: flex;
    align-items: center;
}

.userTitle {
    position: relative;
    .right_btn {
        position: absolute;
        right: 0;
    }

    .headimg {
        width: 44px;
        height: 44px;
        border: 2px solid #F6F6F6;
        border-radius: 50%;
        margin-right: 12px;
    }

    .msg-group {
        .pri {
            font-size: 15px;
            font-family: PingFangSC-Medium, PingFang SC;
            font-weight: 500;
            color: #333333;
            line-height: 21px;
            margin-bottom: 6px;

            .num {
                color: #FFA800;
            }
        }

        .pln {
            font-size: 11px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: #666666;
        }
    }

    .confirm {
        width: 66px;
        height: 30px;
        background: #FFFFFF;
        border-radius: 4px;
        border: 1px solid #FFA800;
        font-size: 12px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #FF8C00;
        position: absolute;
        right: 0;
    }
}
</style>