import { useState } from 'react'
import styled from 'styled-components'
import { isUndefined, snakeCaseFormatter } from './helper'

const TableWrapper = styled.div`
  flex: 0 0 100%;

  table {
    width: 100%;

    th {
      width: 20%;
    }
  }
`

const Table = styled.table`
  border-spacing: unset;
`

const TableHeaderWrapper = styled.tr`
  background: #efecec;
`

const TableHeader = styled.th`
  position: relative;
  text-align: left;
  padding: 18px 4px;

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

const TableRow = styled.tr`
  td {
    border-bottom: 1px solid #efecec;
    padding: 10px 0;
  }

  &:last-child {
    td {
      border-bottom: unset;
    }
  }
`

const TableComponent = () => {
  const [sortHeader, setSortHeader] = useState<
    Record<string, string | undefined>
  >({})

  const headerList = ['Username', 'Name', 'Email', 'Gender', 'Registered Date']

  return (
    <TableWrapper>
      <Table>
        <TableHeaderWrapper>
          {headerList.map((header) => {
            const tableHeaderClass = []
            const headerName = snakeCaseFormatter(header)

            if (sortHeader[headerName] === 'asc') {
              tableHeaderClass.push('asc')
            } else if (sortHeader[headerName] === 'dsc') {
              tableHeaderClass.push('dsc')
            }

            return (
              <TableHeader
                key={header}
                className={tableHeaderClass.join(' ')}
                onClick={() => {
                  const nextSort =
                    isUndefined(sortHeader[headerName]) ||
                    sortHeader[headerName] === 'dsc'
                      ? 'asc'
                      : 'dsc'
                  setSortHeader({
                    [headerName]: nextSort,
                  })
                }}
              >
                {header}
              </TableHeader>
            )
          })}
        </TableHeaderWrapper>
        <TableRow>
          <td>Alfreds Futterkiste</td>
          <td>Maria Anders</td>
          <td>Germany</td>
          <td>Roland Mendel</td>
          <td>Austria</td>
        </TableRow>
        <TableRow>
          <td>Centro comercial Moctezuma</td>
          <td>Francisco Chang</td>
          <td>Mexico</td>
          <td>Roland Mendel</td>
          <td>Austria</td>
        </TableRow>
        <TableRow>
          <td>Ernst Handel</td>
          <td>Roland Mendel</td>
          <td>Austria</td>
          <td>Roland Mendel</td>
          <td>Austria</td>
        </TableRow>
      </Table>
    </TableWrapper>
  )
}

export default TableComponent
