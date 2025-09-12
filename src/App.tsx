import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import FeedPage from './pages/FeedPage';
import Auth from './component/Auth';


function App() {
  return (
    <ChakraProvider>
      <Router>
        <Routes>
          <Route path="/auth" element={<Auth/>} />
          <Route path="/" element={<FeedPage />} />
          <Route path="*" element={'#'} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
