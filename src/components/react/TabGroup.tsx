import React, { FC, useState } from 'react';
import { services } from './services';

export const TabGroup = () => {

    const [active, setActive] = useState(services[0]);

    return (
        <div className='w-full py-20 px-5 md:px-20 bg-cico-yellow' id="servicios">
           
            <div className='flex flex-col shadow-2xl bg-white'>
                <h3 className="text-center font-bold text-cico-blue text-4xl uppercase mt-10">Nuestros productos y servicios</h3>
                <div className='flex flex-col md:flex-row py-5'>
                    <div className='flex w-full md:w-2/6 flex-row md:flex-col pt-5 px-5 overflow-x-auto'>
                        {services.map((service) => (
                            <div 
                                key={ service.id.toString() }
                                className={`py-5 px-5 cursor-pointer ${ active.id === service.id ? 'opacity-100 border-b-4 border-cico-orange text-cico-orange font-semibold' : 'opacity-60 text-black'}`}
                                onClick={() => setActive(service)}
                            >{
                                service.title
                            }</div>
                        ))}
                    </div>
                    <div className='w-full md:w-4/6 flex flex-col md:flex-row justify-center items-start py-20 px-10 border-t-2 border-cico-light-blue md:border-t-0 md:border-l-2'>
                        <div className='w-full md:w-3/5'>
                            <ul className='list-disc list-inside opacity-60'>
                                { active.list.map((item) => (
                                    <li key={ item }>{ item }</li>
                                )) }
                            </ul>
                        </div>
                        <div className='w-full md:w-2/5 py-10 md:py-0 md:px-5'>
                            <div className="w-full aspect-square ">
                                <img className=" w-full h-full object-center object-cover pointer-events-none rounded-xl" src={ active.image } alt={ active.title } />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
