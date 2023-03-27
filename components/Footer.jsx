
import React from 'react'
export default function Footer(){
    return (
        <div className="bg-gray-100">
            <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
                <nav className="-mx-5 -my-2 flex flex-wrap justify-between" aria-label="Footer">
                    <div className="px-5 py-2">
                        <a href="#A-Propos" className="text-base text-gray-600 hover:text-gray-900">
                            A propos
                        </a>
                    </div>

                    <div className="px-5 py-2">
                        <p className="text-base text-gray-600 hover:text-gray-900 pb-1 pl-6">
                            Réseaux sociaux
                        </p>
                        <div className='flex flex-row'>
                          <a href="https://www.facebook.com/efreiMillesime/?locale=fr_FR">
                            <img className="mx-2 w-10 h-10" src="https://www.freepnglogos.com/uploads/logo-facebook-png/logo-facebook-facebook-logo-transparent-png-pictures-icons-and-0.png" alt="" />
                          </a>
                          <a href="https://www.instagram.com/millesimeefrei/">
                            <img className="mx-2 w-10 h-10" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png" alt="" />
                          </a>
                          <a href="https://www.linkedin.com/company/millesimeefrei/about/">
                            <img className="mx-2 w-10 h-10" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/240px-LinkedIn_icon.svg.png" alt="" />
                          </a>
                        </div>
                    </div>
                </nav>
                <p className="mt-8 text-center text-base text-gray-400">
                    &copy; 2023 Millésime EFREI Paris, All rights reserved.
                </p>
            </div>
        </div>
    )
}

