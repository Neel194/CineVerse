const Loading = () => {
  return (
    <section className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-[#1F1E24] via-zinc-950 to-[#1F1E24]">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute h-1 w-1 rounded-full bg-red-500/20 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          ></div>
        ))}
      </div>

      {/* Main loading container */}
      <div className="relative flex flex-col items-center justify-center">
        {/* Film reel effect */}
        <div className="relative mb-8">
          {/* Outer spinning ring */}
          <div className="h-24 w-24 animate-spin rounded-full border-4 border-transparent border-t-red-600 border-r-red-600/50"></div>
          
          {/* Inner spinning ring (counter-rotation) */}
          <div className="absolute inset-0 h-24 w-24 animate-spin rounded-full border-4 border-transparent border-b-red-500 border-l-red-500/50" style={{ animationDirection: 'reverse', animationDuration: '1s' }}></div>
          
          {/* Center pulsing dot */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-3 w-3 animate-pulse rounded-full bg-red-600 shadow-lg shadow-red-600/50"></div>
          </div>
        </div>

        {/* Film strip effect */}
        <div className="relative flex items-center gap-2">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="h-2 w-8 rounded-sm bg-red-600/30 animate-pulse"
              style={{
                animationDelay: `${i * 0.1}s`,
                animationDuration: '1s',
              }}
            ></div>
          ))}
        </div>

        {/* Loading text with glow effect */}
        <div className="mt-6">
          <h2 className="text-xl font-semibold tracking-wider text-white animate-pulse">
            <span className="inline-block animate-pulse" style={{ animationDelay: '0s' }}>L</span>
            <span className="inline-block animate-pulse" style={{ animationDelay: '0.1s' }}>O</span>
            <span className="inline-block animate-pulse" style={{ animationDelay: '0.2s' }}>A</span>
            <span className="inline-block animate-pulse" style={{ animationDelay: '0.3s' }}>D</span>
            <span className="inline-block animate-pulse" style={{ animationDelay: '0.4s' }}>I</span>
            <span className="inline-block animate-pulse" style={{ animationDelay: '0.5s' }}>N</span>
            <span className="inline-block animate-pulse" style={{ animationDelay: '0.6s' }}>G</span>
            <span className="ml-2 inline-block animate-pulse text-red-500" style={{ animationDelay: '0.7s' }}>.</span>
            <span className="inline-block animate-pulse text-red-500" style={{ animationDelay: '0.8s' }}>.</span>
            <span className="inline-block animate-pulse text-red-500" style={{ animationDelay: '0.9s' }}>.</span>
          </h2>
        </div>

        {/* Bottom glow effect */}
        <div className="absolute -bottom-8 h-1 w-32 animate-pulse bg-gradient-to-r from-transparent via-red-600/50 to-transparent"></div>
      </div>
    </section>
  );
};

export default Loading;
