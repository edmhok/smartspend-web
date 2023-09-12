'use client'

import React, { useEffect, useState } from 'react';
import Link from 'next/link';


const CardPoints = () => {

    const data = [
        {
            points: 100
        },
        {
            points: 200
        },
        {
            points: 300
        },
        {
            points: 400
        },
        {
            points: 500
        },
        {
            points: 600
        },
        {
            points: 700
        },
        {
            points: 800
        },
        {
            points: 900
        },
        {
            points: 1000
        },
    ];
    return (
        <>
            <div className="my-4 lg:my-3 flex flex-col">
                <h2 className="mx-auto mt-4 py-8 text-2xl md:text-3xl">
                    Buy Points
                </h2>
                <div className="flex flex-wrap lg:grid  gap-4 grid-rows-12 grid-cols-2 md:grid-cols-9 max-w-[1700px] mx-auto">
                    {data.map((item, index) => (
                        <Link
                        key={index} 
                            className=" bg-[#ffad1e] drop-shadow-lg hover:scale-95 transition-transform duration-300 rounded-md"
                            href={`/merchant/order/points/checkout?points=${item.points}`}
                            prefetch={false}
                        >
                            <div className='flex justify-center items-center md:row-span-6 md:col-span-3 rounded-md shadow-lg px-4 py-2'>
                                <div className='p-[10px] text-lg font-bold text-[#218c20] flex flex-col'>
                                    {item.points}
                                    <div className='text-[#50b94e]'>Points</div>

                                    <div className='text-rose-500'>Click to Buy</div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

            </div>

        </>
    )
}



export default CardPoints;