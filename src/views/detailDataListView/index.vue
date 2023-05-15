<template>
	<div class="tableView">
	<ContentModel>
		<template #content>
			<div class="title">介绍</div>
			<div>用于展示包含两列的信息列表，第一列为标题，第二列为内容。</div>
			<div class="title">代码演示</div>
			<div class="title sub">基础用法</div>
			<highlightjs autodetect code="<DetailDataList :list='list' /></DetailDataList>" />
			<highlightjs autodetect :code="`const list = ref(
  {title: '姓名', val: '张三', },
  {title: '年龄', val: '20', }
  {title: '爱好', val: '唱歌、跳舞', },
)`" />
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
			<div class="title">基础用法</div>
			<DetailDataList :list="[{ title: '姓名', val: '张三', }, { title: '年龄', val: '20', }, { title: '爱好', val: '唱歌、跳舞', }]">
			</DetailDataList>
		</template>
	</ContentModel>
</div>
</template>

<script setup>
import { ref } from 'vue'
import DetailDataList from '../../components/DetailDataList.vue'
import ContentModel from '../../pubComponents/ContentModel.vue'

const propsTableData = ref([{
	params: 'list',
	msg: '展示信息列表',
	type: 'Array',
	default: '[]',
}, {
	params: 'emptyMsg',
	msg: '当列表为空时，展示的提示信息',
	type: 'String',
	default: '暂无相关记录',
}])
</script>

<style lang='scss' scoped>
$content_margin: 8px;

.tableView {
	.title {
		text-align: left;
		padding: 1rem 0;
		font-size: 18px;
		font-weight: bold;

		&.sub {
			font-size: 16px;
			padding: 0.3rem 0;
		}
	}
}
</style>