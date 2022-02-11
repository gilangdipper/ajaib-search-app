export const snakeCaseFormatter = (text: string) => text.split(' ').join('-')

export const isUndefined = (test: unknown) => typeof test === 'undefined'
