import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import BaseLayout from "../../layout/BaseLayout";

function HomePage() {
  return (
    <BaseLayout>
      <section className="w-screen md:w-full">
        <div className="flex flex-col">
          <p className="mt-8 md:mt-16 text-4xl w-max md:mx-auto">
            <span className="text-green-400">
              <Typewriter words={["Create", "Read", "Share"]} loop={0} />{" "}
            </span>
            Blog Posts
          </p>
          <div className="md:flex md:justify-center mt-2 mb-8 md:mt-2">
            <Link to="/login">
              <button className="border flex justify-center items-center px-4 py-1 rounded-lg hover:bg-green-200">
                Get Started
              </button>
            </Link>
          </div>
        </div>
        <div className="mt-4 max-w-screen w-[350px] text-sm md:text-base md:w-fit border p-4 bg-gray-100 rounded-md">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum nobis
            dolor pariatur nostrum ex perferendis itaque blanditiis velit quia,
            sapiente neque recusandae odit soluta, praesentium quibusdam esse
            assumenda voluptates dolores!
          </p>
        </div>
      </section>
    </BaseLayout>
  );
}

export default HomePage;
