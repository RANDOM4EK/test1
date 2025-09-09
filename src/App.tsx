import './App.css'
import FeedPage from './pages/FeedPage';

import { ChakraProvider } from '@chakra-ui/react'

function App() {

  return (
    <ChakraProvider>
      <FeedPage></FeedPage>
    </ChakraProvider>
  )
}

export default App;
