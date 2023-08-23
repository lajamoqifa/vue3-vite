<template>
  <a-menu
    v-model:openKeys="openKeys"
    v-model:selectedKeys="selectedKeys"
    style="width: 200px"
    mode="inline"
    :theme="theme"
    :items="items"
    @click="handleClick"
  />
</template>
<script lang="ts" setup>
import { h, ref } from 'vue'
import { MailOutlined, CalendarOutlined } from '@ant-design/icons-vue'
import type { MenuProps, MenuTheme } from 'ant-design-vue'
import router from '../router/index'
const theme = ref<MenuTheme>('dark')
const selectedKeys = ref(['1'])
const openKeys = ref(['sub1'])
const items = ref([
  {
    key: '/report-list',
    icon: () => h(MailOutlined),
    label: 'Navigation One',
    title: 'Navigation One'
  },
  {
    key: '/rule-list',
    icon: () => h(CalendarOutlined),
    label: 'Navigation Two',
    title: 'Navigation Two'
  }
])
const handleClick: MenuProps['onClick'] = (e) => {
  router.push(e.key as string)
}
</script>
