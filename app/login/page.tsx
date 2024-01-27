import FormWrap from "../components/FormWrap";
import LoginForm from "./loginForm";

const Login = () => {
  return (
    <div className="bg-primaryColor py-sectionV">
      <FormWrap>
        <LoginForm />
      </FormWrap>
    </div>
  );
};

export default Login;
