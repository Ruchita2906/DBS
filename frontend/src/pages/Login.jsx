import React, { useState } from "react";

const Login = () => {
  const [state, setState] = useState("Sign Up");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    console.log({ name, email, password, state });
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center">
      <form
        onSubmit={onSubmitHandler}
        className="w-full max-w-sm bg-white shadow-md rounded-xl p-6"
      >
        {/* Title */}
        <h2 className="text-lg font-semibold text-gray-800">
          {state === "Sign Up" ? "Create Account" : "Login"}
        </h2>
        <p className="text-sm text-gray-500 mb-4">
          Please {state === "Sign Up" ? "sign up" : "log in"} to book
          appointment
        </p>

        {/* Full Name (only for Sign Up) */}
        {state === "Sign Up" && (
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full mb-3 px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-400"
            required
          />
        )}

        {/* Email */}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mb-3 px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-400"
          required
        />

        {/* Password */}
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-4 px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-400"
          required
        />

        {/* Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 rounded-md transition"
        >
          {state === "Sign Up" ? "Create account" : "Login"}
        </button>

        {/* Toggle */}
        <p className="text-sm text-gray-600 mt-4 text-center">
          {state === "Sign Up"
            ? "Already have an account?"
            : "Don't have an account?"}{" "}
          <span
            onClick={() => setState(state === "Sign Up" ? "Login" : "Sign Up")}
            className="text-blue-500 cursor-pointer"
          >
            {state === "Sign Up" ? "Login here" : "Sign up"}
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
