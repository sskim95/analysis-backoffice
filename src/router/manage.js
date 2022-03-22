import ManageAccount from "@/views/manage/ManageAccount.vue";
import ManageMenu from "@/views/manage/ManageMenu.vue";

export default [
  {
    path: "/manage/account",
    name: "ManageAccount",
    component: ManageAccount,
  },
  {
    path: "/manage/menu",
    name: "ManageMenu",
    component: ManageMenu,
  },
];
