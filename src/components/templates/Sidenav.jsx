import { Link } from "react-router-dom";
import {
  sidebarTopLinks,
  sidebarDownLinks,
} from "../../../utils/data/sidebarLinks";

const Sidenav = () => {
  return (
    <div className="h-full w-[20%] border-r-2 border-zinc-400 p-10">
      <h1 className="text-2xl font-bold text-white">
        <i className="ri-tv-fill mr-2 text-red-500"></i>
        <span className="text-2xl">CineVerse</span>
      </h1>
      <nav className="flex flex-col text-xl text-zinc-400">
        <h1 className="mt-6 mb-2 text-xl font-semibold text-white">
          New Feeds
        </h1>

        {sidebarTopLinks.map((item) => {
          return (
            <Link
              key={item.to}
              to={item.to}
              className="rounded-lg p-4 duration-300 hover:bg-red-600 hover:text-white"
            >
              <i className={`${item.icon} mr-2`}></i>
              {item.label}
            </Link>
          );
        })}
      </nav>

      <hr className="mt-2 h-0.5 border-none bg-zinc-400" />

      <nav className="flex flex-col text-xl text-zinc-400">
        <h1 className="mt-5 mb-2 text-xl font-semibold text-white">
          Website Information
        </h1>
        {sidebarDownLinks.map((item) => {
          return (
            <Link
              key={item.to}
              to={item.to}
              className="rounded-lg p-4 duration-300 hover:bg-red-600 hover:text-white"
            >
              <i className={`${item.icon} mr-2`}></i>
              {item.label}
            </Link>
          );
        })}
      </nav>
    </div>
  );
};
export default Sidenav;
