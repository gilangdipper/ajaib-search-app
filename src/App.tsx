import { useState, lazy, Suspense } from 'react'
import styled from 'styled-components'

import useGetUsers from './hooks/useGetUser'
import { TUserFilter } from './interfaces'

const Table = lazy(() => import('./components/Table'))
const Filter = lazy(() => import('./components/Filter'))

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

  const handleUpdateFilter = (
    filterUpdated: Partial<Omit<TUserFilter, 'page' | 'pageSize' | 'results'>>,
  ) => {
    setFilter((prev) => ({ ...prev, ...filterUpdated }))
  }

  const handleResetFilter = () => {
    setFilter(defaultFilter)
    setPage(1)
  }

  return (
    <AppWrapper>
      <Suspense fallback={<div>Page is Loading...</div>}>
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
            handleUpdateFilter={handleUpdateFilter}
          />
        )}
      </Suspense>
    </AppWrapper>
  )
}

export default App
