<template>
  <div class="tableView">
    <ContentModel title="CompareList数据对比">
      <template #content>
        <div class="title">介绍</div>
        <div>数据对比，可用于两组数据数据差异化对比。</div>
        <div class="title">代码演示</div>
        <div class="title sub">基础用法</div>
        <highlightjs
          autodetect
          code="import { CompareList } from 'gocopy-ui/ui'"
        ></highlightjs>
        <highlightjs
          autodetect
          code="<CompareList :list='list' ></CompareList>"
        ></highlightjs>
        <highlightjs
          autodetect
          :code="`const list = [
  {
    name: 'LILI',
    sax: '女',
    old: '暂无',
    sort: 'No.63',
    sort2: 'No.12',
  },
  {
    name: 'MAY',
    sax: '男',
    old: '暂无',
    sort: 'No.56',
    sort2: 'No.24',
  },
];`"
        ></highlightjs>
        <!-- <div class="title sub">指定固定样式</div>
        <div>可通过compareFun属性，指定两组数据的展示样式。</div>
        <div>compareFun属性允许返回一个含有style属性的对象，style属性为一个数组，style[0]指定了list[0]对应项的样式，style[1]指定list[1]对应项的样式。</div>
        <highlightjs
          autodetect
          code="<CompareList :list='list' :compareFun='compareFun' ></CompareList>"
        ></highlightjs>
        <highlightjs
          autodetect
          :code="`const compareFun = (name, val1, val2) => {
  return { style: [{ color: '#ff9305' }, { color: '#03A9F4' }] };
};`" -->
        <!-- ></highlightjs> -->
        <div class="title sub">指定动态样式</div>
        <div>compareFun属性允许传入一个方法，方法带有三个参数，分别为属性名，list[0]的属性值，list[1]的属性值。</div>
        <div>compareFun属性允许返回一个含有style属性的对象，style属性为一个数组，style[0]指定了list[0]对应项的样式，style[1]指定list[1]对应项的样式。</div>
        <highlightjs
          autodetect
          :code="`const compareFun2 = (name, val1, val2) => {
  if(name === 'sort' || name === 'sort2') {
    if(val1.split('.')[1] > val2.split('.')[1]) {
      return { style: [{ color: '#03A9F4' }, { color: '#999' }] };
    } else {
      return { style: [{ color: '#999' }, { color: '#03A9F4' }] };
    }
  }
};`"
        ></highlightjs>
        
        <div class="title">API</div>
        <div class="title sub">Props</div>
        <el-table :data="propsTableData" style="width: 100%">
          <el-table-column prop="params" label="参数" width="150" />
          <el-table-column prop="msg" label="说明" />
          <el-table-column prop="type" label="类型" width="150" />
          <el-table-column prop="default" label="默认值" width="150" />
        </el-table>
        <!-- <div class="title sub">Event</div>
        <el-table :data="eventTableData" style="width: 100%">
          <el-table-column prop="params" label="参数" width="150" />
          <el-table-column prop="msg" label="说明" />
          <el-table-column prop="query" label="携带参数" />
        </el-table> -->
      </template>
      <template #content_h5>
        <div class="title h5">基础用法</div>
        <CompareList :list="list1" ></CompareList>
        <!-- <div class="title h5">指定固定样式</div>
        <CompareList :list="list1" :compareFun="compareFun1" ></CompareList> -->
        <div class="title h5">指定动态样式</div>
        <CompareList :list="list1" :compareFun="compareFun2" ></CompareList>
      </template>
    </ContentModel>
  </div>
</template>

<script setup>
import { ref } from "vue";
import ContentModel from "../../pubComponents/ContentModel.vue";
import CompareList from "./CompareList/CompareList.vue";

const propsTableData = ref([{
	params: 'list',
	msg: '对比信息列表。',
	type: 'Array',
	default: '[]',
}, {
	params: 'compareFun',
	msg: 'compareFun属性允许传入一个方法，方法带有三个参数，分别为属性名，list[0]的属性值，list[1]的属性值。允许返回一个含有style属性的对象，style属性为一个数组，style[0]指定了list[0]对应项的样式，style[1]指定list[1]对应项的样式。',
	type: 'Function',
	default: '()=>{}',
}])

const list1 = [
  {
    name: "LILI",
    sax: "女",
    old: "暂无",
    sort: "No.63",
    sort2: "No.12",
  },
  {
    name: "MAY",
    sax: "男",
    old: "暂无",
    sort: "No.56",
    sort2: "No.24",
  },
];
const compareFun1 = (name, val1, val2) => {
  return { style: [{ color: "#ff9305" }, { color: "#03A9F4" }] };
};
const compareFun2 = (name, val1, val2) => {
  if(name === 'sort' || name === 'sort2') {
    console.log(1, val1, val2)
    if(val1.split('.')[1] > val2.split('.')[1]) {
      return { style: [{ color: "#03A9F4" }, { color: "#999" }] };
    } else {
      return { style: [{ color: "#999" }, { color: "#03A9F4" }] };
    }
  }
};
</script>

<style lang="scss" scoped>
$content_margin: 8px;

.tableView {
  .chipMenuBar {
    background-color: #f6f6f6;
    padding: 0.7rem;
    margin-left: -1rem;
    margin-right: -1rem;
  }
  .title {
    text-align: left;
    padding: 1rem 1rem;
    padding-left: 0;
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
