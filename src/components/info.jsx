import React from "react";
import { Star, ChevronRight } from "lucide-react";

const InfoDetails = () => {
  return (
    <div className="w-full bg-[#111] px-4 py-2 border-b border-gray-800 text-white flex justify-center ">
      <div className="w-full max-w-[1200px] flex flex-wrap items-center gap-6 md:gap-10">
        <div className="flex items-start gap-4 flex-wrap">
          <Star size={16} className="text-white fill-white mt-1" />

          <div className="flex flex-col">
            <span className="text-md font-bold">BTC/USDT</span>
            <div className="flex items-center gap-2 mt-1 text-[11px] text-green-500">
              <span>POW</span>
              <div className="hidden lg:block w-px h-4 bg-gray-600"></div>
              <span className="flex items-center gap-1">
                VOL <ChevronRight size={10} />
              </span>
            </div>
          </div>

          <div className="flex flex-col leading-tight">
            <span className="text-xl text-red-500 font-semibold">67,012.00</span>
            <span className="text-sm text-gray-400">$67,012</span>
          </div>
        </div>

        <div className="w-full h-px bg-gray-700 md:hidden"></div>
        <div className="hidden md:block w-px h-8 bg-gray-700"></div>

        <div className="flex flex-wrap gap-6 text-xs text-gray-400">
          <div className="flex flex-col">
            <span>24h Change</span>
            <span className="text-red-500">-334.02 -0.50%</span>
          </div>
          <div className="flex flex-col">
            <span>24h High</span>
            <span className="text-white">65,777.00</span>
          </div>
          <div className="flex flex-col">
            <span>24h Low</span>
            <span className="text-white">68,474.55</span>
          </div>
          <div className="flex flex-col">
            <span>24h Volume (BTC)</span>
            <span className="text-white">27,306.67</span>
          </div>
          <div className="flex flex-col">
            <span>24h Volume (USDT)</span>
            <span className="text-white">1,839,020,199.75</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoDetails;
