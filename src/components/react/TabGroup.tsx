import React, { FC, useState } from 'react';
import { services } from './services';

export const TabGroup = () => {

    const [active, setActive] = useState(services[0]);

    return (
        <div className='w-full py-20 px-5 md:px-20 bg-cico-yellow' id="servicios">
           
            <div className='flex flex-col shadow-2xl bg-white'>
                <h3 className="text-center font-bold text-cico-blue text-4xl uppercase mt-10">Nuestros productos y servicios</h3>
                <div className='flex flex-row pt-5 px-5'>
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
                <div className='flex flex-col md:flex-row justify-around items-center py-20 px-10 border-t-2 border-cico-light-blue'>
                    <div className='w-full md:w-3/5'>
                        <ul className='list-disc list-inside opacity-60'>
                            { active.list.map((item) => (
                                <li key={ item }>{ item }</li>
                            )) }
                        </ul>
                    </div>
                    <div className='w-full md:w-2/5 py-10 md:py-0 md:px-5'>image</div>
                </div>
            </div>
        </div>
    )
}
