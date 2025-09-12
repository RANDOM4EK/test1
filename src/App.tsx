import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import FeedPage from './pages/FeedPage';


function App() {
  return (
    <ChakraProvider>
      <Router>
        <Routes>
          <Route path="/" element={<FeedPage />} />
          <Route path="/profile/:id" element={'#'} />
          <Route path="*" element={'#'} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
