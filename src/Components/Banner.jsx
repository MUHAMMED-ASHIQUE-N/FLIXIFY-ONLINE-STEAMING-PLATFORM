import React, { useState } from "react";
import { useEffect } from "react";
import axios from "../axios";
import { API_KEY, imageUrl } from "../Constants/Constant";

function Banner() {
  const [series, setSeries] = useState();
  const [isFading, setIsFading] = useState(false); // State for transition

  const fetchBannerData = () => {
    const randomIndex = Math.floor(Math.random() * 20);

    axios
      .get(
        `discover/tv?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=10765&with_watch_monetization_types=flatrate`
      )
      .then((response) => {
        setIsFading(true); // Start fading out
        setTimeout(() => {
          setSeries(response.data.results[randomIndex]); // Update the series
          setIsFading(false); // Start fading in
        }, 500); // Match this delay to your CSS transition duration
      });
  };

  useEffect(() => {
    fetchBannerData();
    const intervalId = setInterval(() => {
      fetchBannerData();
    }, 10000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div
      style={{
        backgroundImage: `url(${
          series ? imageUrl + series.backdrop_path : "Loading..."
        })`,
        opacity: isFading ? 0 : 1, // Handle fading effect
        transition: "opacity 0.5s ease-in-out" // Smooth transition
      }}
      className="relative min-h-[50vh] md:min-h-[40vh] lg:h-[75vh] font-sans text-white bg-cover bg-center"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-[#131212] from-30% via-[rgba(0,0,0,0.61)] via-50% to-transparent z-10"></div>

      <div className="relative z-20 h-full flex items-start justify-start pt-14 px-5 md:pt-36  md:pl-16">
        <div className=" space-y-5">
          <h1 className="text-xl md:text-4xl tracking-[.5em]  md:tracking-[.8em] font-semibold pb-2">
            {series ? series.name : "Loading..."}{" "}
          </h1>
          <div className="flex gap-4 ">
            <button className="text-lg rounded-md px-5 py-2 bg-[#33373d] hover:bg-white hover:text-black">
              Play
            </button>
            <button className="text-lg rounded-md px-5 py-2 bg-[#33373d] hover:bg-white hover:text-black">
              My List
            </button>
          </div>
          <h1 className="description font-medium text-lg max-w-xl h-36 md:h-full overflow-y-scroll ">
            {series ? series.overview : "Loading..."}
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Banner;
