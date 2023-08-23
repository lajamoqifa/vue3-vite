import { createRouter, createWebHistory } from 'vue-router'
import AutoReportList from '../views/auto-report/AutoReportList.vue'
import AutoReportDetail from '../views/auto-report/AutoReportDetail.vue'
import RuleList from '../views/auto-report-rule/RuleList.vue'
import RuleDetail from '../views/auto-report-rule/RuleDetail.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      children: [
        {
          path: 'report-list',
          name: 'reportList',
          component: AutoReportList
        },
        {
          path: 'report-detail',
          name: 'reportDetail',
          component: AutoReportDetail
        },
        {
          path: 'rule-list',
          name: 'ruleList',
          component: RuleList
        },
        {
          path: 'rule-detail',
          name: 'ruleDetail',
          component: RuleDetail
        }
      ]
    }
  ]
})

export default router
