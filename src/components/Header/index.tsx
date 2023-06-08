export const Header: React.FC = () => {
  return (
    <header className=" bg-slate-500 py-4">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center">
        <div className="text-2xl">BookWise</div>
        <nav>
          <ul className="flex">
            <li className="mr-4">Ask</li>
            <li>Give</li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
