import React from 'react'
import { watchModels } from '../data/index'
const Watch = () => {
  return (
    <div className="flex flex-col items-center justify-around bg-white h-full py-8 px-4">
      <h1 className="2xl:text-4xl xl:text-3xl md:text-2xl font-semibold text-gray-800 mb-8">
        Choose your new watch.
      </h1>
      <div className="w-full flex justify-around flex-wrap">
        {watchModels.map((watch, index) => (
          <div key={index} className={`flex flex-col items-center justify-between gap-y-2 ${index === 2 ? 'hidden md:flex' : ''}`}>
            <div className="w-full h-64 mb-4 overflow-hidden relative">
              <img
                loading="lazy"
                src={watch.imgs[0]}
                alt={watch.name}
                className="absolute w-full h-full object-contain opacity-100 group-hover:opacity-0 transition duration-300"
              />
              <img
                loading="lazy"
                src={watch.imgs[1]}
                alt={watch.name}
                className="absolute w-full h-full object-contain opacity-0 group-hover:opacity-100 transition duration-300"
              />
            </div>
            <h3 className="2xl:text-xl xl:text-lg text-sm font-semibold">
              {watch.name}
            </h3>
            <a href="#" className="my-2 text-base text-blue-400">
              {watch.price}
            </a>
            <div className="md:text-sm text-xs text-gray-700 my-2">
        {
          watch.desc.map((desc , index)=>(
            <span key={index}  className="block">{desc}</span>
          ))
        }
              
            </div>
            <button className="text-sm w-min mt-4 py-1 px-2 bg-blue-400 text-white rounded-full">
              SHOP
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Watch