import logo from "../assets/logo.svg";
const Header = () => {
  return (
    <header className="w-full max-w-5xl mx-auto py-4 rounded-b-lg">
      <div className="container flex flex-col items-center gap-y-2 mx-auto px-4 sm:flex-row sm:justify-between">
        <div className="flex items-center gap-2">
          <img src={logo} alt="Logo" className="w-8" />
          <h1 className="text-2xl font-bold">Nando.DEV</h1>
        </div>
        <nav>
          <ul className="flex gap-x-4">
            <li><a className="hover:text-blue-600" href="#home">Home</a></li>
            <li><a className="hover:text-blue-600" href="#">About</a></li>
            <li><a className="hover:text-blue-600" href="#">Projects</a></li>
            <li><a className="hover:text-blue-600" href="#">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
