import { Link } from "react-router-dom";

const Header = ({ data }) => {
  return (
    <div
      style={{
        background: `linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.5),rgba(0,0,0,.7)),url(https://image.tmdb.org/t/p/original/${
          data.backdrop_path || data.profile_path
        })`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="relative flex h-[58vh] w-full flex-col items-start justify-center p-[7%]"
    >
      <h1 className="w-[70%] text-5xl font-black text-white">
        {data.title || data.name || data.original_title || data.original_name}
      </h1>
      <p className="mt-3 mb-3 w-[55%] text-white">
        {data.overview
          ? data.overview.slice(0, 200) + "..."
          : "No overview available"}
        {data.overview && (
          <Link
            to={`/${data.media_type}/details/${data.id}`}
            className="ml-2 text-red-500 transition-colors hover:text-red-400 hover:underline"
          >
            more
          </Link>
        )}
      </p>
      <p className="text-white">
        <i className="ri-megaphone-fill text-yellow-500"></i>{" "}
        {data.release_date || "No Information"}
        <i className="ri-album-fill ml-5 text-yellow-500"></i>{" "}
        {data.media_type ? data.media_type.toUpperCase() : "NA"}
      </p>
      <Link
        to={`/${data.media_type}/details/${data.id}`}
        className="group mt-5 inline-flex items-center gap-2 rounded border-2 border-red-600/50 bg-zinc-900/50 px-4 py-2 text-white transition-all duration-300 hover:border-red-600 hover:bg-red-600/10 hover:shadow-lg hover:shadow-red-600/20"
      >
        <i className="ri-play-fill text-red-500"></i>
        <span>Watch Trailer</span>
      </Link>
    </div>
  );
};
export default Header;
