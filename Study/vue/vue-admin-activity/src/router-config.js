import activePublic from './page/activePublic/index'
import step1 from "./page/activePublic/step1";
import step2 from "./page/activePublic/step2";
import step3 from "./page/activePublic/step3";
import step4 from "./page/activePublic/step4";

export default [
  {
    path: '/activePublic',
    component: activePublic,
    children: [
      {
        path: '/',
        component: step1
      },
      {
        path: '/step1',
        component: step1
      },
      {
        path: '/step2',
        component: step2
      },
      {
        path: '/step3',
        component: step3
      },
      {
        path: '/step4',
        component: step4
      }
    ]
  }
];
