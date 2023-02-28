import { Navigate } from 'react-router';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from '../pages';

// Switch --> Routes

export const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Home />
        </Route>
        <Route path="*">
          <Navigate to="/" />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
