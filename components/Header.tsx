import Link from "next/link";
import React, { Component } from "react";

export class Header extends Component {
  render() {
    return (
      <header>
        <div className="flex items-center space-x-5">
          <Link href="/post">
            <svg
              preserveAspectRatio="none"
              width="50"
              height="50"
              viewBox="0 0 1600 542"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <defs>
                <path
                  d="M.616 58.54c195.789-182.952 372.846 129.67 848.318 39.192C1365.091-.49 1320.108 455.412 1600 529.887v11.99H.164C-.383 449.98.616 76.033.616 58.54z"
                  id="a"
                />
              </defs>
              <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <mask id="b" fill="#fff">
                  <use xlinkHref="#a" />
                </mask>
                <use fill="#E2271E" xlinkHref="#a" />
                <path
                  d="M1 52.308c100 105.72 261 159.588 483 161.605 333 3.024 592-102.84 733.5 19.876 94.333 81.81 222.167 104.712 383.5 68.704V-3H0"
                  fill-opacity=".3"
                  fill="#FFF"
                  mask="url(#b)"
                />
                <path
                  d="M0 128.446c133-.911 230.5-25.069 292.5-72.471 93-71.105 395 160.44 475.5 166.821S884 86.057 1024.5 78.31C1165 70.56 1307 520 1600 530.005V-1H-1l1 129.446z"
                  fill-opacity=".3"
                  fill="#FFF"
                  mask="url(#b)"
                />
              </g>
            </svg>
          </Link>
          <div className="hidden md:inline-flex items-center space-x-5">
            <h3 className="text-white px-4 py-1">About</h3>
            <h3 className="text-white px-4 py-1">Contact</h3>
            <h3 className="text-white bg-green-600 px-4 py-1 rounded-full">
              Follow
            </h3>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
