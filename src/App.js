import { useEffect, useState } from 'react';
import { Results } from './components/Results';
import { SearchProvider } from './context/SearchContext';
import { EndPointProvider } from './context/EndPointContext';
import { Header } from './components/Header';
import { AuthProvider } from "./context/AuthContext"
import './styling/App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Login } from './components/Login';
import { SignUp } from './components/SignUp';
import { DestinationCardPublication } from './components/DestinationCardPublication';
import { AddDestination } from './components/AddDestination';
import { HomePage } from './components/HomePage';
import { UserInfo } from './components/UserInfo';
import { AddPublication } from './components/AddPublication';
function App() {
  return (
    <div className="App">

      <EndPointProvider>
        <AuthProvider>
          <SearchProvider>
            <BrowserRouter>
              <Routes>
                <Route element={<Results />} path="/results/" exact />
                <Route element={<AddDestination />} path="/add-destination/" exact />
                <Route element={<Login />} path="/login/" exact />
                <Route element={<DestinationCardPublication />} path="/publications/:id" />
                <Route element={<SignUp />} path="/sign-up/" />
                <Route element={<HomePage />} path="/" exact />
                <Route element={<UserInfo name="hmimit" bio="la puissance ne ... que la puuissance" limit={120} />} path="/profile/" />
                <Route element={<AddPublication />} path="/add-publication/" />
              </Routes>
            </BrowserRouter>
          </SearchProvider>
        </AuthProvider>
      </EndPointProvider>



    </div>
  );
}
export default App;
