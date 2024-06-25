import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '@/pages/Home';
import MyAccount from '@/pages/MyAccount';
import Products from '@/pages/Products';
import Header from '@/components/Header';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/my-account" element={<MyAccount />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </Router>
    </div>
  );
}

// function App() {
//   return (
//     <>
//       <Router>
//         <Routes>
//           <Route
//             path="/"
//             element={<Home />}
//           />

//           <Route path="/products" element={<Home />} />

//           <Route path="/product/:id" element={<Home />} />

//           <Route
//             path="/my-account"
//             element={<MyAccount />}
//           />
//         </Routes>
//       </Router>
//     </>
//   );
// }

export default App;
