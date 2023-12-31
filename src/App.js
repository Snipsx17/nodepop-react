import Layout from './components/layout/Layout';
import NotFoundPage from './pages/404/NotFoundPage';
import AdvertsPage from './pages/AdvertsPage/AdvertsPage';
import AuthRequired from './pages/auth/AuthRequired';
import LoginPage from './pages/auth/loginPage/LoginPage';
import { Routes, Route, Navigate } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/adverts" element={<Layout />}>
        <Route
          index
          element={
            <AuthRequired>
              <AdvertsPage />
            </AuthRequired>
          }
        />
        <Route path="new" element={<div>New advert</div>} />
        <Route path=":id" element={<div>Advert detail</div>} />
      </Route>
      <Route path="/" element={<Navigate to="/adverts" />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/404" element={<NotFoundPage />} />
      <Route path="*" element={<Navigate to="/404" />} />
    </Routes>
  );
}

export default App;
