import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import ReactPlayer from "react-player";
import Loading from "./Loading";
import { asyncloadmovie } from "../store/actions/movieActions";
import { asyncloadtv } from "../store/actions/tvActions";

const Trailer = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const location = useLocation();
  const dispatch = useDispatch();

  const { info: movieInfo } = useSelector((state) => state.movie);
  const { info: tvInfo } = useSelector((state) => state.tv);

  const isMovie = location.pathname.includes("/movie/");
  const info = movieInfo || tvInfo;

  useEffect(() => {
    if (!info && id) {
      if (isMovie) {
        dispatch(asyncloadmovie(id));
      } else {
        dispatch(asyncloadtv(id));
      }
    }
  }, [id, info, isMovie, dispatch]);

  if (!info) {
    return <Loading />;
  }

  // Check if videos exist and get the key
  const trailerVideo = info.videos;
  const videoKey = trailerVideo?.key;

  if (!trailerVideo || !videoKey) {
    return (
      <div className="flex h-screen w-screen items-center justify-center bg-[#1F1E24]">
        <div className="text-center text-white">
          <h1 className="mb-5 text-3xl font-semibold">No Trailer Available</h1>
          <p className="mb-5 text-zinc-400">
            {trailerVideo
              ? "Trailer video found but no key available"
              : "No trailer found for this content"}
          </p>
          <button
            onClick={() => navigate(-1)}
            className="group inline-flex items-center gap-2 rounded-lg border-2 border-zinc-600 bg-zinc-900/50 px-6 py-3 font-semibold text-white transition-all duration-300 hover:border-zinc-400 hover:bg-zinc-800/70 hover:shadow-lg"
          >
            <i className="ri-arrow-left-line text-xl transition-transform duration-300 group-hover:-translate-x-1"></i>
            <span>Go Back</span>
          </button>
        </div>
      </div>
    );
  }

  const youtubeUrl = `https://www.youtube.com/watch?v=${videoKey}`;

  return (
    <div className="bg-opacity-95 fixed inset-0 z-50 flex h-screen w-screen items-center justify-center bg-black">
      <div className="relative h-full w-full p-10">
        <button
          onClick={() => navigate(-1)}
          className="group absolute top-5 right-5 z-10 flex h-12 w-12 items-center justify-center rounded-full border-2 border-zinc-600 bg-zinc-900/80 backdrop-blur-sm text-white transition-all duration-300 hover:border-zinc-400 hover:bg-zinc-800/90 hover:scale-110 hover:shadow-lg hover:shadow-black/50"
          aria-label="Close trailer"
        >
          <i className="ri-close-line text-2xl transition-transform duration-300 group-hover:rotate-90"></i>
        </button>

        <div className="flex h-full w-full items-center justify-center">
          <div className="aspect-video w-full max-w-6xl">
            <ReactPlayer
              url={youtubeUrl}
              width="100%"
              height="100%"
              controls={true}
              playing={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trailer;
