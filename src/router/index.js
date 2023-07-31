import { createRouter, createWebHashHistory } from "vue-router";
import component from "../views/componentView/index.vue";
import tableView from "../views/tableView/index.vue";
import detailDataListView from "../views/detailDataListView/index.vue";
import userTitleView from "../views/userTitleView/index.vue";
import chipMenuView from "../views/chipMenuView/index.vue";
import compareList from "../views/compareList/index.vue";
import installView from "../views/install/index.vue";
import startedQView from "../views/startedQ/index.vue";
const routes = [
  // { path: '/', component: Home },
  {
    path: "/",
    component: component,
    redirect: '/table',
    children: [
      { path: "/table", component: tableView },
      { path: "/detailDataList", component: detailDataListView },
      { path: "/userTitle", component: userTitleView },
      { path: "/chipMenu", component: chipMenuView },
      { path: "/install", component: installView },
      { path: "/startedQ", component: startedQView },
      { path: "/compareList", component: compareList },
    ],
  },
];

// 3. 创建路由实例并传递 `routes` 配置
// 你可以在这里输入更多的配置，但我们在这里
// 暂时保持简单
const router = createRouter({
  // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: createWebHashHistory(),
  routes, // `routes: routes` 的缩写
});

export default router;
