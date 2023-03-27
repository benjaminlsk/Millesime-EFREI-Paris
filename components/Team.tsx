import React from "react";
import {
Box,
Container,
Row,
Column,
FooterLink,
Heading,
} from "../styles/FooterStyles";

const people = [
    {
      name: 'Arthur Lin',
      role: 'Président',
      imageUrl:
        'https://cdn.discordapp.com/attachments/1011316328541470761/1011317143939334284/bureau7.png',
    },
    {
        name: 'Mathilde Paysant',
        role: 'Secrétaire',
        imageUrl:
          'https://cdn.discordapp.com/attachments/1011316328541470761/1011317054520967218/bureau6.png',
      },
      {
        name: 'Hugo Ravailhe',  
        role: 'Trésorier',
        imageUrl:
          'https://cdn.discordapp.com/attachments/1011316328541470761/1011317054927798402/bureau5.png',
      },
      {
        name: 'Jacques Klein',
        role: 'Responsable Partenariats',
        imageUrl:
          'https://cdn.discordapp.com/attachments/1011316328541470761/1011316543268855959/bureau1.png',
      },
      {
        name: 'Emmie Kieffer',
        role: 'Responsable Communication',
        imageUrl:
          'https://cdn.discordapp.com/attachments/1011316328541470761/1011316542899761293/bureau2.png',
      },
      {
        name: 'Sebastien Wernert',
        role: 'Responsable Evennements',
        imageUrl:
          'https://cdn.discordapp.com/attachments/1011316328541470761/1011316541851185222/bureau4.png',
      },
      {
        name: 'Benjamin Liszewski',
        role: 'Responsable Technique',
        imageUrl:
          'https://cdn.discordapp.com/attachments/1011316328541470761/1011316542262222848/bureau3.png',
      },
    // More people...
  ]
  
  export default function Team() {
    return (
      <div className="py-24 sm:py-32 bg-gray-50">
        <div className="mx-10 grid max-w-7xl gap-y-20 gap-x-8 px-6 lg:px-8 xl:grid-cols-3">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Notre équipe</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Voici l'équipe à la tête de l'asso!
            </p>
          </div>
        </div>
        <div className="mx-10 my-10 w-1280 px-5 gap-y-20 gap-x-8 lg:px-8 ">
            <ul role="list" className="grid gap-x-8 gap-y-15 w-58 h-58 items-center mx-2 sm:grid-cols-3 sm:gap-y-8 xl:col-span-2 flex-row">
            {people.map((person) => (
            <>
                <li key={person.name}>
                <div className="grid items-center text-center bg-white rounded shadow-xl" >
                      <div className="flex justify-center"> 
                      <img className="h-56 w-56 rounded" src={person.imageUrl} alt="" /> 
                      </div>
                    <div className= "rounded ">                 
                      <h3 className="text-base font-semibold pb-1 leading-7 tracking-tight text-gray-900 text-bold">{person.name}</h3>
                      <div
                        className="text-xs text-center inline-flex items-center font-bold uppercase px-3 py-2 mb-2 bg-red-400 text-white rounded-full"
                      >
                        {person.role}
                      </div>
                    </div>
                </div>
                </li>
            </>
            ))}
            </ul>
          </div>
      </div>
    )
  }
  