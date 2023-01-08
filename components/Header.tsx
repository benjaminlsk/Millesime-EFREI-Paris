import Link from "next/link";
import React, { Component } from "react";

export class Header extends Component {
  render() {
    return (
      <header>
        <div>
          <Link href="/post">
            <img
              className="w-44 object-contain cursor-pointer"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMcAAACVCAMAAADbnR4IAAAAbFBMVEX/////AAD/4OD/8/P/MzP/7Oz/1NT/JCT/PT3/MDD/KSn/2dn/5eX/zs7/ycn/LCz/amr/+fn/xMT/tLT/OTn/Ghr/rKz/u7v/kZH/ERH/cXH/TU3/pqb/R0f/goL/WVn/m5v/e3v/iIj/YmKuWyCNAAACYklEQVR4nO3aa2+CMBiG4dLSqpwP6hBUFP//f5yFbZlZVqo2eev2XN+W8KH3CNDWMgYAAAAAAAAAAAAAAAAAAAAAAADeKIVMOI+VStMsq0ZZmioVc55IUVIPzyxJ69Ox6JbL5ToMV3keLbTNF/1XlOerMFxfr+ku52ZbcepB3yrVEAaP2bWZoB7+p+T8YMTkklIHTOTqqYwg2LxRJ2jlkxWaD3fk7KCjk9QVLI0cdAQ1dQY7ucgICuqXliicdOwS4o7k2ZfVB0Xcwd1kkD8gmaOOgbhj66ijJ+5oHHUsiDuMr6sitw8h7uhMY5Pq/Codxq85v87oF6/RYRzbuEza2y1NiGdY8x1MDhuLDuKlodXY0st8B/EH3fJ/nO3mOjLCCGbdcZ0XL80dFVmCJqw7GB+M19Kube/oYEwdDNfSThTlPR2M1d2vz8mWYvhf7uxg6a8zlZfq2B88vR/3PB9lZfqy0z4f5s2rmw7VGq8l3ouz7RDNzP4Q7ffDtqM2RwSv8T2vjKuUif/zK36cr/B/vls2disp4vWHcQXOmaisIgLy9aB5fV7Z75oSdxg/Cr3t4py+w9X+VU7cMf9hsEO9n6gcdVDv7/6V/Xa5dtMRE3cI8yzW1ob69yi2d9LRUv8+yNSjJzJueHASwLydY6cjvx1uzjNQP+WjcmancNaC+sfaD7KZ3b01ab24G6N43z8YcWiUB8/GdyXP6tPQ9gd9Im46EpdH0XQqTh+Fi/LpMNxaH4fri+NpW8WeJfxUCiH1GUV9SHEUj2cTpfD9dCIAAAAAAAAAAAAAAAAAAAAAAMB/8w4ekx8igXUoZAAAAABJRU5ErkJggg=="
              alt="logo-millésime"
            />
          </Link>
        </div>
      </header>
    );
  }
}

export default Header;
