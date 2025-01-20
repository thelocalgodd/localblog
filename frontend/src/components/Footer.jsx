function Footer() {
  return (
    <footer className="hidden md:flex fixed border bottom-0 left-0 right-0 text-sm bg-white/80 backdrop-blur-sm p-2 md:p-4">
      <div className="max-w-screen-xl mx-auto flex flex-row-reverse justify-between">
        <p>
          <a href="https://github.com/thelocalgodd/localblogg">source</a>
        </p>
        <p>@thelocalgodd ~ {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
}

export default Footer;
