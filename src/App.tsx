import { useState } from 'react'
import styled from 'styled-components'
import Filter from './components/Filter'

import Table from './components/Table'
import useGetUsers from './hooks/useGetUser'
import { TUserFilter } from './interfaces'

const AppWrapper = styled.div`
  width: calc(100% - 20%);
  margin: 0 auto;
  display: flex;
  justify-content: center;
  flex-flow: row wrap;
`

function App() {
  const [page, setPage] = useState(1)
  const defaultFilter = {
    gender: 'all',
    keyword: '',
    sortBy: '',
    sortOrder: '',
  }
  const [filter, setFilter] =
    useState<Omit<TUserFilter, 'page' | 'pageSize' | 'results'>>(defaultFilter)
  const { isLoading, data } = useGetUsers({
    filters: { page, pageSize: 5, results: 10, ...filter },
  })

  const handleSetPage = (pageNumber: number) => setPage(pageNumber)

  const handleUpdateFilter = (filterName: keyof TUserFilter, value: string) => {
    setFilter((prev) => ({ ...prev, [filterName]: value }))
  }

  const handleResetFilter = () => {
    setFilter(defaultFilter)
    setPage(1)
  }

  return (
    <AppWrapper>
      <Filter
        handleResetFilter={handleResetFilter}
        handleUpdateFilter={handleUpdateFilter}
        filter={filter}
      />
      {isLoading ? (
        <b>Loading ...</b>
      ) : (
        <Table
          rows={data?.results}
          pagination={data?.info}
          handleSetPage={handleSetPage}
        />
      )}
    </AppWrapper>
  )
}

export default App
