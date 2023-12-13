import RegisterPage from "./pages/auth/RegisterPage";
import LoginPage from "./pages/auth/loginPage/LoginPage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/" element={<div>Index</div>} />
    </Routes>
  );
}

export default App;
