import { useEffect, useState } from "react";
import Sidenav from "./templates/Sidenav";
import Topnav from "./templates/Topnav";
import axios from "../../utils/axios";
import Header from "./templates/Header";
import HorizontalCards from "./templates/HorizontalCards";
import Loading from "../components/Loading";
import Dropdown from "./templates/Dropdown";

const Home = () => {
  document.title = "Homepage";

  const [wallpaper, setwallpaper] = useState(null);
  const [trending, settrending] = useState(null);
  const [category, setcategory] = useState("all");
  const GetHeaderWallpaper = async () => {
    try {
      const { data } = await axios.get(`/trending/all/day`);
      if (data.results && data.results.length > 0) {
        let randomIndex = Math.floor(Math.random() * data.results.length);
        setwallpaper(data.results[randomIndex]);
      }
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  const GetTrending = async () => {
    try {
      const { data } = await axios.get(`/trending/${category}/day`);
      settrending(data.results || []);
    } catch (error) {
      console.log("Error: ", error);
      settrending([]);
    }
  };

  useEffect(() => {
    GetTrending();
    if (!wallpaper) {
      GetHeaderWallpaper();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category]);

  return wallpaper && trending ? (
    <>
      <Sidenav />
      <div className="h-full w-[80%] overflow-auto overflow-x-hidden">
        <Topnav />
        <Header data={wallpaper} />

        <div className="flex justify-between p-5">
          <h1 className="text-3xl font-semibold text-white">Trending</h1>
          <Dropdown
            title="Filter"
            options={["tv", "movie", "all"]}
            func={(e) => setcategory(e.target.value)}
          />
        </div>
        <HorizontalCards data={trending} />
      </div>
    </>
  ) : (
    <Loading />
  );
};
export default Home;
