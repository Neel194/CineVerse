import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "../../../utils/axios";
import noimage from "/noimage.png";

const Topnav = () => {
  const [query, setQuery] = useState("");
  const [searches, setsearches] = useState([]);

  const getsearches = async () => {
    if (!query.trim()) {
      setsearches([]);
      return;
    }
    try {
      const { data } = await axios.get(`/search/multi?query=${query}`);
      setsearches(data.results || []);
    } catch (error) {
      console.log("Error: ", error);
      setsearches([]);
    }
  };

  useEffect(() => {
    getsearches();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  return (
    <div className="relative mx-auto flex h-[10vh] w-[80%] items-center">
      <i className="ri-search-line text-3xl text-zinc-400"></i>
      <input
        onChange={(e) => setQuery(e.target.value)}
        value={query}
        className="mx-10 w-[50%] border-none bg-transparent p-5 text-xl text-zinc-200 outline-none"
        type="text"
        placeholder="Search anything"
      />
      {query.length > 0 && (
        <i
          onClick={() => setQuery("")}
          className="ri-close-fill right-0 text-3xl text-zinc-400"
        ></i>
      )}

      {query.length > 0 && searches.length > 0 && (
        <div className="absolute top-full left-[6%] z-100 max-h-[55vh] w-[50%] overflow-auto bg-zinc-200">
          {searches.map((s, i) => (
            <Link
              to={`/${s.media_type}/details/${s.id}`}
              key={i}
              className="flex w-full items-center justify-start border-b-2 border-zinc-100 p-10 font-semibold text-zinc-600 duration-300 hover:bg-red-50 hover:text-red-600"
            >
              <img
                className="mr-5 h-[10vh] w-[10vh] rounded object-cover shadow-lg"
                src={
                  s.backdrop_path || s.profile_path
                    ? `https://image.tmdb.org/t/p/original/${
                        s.backdrop_path || s.profile_path
                      }`
                    : noimage
                }
                alt={s.title || s.name || s.original_title || s.original_name || "Search result"}
              />
              <span>
                {s.title || s.name || s.original_title || s.original_name}
              </span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};
export default Topnav;
