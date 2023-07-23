import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainPage from '../../pages/main-page/main-page';
import LoginPage from '../../pages/login-page/login-page';
import { AppRoutes } from '../../const/router-const';


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
    </Routes>
  );
}

export default App;
