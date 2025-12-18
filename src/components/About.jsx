import { useState } from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  document.title = "CineVerse | About";
  const navigate = useNavigate();
  const [hoveredFeature, setHoveredFeature] = useState(null);

  return (
    <div className="min-h-screen w-screen overflow-auto overflow-x-hidden bg-[#1F1E24]">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="group fixed top-6 left-6 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-zinc-700 bg-zinc-900/80 text-white transition-all duration-300 hover:scale-105 hover:border-zinc-500 hover:bg-zinc-800"
        aria-label="Go back"
      >
        <i className="ri-arrow-left-line text-xl transition-transform duration-300 group-hover:-translate-x-1"></i>
      </button>

      <div className="mx-auto max-w-6xl px-6 py-24">
        {/* Hero Section */}
        <div className="mb-24 text-center">
          <h1 className="mb-6 text-6xl font-bold text-white">
            About CineVerse
          </h1>
          <div className="mx-auto mb-8 h-1 w-20 bg-yellow-500"></div>
          <p className="mx-auto max-w-2xl text-xl leading-relaxed text-zinc-400">
            CineVerse is a modern movie discovery platform built with React and
            Redux. Explore trending content, browse detailed information, and
            discover where to watch your favorite movies and TV shows.
          </p>
        </div>

        {/* Features Section */}
        <div className="mb-24">
          <h2 className="mb-12 text-center text-4xl font-semibold text-white">
            Features
          </h2>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: "ri-fire-fill",
                title: "Trending Content",
                description:
                  "Discover what's trending in movies and TV shows with real-time updates",
              },
              {
                icon: "ri-bard-fill",
                title: "Popular Collections",
                description:
                  "Browse through curated collections of the most popular content",
              },
              {
                icon: "ri-information-fill",
                title: "Detailed Information",
                description:
                  "Access comprehensive details including cast, crew, ratings, and reviews",
              },
              {
                icon: "ri-play-fill",
                title: "Trailer Playback",
                description:
                  "Watch trailers seamlessly integrated within the platform",
              },
              {
                icon: "ri-tv-line",
                title: "Watch Providers",
                description:
                  "Find streaming platforms and purchase options for any title",
              },
              {
                icon: "ri-team-fill",
                title: "Actor Profiles",
                description:
                  "Explore detailed actor profiles with complete filmography",
              },
            ].map((feature, index) => (
              <div
                key={index}
                onMouseEnter={() => setHoveredFeature(index)}
                onMouseLeave={() => setHoveredFeature(null)}
                className="group rounded-xl border border-zinc-800 bg-zinc-900/50 p-6 transition-all duration-300 hover:border-red-600/50 hover:bg-zinc-900/70 hover:shadow-lg hover:shadow-red-600/20"
              >
                <div
                  className={`mb-4 inline-flex h-14 w-14 items-center justify-center rounded-lg border transition-all duration-300 ${
                    hoveredFeature === index
                      ? "scale-110 border-red-600 bg-red-600/10"
                      : "border-zinc-700 bg-zinc-800/50 group-hover:border-red-600/30"
                  }`}
                >
                  <i
                    className={`${feature.icon} text-2xl text-yellow-500 transition-all duration-300 ${
                      hoveredFeature === index ? "scale-110 text-red-500" : ""
                    }`}
                  ></i>
                </div>
                <h3
                  className={`mb-3 text-xl font-semibold transition-colors duration-300 ${
                    hoveredFeature === index ? "text-red-500" : "text-white"
                  }`}
                >
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-zinc-400">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Data Source Section */}
        <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-10 text-center">
          <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-lg border border-yellow-500/30 bg-yellow-500/10">
            <i className="ri-database-fill text-3xl text-yellow-500"></i>
          </div>
          <h2 className="mb-4 text-3xl font-semibold text-white">
            Data Source
          </h2>
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-zinc-400">
            All movie, TV show, and actor information is powered by{" "}
            <a
              href="https://www.themoviedb.org/"
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-yellow-500 transition-colors hover:text-yellow-400 hover:underline"
            >
              The Movie Database (TMDB)
            </a>
            . TMDB provides a comprehensive API that enables real-time access to
            entertainment data.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
