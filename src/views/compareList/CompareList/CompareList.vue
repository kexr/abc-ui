<template>
  <div class="compare_list-bar">
    <div class="title">产品对比</div>
    <div class="compare_list">
      <div class="compare_list_item" v-for="item in listData">
        <div
          class="compare_list_item2"
          v-for="item2 in item"
          :style="item2.style"
        >
          {{ item2.val }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";

let props = defineProps({
  list: {
    type: Array,
    default: () => [],
  },
  compareFun: {
    type: Function,
    default: (name, val1, val2) => {
      return {};
    },
  },
});
const listData = computed(() => {
  let listData = JSON.parse(JSON.stringify(props.list));
  for (let i1 in props.list[0]) {
    let res = [];
    props.list.forEach((item2, i2) => {
      res.push(item2[i1]);
    });
    let styleArray = props.compareFun(i1, ...res) && props.compareFun(i1, ...res).style;
    props.list.forEach((item, i) => {
      listData[i][i1] = { val: props.list[i][i1] };
    });
    if (styleArray) {
      styleArray.forEach((item, i) => {
        listData[i][i1].style = item;
      });
    }
  }
  //   props.list[0].forEach((item1, i1) => {
  //     let res = [item1]
  //     props.list.forEach((item2, i2) => {
  //         res.push(item2[i1])
  //     });
  //     compareFun(...res).forEach((item, i) => {
  //         listData[0][i].style = item
  //     })
  //   });
  console.log(props.list, listData);
  return listData;
});
</script>

<style lang="scss" scoped>
.compare_list-bar {
  //   position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  .title {
    font-weight: 700;
    position: relative;
    top: 14px;
    // left: calc(50% - 50px);
    background-color: #fff;
    text-align: center;

    min-width: 80px;
    padding: 6px 22px;
  }
  .compare_list {
    width: 100%;
    display: flex;
    // margin-top: 8px;

    .compare_list_item {
      font-weight: 600;
      width: 50%;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 8px;

      &:first-child {
        border-top: 2px solid #f6f6f6;
        border-right: 1px solid #f6f6f6;
      }

      &:last-child {
        border-top: 2px solid #f6f6f6;
        border-left: 1px solid #f6f6f6;
      }
      .compare_list_item2 {
        padding: 8px;
      }
    }
  }
}
</style>
