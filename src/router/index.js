import { createRouter, createWebHashHistory } from "vue-router";
import component from "../views/componentView/index.vue";
import tableView from "../views/tableView/index.vue";
import detailDataListView from "../views/detailDataListView/index.vue";
import userTitleView from "../views/userTitleView/index.vue";
// 2. 定义一些路由
// 每个路由都需要映射到一个组件。
// 我们后面再讨论嵌套路由。
const routes = [
  // { path: '/', component: Home },
  { path: "/", component: component, children: [
    { path: "/table", component: tableView },
    { path: "/detailDataList", component: detailDataListView },
    { path: "/userTitle", component: userTitleView },
  ]},
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
