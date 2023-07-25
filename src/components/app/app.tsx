import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainPage from '../../pages/main-page/main-page';
import LoginPage from '../../pages/login-page/login-page';
import { AppRoutes } from '../../const/router-const';
import RegisterPage from '../../pages/register-page/register-page';


function App() {
  return (
    <Routes>
      <Route
        path={AppRoutes.Main}
        element={<MainPage />}
      />
      <Route
        path={AppRoutes.Login}
        element={<LoginPage />}
      />
      <Route
        path={AppRoutes.Register}
        element={<RegisterPage />}
      />
    </Routes>
  );
}

export default App;
