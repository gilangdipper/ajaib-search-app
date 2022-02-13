import { TUserFilter } from '../../interfaces'

export interface IFilter {
  handleUpdateFilter: (
    filterName: Partial<Omit<TUserFilter, 'page' | 'pageSize' | 'results'>>,
  ) => void
  filter: Omit<TUserFilter, 'page' | 'pageSize' | 'results'>
  handleResetFilter: () => void
}
