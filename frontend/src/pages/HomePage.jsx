import { Link, NavLink } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";

function HomePage() {
  return (
    <main className="mx-4 max-h-screen md:min-h-screen">
      <header className="md:flex md:items-center pt-4 justify-between md:pt-4">
        <Link to="/">
          <p className="font-semibold">
            local
            <span className="text-green-500 underline cursor-pointer">
              blogg
            </span>
          </p>
        </Link>

        <ul className="flex gap-4 cursor-pointer mt-2">
          <NavLink to="/about">about</NavLink>
          <NavLink to="/login">
            {" "}
            <button className="bg-green-200 border border-opacity-50 border-green-700 text-green-800 rounded-md text-left px-2 font-medium">
              get started{" "}
            </button>
          </NavLink>
        </ul>
      </header>

      <section className="w-screen md:w-full">
        <div className="flex flex-col justify-center items-center">
          <p className="mt-8 md:mt-16 text-4xl w-max md:mx-auto">
            {" "}
            <span className="text-green-400">
              <Typewriter words={["Create", "Read", "Share"]} loop={0} />{" "}
            </span>{" "}
            Blog Posts
          </p>{" "}
          <div className="md:flex md:justify-center mt-2 mb-8 md:mt-2">
            <Link to="/login">
              <button className="border flex justify-center items-center px-4 py-1 rounded-lg hover:bg-green-200">
                Get Started
              </button>
            </Link>
          </div>
          <div className="mt-4 max-w-screen w-[350px] text-sm mr-8 md:mr-0 md:text-base md:w-fit border p-4 bg-gray-100 rounded-md">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum nobis
              dolor pariatur nostrum ex perferendis itaque blanditiis velit
              quia, sapiente neque recusandae odit soluta, praesentium quibusdam
              esse assumenda voluptates dolores!
            </p>
          </div>
        </div>
      </section>

      <footer className="hidden md:flex fixed border bottom-0 left-0 right-0 text-sm bg-white/80 backdrop-blur-sm p-2 md:p-4">
        <div className="max-w-screen-xl mx-auto flex flex-row-reverse justify-between">
          <p>
            <a href="https://github.com/thelocalgodd/localblogg">source</a>
          </p>
          <p>@thelocalgodd ~ {new Date().getFullYear()}</p>
        </div>
      </footer>
    </main>
  );
}

export default HomePage;
