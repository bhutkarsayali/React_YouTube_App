import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constants";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  // console.log("searchQuery", searchQuery);
  // Every time my searchQuery change sI need to make an API call
  useEffect(() => {
    // API call over here will be made on every keystroke.
    // as we have passed searchQuery in dependency array means it will be called every time value of searchQuery changes
    // console.log("searchQuery", searchQuery);

    // But I want to call an API IFF difff betwnn 2 keystrokes is > 200ms

    // theory
    // make an api call on every kaypress
    //but if diff between 2 keypress is < 200ms
    //then decline the api call
    // getSearchSuggestions();

    //make this api call after 200ms
    const timer = setTimeout(() => getSearchSuggestions(), 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);
  /**
   * key - i
   * - render the component
   * -useEffect()
   * -start timer => make api call after 200ms
   *
   * key - ip
   * -(even before 200 ms i press p -> it triggers reconciliation again,
   *     it will destroy the componnet and it will call this useEffect return method also(this function is called when component is unmounting,
   *     when the component is again refreshing,
   *     so return function will be callled every time my componennt re-rendered and it is clearing the timer ritht there and then
   *     so what happens even before 200ms expires, it just clears it up/declines it,
   *     then the component is rerendered, it calls useEffect aagain and the new timer is set up so on
   *  case 2: suppose these 200ms passed and there is no other key press, it will automatically make an api call
   *
   * TIS IS WHAT IS DEBOUNCING
   * ))
   * - re-render the component
   * -useEffect()
   * -start timer => make api call after 200ms
   *
   * key - iph
   * - re-render the component
   * -useEffect()
   * -start timer => make api call after 200ms
   *
   * Every time its a new timer started
   * but when we do setTimeout, we need to clear that also
   */
  //make API call
  const getSearchSuggestions = async () => {
    console.log("API CAll - ", searchQuery);
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    console.log("json", json);
    console.log("json[0]", json[0]);
    setSuggestions(json[1]);
  };
  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="grid grid-flow-col flex items-center justify-between shadow shadow-2xl">
      <div className="flex items-center p-5 col-span-1">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-10 w-10 cursor-pointer"
          alt="menu"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1200px-Hamburger_icon.svg.png"
        />
        <img
          className="h-20 w-60 ml-20"
          alt="logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/2560px-Logo_of_YouTube_%282015-2017%29.svg.png"
        />
      </div>
      <div className="col-span-10 p-5">
        <div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
            className="border rounded-l-full border-r-0 border-black/40 px-4 py-2 rounded w-1/2"
          />
          <button className="px-4 py-2 bg-blue-600 text-white border border-black/40 rounded-r-full hover:bg-blue-700 transition cursor-pointer">
            Search
          </button>
        </div>
        {showSuggestions && (
          <div className="rounded-lg px-4 py-4 w-1/2 shadow-lg shadow-black fixed bg-white">
            <ul>
              {suggestions.map((suggestion) => (
                <li key={suggestion} className="p-2 hover:bg-gray-200 rounded">
                  🔍 {suggestion}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="col-span-1 p-5">
        <img
          className="h-10 w-10"
          alt="user"
          src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
        />
      </div>
    </div>
  );
};

export default Head;
