import { Routes, Route } from "react-router-dom";
import AuthPage from "pages/AuthPage";
import SignedInPage from "pages/SignedInPage";

const App = () => {
  return (
    <Routes>
      <Route path="/auth" element={<AuthPage />} />
      <Route path="*" element={<SignedInPage />} />
    </Routes>
  );
};

export default App;
