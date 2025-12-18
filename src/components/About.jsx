import { useState } from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  document.title = "CineVerse | About";
  const navigate = useNavigate();
  const [hoveredFeature, setHoveredFeature] = useState(null);

  return (
    <div className="min-h-screen w-screen overflow-auto overflow-x-hidden bg-gradient-to-br from-zinc-950 via-[#1F1E24] to-zinc-950">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="group fixed top-8 left-8 z-50 flex h-14 w-14 items-center justify-center rounded-full border border-zinc-700/50 bg-zinc-900/40 text-white backdrop-blur-md transition-all duration-300 hover:scale-110 hover:border-yellow-500/50 hover:bg-yellow-500/10 hover:shadow-lg hover:shadow-yellow-500/20"
        aria-label="Go back"
      >
        <i className="ri-arrow-left-line text-2xl transition-transform duration-300 group-hover:-translate-x-1"></i>
      </button>

      <div className="relative">
        {/* Hero Section with Cinematic Effect */}
        <div className="relative overflow-hidden pt-24 pb-16">
          {/* Animated Background Gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-yellow-500/5 to-transparent"></div>

          <div className="relative z-10 mx-auto max-w-6xl px-8 text-center">
            <h1 className="mb-6 bg-gradient-to-r from-white via-zinc-100 to-zinc-300 bg-clip-text text-7xl font-black tracking-tight text-transparent">
              About CineVerse
            </h1>

            <div className="mx-auto mb-8 h-1 w-40 bg-gradient-to-r from-transparent via-yellow-500/60 to-transparent"></div>

            <p className="mx-auto max-w-2xl text-xl leading-relaxed font-light text-zinc-400">
              Your cinematic gateway to discovering extraordinary movies,
              captivating TV shows, and the stories behind the screen
            </p>
          </div>
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-8 pb-20">
          {/* Features Section */}
          <div className="mb-24">
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-5xl font-light tracking-wide text-white">
                Features
              </h2>
              <div className="mx-auto h-px w-24 bg-gradient-to-r from-transparent via-yellow-500/40 to-transparent"></div>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  icon: "ri-fire-fill",
                  title: "Trending Content",
                  description:
                    "Discover what's hot right now in movies and TV shows",
                },
                {
                  icon: "ri-bard-fill",
                  title: "Popular Collections",
                  description:
                    "Browse through the most popular content across different categories",
                },
                {
                  icon: "ri-information-fill",
                  title: "Detailed Information",
                  description:
                    "Get comprehensive details about movies, TV shows, and cast members",
                },
                {
                  icon: "ri-play-fill",
                  title: "Trailer Playback",
                  description: "Watch trailers directly on the platform",
                },
                {
                  icon: "ri-tv-line",
                  title: "Watch Providers",
                  description:
                    "Find out where you can stream or purchase your favorite content",
                },
                {
                  icon: "ri-team-fill",
                  title: "Actor Profiles",
                  description:
                    "Explore detailed profiles of your favorite actors and their filmography",
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  onMouseEnter={() => setHoveredFeature(index)}
                  onMouseLeave={() => setHoveredFeature(null)}
                  className="group relative overflow-hidden rounded-xl border border-zinc-800/50 bg-gradient-to-br from-zinc-900/40 to-zinc-900/20 p-8 backdrop-blur-sm transition-all duration-500 hover:border-yellow-500/30 hover:bg-gradient-to-br hover:from-zinc-900/60 hover:to-zinc-900/40 hover:shadow-xl hover:shadow-yellow-500/10"
                >
                  {/* Subtle glow effect */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br from-yellow-500/0 to-yellow-500/0 transition-all duration-500 ${
                      hoveredFeature === index
                        ? "from-yellow-500/10 via-yellow-500/5 to-transparent"
                        : ""
                    }`}
                  ></div>

                  <div className="relative">
                    <div
                      className={`mb-6 flex h-16 w-16 items-center justify-center rounded-xl border border-zinc-700/50 bg-gradient-to-br from-zinc-800/30 to-zinc-800/10 transition-all duration-500 ${
                        hoveredFeature === index
                          ? "scale-110 rotate-6 border-yellow-500/50 bg-gradient-to-br from-yellow-500/20 to-yellow-500/5 shadow-lg shadow-yellow-500/20"
                          : "group-hover:border-yellow-500/30"
                      }`}
                    >
                      <i
                        className={`${feature.icon} text-2xl text-yellow-500/80 transition-all duration-300 ${
                          hoveredFeature === index
                            ? "scale-125 text-yellow-500"
                            : "group-hover:text-yellow-500/90"
                        }`}
                      ></i>
                    </div>

                    <h3
                      className={`mb-3 text-2xl font-light tracking-wide transition-colors duration-300 ${
                        hoveredFeature === index
                          ? "text-yellow-500"
                          : "text-white"
                      }`}
                    >
                      {feature.title}
                    </h3>

                    <p className="text-base leading-relaxed text-zinc-500">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Data Source Section */}
          <div className="group relative overflow-hidden rounded-2xl border border-yellow-500/20 bg-gradient-to-br from-yellow-500/5 via-zinc-900/40 to-zinc-900/20 p-12 backdrop-blur-md transition-all duration-500 hover:border-yellow-500/40 hover:shadow-2xl hover:shadow-yellow-500/20">
            {/* Animated background glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/0 via-yellow-500/0 to-yellow-500/0 transition-all duration-500 group-hover:from-yellow-500/10 group-hover:via-yellow-500/5 group-hover:to-transparent"></div>

            <div className="relative text-center">
              <div className="mb-8 inline-flex items-center justify-center">
                <div className="relative">
                  <div className="absolute inset-0 animate-pulse rounded-full bg-yellow-500/10 blur-xl"></div>
                  <div className="relative flex h-20 w-20 items-center justify-center rounded-xl border border-yellow-500/30 bg-gradient-to-br from-yellow-500/10 to-transparent backdrop-blur-sm transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 group-hover:border-yellow-500/50">
                    <i className="ri-database-fill text-4xl text-yellow-500/80"></i>
                  </div>
                </div>
              </div>

              <h2 className="mb-6 text-5xl font-light tracking-wide text-white transition-colors duration-300 group-hover:text-yellow-500/80">
                Data Source
              </h2>

              <div className="mx-auto mb-8 h-px w-32 bg-gradient-to-r from-transparent via-yellow-500/40 to-transparent"></div>

              <p className="mx-auto max-w-3xl text-lg leading-relaxed text-zinc-400">
                All movie, TV show, and actor information is provided by{" "}
                <a
                  href="https://www.themoviedb.org/"
                  target="_blank"
                  rel="noreferrer"
                  className="font-medium text-yellow-500/90 transition-all duration-300 hover:text-yellow-500 hover:underline"
                >
                  The Movie Database (TMDB)
                </a>
                . We are grateful for their comprehensive API that powers our
                platform.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
