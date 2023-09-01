import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";
// import {menu,youtubeLogo,user} from "../assets/icons"

const Head = () => {
  const [searchQuery, setSeachQuery] = useState("");
  const [suggestion, setSuggestion] = useState([]);
  const [showVariables, setShowVariables] = useState(false);
  // console.log(suggestion);
  const searchCache = useSelector(store=>store.search)

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestion(searchCache[searchQuery]);
      } else {
        getSearchSuggession();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggession = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery, {
      method: "GET",
      // headers: {
      //   "content-type": "application/json"
      // },
    });
    const json = await data.json();
    const suggestions = json[1];

    setSuggestion(suggestions);

    //update cache
    dispath(cacheResults({
      [searchQuery]:suggestion,
    }))

  };

  const dispath = useDispatch();

  const toggleMenuHandler = () => {
    dispath(toggleMenu());
  };

  const seachHandler = (event) => {
    setSeachQuery(event.target.value);
  };

  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg">
      <div className="flex col-span-1">
        <img
          onClick={toggleMenuHandler}
          className="h-8 cursor-pointer"
          alt="menu"
          src="https://cdn.icon-icons.com/icons2/2596/PNG/512/hamburger_button_menu_icon_155296.png"
        />
        <a href="/">
          <img
            className="h-8 mx-2"
            alt="youtubeLogo"
            src="https://lh3.googleusercontent.com/3zkP2SYe7yYoKKe47bsNe44yTgb4Ukh__rBbwXwgkjNRe4PykGG409ozBxzxkrubV7zHKjfxq6y9ShogWtMBMPyB3jiNps91LoNH8A=s500"
          />
        </a>
      </div>
      <div className="col-span-10">
        <div>
          <input
            className="w-1/2 items-center border border-gray-800 p-2 rounded-l-full"
            type="text"
            value={searchQuery}
            onChange={seachHandler}
            onFocus={() => setShowVariables(true)}
            onBlur={() => setShowVariables(false)}
          />
          <button className="border border-gray-200 px-5 py-2 rounded-r-full bg-gray-100">
            search
          </button>
        </div>
        {showVariables && (
          <div className="font-bold  fixed bg-white  py-2 px-2 w-[41.5rem] shadow-lg rounded-lg border border-gray">
            <ul>
              {suggestion?.map((sug) => (
                <li key={sug} className="py-2 py-3 shadow-sm hover:bg-gray-100">
                  {sug}
                </li>
              ))}
              {/* <li>phone</li>
            <li>phone</li>
            <li>phone</li>
            <li>phone</li>
            <li>phone</li> */}
            </ul>
          </div>
        )}
      </div>
      <div className="col-span-1">
        <img
          className="h-8"
          alt="user"
          src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
        />
      </div>
    </div>
  );
};

export default Head;
