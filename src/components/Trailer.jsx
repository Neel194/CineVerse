import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import ReactPlayer from "react-player";
import Loading from "./Loading";

const Trailer = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { info: movieInfo } = useSelector((state) => state.movie);
  const { info: tvInfo } = useSelector((state) => state.tv);

  const info = movieInfo || tvInfo;
  const videoKey = info?.videos?.key;

  if (!info) {
    return <Loading />;
  }

  if (!videoKey) {
    return (
      <div className="flex h-screen w-screen items-center justify-center bg-[#1F1E24]">
        <div className="text-center text-white">
          <h1 className="mb-5 text-3xl font-semibold">No Trailer Available</h1>
          <button
            onClick={() => navigate(-1)}
            className="rounded-lg bg-[#6556CD] px-6 py-3 text-white hover:bg-[#6556CD]/80"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  const youtubeUrl = `https://www.youtube.com/watch?v=${videoKey}`;

  return (
    <div className="fixed inset-0 z-50 flex h-screen w-screen items-center justify-center bg-black bg-opacity-95">
      <div className="relative h-full w-full p-10">
        <button
          onClick={() => navigate(-1)}
          className="absolute left-5 top-5 z-10 rounded-full bg-[#6556CD] p-3 text-white hover:bg-[#6556CD]/80"
        >
          <i className="ri-close-line text-2xl"></i>
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

