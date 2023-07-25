import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainPage from '../../pages/main-page/main-page';
import LoginPage from '../../pages/login-page/login-page';
import { AppRoutes } from '../../const/router-const';
import RegisterPage from '../../pages/register-page/register-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import RepassPage from '../../pages/repass-page/repass-page';


function App() {
  return (
    <Routes>
      <Route path={AppRoutes.Main} element={<MainPage />} />
      <Route path={AppRoutes.Login}element={<LoginPage />} />
      <Route path={AppRoutes.Register} element={<RegisterPage />} />
      <Route path={AppRoutes.Repass} element={<RepassPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
