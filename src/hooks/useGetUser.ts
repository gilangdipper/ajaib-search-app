import { useQuery, UseQueryOptions } from 'react-query'
import axios, { AxiosError, AxiosResponse } from 'axios'

import { IUser } from '../interfaces'

interface IUserResponse {
  info: {
    seed: string
    results: number
    page: number
    version: string
  }
  results: IUser[]
}

interface IErrorResponse {
  errors: {
    code: number
    message: string
  }
}

type TTicketsFilter = {
  page: number
  pageSize: number
  results: number
  keyword?: string
  sortBy?: string
  sortOrder?: string
  gender?: string
}

const generateQueryString = (params: Record<string, string | number>) =>
  Object.keys(params)
    .filter((key) => !!params[key])
    .map((key) => `${key}=${params[key]}`)
    .join('&')

export const fetchUsers = async (
  filters?: TTicketsFilter,
): Promise<IUserResponse> => {
  const urlApi = 'https://randomuser.me/api/'
  let urlParams = ''
  if (filters) {
    urlParams = generateQueryString(filters)
  }
  const res: AxiosResponse<IUserResponse, IErrorResponse> = await axios.get(
    `${urlApi}?${urlParams}`,
  )

  return res.data
}

export default function useGetUsers(params?: {
  filters: TTicketsFilter
  options?: Omit<
    UseQueryOptions<IUserResponse, AxiosError, IUserResponse>,
    'queryKey' | 'queryFn'
  >
}) {
  return useQuery(
    ['tickets', params?.filters.page],
    () => fetchUsers(params?.filters),
    params?.options,
  )
}
