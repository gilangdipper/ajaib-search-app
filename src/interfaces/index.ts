export interface IUser {
  gender: string
  name: Record<'title' | 'first' | 'last', string>
  location: {
    street: {
      number: number
      name: string
    }
    city: string
    state: string
    country: string
    postcode: string
    coordinates: Record<'latitude' | 'longitude', string>
    timezone: Record<'offset' | 'description', string>
  }
  email: string
  login: Record<
    'uuid' | 'username' | 'password' | 'salt' | 'md5' | 'sha1' | 'sha256',
    string
  >
  dob: {
    date: string
    age: number
  }
  registered: {
    date: string
    age: number
  }
  phone: string
  cell: string
  id: Record<'name' | 'value', string>
  picture: Record<'large' | 'medium' | 'thumbnail', string>
  nat: string
}

export interface IUserResponse {
  info: {
    seed: string
    results: number
    page: number
    version: string
  }
  results: IUser[]
}

export interface IErrorResponse {
  errors: {
    code: number
    message: string
  }
}

export type TUserFilter = {
  page: number
  pageSize: number
  results: number
  keyword?: string
  sortBy?: string
  sortOrder?: string
  gender?: string
}
