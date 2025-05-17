import React from "react";
import Header from "./Header";
import SearchBar from "./SearchBar";
import { SparklesIcon, GlobeAltIcon, HeartIcon } from "@heroicons/react/24/outline";

const LandingPage = () => (
  <div className="relative min-h-screen w-full bg-black text-white overflow-hidden">
    {/* Animated Background (non-interactive) */}
    <div
      className="absolute inset-0 z-0 animate-fade-in pointer-events-none"
      style={{
        backgroundImage: 'url("/HeroBackground.png")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    />
    <div
      className="absolute inset-0 bg-gradient-to-b from-black/95 via-black/50 to-black/90 z-10 pointer-events-none"
    />

    {/* Content (fully interactive) */}
    <div className="relative z-20">
      <Header />

      <section
        className="flex flex-col items-center justify-center min-h-[95vh] px-4 text-center pt-20 pb-12"
        style={{ fontFamily: "Playfair Display, serif" }}
      >
        {/* Animated Heading */}
        <div className="max-w-4xl space-y-6 transform transition-all duration-1000">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold leading-[1.15]">
            <span className="bg-gradient-to-r from-amber-300 via-amber-400 to-amber-600 bg-clip-text text-transparent">
              Curated Spirits
            </span>
            <span className="block mt-4 text-3xl sm:text-4xl font-light text-amber-100/90 tracking-wide">
              From <span className="font-medium">Cellars</span> to{" "}
              <span className="font-medium">Connoisseurs</span>
            </span>
          </h1>

          {/* Decorative Separator */}
          <div className="flex justify-center items-center space-x-4 opacity-70">
            <div className="h-px w-20 bg-gradient-to-r from-transparent to-amber-500/50" />
            <SparklesIcon className="h-6 w-6 text-amber-400 animate-pulse" />
            <div className="h-px w-20 bg-gradient-to-l from-transparent to-amber-500/50" />
          </div>

          <p className="max-w-2xl mx-auto text-lg sm:text-xl md:text-2xl font-light italic text-amber-100/80 mt-6">
            "Where every bottle tells a story of heritage and craftsmanship"
          </p>

          {/* Enhanced Buttons */}
          <div className="flex flex-wrap gap-4 justify-center mt-8">
            <button className="relative group bg-gradient-to-br from-amber-500 to-amber-700 hover:from-amber-600 hover:to-amber-800 text-white font-medium py-3 px-8 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
              <GlobeAltIcon className="h-5 w-5 mr-2 inline-block" />
              Explore Collection
              <div className="absolute inset-0 border border-amber-400/30 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>

            <button className="relative group bg-white/5 hover:bg-white/10 backdrop-blur-lg border border-amber-500/30 hover:border-amber-500/50 text-amber-100 font-medium py-3 px-8 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
              <HeartIcon className="h-5 w-5 mr-2 inline-block text-amber-400" />
              Mood Selection
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
          </div>
        </div>

        {/* Elevated Search Section */}
        <div className="mt-24 w-full max-w-4xl px-4">
          <div className="relative group">
            <SearchBar />
            <div className="absolute -inset-1 bg-gradient-to-r from-amber-500/30 to-transparent rounded-xl opacity-0 group-hover:opacity-50 blur-[20px] transition-opacity duration-300" />
          </div>

          {/* Curated Tags */}
          <div className="flex flex-wrap justify-center gap-3 mt-6">
            {[
              "SingleMalt",
              "AgedRum",
              "Cognac",
              "SmallBatch",
              "Vintage",
              "LimitedEdition",
            ].map((tag) => (
              <span
                key={tag}
                className="bg-gradient-to-b from-amber-900/50 to-amber-800/30 border border-amber-500/30 text-amber-100 px-4 py-1.5 rounded-full hover:bg-amber-900/70 hover:border-amber-400/50 hover:scale-105 transition-all duration-300 cursor-pointer text-sm font-medium tracking-wide"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  </div>
);

export default LandingPage;