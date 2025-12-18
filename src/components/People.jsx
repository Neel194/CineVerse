import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../../utils/axios";
import InfiniteScroll from "react-infinite-scroll-component";
import Loading from "./Loading";
import Cards from "./templates/Cards";
import Topnav from "./templates/Topnav";

const People = () => {
  document.title = "CineVerse | person Shows";
  const navigate = useNavigate();
  const [category, setcategory] = useState("popular");
  const [person, setperson] = useState([]);
  const [page, setpage] = useState(1);
  const [hasMore, sethasMore] = useState(true);

  const GetPerson = async () => {
    try {
      const { data } = await axios.get(`/person/${category}?page=${page}`);
      if (data.results && data.results.length > 0) {
        setperson((prevstate) => [...prevstate, ...data.results]);
        setpage(page + 1);
      } else {
        sethasMore(false);
      }
      // setperson(data.results);
    } catch (error) {
      console.log("Error: ", error);
      sethasMore(false);
    }
  };

  const refreshHandler = () => {
    if (person.length === 0) {
      setpage(1);
      sethasMore(true);
      GetPerson();
    } else {
      setpage(1);
      setperson([]);
      sethasMore(true);
      GetPerson();
    }
  };

  useEffect(() => {
    refreshHandler();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category]);

  return person.length > 0 ? (
    <div className="h-screen w-screen">
      <div className="flex w-full items-center justify-between px-[5%]">
        <h1 className="text-2xl font-semibold text-zinc-400">
          <i
            onClick={() => navigate(-1)}
            className="ri-arrow-left-line mr-[5%] transition-colors hover:text-red-500"
          ></i>
          People
        </h1>
        <div className="flex w-[80%] items-center">
          <Topnav />
          <div className="w-[2%]"></div>
        </div>
      </div>

      <InfiniteScroll
        dataLength={person.length}
        next={GetPerson}
        hasMore={hasMore}
        loader={<h1>Loading...</h1>}
      >
        <Cards data={person} title="person" />
      </InfiniteScroll>
    </div>
  ) : (
    <Loading />
  );
};
export default People;
