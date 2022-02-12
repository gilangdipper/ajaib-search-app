import styled from 'styled-components'
import Filter from './components/Filter'

import Table from './components/Table'

const AppWrapper = styled.div`
  width: calc(100% - 20%);
  margin: 0 auto;
  display: flex;
  justify-content: center;
  flex-flow: row wrap;
`

function App() {
  return (
    <AppWrapper>
      <Filter />
      <Table />
    </AppWrapper>
  )
}

export default App
