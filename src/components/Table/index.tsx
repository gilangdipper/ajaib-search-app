import { FC, useState } from 'react'
import styled from 'styled-components'

import { IUser } from '../../interfaces'

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
    padding: 10px 4px;
    font-size: 12px;
  }

  &:last-child {
    td {
      border-bottom: unset;
    }
  }
`

interface ITable {
  rows: IUser[] | undefined
}

const TableComponent: FC<ITable> = ({ rows }) => {
  const [sortHeader, setSortHeader] = useState<
    Record<string, string | undefined>
  >({})

  const headerList = ['Username', 'Name', 'Email', 'Gender', 'Registered Date']

  return (
    <TableWrapper>
      <Table>
        <thead>
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
        </thead>
        <tbody>
          {rows &&
            rows.map((user) => (
              <TableRow key={user.login.username}>
                <td>{user.login.username}</td>
                <td>
                  {user.name.first} {user.name.last}
                </td>
                <td>{user.email}</td>
                <td>{user.gender}</td>
                <td>{user.registered.date}</td>
              </TableRow>
            ))}
        </tbody>
      </Table>
    </TableWrapper>
  )
}

export default TableComponent
