import { FC } from 'react'
import styled from 'styled-components'
import { IUserResponse } from '../../interfaces'

const PaginationWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;

  button {
    margin-right: 8px;
    background: #ffffff;
    border: 1px solid #e6e9eb;
    cursor: pointer;

    &.active {
      color: #339fff;
      border-color: #339fff;
    }

    &:last-child {
      margin-right: 0;
    }
  }
`

interface ITablePagination {
  pagination?: IUserResponse['info']
  handleSetPage: (page: number) => void
}

const TablePagination: FC<ITablePagination> = ({
  pagination,
  handleSetPage,
}) => {
  if (!pagination) return null

  const sizePage = 5
  const numberOfPages = Math.ceil(pagination.results / sizePage)

  return (
    <PaginationWrapper>
      <button
        type="button"
        onClick={() => handleSetPage(pagination.page - 1)}
        disabled={pagination.page === 1}
      >
        &lang;
      </button>
      {Array.from(Array(numberOfPages).keys()).map((pageNumber) => (
        <button
          type="button"
          key={pageNumber}
          onClick={() => handleSetPage(pageNumber + 1)}
          className={pagination.page === pageNumber + 1 ? 'active' : ''}
        >
          {pageNumber + 1}
        </button>
      ))}
      <button
        type="button"
        onClick={() => handleSetPage(pagination.page + 1)}
        disabled={pagination.page === numberOfPages}
      >
        &rang;
      </button>
    </PaginationWrapper>
  )
}

export default TablePagination
