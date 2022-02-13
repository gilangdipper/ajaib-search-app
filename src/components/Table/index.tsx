import { FC, useEffect, useState } from 'react'
import styled from 'styled-components'

import { IUser, IUserResponse, TUserFilter } from '../../interfaces'

import { isUndefined } from './helper'
import TablePagination from './TablePagination'

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
  pagination?: IUserResponse['info']
  handleSetPage: (page: number) => void
  handleUpdateFilter: (
    filterUpdated: Partial<Omit<TUserFilter, 'page' | 'pageSize' | 'results'>>,
  ) => void
}

const TableComponent: FC<ITable> = ({
  rows,
  pagination,
  handleSetPage,
  handleUpdateFilter,
}) => {
  const [sortHeader, setSortHeader] = useState<string[]>([])
  const headerList = ['username', 'name', 'Email', 'gender', 'registered date']
  const [headerSortBy, headerSortOrder] = sortHeader

  useEffect(() => {
    handleUpdateFilter({
      sortBy: headerSortBy,
      sortOrder: headerSortOrder,
    })
  }, [headerSortBy, headerSortOrder])

  return (
    <TableWrapper>
      <Table>
        <thead>
          <TableHeaderWrapper>
            {headerList.map((header) => {
              const tableHeaderClass = []
              const [headerActiveSortBy, headerActiveSortOrder] = sortHeader
              const headerName = header.split(' ')[0]

              if (headerActiveSortBy === headerName) {
                if (headerActiveSortOrder === 'asc') {
                  tableHeaderClass.push('asc')
                } else if (headerActiveSortOrder === 'dsc') {
                  tableHeaderClass.push('dsc')
                }
              }

              return (
                <TableHeader
                  key={header}
                  className={tableHeaderClass.join(' ')}
                  onClick={() => {
                    const sortOrder =
                      isUndefined(headerActiveSortOrder) ||
                      headerActiveSortOrder === 'dsc'
                        ? 'asc'
                        : 'dsc'
                    setSortHeader([headerName, sortOrder])
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
      <TablePagination pagination={pagination} handleSetPage={handleSetPage} />
    </TableWrapper>
  )
}

export default TableComponent
