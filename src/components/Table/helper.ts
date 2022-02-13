export const snakeCaseFormatter = (text: string) => text.split(' ').join('-')

export const isUndefined = (test: unknown) => typeof test === 'undefined'

export const formatStringDate = (date: string) =>
  new Date(date).toLocaleString('id-ID', { timeZone: 'UTC' })
