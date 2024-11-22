
import './css/App.css'
import LandingPage from './pages/LandingPage'
import MainFooter from './components/MainFooter'
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import { Route, Routes, Navigate } from 'react-router-dom';
import ProductListPage from './pages/ProductListPage';
import ProductDetailsPage from './pages/ProductDetailsPage';
import AddProductPage from './pages/AddProductPage';
import Header from './components/Header';

import Sidebar from './components/Sidebar';
import { useState } from 'react';

import IsPrivate from "./components/IsPrivate";
import IsAnon from "./components/IsAnon";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>

      {/* <LandingPage></LandingPage> */}


      <Header />


      {/*<NavBar toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
      {isSidebarOpen && <Sidebar />}*/}

      <div
        className={`content ${isSidebarOpen ? "shifted" : ""} relative z-10`}
      >

        <Routes>
          
          <Route path="/products" element={
            <IsPrivate>
              <ProductListPage />
            </IsPrivate>
          } />

          <Route
            path="/products/:id"
            element={
              <IsPrivate>
                <ProductDetailsPage />
              </IsPrivate>}
          />

          <Route path="/products/create" element={<AddProductPage />} />

          <Route
            path="/login"
            element={
              <IsAnon>
                <LoginPage />
              </IsAnon>
            }
          />
          <Route
            path="/signup"
            element={
              <IsAnon>
                <SignupPage />
              </IsAnon>
            }
          />
        </Routes>

      </div>
      <MainFooter />

    </>
  )
}

export default App
