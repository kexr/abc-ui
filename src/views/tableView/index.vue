<template>
	<div class="tableView">
		<ContentModel title="Table表格">
			<template #content>
				<div class="title">介绍</div>
				<div>用于展示多条结构类似的数据。</div>
				<div class="title">代码演示</div>
				<div class="title sub">基础用法</div>
				<highlightjs code="<Table :tableList='tablelist' :tableColList='tableColList'>123</Table>" />
				<highlightjs autodetect :code="`const tablelist = ref([
    { name: '医疗险', already: '-', noalready: '-', all: '10万' },
    { name: '重疾险', already: '80万', noalready: '10万', all: '-' },
    { name: '意外险', already: '80万', noalready: '10万', all: '-' },
    { name: '其他', already: '80万', noalready: '10万', all: '-' },
])`" />
				<highlightjs autodetect :code="`const tableColList = ref({
    already: '已有保障',
    noalready: '保障缺口',
    all: '理想保障',
})`" />
				<div class="title">API</div>
				<div class="title sub">Props</div>
				<el-table :data="propsTableData" style="width: 100%">
					<el-table-column prop="params" label="参数" width="150" />
					<el-table-column prop="msg" label="说明" />
					<el-table-column prop="type" label="类型" width="150" />
					<el-table-column prop="default" label="默认值" width="150" />
				</el-table>
			</template>
			<template #content_h5>
				<div class="title h5">基础用法</div>
				<Table :tableList="tablelist" :tableColList="tableColList"></Table>
			</template>
		</ContentModel>
	</div>
</template>

<script setup>
import { ref } from 'vue'
import { Table } from 'gocopy-ui/ui'
import ContentModel from '../../pubComponents/ContentModel.vue'
// console.log(highlightjs)
const tablelist = ref([
	{ name: '医疗险', already: '-', noalready: '-', all: '10万' },
	{ name: '重疾险', already: '80万', noalready: '10万', all: '-' },
	{ name: '意外险', already: '80万', noalready: '10万', all: '-' },
	{ name: '其他', already: '80万', noalready: '10万', all: '-' },
])
const tableColList = ref({
	already: '已有保障',
	noalready: '保障缺口',
	all: '理想保障',
})
const propsTableData = ref([{
	params: 'tableList',
	msg: '列名称与行展示内容，展示内容键值与tableColList的键值对应',
	type: 'Array',
	default: '[]',
}, {
	params: 'tableColList',
	msg: '行名称，键值与tableList键值对应',
	type: 'Object',
	default: '[]',
}])
</script>

<style lang='scss' scoped>
$content_margin: 8px;


.tableView {
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
}
</style>