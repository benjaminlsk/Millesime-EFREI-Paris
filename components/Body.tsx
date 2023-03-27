import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'
import { useState } from 'react';

export default function Body() {

    const [active, setActive] = useState(false);

    const handleMouseOver = () => {
        setActive(true);
      };
    
    const handleMouseOut = () => {
    setActive(false);
    };

  return (
    <div className="relative isolate overflow-hidden px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0 bg-gray-100">
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-y-16 gap-x-8 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl" id="A-Propos"> A Propos</h1>
              <p className="mt-6 text-xl leading-8 text-gray-700">
                Nous te souhaitons la bienvenue dans l'association Millésime.
              </p>
            </div>
          </div>
        </div>
        <div className="-mt-12 -ml-12 p-2 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img
            className="max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
            src="../vin.png"
            alt=""
          />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
              <p>
                Ici, tu auras l'occasion de déguster de nombreux vins, fromages et charcuteries du terroir venant de notre caviste préféré <Link href="https://www.instagram.com/keskongout/?hl=fr"><strong>@Keskongout</strong>.</Link> <br /> 
                Millésime c'est avant tout: 
              </p>
              <ul role="list" className="mt-8 space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                  <CloudArrowUpIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-gray-900">De bons moments entre amis !</strong> De nombreuses franquettes sont organisées tout au long de l'année afin de partager un moment chaleureux et convivial autour d'un bon verre.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <LockClosedIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-gray-900">Apprendre plus sur le vin. </strong> Au cours des franquettes et des dégustations que l'on organise, tu feras découvrir de nouvelles saveurs à ton palais afin ta curiosité gustative.
                  </span>
                </li>
              </ul>
              <p className="mt-8">
                Si toi aussi, tu es intéressé par l'oenologie et que tu veux passer de bons moments, n'hésite plus et rejoint Millésime! <br />
            <div className='flex justify-center pt-3'>
                <Link href="https://discord.gg/AzMkFVF5dj">
                    <p onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} className={active ? "underline text-indigo-500" : "font-bold"}>  Rejoint nous ici! </p> 
                </Link>
            </div>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
