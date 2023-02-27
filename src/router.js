import { createWebHistory, createRouter } from "vue-router";

const routes =  [
  {
    path: "/teachers",
    component: () => import("./components/TeacherView")
  },
  {
    path: "/questions/:id/",
    name: "question-view",
    component: () => import("./components/TeacherAnswerView.vue")
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;