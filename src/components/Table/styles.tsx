import styled from 'styled-components'

export const TableWrapper = styled.div`
  flex: 0 0 100%;

  table {
    width: 100%;

    th {
      width: 20%;
    }
  }
`

export const Table = styled.table`
  border-spacing: unset;
`

export const TableHeaderWrapper = styled.tr`
  background: #efecec;
`

export const TableHeader = styled.th`
  position: relative;
  text-align: left;
  padding: 18px 4px;
  text-transform: capitalize;

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    right: 12px;
    border: 5px solid transparent;
  }

  &::before {
    border-bottom-color: #bdbdbd;
    margin-top: -12px;
  }

  &::after {
    border-top-color: #bdbdbd;
    margin-top: 1px;
  }

  &.asc {
    &::after {
      border-top-color: green;
    }
  }

  &.dsc {
    &::before {
      border-bottom-color: green;
    }
  }
`

export const TableRow = styled.tr`
  td {
    border-bottom: 1px solid #efecec;
    padding: 10px 4px;
    font-size: 12px;
  }

  &:last-child {
    td {
      border-bottom: unset;
    }
  }
`
