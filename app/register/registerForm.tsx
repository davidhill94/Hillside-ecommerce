"use client";

import { useState } from "react";
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

const RegisterForm = () => {
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

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);


    axios
      .post("/api/register", data)
      .then(() => {
        toast.success("Your account has been created");
        router.push("/login")
      })
  };

  return (
    <>
      <Heading title="Title for Register" />
      <Button
        buttonText="Sign up with Google"
        icon={AiOutlineGoogle}
        onClick={() => {}}
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
