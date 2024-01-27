"use client"

import { useState } from "react";
import Input from "../components/inputs/input";
import Heading from "../components/Headings";
import { register } from "module";
import { useForm, FieldValues, SubmitHandler } from "react-hook-form";
import { Button } from "../components/buttons/buttons";
import Link from "next/link";
import { AiOutlineGoogle } from "react-icons/ai"

const LoginForm = () => {

const [isLoading, setIsLoading] = useState(false);

const {register, handleSubmit, formState: {errors}} = useForm<FieldValues>({
    defaultValues:{
        email: "",
        password: "",
    }
})

const onSubmit:SubmitHandler<FieldValues> = (data) => {
setIsLoading(true)
console.log(data)
}

    return ( 
        <>
        <Heading title="Sign in to Hillside" />
        <Button 
        buttonText="Continue with Google"
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
        buttonText={isLoading ? "Loading" : "Login"}
        onClick={handleSubmit(onSubmit)}
        outline={1}
        custom="font-semibold"
        small
        full
        />
        <p className="text-sm">
            Don't have an account?
            <Link href="/register" className="underline ml-1">
            Register
            </Link>
        </p>
        </>
     );
}
 
export default LoginForm;