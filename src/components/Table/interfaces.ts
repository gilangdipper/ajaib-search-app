import { IUser, IUserResponse, TUserFilter } from '../../interfaces'

export interface ITable {
  rows: IUser[] | undefined
  pagination?: IUserResponse['info']
  handleSetPage: (page: number) => void
  handleUpdateFilter: (
    filterUpdated: Partial<Omit<TUserFilter, 'page' | 'pageSize' | 'results'>>,
  ) => void
}
