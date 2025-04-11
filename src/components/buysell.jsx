import React from 'react';
import ProgressBar from './ProgressBar';
import {ChevronDown} from 'lucide-react'

const TradingForm = () => {
  return (
    <>
     <div className=" text-sm">
    <ul className="flex space-x-4 mb-4 text-white text-sm font-medium ml-2 mt-1">
    <li className="text-green-500">Limit</li>
    <li className="">Market</li>
    <li className="flex justify-center items-center gap-2 ">Stop-Limit<ChevronDown size={14} className="" /></li>
  </ul>
    <div className="flex flex-col md:flex-row justify-center items-start gap-2 ">
     
      <div className=" rounded-md p-3 w-full md:w-1/2 text-sm space-y-4">
        <h2 className="text-white font-medium">Avbl - 0.000000 USDT</h2>

        <div className="mb-2">
  <div className="w-full bg-gray-700 text-white rounded p-1.5 text-sm flex justify-between items-center">
    <span className="text-gray-400">Price</span>
    <span>66871.99 USDT</span>
  </div>
</div>


<div className="mb-2">
<div className="w-full bg-gray-700 text-white rounded p-1.5 text-sm flex justify-between items-center">
<span className="text-gray-400">Amount</span>
<span>0.001 BTC</span>
        </div>
        </div>

        <ProgressBar/>

        <div className="mb-2">
<div className="w-full bg-gray-700 text-white rounded p-1.5 text-sm flex justify-between items-center">
<span className="text-gray-400">Total</span>
<span>0</span>
        </div>
        </div>

        <div className="mb-2">
<div className="w-full bg-gray-700 text-white rounded p-1.5 text-sm flex justify-between items-center">
<span className="text-gray-400">Avbl</span>
<span>0.00000000 USDT</span>
        </div>
        </div> 
        <div className="mb-2">
<div className="w-full bg-gray-700 text-white rounded p-1.5 text-sm flex justify-between items-center">
<span className="text-gray-400">Max Buy</span>
<span>0.00000000 BTC</span>
        </div>
        </div> 

        <button className="w-full bg-teal-500 text-white rounded p-1.5 text-sm">Buy</button>
      </div>

    
      <div className="rounded-md p-3 w-full md:w-1/2 text-sm space-y-4">
        <h2 className="text-white font-medium">Avbl - 0.000000 USDT</h2>

        <div className="mb-2">
  <div className="w-full bg-gray-700 text-white rounded p-1.5 text-sm flex justify-between items-center">
    <span className="text-gray-400">Price</span>
    <span>66871.99 USDT</span>
  </div>
</div>


<div className="mb-2">
<div className="w-full bg-gray-700 text-white rounded p-1.5 text-sm flex justify-between items-center">
<span className="text-gray-400">Amount</span>
<span>0.001 BTC</span>
        </div>
        </div>

        <ProgressBar/>

     
        <div className="mb-2">
<div className="w-full bg-gray-700 text-white rounded p-1.5 text-sm flex justify-between items-center">
<span className="text-gray-400">Total</span>
<span>0</span>
        </div>
        </div>
        <div className="mb-2">
<div className="w-full bg-gray-700 text-white rounded p-1.5 text-sm flex justify-between items-center">
<span className="text-gray-400">Avbl</span>
<span>0.00000000 USDT</span>
        </div>
        </div> 
        <div className="mb-2">
<div className="w-full bg-gray-700 text-white rounded p-1.5 text-sm flex justify-between items-center">
<span className="text-gray-400">Max Buy</span>
<span>0.00000000 BTC</span>
        </div>
        </div> 

        <button className="w-full bg-rose-500 text-white rounded p-1.5 text-sm">Sell</button>
      </div>
    </div>
    </div>
    </>
  );
};

export default TradingForm;
