import React, { useState } from "react";
import useLoginStore from "../store/useLoginStore";

function Login() {
  const [username, setUsername] = useState("");
  const { user, login, logout } = useLoginStore();

  function handleLogin(e) {
    e.preventDefault();
    if (username) {
      login(username);
      setUsername("");
    }
  }

  return (
    <div className="h-screen flex items-center justify-center flex-col">
      <h1 className="text-center mb-6 text-3xl font-serif font-extrabold">AUTH</h1>
      {user ? (
        <div className="text-center">
          <h2 className="text-2xl font-serif font-bold mb-4">Welcome, {user.username}</h2>
          <button
            onClick={logout}
            className="text-lg font-serif font-medium bg-red-500 px-6 py-2 rounded-md cursor-pointer"
          >
            Logout
          </button>
        </div>
      ) : (
        <form
          onSubmit={handleLogin}
          className="rounded-lg p-5 shadow-xl w-[400px] flex flex-col"
        >
          <input
            type="text"
            placeholder="Enter username"
            className="border p-2 rounded-md mb-4"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <button
            type="submit"
            className="bg-blue-500 text-lg font-serif font-medium text-white px-6 py-2 rounded-md cursor-pointer"
          >
            Login
          </button>
        </form>
      )}
    </div>
  );
}

export default Login;
