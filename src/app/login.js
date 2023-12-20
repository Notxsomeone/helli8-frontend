'use client';

import React, { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
  <>
	<link href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" rel="stylesheet"/>
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center sm:py-12">
      <div className="p-10 xs:p-0 mx-auto md:w-full md:max-w-md">
        <h1 className="font-bold text-center text-2xl mb-5">Login</h1>
        <form onSubmit={handleSubmit} className="card">
          <div className="mb-3">
            <label
              htmlFor="email"
              className="font-semibold text-gray-600 block"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email address"
              required
              className="border border-gray-300 p-2 rounded w-full
              focus:outline-none focus:border-gray-500"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="bob" className="font-semibold text-gray-600 block">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
              className="border border-gray-300 p-2 rounded w-full
              focus:outline-none focus:border-gray-500"
            />
          </div>
          <button
            type="submit"
            className="text-white bg-purple-600 p-2 mt-8 w-full rounded hover:bg-purple-700"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  </>
  );
}
