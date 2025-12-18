import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { asyncloadtv, removetv } from "../store/actions/tvActions";
import Loading from ".././../src/components/Loading";
import HorizontalCards from "../../src/components/templates/HorizontalCards";

const TvDetails = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { id } = useParams();
  const { info } = useSelector((state) => state.tv);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(asyncloadtv(id));
    return () => {
      if (!pathname.includes("/trailer")) {
        dispatch(removetv());
      }
    };
  }, [id, dispatch, pathname]);
  console.log(info);
  return info ? (
    <div
      style={{
        background: `linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.5),rgba(0,0,0,.7)),url(https://image.tmdb.org/t/p/original/${
          info.detail.backdrop_path
        })`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="h-[140vh] w-screen px-[10%]"
    >
      <nav className="mb-2 flex h-[10vh] w-full items-center gap-10 text-xl text-zinc-100">
        <Link
          onClick={() => navigate(-1)}
          className="ri-arrow-left-line hover:text-[#6556DC]"
        ></Link>
        <a href={info.detail.homepage} target="_blank" rel="noreferrer">
          <i className="ri-external-link-fill"></i>
        </a>
        <a
          target="_blank"
          href={`https://www.wikidata.org/wiki/${info.externalId.wikidata_id}`}
        >
          <i className="ri-earth-fill"></i>
        </a>
        <a
          target="_blank"
          href={`https://www.imdb.com/title/${info.externalId.imdb_id}/`}
        >
          imdb
        </a>
      </nav>

      <div className="flex w-full">
        <img
          className="h-[50vh] object-cover shadow-[8px_17px_38px_2px_rgba(0,0,0,0.5)]"
          src={`https://image.tmdb.org/t/p/original/${
            info.detail.poster_path || info.detail.backdrop_path
          }`}
          alt=""
        />

        <div className="content ml-[5%] text-white">
          <h1 className="text-5xl font-black">
            {info.detail.name || info.detail.original_name}

            <small className="text-2xl font-bold text-zinc-200">
              ({info.detail.first_air_date.split("-")[0]})
            </small>
          </h1>

          <div className="mt-3 mb-5 flex items-center gap-x-3">
            <span className="flex h-[6vh] w-[6vh] items-center justify-center rounded-full bg-yellow-600 text-xl font-semibold text-white">
              {(info.detail.vote_average * 10).toFixed()} <sup>%</sup>
            </span>
            <h1 className="w-[60px] text-2xl leading-6 font-semibold">
              User Score
            </h1>
            <h1>{info.detail.first_air_date}</h1>
            <h1>{info.detail.genres.map((g) => g.name).join(",")}</h1>
            <h1>
              {info.detail.episode_run_time && info.detail.episode_run_time.length > 0
                ? info.detail.episode_run_time[0]
                : "N/A"}
              min
            </h1>
          </div>

          <h1 className="text-xl font-semibold text-zinc-200 italic">
            {info.detail.tagline}
          </h1>
          <h1 className="mt-5 mb-3 text-2xl">Overview</h1>
          <p className="mb-8">{info.detail.overview}</p>

          <Link
            to={`${pathname}/trailer`}
            className="rounded-lg bg-[#6556CD] p-10 px-6 py-3"
          >
            <i className="ri-play-fill mr-2 text-xl"></i>
            Play Trailer
          </Link>
        </div>
      </div>

      <div className="mt-10 flex w-[80%] flex-col gap-y-5">
        {info.watchProviders && info.watchProviders.flatrate && (
          <div className="flex items-center gap-x-5 text-white">
            <h1>Available on Platforms</h1>
            {info.watchProviders.flatrate.map((w, i) => (
              <img
                title={w.provider_name}
                className="h-[5vh] w-[5vh] rounded-md object-cover"
                key={i}
                src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                alt=""
              />
            ))}
          </div>
        )}
        {info.watchProviders && info.watchProviders.rent && (
          <div className="flex items-center gap-x-5 text-white">
            <h1>Available on Rent</h1>
            {info.watchProviders.rent.map((w, i) => (
              <img
                title={w.provider_name}
                className="h-[5vh] w-[5vh] rounded-md object-cover"
                key={i}
                src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                alt=""
              />
            ))}
          </div>
        )}{" "}
        {info.watchProviders && info.watchProviders.buy && (
          <div className="flex items-center gap-x-5 text-white">
            <h1>Available to Buy</h1>
            {info.watchProviders.buy.map((w, i) => (
              <img
                title={w.provider_name}
                className="h-[5vh] w-[5vh] rounded-md object-cover"
                key={i}
                src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                alt=""
              />
            ))}
          </div>
        )}
      </div>
      <HorizontalCards
        data={
          info.recommendations.length > 0 ? info.recommendations : info.similar
        }
      />
    </div>
  ) : (
    <Loading />
  );
};
export default TvDetails;
