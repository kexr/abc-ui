<template>
	<div class="tableView">
		<ContentModel title="chipMenu瓷片区">
			<template #content>
				<div class="title">介绍</div>
				<div>功能菜单，瓷片区，金刚区。</div>
				<div class="title">代码演示</div>
				<div class="title sub">基础用法</div>
				<highlightjs autodetect code="import { ChipMenu } from 'gocopy-ui/ui'" ></highlightjs>
				<highlightjs code="<ChipMenu :list='clipMenuList' @chipMenuClick='chipMenuClick'/>" />
				<highlightjs autodetect :code="`const chipMenuClick = ref([
    { label: '测绘', id: 1, icon: new URL('../../assets/button/11.png', import.meta.url).href },
    { label: '信息', id: 2, icon: new URL('../../assets/button/22.png', import.meta.url).href },
    { label: '地质', id: 3, icon: new URL('../../assets/button/33.png', import.meta.url).href },
    { label: '供变电', id: 4, icon: new URL('../../assets/button/44.png', import.meta.url).href },
    { label: '机量', id: 1, icon: new URL('../../assets/button/55.png', import.meta.url).href },
    { label: '结构', id: 2, icon: new URL('../../assets/button/66.png', import.meta.url).href },
])`" />
				<div class="title sub">动态行列</div>
				<highlightjs code="<ChipMenu :list='clipMenuList' @chipMenuClick='chipMenuClick'/>" />
				<highlightjs autodetect :code="`const tablelist = ref([[
	{ id: 1, icon: new URL('../../assets/button/1.png', import.meta.url).href },
	{ id: 2, icon: new URL('../../assets/button/2.png', import.meta.url).href },
	{ id: 2, icon: new URL('../../assets/button/1.png', import.meta.url).href },
],[
	{ id: 1, icon: new URL('../../assets/button/1.png', import.meta.url).href },
	{ id: 2, icon: new URL('../../assets/button/2.png', import.meta.url).href },
]])`" />
				<div class="title">API</div>
				<div class="title sub">Props</div>
				<el-table :data="propsTableData" style="width: 100%">
					<el-table-column prop="params" label="参数" width="150" />
					<el-table-column prop="msg" label="说明" />
					<el-table-column prop="type" label="类型" width="150" />
					<el-table-column prop="default" label="默认值" width="150" />
				</el-table>
				<div class="title sub">Event</div>
				<el-table :data="eventTableData" style="width: 100%">
					<el-table-column prop="params" label="参数" width="150" />
					<el-table-column prop="msg" label="说明" />
					<el-table-column prop="query" label="携带参数" />
				</el-table>
			</template>
			<template #content_h5>
				<div class="title h5">基础用法</div>
				<div class="chipMenuBar">
					<ChipMenu :list="clipMenuList3" />
				</div>
				<div class="title h5">动态行列</div>
				<ChipMenu :list="clipMenuList" />
			</template>
		</ContentModel>
	</div>
</template>

<script setup>
import { ref } from 'vue'
import ContentModel from '../../pubComponents/ContentModel.vue'
import { ChipMenu } from 'gocopy-ui/ui'

const clipMenuList = ref([
	// [
	// 	{ label: '1', id: 1, icon: '../assets/button/1.png' },
	// 	{ label: '2', id: 2, icon: '../assets/button/2.png' },
	// 	{ label: '3', id: 3, icon: '../assets/button/3.png' },
	// 	{ label: '4', id: 4, icon: '../assets/button/1.png' },
	// ],
	[
		{ id: 1, icon: new URL('../../assets/button/1.png', import.meta.url).href },
		{ id: 2, icon: new URL('../../assets/button/2.png', import.meta.url).href },
		{ id: 2, icon: new URL('../../assets/button/1.png', import.meta.url).href },
	],
	[
		{ id: 1, icon: new URL('../../assets/button/1.png', import.meta.url).href },
		{ id: 2, icon: new URL('../../assets/button/2.png', import.meta.url).href },
	],
])

const clipMenuList2 = ref([
[
    { label: '1', id: 1, icon: new URL('../../assets/button/1.png', import.meta.url).href },
    { label: '2', id: 2, icon: new URL('../../assets/button/2.png', import.meta.url).href },
    { label: '3', id: 3, icon: new URL('../../assets/button/3.png', import.meta.url).href },
    { label: '4', id: 4, icon: new URL('../../assets/button/1.png', import.meta.url).href },
],[
    { label: '1', id: 1, icon: new URL('../../assets/button/3.png', import.meta.url).href },
    { label: '2', id: 2, icon: new URL('../../assets/button/2.png', import.meta.url).href },
    { label: '3', id: 3, icon: new URL('../../assets/button/1.png', import.meta.url).href },
    { label: '4', id: 4, icon: new URL('../../assets/button/1.png', import.meta.url).href },
]
])

const clipMenuList3 = ref([
    { label: '测绘', id: 1, icon: new URL('../../assets/button/11.png', import.meta.url).href },
    { label: '信息', id: 2, icon: new URL('../../assets/button/22.png', import.meta.url).href },
    { label: '地质', id: 3, icon: new URL('../../assets/button/33.png', import.meta.url).href },
    { label: '供变电', id: 4, icon: new URL('../../assets/button/44.png', import.meta.url).href },
    { label: '机量', id: 1, icon: new URL('../../assets/button/55.png', import.meta.url).href },
    { label: '结构', id: 2, icon: new URL('../../assets/button/66.png', import.meta.url).href },
])

const chipMenuClick = ({ id }) => {
	console.log(id)
}

const propsTableData = ref([{
	params: 'list',
	msg: '展示信息列表',
	type: 'Array',
	default: '[]',
}, {
	params: 'list.label',
	msg: '功能区菜单标题，展示在功能图标下方',
	type: 'String',
	default: '',
},{
	params: 'list.icon',
	msg: '功能区按钮图片，传入相对地址',
	type: 'Boolean',
	default: 'false',
},{
	params: 'list.id',
	msg: '功能区按钮id',
	type: 'String | Number',
	default: '',
}])
const eventTableData = ref([{
	params: 'chipMenuClick',
	msg: '点击菜单图标触发',
	query: '{ id: list.id }'
}])
</script>

<style lang='scss' scoped>
$content_margin: 8px;

.tableView {
	.chipMenuBar {
		background-color: #f6f6f6;
		padding: .7rem;
		margin-left: -1rem;
		margin-right: -1rem;
	}
	.title {
		text-align: left;
		padding: 1rem 1rem;
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
}</style>