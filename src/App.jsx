import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '@/pages/Home';
import MyAccount from '@/pages/MyAccount';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />

          <Route
            path="/my-account"
            element={<MyAccount />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
