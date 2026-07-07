import { Button } from "../components/Button"
import { BottomWarning } from "../components/BottomWarning"
import { Heading } from "../components/Heading"
import { InputBox } from "../components/InputBox"
import { SubHeading } from "../components/SubHeading"
import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

export const SignUp = () => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    return <div className="bg-slate-300 h-screen flex justify-center">
        <div className="flex flex-col justify-center">
            <div className="bg-white rounded-lg w-80 text-center p-2 h-max px-4">
                <Heading label={"Sign up"}></Heading>
                <SubHeading label={"Enter your information to create an account"}></SubHeading>
                <InputBox onChange={(e) => setFirstName(e.target.value)} placeHolder={"John"} label={"First Name"}></InputBox>
                <InputBox onChange={(e) => setLastName(e.target.value)} placeHolder={"Kumar"} label={"Last Name"}></InputBox>
                <InputBox onChange={(e) => setUserName(e.target.value)} placeHolder={"karthick@gmail.com"} label={"Email"}></InputBox>
                <InputBox onChange={(e) => setPassword(e.target.value)} placeHolder={"1244354"} label={"Password"}></InputBox>
                <div>
                    <Button onClick ={async () => {
                        const response = await axios.post("http://localhost:3000/api/v1/user/signUp", {
                            userName,
                            firstName,
                            lastName,
                            password
                        })
                        localStorage.setItem("token", response.data.token);
                        navigate("/dashboard");

                    } } label={"Sign up"}></Button>
                </div>
                <BottomWarning label={"Already have an account?"} linkText={"Sign in"} to={"/signin"}></BottomWarning>
            </div>
        </div>
    </div>
}