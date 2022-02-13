import { ChangeEventHandler, FC, useMemo, useState } from 'react'

import { ReactComponent as SearchIcon } from '../../assets/search-icon.svg'

import { debounce } from './helper'
import { IFilter } from './interfaces'

import Select from './Select'
import {
  FilterGenderWrapper,
  FilterResetWrapper,
  FilterWrapper,
  SearchWrapper,
} from './styles'

const Filter: FC<IFilter> = ({
  handleResetFilter,
  handleUpdateFilter,
  filter,
}) => {
  const [inputValue, setInputValue] = useState('')
  const handleOnChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    handleUpdateFilter({ keyword: e.target.value })
  }
  const debouncedChangeHandler = useMemo(() => debounce(handleOnChange), [])

  return (
    <FilterWrapper>
      <SearchWrapper>
        <div className="label">Search</div>
        <input
          value={inputValue}
          type="text"
          placeholder="Search.."
          name="search"
          onChange={(e) => {
            setInputValue(e.target.value)
            debouncedChangeHandler(e)
          }}
        />
        <button type="button">
          <SearchIcon />
        </button>
      </SearchWrapper>
      <FilterGenderWrapper>
        <div className="label">Gender</div>
        <Select
          options={[
            { name: 'all', value: 'all' },
            { name: 'male', value: 'male' },
            { name: 'female', value: 'female' },
          ]}
          value={filter.gender || ''}
          onChange={(value) => {
            handleUpdateFilter({ gender: `${value}` })
          }}
          placeholder="Select gender"
        />
      </FilterGenderWrapper>
      <FilterResetWrapper>
        <button
          type="button"
          onClick={() => {
            handleResetFilter()
            setInputValue('')
          }}
        >
          Reset Filter
        </button>
      </FilterResetWrapper>
    </FilterWrapper>
  )
}

export default Filter
