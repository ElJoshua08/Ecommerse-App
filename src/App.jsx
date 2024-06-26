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
        <div className="flex-grow flex items-center justify-center flex-wrap gap-4 w-full mt-[70px] min-h-screen top-70 relative p-5">
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
