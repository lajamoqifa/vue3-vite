/**
 * 加载内容列表
 * @returns
 */
export default function useReportDetetail() {
  const data = ref<TuRecord>({})
  const loading = ref<boolean>(true)
  async function loadReportInfo() {}
  return { data, loading, loadReportInfo }
}
