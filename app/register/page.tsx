import FormWrap from "../components/FormWrap";
import RegisterForm from "./registerForm";

const Register = () => {
  return (
    <div className="bg-primaryColor py-sectionV">
      <FormWrap>
        <RegisterForm />
      </FormWrap>
    </div>
  );
};

export default Register;
