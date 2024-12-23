import React, { useState, useEffect } from "react";
import axios from "../axios";
import YouTube from "react-youtube";
import { API_KEY, imageUrl } from "../Constants/Constant";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmarkCircle } from "@fortawesome/free-regular-svg-icons";

function Row(props) {
  const [series, setSeries] = useState([]);
  const [urlId, setUrlId] = useState(null);

  useEffect(() => {
    axios.get(props.data).then((response) => {
      setSeries(response.data.results);
    });
  }, [props.data]);

  const handleTrailer = (id) => {
    setUrlId(null);
    axios
      .get(`/${props.val}/${id}/videos?api_key=${API_KEY}&language=en-US`)
      .then((response) => {
        if (response.data.results.length !== 0) {
          setUrlId(response.data.results[0]);
        } else {
          console.log("No videos found");
        }
      });
  };
  let height;

  if (window.innerWidth >= 768) {
    height = `${window.innerHeight * 0.7}px`;
  } else {
    height = `${window.innerHeight * 0.25}px`;
  }

  const opts = {
    height: height,
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div className="bg-black">
      <div className="md:pl-5 pt-5 text-white">
        <h1 className="font-bold ps-5">{props.title}</h1>
        <div className="posters flex gap-4 cursor-pointer p-5 overflow-x-scroll scrollbar-hide">
          {series.map((obj) => (
            <img
              onClick={() => handleTrailer(obj.id)}
              key={obj.id}
              src={obj.poster_path ? imageUrl + obj.poster_path : ""}
              className="h-64 rounded-md  hover:scale-110 hover:ease-in-out duration-300"
            />
          ))}
        </div>
      </div>

      <div className="w-full">
        {urlId && (
          <div className="w-full relative">
            <button
              onClick={() => setUrlId(null)} 
              className="absolute top-2 right-2 ext-2xl text-white  px-3 t py-1 z-50"
            >
              <FontAwesomeIcon icon={faXmarkCircle} />
            </button>
            <YouTube videoId={urlId.key} opts={opts} className="px-10" />
          </div>
        )}
      </div>
    </div>
  );
}

export default Row;
