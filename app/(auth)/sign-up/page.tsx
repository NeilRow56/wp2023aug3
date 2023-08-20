import { SignUpForm } from "../components/signup-form";



const SignUpPage = () => {
  return (
    <div className="bg-blue-900 min-h-screen flex flex-col ">
        <div className="bg-white min-w-screen flex-grow pt-16 p-4  rounded-lg m-2 ">
      <SignUpForm  />
      </div>
    </div>
  );
};

export default SignUpPage;