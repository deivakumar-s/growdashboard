import React from "react";
import {MoveDown} from 'lucide-react';
import { LayoutDashboard, PanelsRightBottom, PanelsLeftBottom } from 'lucide-react';
const sellOrders = Array(15).fill({
  price: "66487.47",
  amount: "0.25648",
  total: "0.25648",
});

const buyOrders = Array(15).fill({
  price: "66487.47",
  amount: "0.25648",
  total: "0.25648",
});

const OrderBook = () => {
  return (
    <div className="bg-[#0b0b0b] text-white rounded-lg p-3 w-full max-w-[300px] h-full border border-[#1f1f1f] overflow-hidden">
           {/* Title and View Icons */}
      <div className="flex flex-col mb-2">
      <div className="mb-3">
  <h2 className="text-sm font-semibold text-white inline-block border-b-2 border-green-500 pb-1">
    Order Book
  </h2>
</div>

      <div className="flex items-center gap-1 text-gray-400 text-[10px]">
          <LayoutDashboard className="w-4 h-4"/> 
          <PanelsRightBottom className="w-4 h-4"/>
          <PanelsLeftBottom className="w-4 h-4"/>
        
        </div>
      </div>

      {/* Header */}
      <div className="flex justify-between text-[11px] text-gray-400 border-b border-gray-700 pb-1">
        <span>Price (USDT)</span>
        <span>Amount (BTC)</span>
        <span>Total</span>
      </div>

      <div className="h-full scroll-smooth mt-1 flex flex-col gap-0.5">
        {/* Sell Orders */}
        {sellOrders.map((item, index) => (
          <div key={`sell-${index}`} className="flex justify-between text-xs text-red-500 py-1.5">
            <span>{item.price}</span>
            <span className="text-white">{item.amount}</span>
            <span className="text-white">{item.total}</span>
          </div>
        ))}

        {/* Center Price */}
        <div className="flex items-center justify=start gap-2 mt-2">
          <p className="text-red-500 text-base font-bold">67,012.00</p>
          <p className="text-red-500"><MoveDown size={12}/></p>
          <p className="text-gray-400 text-xs">$67,580</p>
        </div>

        {/* Buy Orders */}
        {buyOrders.map((item, index) => (
          <div key={`buy-${index}`} className="flex justify-between text-xs text-green-500 py-1.5">
            <span>{item.price}</span>
            <span className="text-white">{item.amount}</span>
            <span className="text-white">{item.total}</span>
          </div>
        ))}
      </div>

    
    </div>
  );
};

export default OrderBook;
