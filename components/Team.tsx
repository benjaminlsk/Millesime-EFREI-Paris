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
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-y-20 gap-x-8 px-6 lg:px-8 xl:grid-cols-3">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Meet our leadership</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Libero fames augue nisl porttitor nisi, quis. Id ac elit odio vitae elementum enim vitae ullamcorper
              suspendisse.
            </p>
          </div>
        </div>
        <div className="mx-10 my-10 bg-grey-200 w-full gap-y-20 gap-x-8 px-6 lg:px-8 ">
            <ul role="list" className="grid gap-x-8 gap-y-20 sm:grid-cols-5 sm:gap-y-16 xl:col-span-2 flex-row">
            {people.map((person) => (
            <>
                <li key={person.name}>
                <div className=" grid items-center text-center gap-x-6" >
                    <div className="border border-pink-800 rounded border-2">
                      <img className="h-45 w-45 rounded " src={person.imageUrl} alt="" /> 
                    </div>
                    <div className= "bg-pink-800 rounded ">                 
                      <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
                      <div
                        className=" text-xs text-center inline-flex items-center font-bold  uppercase px-3 py-1 bg-red-200 text-white rounded-full"
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
  