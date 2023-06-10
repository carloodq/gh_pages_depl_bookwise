import logo from "../../assets/logo-transparent.png";

export const Header: React.FC = () => {
  return (
    <header className="bg-slate-300 py-4">
      <div className="mx-4 md:mx-auto md:max-w-screen-xl flex justify-between items-center">
        <div>
          <img src={logo} alt="bookwise logo" width={150} />
        </div>
        <nav className="hidden md:block">
          <ul className="flex">
            <li className="mr-4">Ask</li>
            <li>Give</li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
