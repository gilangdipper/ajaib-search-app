import { FC, useEffect, useState } from 'react'

import TablePagination from './TablePagination'

import { isUndefined } from './helper'
import {
  Table,
  TableHeader,
  TableHeaderWrapper,
  TableRow,
  TableWrapper,
} from './styles'
import { ITable } from './interfaces'

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
