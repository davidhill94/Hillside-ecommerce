"use client";

import { useEffect, useState } from "react";
import Input from "../components/inputs/input";
import Heading from "../components/Headings";
import { register } from "module";
import { useForm, FieldValues, SubmitHandler } from "react-hook-form";
import { Button } from "../components/buttons/buttons";
import Link from "next/link";
import { AiOutlineGoogle } from "react-icons/ai";
import axios from "axios";
import toast from "react-hot-toast";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { SafeUser } from "@/types";

interface RegisterFormProps {
  currentUser: SafeUser | null;
}

const RegisterForm: React.FC<RegisterFormProps> = ({ currentUser }) => {
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      email: "",
      password: "",
      name: "",
    },
  });

  const router = useRouter();

  //handles submit - sets Loading state, and makes api call to submit form data - redirects to cart page on completion
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    axios.post("/api/register", data).then(() => {
      toast.success("Your account has been created");
      router.push("/login");
    });
  };

  //checks to see if user is logged in and pushes them to the cart it true
  useEffect(() => {
    if (currentUser) {
      router.push("/cart");
      router.refresh();
    }
  }, []);

  //if user is logged in - generates redirecting text
  if (currentUser) {
    return <p className="text-center">Logged in. Redirecting...</p>;
  }

  return (
    <>
      <Heading title="Title for Register" />
      <Button
        buttonText="Register with Google"
        icon={AiOutlineGoogle}
        onClick={() => {signIn('google')}}
        outline={4}
        custom="font-semibold"
        customIcon="text-googleIcon text-2xl mr-2"
        full
        small
      />
      <hr className="my-4 text-light-primary w-full"></hr>
      <Input
        id="name"
        label="Name"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id="email"
        label="Email"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id="password"
        label="Password"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
        type="password"
      />
      <Button
        buttonText={isLoading ? "Loading" : "Register"}
        onClick={handleSubmit(onSubmit)}
        outline={1}
        custom="font-semibold"
        small
        full
      />
      <p className="text-sm">
        Already have an account?
        <Link href="/login" className="underline ml-1">
          Log in
        </Link>
      </p>
    </>
  );
};

export default RegisterForm;
