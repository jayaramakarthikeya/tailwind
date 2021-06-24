import React from 'react';

import popularDestinations from './data/popularDestination';
import DestinationCard from './components/destinationCard';

export default function App(){
    return(
        <div className="bg-gray-100 absolute">
        <nav className="flex justify-between px-10 md:px-20 py-6 bg-gray-100 items-center shadow-lg fixed inset-x-0">
        <div className="flex-shrink-0">
        <img className="h-8 md:h-10" src="/img/logo.svg" alt="Workcation"/>
        </div>  
            <div className="md:flex items-center self-end space-x-2 hidden">
            <a href="#" className=" font-light text-lg uppercase px-4 border-b-4 border-gray-100 hover:border-indigo-400 transform transition">Home</a>
            <a href="#" className=" font-light text-lg uppercase px-4 border-b-4 border-gray-100 hover:border-indigo-400 transform transition">About</a>
            <a href="#" className=" font-light text-lg uppercase px-4 border-b-4 border-gray-100 hover:border-indigo-400 transform transition">Contact</a>
            </div>
            <div className="flex cursor-pointer md:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
            </div>
            </nav>
            <div className="lg:grid lg:grid-cols-2 2xl:grid-cols-5">
            <div className="px-9 py-12 max-w-lg mx-auto sm:max-w-2xl lg:px-12 lg:py-24 lg:max-w-full xl:mr-0 2xl:col-span-2">
                <div className=" xl:max-w-xl">
                <img className=" mt-6 rounded-lg shadow-xl sm:mt-8 sm:h-55 sm:w-full sm:object-cover object-center
                lg:hidden" src="/img/beach-work.jpg" alt="Woman working"/>
                <h1 className="sm:mt-8 mt-6 text-3xl font-bold sm:text-4xl lg:text-3xl xl:text-4xl leading-relaxed font-headline tracking-tight">You can work from anywhere.
                    <br className=""/>
                    <span className="text-indigo-600 font-semibold">Take advantage of it. </span> 
                </h1>
                <p className=" mt-3 text-gray-500 font-semibold sm:mt-6 sm:text-xl">
                    Workcation helps you find work-friendly rentals in beautiful locations so you can enjoy some
                nice weather even when you're not on vacation.
                </p>
                <div className=" mt-6 sm:mt-8">
                    <a className="inline-block px-6 py-3 rounded-xl shadow-lg bg-indigo-600 hover:bg-indigo-400 hover:-translate-y-0.5
                    focus:outline-none focus:ring focus:ring-offset-2 focus:ring-indigo-500 focus:ring-opacity-50 active:bg-indigo-600
                    transform transition text-white uppercase tracking-wider font-semibold" href="#">Book your escape</a>
                </div>
                </div>
            </div>
            <div className="hidden relative lg:inline-block lg:px-12 lg:py-20 2xl:col-span-3">
                <img className="shadow-xl rounded-lg inset-0" src="/img/beach-work.jpg" alt="Woman working"/>
            </div>
        </div>
        <div className="bg-gray-300">
        <div className="mx-auto max-w-xl lg:max-w-4xl xl:max-w-6xl px-5 py-10">
            <h2 className="text-2xl text-gray-900 font-semibold">Popular Destinations</h2>
            <p className="mt-3 font-semibold text-base text-gray-600">A selection of great work-friendly cities with lots to see and explore.</p>
            <div className="mt-6 grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
            {popularDestinations.map((destination) =>(
                <DestinationCard destination={destination} key={destination.city} />
            ))
            }
            </div>
        </div>
        </div>
        </div>
    );
}