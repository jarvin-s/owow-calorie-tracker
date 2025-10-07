import Link from "next/link";

export default function FlipdotSettings() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black px-4">
      <div className="w-[375px] h-[812px] relative flex flex-col bg-white border-2 border-white rounded-3xl overflow-hidden">
        <div className="h-10" />

        {/* Header */}
        <div className="px-4 mt-2">
          <div className="bg-black text-white rounded-[24px] px-5 py-4 w-full flex items-center gap-3">
            <Link
              href="/"
              className="text-white text-2xl leading-none -ml-1 no-underline"
              aria-label="Go back"
            >
              ‹
            </Link>
            <h1 className="text-xl sm:text-2xl font-bold tracking-wider">
              Flipdot Settings
            </h1>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto pt-6 pb-24 px-4 space-y-8">
          {/* Calorie progress box */}
          <Link
            href="/progress"
            className="block no-underline focus:outline-none"
            aria-label="Open Calorie progress"
          >
            <section className="bg-[#A2A2A2] rounded-3xl p-5 shadow-[0_6px_0_0_rgba(0,0,0,0.25)] cursor-pointer transition-all hover:shadow-[0_8px_0_0_rgba(0,0,0,0.35)] focus-visible:ring-2 focus-visible:ring-white">
              <h2 className="text-black text-xl font-semibold mb-4 tracking-wider">
                Calorie progress
              </h2>
              <div className="h-48 bg-black rounded-3xl" />
            </section>
          </Link>

          {/* Leaderboard box */}
          <Link
            href="/leaderboard"
            className="block no-underline focus:outline-none"
            aria-label="Open Leaderboard"
          >
            <section className="bg-[#A2A2A2] rounded-3xl p-5 shadow-[0_6px_0_0_rgba(0,0,0,0.25)] cursor-pointer transition-all hover:shadow-[0_8px_0_0_rgba(0,0,0,0.35)] focus-visible:ring-2 focus-visible:ring-white">
              <h2 className="text-black text-xl font-semibold mb-4 tracking-wider">
                Leaderboard
              </h2>
              <div className="h-56 bg-black rounded-3xl" />
            </section>
          </Link>
        </div>

        {/* Home indicator only */}
        <div className="absolute bottom-0 left-0 right-0 pb-5 flex justify-center">
          <div className="h-1 w-44 bg-white/80 rounded-full" />
        </div>
      </div>
    </div>
  );
}
