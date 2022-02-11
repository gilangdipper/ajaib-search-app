import styled from 'styled-components'

import Table from './components/Table'

const AppWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`

function App() {
  return (
    <AppWrapper>
      <Table />
    </AppWrapper>
  )
}

export default App
