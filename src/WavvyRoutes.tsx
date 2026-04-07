import { BrowserRouter, Routes, Route  } from 'react-router-dom';
import Login from './pages/Login';
import Chat from './pages/Chat';


const WavvyRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/log-in" element={<Login/>} />
          <Route path="/chat" element={<Chat/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default WavvyRoutes;
