import styled from 'styled-components'

export const FilterWrapper = styled.div`
  flex: 0 0 100%;
  display: flex;
  flex-flow: row wrap;
  padding: 20px 0;
`

export const SearchWrapper = styled.div`
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

export const FilterGenderWrapper = styled.div`
  margin-right: 10px;

  .label {
    flex: 1 1 100%;
    margin-bottom: 6px;
  }
`

export const FilterResetWrapper = styled.div`
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
