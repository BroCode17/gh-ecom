import AuthForm from "@/components/AuthForm";
import React from "react";

const SignUp = () => {
  return (
    <div className="flex items-center  justify-center md:w-[40%] my-10">
      <AuthForm signType="sign-up" />
    </div>
  );
};

export default SignUp;
