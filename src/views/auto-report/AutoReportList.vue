<script setup lang="ts">
import dayjs, { Dayjs } from 'dayjs'
import useReportList from './hooks/useReportList'
import useReportListColumns from './hooks/useReportListColumns'
import useDelReport from './hooks/useDeleting'
const dateFormat = 'YYYY-MM-DD'
const startTime = ref<Dayjs>(dayjs('2015-01-01', dateFormat))
const endTime = ref<Dayjs>(dayjs('2015-01-02', dateFormat))
const { data, loading, loadReports } = useReportList()
onMounted(() => {
  loadReports()
})
const onView = (id: string) => {}
const onEdit = (id: string) => {}
const { deling, delReport } = useDelReport()
const { columns } = useReportListColumns({ onView, onEdit, onDel: delReport })
</script>

<template>
  <div class="filterArea">
    <a-input placeholder="请输入标题或创建人" class="ml16" style="width: 200px"></a-input>
    <div class="ml16">创建时间</div>
    <a-date-picker v-model:value="startTime" :format="dateFormat" class="ml4" />
    <div class="ml4">至</div>
    <a-date-picker v-model:value="endTime" :format="dateFormat" class="ml4" />
    <a-checkbox class="ml16">我创建的</a-checkbox>
    <a-button class="ml4">查询</a-button>
    <a-button class="ml4">重置</a-button>
  </div>
  <div class="tablePanel">
    <a-table
      :columns="columns"
      :data-source="data"
      :pagination="true"
      v-loading="loading || deling"
    ></a-table>
  </div>
</template>

<style scoped lang="less">
.filterArea {
  height: 40px;
  width: 100%;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #5b6b73;
}
.tablePanel {
  width: 100%;
  height: 100%;
}
</style>
