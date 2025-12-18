import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { asyncloadperson, removeperson } from "../store/actions/personActions";
import Loading from ".././../src/components/Loading";
import HorizontalCards from "../../src/components/templates/HorizontalCards";
import noimage from "/noimage.png";

const PersonDetails = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { id } = useParams();
  const { info } = useSelector((state) => state.person);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(asyncloadperson(id));
    return () => {
      dispatch(removeperson());
    };
  }, [id, dispatch]);
  return info ? (
    <div
      style={{
        background: `linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.5),rgba(0,0,0,.7)),url(${
          info.detail.profile_path
            ? `https://image.tmdb.org/t/p/original/${info.detail.profile_path}`
            : noimage
        })`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="h-[140vh] w-screen px-[10%] flex flex-col"
    >
      <nav className="mb-2 flex h-[10vh] w-full items-center gap-10 text-xl text-zinc-100 flex-shrink-0">
        <Link
          onClick={() => navigate(-1)}
          className="ri-arrow-left-line transition-colors hover:text-red-500"
        ></Link>
        <Link
          to="/"
          className="ri-home-line transition-colors hover:text-red-500"
          title="Go to Home"
        ></Link>
        <a href={info.detail.homepage} target="_blank" rel="noreferrer" className="transition-colors hover:text-red-500">
          <i className="ri-external-link-fill"></i>
        </a>
        <a
          target="_blank"
          href={`https://www.wikidata.org/wiki/${info.externalId.wikidata_id}`}
          className="transition-colors hover:text-red-500"
        >
          <i className="ri-earth-fill"></i>
        </a>
        <a
          target="_blank"
          href={`https://www.imdb.com/name/${info.externalId.imdb_id}/`}
          className="transition-colors hover:text-red-500"
        >
          imdb
        </a>
      </nav>

      <div className="flex w-full flex-shrink-0">
        <img
          className="h-[50vh] object-cover shadow-[8px_17px_38px_2px_rgba(0,0,0,0.5)]"
          src={
            info.detail.profile_path
              ? `https://image.tmdb.org/t/p/original/${info.detail.profile_path}`
              : noimage
          }
          alt={info.detail.name || "Person profile"}
        />

        <div className="content ml-[5%] text-white">
          <h1 className="text-5xl font-black">
            {info.detail.name}

            {info.detail.birthday && (
              <small className="text-2xl font-bold text-zinc-200">
                ({info.detail.birthday.split("-")[0]})
              </small>
            )}
          </h1>

          <div className="mt-3 mb-5 flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-2 rounded-lg border border-red-600/30 bg-red-600/10 px-4 py-2 backdrop-blur-sm">
              <i className="ri-user-star-line text-red-500"></i>
              <span className="text-zinc-200 font-medium">{info.detail.known_for_department}</span>
            </div>

            {info.detail.birthday && (
              <div className="flex items-center gap-2 rounded-lg border border-red-600/30 bg-red-600/10 px-4 py-2 backdrop-blur-sm">
                <i className="ri-calendar-line text-red-500"></i>
                <span className="text-zinc-200 font-medium">{info.detail.birthday}</span>
              </div>
            )}

            {info.detail.place_of_birth && (
              <div className="flex items-center gap-2 rounded-lg border border-red-600/30 bg-red-600/10 px-4 py-2 backdrop-blur-sm">
                <i className="ri-map-pin-line text-red-500"></i>
                <span className="text-zinc-200 font-medium">{info.detail.place_of_birth}</span>
              </div>
            )}
          </div>

          {info.detail.biography && (
            <>
              <h1 className="mt-5 mb-3 text-2xl">Biography</h1>
              <p className="mb-8 max-h-[20vh] overflow-y-auto text-zinc-300 leading-relaxed pr-2">
                {info.detail.biography}
              </p>
            </>
          )}
        </div>
      </div>

      <div className="mt-5 flex-1 overflow-y-auto w-full">
        {info.movieCredits && info.movieCredits.length > 0 && (
          <div className="mb-10 w-full">
            <h1 className="mb-5 text-3xl font-semibold text-white">Movies</h1>
            <HorizontalCards
              data={info.movieCredits.slice(0, 20).map((movie) => ({
                ...movie,
                media_type: "movie",
              }))}
            />
          </div>
        )}

        {info.tvCredits && info.tvCredits.length > 0 && (
          <div className="mb-10 w-full">
            <h1 className="mb-5 text-3xl font-semibold text-white">TV Shows</h1>
            <HorizontalCards
              data={info.tvCredits.slice(0, 20).map((tv) => ({
                ...tv,
                media_type: "tv",
              }))}
            />
          </div>
        )}
      </div>
    </div>
  ) : (
    <Loading />
  );
};
export default PersonDetails;
