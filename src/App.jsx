import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';
import { useEffect } from 'react';
import { useUserStore } from '@/stores/userStore';
import { fetchUser } from '@/api/fetchUser';
import { usePageStore } from '@/stores/pageStore';
import Home from '@/pages/Home';
import MyAccount from '@/pages/MyAccount';
import Products from '@/pages/Products';
import Cart from '@/pages/Cart';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

function Location() {
  const location = useLocation();
  const setActualPage = usePageStore((state) => state.setActualPage);

  useEffect(() => {
    setActualPage(location.pathname);
  }, [location.pathname, setActualPage]);

  return null;
}

function App() {
  const { setUser, user } = useUserStore();

  useEffect(() => {
    const getUser = async () => {
      const data = await fetchUser();
      setUser(data);
    };

    // Only fetch data when the user store is empty
    if (!user) {
      getUser();
    }
  }, [setUser, user]);

  return (
    <div className="App bg-white dark:bg-gray-900 dark:text-white relative overflow-auto min-h-screen">
      <Router>
        <Header />
        <div
          className="flex-grow flex items-start justify-center flex-wrap gap-4 w-full 
        mt-[70px] relative mb-[40px]"
        >
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
            <Route
              path="/cart"
              element={<Cart />}
            />
          </Routes>
        </div>
        <Footer />
        <Location />
      </Router>
    </div>
  );
}

export default App;
