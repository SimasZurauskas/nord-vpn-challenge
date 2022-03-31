import { makeLogin } from "api/auth";
import { setToken } from "api/utils";
import { Spacer } from "common";
import { flexCenter } from "common/css";
import { Button, Input } from "common/form";
import { useNavigate } from "react-router-dom";
import { useStateSelector } from "state";
import useActionsForm from "state/actionHooks/useActionsForm";
import styled from "styled-components";
import { palette } from "utils/theme";

const Div = styled.div`
  height: 100vh;
  ${flexCenter()};

  form {
    background-color: white;
    padding: 40px;

    .error-label {
      transform: translateY(20px);
      color: ${palette.error};
      text-align: center;
    }
  }
`;

const AuthPage = () => {
  const { userName, password, isValid, error, isLoading } = useStateSelector(
    ({ form }) => form
  );
  const { setUserName, setPassword, setError, clearForm, setIsLoading } =
    useActionsForm();
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    makeLogin({ username: userName, password })
      .then((res) => {
        clearForm();
        setToken(res.token);
        navigate("/");
      })
      .catch((err) => setError(err.message))
      .finally(() => setIsLoading(false));
  };
  return (
    <Div>
      <form className="drop-shadow" onSubmit={handleLogin}>
        <Input
          placeholder="User name"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <Spacer px={20} />
        <Input
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Spacer px={20} />
        <Button fullWidth disabled={!isValid || isLoading} type="submit">
          Log in
        </Button>

        {error && <div className="error-label">{error}</div>}
      </form>
    </Div>
  );
};

export default AuthPage;
