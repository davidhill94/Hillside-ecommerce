"use client"

import { useState } from "react";
import Input from "../components/inputs/input";
import Heading from "../components/Headings";
import { register } from "module";
import { useForm, FieldValues, SubmitHandler } from "react-hook-form";
import { Button } from "../components/buttons/buttons";
import Link from "next/link";
import { AiOutlineGoogle } from "react-icons/ai"

const RegisterForm = () => {

const [isLoading, setIsLoading] = useState(false);

const {register, handleSubmit, formState: {errors}} = useForm<FieldValues>({
    defaultValues:{
        email: "",
        password: "",
        name: "",
    }
})

const onSubmit:SubmitHandler<FieldValues> = (data) => {
setIsLoading(true)
console.log(data)
}

    return ( 
        <>
        <Heading title="Title for Register" />
        <Button 
        buttonText="Sign up with Google"
        icon={AiOutlineGoogle}
        onClick={() => {}}
        custom="text-textPrimary border-textPrimary"
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
}
 
export default RegisterForm;