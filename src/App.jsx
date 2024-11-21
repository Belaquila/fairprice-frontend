
import './css/App.css'
import LandingPage from './pages/LandingPage'
import MainFooter from './components/MainFooter'
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import { Route, Routes, Navigate } from 'react-router-dom';
import ProductListPage from './pages/ProductListPage';
import ProductDetailsPage from './pages/ProductDetailsPage';  

import IsPrivate from "./components/IsPrivate";
import IsAnon from "./components/IsAnon";

function App() {

  return (
    <>
    <LandingPage></LandingPage>
    
    <Routes>
          <Route path="/" element={<Navigate to="/dashboard" />} />
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
          {/*
          <Route path="/products/edit/:productId" element={<ProductEditPage />} />
          <Route path="/products/create" element={<ProductCreatePage />} />
          
          <Route
            path="/profile"
            element={
              <IsPrivate>
                <UserProfilePage />
              </IsPrivate>
            }
          />

          */}


        
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


    <MainFooter/>
    
    </>
  )
}

export default App
