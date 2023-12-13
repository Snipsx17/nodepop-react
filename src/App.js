import Button from "./components/Button";
import NotFoundPage from "./pages/404/NotFoundPage";
import LoginPage from "./pages/auth/loginPage/LoginPage";
import { Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Button>login</Button>} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/404" element={<NotFoundPage />} />
      <Route path="*" element={<Navigate to="/404" />} />
    </Routes>
  );
}

export default App;
