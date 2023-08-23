/**
 * 加载内容列表
 * @returns
 */
export default function useReportList() {
  const data = ref<TuRecord[]>([
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      tags: ['nice', 'developer']
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      tags: ['loser']
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
      tags: ['cool', 'teacher']
    }
  ])
  const loading = ref<boolean>(true)
  async function loadReports() {}
  return { data, loading, loadReports }
}
