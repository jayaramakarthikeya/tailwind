import React from 'react';

export default function DestinationCard({ destination,city }) {
    return (
        <div key={city} className="flex items-center rounded-md shadow-xl bg-white overflow-hidden">
                <img className="h-full w-32 rounded-l-md flex-shrink-0" src={destination.imageUrl} alt={destination.city} />
                <div className="px-6 py-4">
                    <h3 className=" text-xl font-bold text-gray-900">{destination.city}</h3>
                    <p className=" text-gray-600 text-sm">${destination.averagePrice} / night average</p>
                    <div className="mt-8">
                        <a href="#" className="text-indigo-600 font-semibold text-sm"> Explore {destination.propertyCount} properties</a>
                    </div>
                </div>
            </div>
    );
}