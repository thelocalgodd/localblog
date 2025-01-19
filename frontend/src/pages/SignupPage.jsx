import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function SignupPage() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      const response = await axios.post("/api/auth/register", {
        username,
        email,
        password,
      });

      localStorage.setItem("token", response.data.token);
      localStorage.setItem("userId", response.data.userId);
      navigate("/create");
    } catch (err) {
      setError(err.response?.data?.message || "Registration failed");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="md:text-sm mx-4">
      <div className="border p-2 w-fit mt-4 rounded-md bg-gray-100">
        <div className="">
          <p className="font-semibold">
            <span className="text-orange-500">{"///"}</span> SIGN UP
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
            type="email"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
            className="border border-orange-400 border-opacity-40 bg-orange-300 rounded-md text-left px-2 text-orange-500 font-semibold disabled:opacity-50"
          >
            {isLoading ? "registering..." : "register"}
          </button>

          <p className="text-sm mt-4">
            have an account?{" "}
            <a className="underline" href="/login">
              login here
            </a>
          </p>
        </form>
      </div>
    </main>
  );
}

export default SignupPage;
