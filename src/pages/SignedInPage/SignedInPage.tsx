import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import HomePage from "pages/HomePage";
import { getIsSignedIn } from "api/utils";

const SignedInPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const isSignedIn = getIsSignedIn();
    if (!isSignedIn) navigate("/auth");
  }, [navigate]);

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
};

export default SignedInPage;
