export const isClient = () => {
  return !!globalThis.localStorage
}

