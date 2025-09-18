import { Link } from "react-router";
import logo1 from "./assets/logo1.png";

const Header = () => {
  return (
    <div>
      <nav className="flex justify-between  bg-purple-50">
        <div className="text-purple-700 text-2xl font-bold m-2 ml-7 flex">
          <img src={logo1} className="w-[35px] h-[35px]" />
          <span> BlogShelf</span>
        </div>
        <div className="flex  mr-7">
          <Link
            to="/"
            className="w-12 h-12 m-3 flex justify-center items-center rounded-full  hover:-translate-y-0.5 bg-purple-700 text-white shadow-[0_20px_50px_rgba(0,0,0,0.25)] 
                   hover:shadow-[0_4px_12px_rgba(0,0,0,0.10)]  transition-all duration-300"
          >
            add
          </Link>
          <Link
            to="/blogs"
            className="w-12 h-12 m-3 flex justify-center items-center rounded-full  hover:-translate-y-0.5 bg-purple-700 text-white shadow-[0_20px_50px_rgba(0,0,0,0.25)] 
                   hover:shadow-[0_4px_12px_rgba(0,0,0,0.10)]  transition-all duration-300"
          >
            list
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Header;
// className="flex items-center justify-center gap-2 bg-purple-50 p-2 text-white text-lg font-medium rounded-xl shadow-lg/50 hover:shadow-lg"
