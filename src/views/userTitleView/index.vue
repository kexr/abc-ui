<template>
	<div class="userTitleView">
		<ContentModel title="头像信息卡片">
			<template #content>
				<div class="title">介绍</div>
				<div>用户、商品信息卡片。</div>
				<div class="title">代码演示</div>
				<div class="title sub">基础用法</div>
				<highlightjs autodetect code="<userTitle
  :userName='userName'
  :userMsg='userMsg'
  :headimg='headimg'
>
  <template #rightBtn>
    <div class='user_msg_link'>详情 ></div>
  </template>
</userTitle>" />
				<highlightjs autodetect :code="`const userName = ref(张三)
const userMsg = ref(简介简介简介简介简介简介)
const headimg = ref(https://img01.sogoucdn.com/app/a/100520093/8379901cc65ba509-45c21ceb904429fc-197de0c5207df944e4cf8cf5f4482d4b.jpg)
`" />
				<div class="title">API</div>
				<div class="title sub">Props</div>
				<el-table :data="propsTableData" style="width: 100%">
					<el-table-column prop="params" label="参数" width="150" />
					<el-table-column prop="msg" label="说明" />
					<el-table-column prop="type" label="类型" width="150" />
					<el-table-column prop="default" label="默认值" width="150" />
				</el-table>
                <div class="title sub">Slot</div>
				<el-table :data="slotTableData" style="width: 100%">
					<el-table-column prop="params" label="参数" width="150" />
					<el-table-column prop="msg" label="说明" />
				</el-table>
			</template>
			<template #content_h5>
				<div class="title h5">基础用法</div>
				<userTitle userName="张三" userMsg="简介简介简介简介简介简介" headimg="https://img01.sogoucdn.com/app/a/100520093/8379901cc65ba509-45c21ceb904429fc-197de0c5207df944e4cf8cf5f4482d4b.jpg">
                    <template #rightBtn>
                        <div class="user_msg_link">详情 ></div>
                    </template>
                </userTitle>
			</template>
		</ContentModel>
	</div>
</template>

<script setup>
import { ref } from 'vue'
import userTitle from '../../components/userTitle.vue'
import ContentModel from '../../pubComponents/ContentModel.vue'
const propsTableData = ref([{
	params: 'userName',
	msg: '用户/商品名称',
	type: 'String',
	default: '--',
}, {
	params: 'userMsg',
	msg: '用户/商品简介',
	type: 'String',
	default: '--',
}, {
	params: 'headimg',
	msg: '用户/商品头像',
	type: 'String',
	default: '--',
}, 
])
const slotTableData = ref([{
    params: 'rightBtn',
	msg: '卡片右侧空白位置插槽',
}])
</script>

<style lang='scss' scoped>
$content_margin: 8px;


.userTitleView {
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
    .user_msg_link {
        font-size: #{$fontSizeTable};
    }
}
</style>