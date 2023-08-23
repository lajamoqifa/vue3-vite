import { Checkbox } from 'ant-design-vue'
interface useReportListColumnsProp {
  onView: (id: string) => void
  onEdit: (id: string) => void
  onDel: (id: string) => void
}

export default function useReportListColumns({ onView, onEdit, onDel }: useReportListColumnsProp) {
  return {
    columns: [
      // {
      //   title: '编号',
      //   dataIndex: '编号',
      //   key: '1',
      //   customRender: function ({ text, record, index, column }) {
      //     return h(Checkbox, {}, record.key)
      //   }
      // },
      {
        title: '编号',
        dataIndex: '编号',
        key: '1'
      },
      { title: '内容标题', dataIndex: 'key', key: '1' },
      { title: '创建人', dataIndex: 'name', key: '2' },
      { title: '创建时间', dataIndex: 'name', key: '2' },
      { title: '更新时间', dataIndex: 'name', key: '2' },
      {
        title: '操作',
        key: 'age',
        dataIndex: 'age',
        customRender: function ({ text, record, index, column }) {
          return h('div', { style: 'color:blue' }, [
            h(
              'span',
              {
                style: 'margin-right:8px',
                onClick: () => {
                  onView(record.id)
                }
              },
              '查看'
            ),
            h(
              'span',
              {
                style: 'margin-right:8px',
                onClick: () => {
                  onEdit(record.id)
                }
              },
              '编辑'
            ),
            h(
              'span',
              {
                style: 'margin-right:8px',
                onClick: () => {
                  onDel(record.id)
                }
              },
              '删除'
            )
          ])
        }
      }
    ]
  }
}
