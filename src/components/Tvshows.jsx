import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../../utils/axios";
import InfiniteScroll from "react-infinite-scroll-component";
import Loading from "./Loading";
import Cards from "./templates/Cards";
import Dropdown from "./templates/Dropdown";
import Topnav from "./templates/Topnav";

const Tvshows = () => {
  document.title = "CineVerse | Tv Shows";
  const navigate = useNavigate();
  const [category, setcategory] = useState("airing_today");
  const [tv, settv] = useState([]);
  const [page, setpage] = useState(1);
  const [hasMore, sethasMore] = useState(true);

  const GetTv = async () => {
    try {
      const { data } = await axios.get(`/tv/${category}?page=${page}`);
      if (data.results && data.results.length > 0) {
        settv((prevstate) => [...prevstate, ...data.results]);
        setpage(page + 1);
      } else {
        sethasMore(false);
      }
      // settv(data.results);
    } catch (error) {
      console.log("Error: ", error);
      sethasMore(false);
    }
  };

  const refreshHandler = () => {
    if (tv.length === 0) {
      setpage(1);
      sethasMore(true);
      GetTv();
    } else {
      setpage(1);
      settv([]);
      sethasMore(true);
      GetTv();
    }
  };

  useEffect(() => {
    refreshHandler();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category]);

  return tv.length > 0 ? (
    <div className="h-screen w-screen">
      <div className="flex w-full items-center justify-between px-[5%]">
        <h1 className="text-2xl font-semibold text-zinc-400">
          <i
            onClick={() => navigate(-1)}
            className="ri-arrow-left-line mr-[5%] transition-colors hover:text-red-500"
          ></i>
          Tv
          <small className="ml-2 text-sm text-zinc-600">({category})</small>
        </h1>
        <div className="flex w-[80%] items-center">
          <Topnav />
          <Dropdown
            title="Category"
            options={["on_the_air", "popular", "top_rated", "airing_today"]}
            func={(e) => setcategory(e.target.value)}
          />
          <div className="w-[2%]"></div>
        </div>
      </div>

      <InfiniteScroll
        dataLength={tv.length}
        next={GetTv}
        hasMore={hasMore}
        loader={<h1>Loading...</h1>}
      >
        <Cards data={tv} title="tv" />
      </InfiniteScroll>
    </div>
  ) : (
    <Loading />
  );
};
export default Tvshows;
