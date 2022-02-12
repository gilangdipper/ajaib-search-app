import styled from 'styled-components'
import Filter from './components/Filter'

import Table from './components/Table'
import useGetUsers from './hooks/useGetUser'

const AppWrapper = styled.div`
  width: calc(100% - 20%);
  margin: 0 auto;
  display: flex;
  justify-content: center;
  flex-flow: row wrap;
`

function App() {
  const { isLoading, data } = useGetUsers({
    filters: { page: 1, pageSize: 5, results: 10 },
  })

  return (
    <AppWrapper>
      <Filter />
      {isLoading ? <b>Loading ...</b> : <Table rows={data?.results} />}
    </AppWrapper>
  )
}

export default App
