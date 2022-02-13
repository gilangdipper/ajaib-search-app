import { useQuery, UseQueryOptions } from 'react-query'
import axios, { AxiosError, AxiosResponse } from 'axios'

import { IErrorResponse, IUserResponse, TUserFilter } from '../interfaces'

const generateQueryString = (params: Record<string, string | number>) =>
  Object.keys(params)
    .filter((key) => !!params[key])
    .map((key) => `${key}=${params[key]}`)
    .join('&')

export const fetchUsers = async (
  filters?: TUserFilter,
): Promise<IUserResponse> => {
  const urlApi = 'https://randomuser.me/api/'
  let urlParams = ''
  if (filters) {
    urlParams = generateQueryString(filters)
  }
  const res: AxiosResponse<IUserResponse, IErrorResponse> = await axios.get(
    `${urlApi}?seed=ajaib&${urlParams}`,
  )

  return res.data
}

export default function useGetUsers(params?: {
  filters: TUserFilter
  options?: Omit<
    UseQueryOptions<IUserResponse, AxiosError, IUserResponse>,
    'queryKey' | 'queryFn'
  >
}) {
  return useQuery(
    [
      'tickets',
      params?.filters.page,
      params?.filters.keyword,
      params?.filters.gender,
      params?.filters.sortBy,
    ],
    () => fetchUsers(params?.filters),
    params?.options,
  )
}
