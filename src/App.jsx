import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '@/pages/Home';
import MyAccount from '@/pages/MyAccount';
import Products from '@/pages/Products';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

function App() {
  const [actualPage, setActualPage] = useState("/");


  return (
    <div className="App bg-white dark:bg-gray-900 dark:text-white relative overflow-auto min-h-screen">
      <Router>
        <Header
          actualPage={actualPage}
          setActualPage={setActualPage}
        />
        <div className="flex-grow flex items-start justify-center flex-wrap gap-4 w-full mt-[85px] relative px-5 py-3 mb-14">
          <Routes>
            <Route
              path="/"
              element={<Home />}
            />
            <Route
              path="/my-account"
              element={<MyAccount />}
            />
            <Route
              path="/products"
              element={<Products />}
            />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
