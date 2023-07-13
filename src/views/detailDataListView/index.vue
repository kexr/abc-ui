<template>
	<div class="tableView">
	<ContentModel title="detailDataList列表">
		<template #content>
			<div class="title">介绍</div>
			<div>用于展示包含两列的信息列表，第一列为标题，第二列为内容。</div>
			<div class="title">代码演示</div>
			<div class="title sub">基础用法</div>
			<highlightjs autodetect code="<DetailDataList :list='list' /></DetailDataList>" />
			<highlightjs autodetect :code="`const list = ref(
  {title: '姓名', val: '张三', },
  {title: '年龄', val: '20', }
)`" />
			<div class="title sub">自定义头像和颜色</div>
			<highlightjs autodetect code="<DetailDataList :list='list' /></DetailDataList>" />
			<highlightjs autodetect :code="`const list = ref(
  {
    title: '姓名',
    val: '张三',
    color: '#6fa8dc', 
    img: 'https://img01.sogoucdn.com/app/a/100520093/8379901cc65ba509-45c21ceb904429fc-197de0c5207df944e4cf8cf5f4482d4b.jpg'
  },
  {title: '年龄', val: '20', }
)`" />
			<div class="title sub">右侧插槽</div>
			<highlightjs autodetect :code="`<DetailDataList :list='list' />
  <template #01='{item}'>
    <div>自定义内容{{ item.slot }}</div>
  </template>
</DetailDataList>`" />
			<highlightjs autodetect :code="`const list = ref(
  {title: '姓名', val: '张三', slot: '01', },
  {title: '年龄', val: '20', }
)`" />
			<div class="title sub">自由排列</div>
			<highlightjs autodetect :code="`<DetailDataList :list='list' :auto='true'/></DetailDataList>`" />
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
			<DetailDataList :list="[{ title: '姓名', val: '张三', }, { title: '年龄', val: '20', }, ]">
			</DetailDataList>
			<div class="title h5">自定义头像和颜色</div>
			<DetailDataList :list="detailDataList2">
			</DetailDataList>
			<div class="title h5">右侧插槽</div>
			<DetailDataList :list="detailDataList3">
				<template #01="{item}">
					<div>自定义内容{{ item.slot }}</div>
				</template>
			</DetailDataList>
			<div class="title h5">自由排列</div>
			<DetailDataList :list="[{ title: '姓名', val: '张三', }, { title: '兴趣爱好', val: '睡觉吃饭打豆豆', }, ]" :auto="true">
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
},{
	params: 'auto',
	msg: '列表排列方式，false时左侧标题固定宽度，true时左侧宽度自动撑开',
	type: 'Boolean',
	default: 'false',
}])
const detailDataList2 = [{ title: '姓名', val: '张三', color: '#6fa8dc', img: 'https://img01.sogoucdn.com/app/a/100520093/8379901cc65ba509-45c21ceb904429fc-197de0c5207df944e4cf8cf5f4482d4b.jpg' }, {title: '年龄', val: '20', }]
const detailDataList3 = [{ title: '姓名', val: '张三', slot: '01'}, {title: '年龄', val: '20', }]
</script>

<style lang='scss' scoped>
$content_margin: 8px;

.tableView {
	.title {
		text-align: left;
		padding: 1rem 0rem;
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