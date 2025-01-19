import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      const response = await axios.post("/api/auth/login", {
        username,
        password,
      });

      localStorage.setItem("token", response.data.token);
      localStorage.setItem("userId", response.data.userId);
      navigate("/create");
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="md:text-sm mx-4">
      <div className="border p-2 w-fit mt-4 rounded-md bg-gray-100">
        <div className="">
          <p className="font-semibold">
            <span className="text-blue-600">{"///"}</span> LOGIN
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col w-fit mt-8 gap-1"
        >
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <input
            type="text"
            placeholder="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            className="border px-2 rounded-md border-zinc-400 outline-none"
          />
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="border px-2 rounded-md border-zinc-400 outline-none"
          />
          <button
            type="submit"
            disabled={isLoading}
            className="bg-blue-300 border border-blue-800 border-opacity-40 rounded-md text-left px-2 text-blue-800 font-medium disabled:opacity-50"
          >
            {isLoading ? "logging in..." : "login"}
          </button>

          <p className="text-sm mt-4">
            no account?{" "}
            <a className="underline" href="/signup">
              register here
            </a>
          </p>
        </form>
      </div>
    </main>
  );
}

export default LoginPage;
