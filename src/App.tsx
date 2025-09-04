import './App.css'
import Str1 from './pages/Str1';

import { ChakraProvider } from '@chakra-ui/react'

function App() {

  return (
    <ChakraProvider>
      <Str1></Str1>
    </ChakraProvider>
  )
}

export default App;
