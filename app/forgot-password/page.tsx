"use client";
import { useState } from "react";
import { auth } from "../firebase";
import { sendPasswordResetEmail } from "firebase/auth";
import { useRouter } from "next/navigation";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const router = useRouter();

  const resetEmail = () => {
    sendPasswordResetEmail(auth, email);
  };

  return (
    <>
      <div className="flex min-h-full flex-col justify-center items-center px-6 py-12 lg:px-8 bg-white">
        <div className="flex flex-col justify-center items-center h-1/2 bg-indigo-950 p-10 rounded-xl w-1/3">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img
              className="mx-auto h-10 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
              alt="Your Company"
            />
            <h2 className="mt-5 text-center text-2xl font-bold leading-9 tracking-tight text-white">
              Forgot Password
            </h2>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <div className="space-y-6">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-white"
                >
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <button
                  onClick={() => resetEmail()}
                  disabled={!email}
                  className="disabled:opacity-40 flex w-full justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                >
                  Send Forgot Password Email
                </button>
              </div>

              <p className="mt-0 text-center text-sm text-gray-400">
                Not a member?{" "}
                <button
                  onClick={() => router.push("signup")}
                  className="font-semibold leading-6 text-indigo-400 hover:text-indigo-300"
                >
                  Sign Up
                </button>
              </p>

              <p className="mt-0 text-center text-sm text-gray-400">
                Already have an account?{" "}
                <button
                  onClick={() => router.push("signin")}
                  className="font-semibold leading-6 text-indigo-400 hover:text-indigo-300"
                >
                  Sign In
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
