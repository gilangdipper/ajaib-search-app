import { ChangeEventHandler, FC, useMemo, useState } from 'react'
import styled from 'styled-components'

import { ReactComponent as SearchIcon } from '../../assets/search-icon.svg'
import { TUserFilter } from '../../interfaces'
import { debounce } from './helper'

import Select from './Select'

const FilterWrapper = styled.div`
  flex: 0 0 100%;
  display: flex;
  flex-flow: row wrap;
  padding: 20px 0;
`

const SearchWrapper = styled.div`
  flex: 0 0 25%;
  display: flex;
  flex-flow: row wrap;
  margin-right: 10px;

  .label {
    flex: 1 1 100%;
    margin-bottom: 6px;
  }

  input {
    flex: 1 1 auto;
    padding: 8px 10px;
    border: 1px solid #e6e9eb;
    border-right: 0;
    font-size: 14px;
    border-radius: 2px;
  }

  button {
    flex: 0 0 auto;
    background: #339fff;
    border: 0;

    svg {
      fill: #ffffff;
    }
  }
`

const FilterGenderWrapper = styled.div`
  margin-right: 10px;

  .label {
    flex: 1 1 100%;
    margin-bottom: 6px;
  }
`

const FilterResetWrapper = styled.div`
  display: flex;
  align-items: flex-end;

  button {
    border-radius: 2px;
    background: transparent;
    border: 1px solid #e6e9eb;
    padding: 8px 10px;
    cursor: pointer;
  }
`

interface IFilter {
  handleUpdateFilter: (
    filterName: Partial<Omit<TUserFilter, 'page' | 'pageSize' | 'results'>>,
  ) => void
  filter: Omit<TUserFilter, 'page' | 'pageSize' | 'results'>
  handleResetFilter: () => void
}

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
