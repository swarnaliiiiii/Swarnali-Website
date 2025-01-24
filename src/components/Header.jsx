const Header = () => {
  return (
    <div className="fixed top-0 z-50 bg-black w-full">
      <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
        {/* Logo */}
        <a className="block w-[12rem] xl:mr-8" href="#hero">
          <img src="logo.png" alt="Brand Logo" className="w-full" />
        </a>

        {/* Navigation */}
        <nav aria-label="Main Navigation" className="ml-auto">
          <ul className="font-[courier] text-white flex space-x-6 text-sm lg:text-base">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="/About" className="hover:underline">About</a></li>
            <li><a href="/Project" className="hover:underline">Project</a></li>
            <li><a href="/" className="hover:underline">Contact Me</a></li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
