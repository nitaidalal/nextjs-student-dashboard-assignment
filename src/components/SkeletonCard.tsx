export default function SkeletonCard() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 p-4 lg:p-6">
      {/* Hero section skeleton */}
      <div className="col-span-full  rounded-2xl p-6 glass animate-pulse">
        <div className="flex items-start justify-between gap-4">
          <div className="flex flex-col gap-3 flex-1">
            <div className="h-3 w-24 rounded-full bg-white/10" />
            <div className="h-8 w-64 rounded-full bg-white/10" />
            <div className="h-3 w-48 rounded-full bg-white/10" />
          </div>
          <div className="h-16 w-24 rounded-xl bg-white/10 flex-shrink-0" />
        </div>

        {/* Stats row skeleton */}
        <div className="grid grid-cols-3 gap-3 mt-6">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="h-12 rounded-xl bg-white/10" />
          ))}
        </div>
      </div>

      {/* Course Card Skeletons */}
      {[...Array(4)].map((_, i) => (
        <div
          key={i}
          className="rounded-2xl p-5 glass animate-pulse"
          style={{ animationDelay: `${i * 0.1}s` }}
        >
          <div className="flex items-start gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-white/10 flex-shrink-0" />
            <div className="flex flex-col gap-2 flex-1">
              <div className="h-3 w-3/4 rounded-full bg-white/10" />
              <div className="h-2.5 w-1/2 rounded-full bg-white/10" />
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <div className="flex justify-between">
              <div className="h-2.5 w-12 rounded-full bg-white/10" />
              <div className="h-2.5 w-8 rounded-full bg-white/10" />
            </div>
            <div className="h-1.5 w-full rounded-full bg-white/10" />
          </div>
        </div>
      ))}

      {/* Activity Tile Skeleton */}
      <div className="col-span-full lg:col-span-2 rounded-2xl p-5 glass animate-pulse">
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-white/10" />
            <div className="flex flex-col gap-1.5">
              <div className="h-3 w-32 rounded-full bg-white/10" />
              <div className="h-2.5 w-20 rounded-full bg-white/10" />
            </div>
          </div>
          <div className="h-6 w-28 rounded-full bg-white/10" />
        </div>

        {/* Graph skeleton */}
        <div className="flex gap-1 pl-8 mb-2">
          {[...Array(20)].map((_, i) => (
            <div key={i} className="flex flex-col gap-1">
              {[...Array(7)].map((_, j) => (
                <div
                  key={j}
                  className="w-3 h-3 rounded-sm bg-white/10"
                  style={{ animationDelay: `${(i * 7 + j) * 0.005}s` }}
                />
              ))}
            </div>
          ))}
        </div>

        {/* Stats skeleton */}
        <div className="grid grid-cols-3 gap-3 pt-2 border-t border-(--border) mt-3">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="flex flex-col gap-1.5">
              <div className="h-2.5 w-20 rounded-full bg-white/10" />
              <div className="h-3.5 w-16 rounded-full bg-white/10" />
            </div>
          ))}
        </div>
      </div>

        {/* Milestone Tile Skeleton */}
        <div className="col-span-full lg:col-span-2 rounded-2xl p-5 glass animate-pulse">
            <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-white/10" />
                <div className="flex flex-col gap-1.5">
                    <div className="h-3 w-24 rounded-full bg-white/10" />
                    <div className="h-2.5 w-16 rounded-full bg-white/10" />
                </div>
            </div>
            <div className="flex flex-col gap-3">
                <div className="h-4 w-48 rounded-full bg-white/10" />
                <div className="h-3 w-32 rounded-full bg-white/10" />
                <div className="h-2.5 w-20 rounded-full bg-white/10" />
            </div>
        </div>
    </div>
  );
}
