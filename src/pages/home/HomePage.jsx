import React from "react";
import MovieList from "./components/movie-list/MovieList";
import News from "./components/news/News";

export default function HomePage() {
  return (
    <div className="py-5">
      <MovieList />
      <News />
    </div>
  );
}
