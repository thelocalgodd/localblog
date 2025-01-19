import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function CreatePostPage() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        "/api/posts",
        {
          title,
          content,
          author: localStorage.getItem("userId"),
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      navigate("/posts"); // Redirect to posts list after creation
    } catch (error) {
      console.error("Error creating post:", error);
    }
  };

  return (
    <main className="md:text-sm mx-4">
      <div className="border p-2 max-w-[350px] w-[100%] md:max-w-[400px] md:w-[100%] mt-4 rounded-md bg-gray-100">
        <div className="">
          <p className="font-semibold">
            <span className="text-green-600">{"///"}</span> CREATE
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col md:w-full mt-8 gap-1"
        >
          <input
            type="text"
            placeholder="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="border px-2 rounded-md border-zinc-400 outline-none"
          />
          <textarea
            placeholder="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
            className="border px-2 rounded-md border-zinc-400 outline-none h-40 resize-y"
          />
          <button
            type="submit"
            className="bg-gray-300 border border-gray-800 border-opacity-40 rounded-md text-left px-2 text-gray-800 font-medium disabled:opacity-50"
          >
            create new post{" "}
          </button>
        </form>
      </div>
    </main>
  );
}

export default CreatePostPage;
