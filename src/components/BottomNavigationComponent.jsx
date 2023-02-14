import React from "react";
import { Link } from "react-router-dom";

import { AiFillStar } from "react-icons/ai";

function BottomNavigationComponent() {
  const [active, setActive] = React.useState("home");

  return (
    <div className="btm-nav bg-[#1B1D1F] border-t-2 border-gray-400">
      
      <Link to="/" onClick={(e) => setActive("home")}>
        {active === "home" ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#FACC14"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
          )
        }
      </Link>

      <Link to="favoris" onClick={(e) => setActive("favoris")}>
        {active === "favoris" ? (
          <AiFillStar className="text-yellow-400 text-3xl mx-2" />
        ) : (
          <AiFillStar className="text-gray-400 text-3xl mx-2" />
        )}
      </Link>

    </div>
  );
}

export default BottomNavigationComponent;
