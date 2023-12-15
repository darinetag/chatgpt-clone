"use client";
import { signIn } from "next-auth/react";
import Image from "next/image";
import chatgpt from "../public/images/chatgpt.svg";

function Login() {
  return (
    <div className="bg-[#4abda0] h-screen flex flex-col items-center justify-center text-center">
      <Image src={chatgpt} width={150} height={150} alt="logo" />
      <button
        onClick={() => signIn("google")}
        className="text-white font-bold text-3xl animate-pulse"
      >
        Sign In to use ChatGPT
      </button>
    </div>
  );
}

export default Login;
