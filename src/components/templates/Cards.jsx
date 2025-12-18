import { Link } from "react-router-dom";
import noimage from "/noimage.png";

const Cards = ({ data, title }) => {
  return (
    <div className="mt-[1%] flex h-full w-full flex-wrap bg-[#1F1E24] px-[4%]">
      {data.map((c, i) => (
        <Link
          to={`/${c.media_type || title}/details/${c.id}`}
          className="group relative mr-[6%] mb-[3%] w-[27vh] transition-all duration-300 hover:scale-105"
          key={i}
        >
          <img
            className="h-[40vh] object-cover shadow-[8px_17px_38px_2px_rgba(0,0,0,0.5)] transition-all duration-300 group-hover:shadow-[8px_17px_38px_2px_rgba(220,38,38,0.3)]"
            src={
              c.poster_path || c.backdrop_path || c.profile_path
                ? `https://image.tmdb.org/t/p/original/${
                    c.poster_path || c.backdrop_path || c.profile_path
                  }`
                : noimage
            }
            alt=""
          />
          <h1 className="mt-3 text-xl font-semibold text-zinc-300 transition-colors duration-300 group-hover:text-red-400">
            {c.name || c.title || c.original_name || c.original_title}
          </h1>
          {c.vote_average && (
            <div className="absolute right-[-7%] bottom-[30%] flex h-[6vh] w-[6vh] items-center justify-center rounded-full bg-yellow-600 text-xl font-semibold text-white">
              {(c.vote_average * 10).toFixed()} <sup>%</sup>
            </div>
          )}
        </Link>
      ))}
    </div>
  );
};
export default Cards;
