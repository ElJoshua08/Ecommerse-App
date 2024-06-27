import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '@/pages/Home';
import MyAccount from '@/pages/MyAccount';
import Products from '@/pages/Products';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <div className="flex-grow flex items-start justify-center flex-wrap gap-4 w-full mt-[70px] top-70 relative px-5 py-3 mb-14">
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
