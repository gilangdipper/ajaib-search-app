import styled from 'styled-components'

import { ReactComponent as SearchIcon } from '../../assets/search-icon.svg'
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

const Filter = () => {
  return (
    <FilterWrapper>
      <SearchWrapper>
        <div className="label">Search</div>
        <input type="text" placeholder="Search.." name="search" />
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
          value="all"
          onChange={(value) => {
            console.log('//', value)
          }}
          placeholder="Select gender"
        />
      </FilterGenderWrapper>
      <FilterResetWrapper>
        <button type="button">Reset Filter</button>
      </FilterResetWrapper>
    </FilterWrapper>
  )
}

export default Filter
