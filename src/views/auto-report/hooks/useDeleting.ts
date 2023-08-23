export default function useDelReport() {
  const deling = ref<Boolean>(false)
  async function delReport(id: string) {}
  return { delReport, deling }
}
