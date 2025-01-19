function ErrorPage() {
  return (
    <main className="md:text-sm mx-4">
      <div className="mt-4">
        <p>404 Page Not Found</p>
      </div>

      <button className="mt-8 border-none bg-gray-400 rounded-md text-left px-2 hover:text-black text-white font-semibold">
        <a href="/">home</a>
      </button>
    </main>
  );
}

export default ErrorPage;
