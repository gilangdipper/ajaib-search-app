import { shallow, ShallowWrapper } from 'enzyme'

import Filter from '.'
import Select from './Select'

import { IFilter } from './interfaces'
import {
  FilterGenderWrapper,
  FilterResetWrapper,
  SearchWrapper,
} from './styles'

describe('Filter', () => {
  const props: IFilter = {
    handleUpdateFilter: () => {},
    filter: {
      keyword: '',
      sortBy: '',
      sortOrder: '',
      gender: '',
    },
    handleResetFilter: () => {},
  }
  const movieCard = (addProps?: Partial<IFilter>): ShallowWrapper =>
    shallow(<Filter {...props} {...addProps} />)

  test('Should render filter item properly', () => {
    expect(movieCard().find(SearchWrapper).find('input').exists()).toBe(true)
    expect(movieCard().find(FilterGenderWrapper).find(Select).exists()).toBe(
      true,
    )
    expect(movieCard().find(FilterResetWrapper).find('button').exists()).toBe(
      true,
    )
  })

  test('Should execute handleResetFilter func when click button reset filter', () => {
    const resetFilterFunction = jest.fn()
    const mvCard = movieCard({ handleResetFilter: resetFilterFunction })

    mvCard.find(FilterResetWrapper).find('button').simulate('click')
    expect(resetFilterFunction).toBeCalled()
  })
})
