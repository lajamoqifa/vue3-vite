declare global {
  interface TuRecord {
    [x: string | number | Symbol | any]: [x: string | number | Symbol | any]
  }
}
export {}
