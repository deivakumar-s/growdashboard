import { useState } from 'react';
import { Star } from 'lucide-react';
import TopMovers from './TopMovers';

const TradePanel = () => {
  const [activeToken, setActiveToken] = useState('USDT');
  const [activeTab, setActiveTab] = useState('Market Trades');

  const tokens = ['USDT', 'FDUSD', 'USDC', 'TUSD', 'BNB', 'BTC'];

  const marketList = [
    { pair: '1000SATS / USDT', price: '0.0002742', change: '+7.18%', isPositive: true },
    { pair: '1000SATS / USDT', price: '0.0002742', change: '+7.18%', isPositive: true },
    { pair: '1000SATS / USDT', price: '0.0002742', change: '+7.18%', isPositive: false },
    { pair: '1000SATS / USDT', price: '0.0002742', change: '+7.18%', isPositive: true },
    { pair: '1000SATS / USDT', price: '0.0002742', change: '+7.18%', isPositive: false },
    { pair: '1000SATS / USDT', price: '0.0002742', change: '+7.18%', isPositive: true },
  ];

  const tradeList = [
    { price: '12,358.47', amount: '0.26548', time: '20:55:36', isPositive: true },
    { price: '12,358.47', amount: '0.26548', time: '20:55:36', isPositive: false },
    { price: '12,358.47', amount: '0.26548', time: '20:55:36', isPositive: true },
    { price: '12,358.47', amount: '0.26548', time: '20:55:36', isPositive: false },
    { price: '12,358.47', amount: '0.26548', time: '20:55:36', isPositive: true },
    { price: '12,358.47', amount: '0.26548', time: '20:55:36', isPositive: false },
    { price: '12,358.47', amount: '0.26548', time: '20:55:36', isPositive: true },
    { price: '12,358.47', amount: '0.26548', time: '20:55:36', isPositive: false },
    { price: '12,358.47', amount: '0.26548', time: '20:55:36', isPositive: true },
    { price: '12,358.47', amount: '0.26548', time: '20:55:36', isPositive: false },
    { price: '12,358.47', amount: '0.26548', time: '20:55:36', isPositive: true },
    { price: '12,358.47', amount: '0.26548', time: '20:55:36', isPositive: true },
    { price: '12,358.47', amount: '0.26548', time: '20:55:36', isPositive: true },
  ];

  return (
    <div className="bg-[#1a1a1a] text-white rounded-md text-sm border border-[#2a2a2a] p-2 h-full">
      {/* Search Bar */}
      <div className="mb-2">
        <input
          type="text"
          placeholder="Search"
          className="w-full bg-[#0d0d0d] text-white border border-[#333] px-3 py-1 rounded-md text-sm focus:outline-none"
        />
      </div>

      {/* Token Tabs */}
      <div className="flex border-b border-[#333] text-xs">
        {tokens.map((token) => (
          <div
            key={token}
            className={`px-3 py-2 cursor-pointer ${
              activeToken === token
                ? 'border-b-2 border-green-500 text-white'
                : 'text-gray-400'
            }`}
            onClick={() => setActiveToken(token)}
          >
            {token}
          </div>
        ))}
      </div>

      {/* Market List */}
      <div className="py-2 w-full">
  {/* Header Row */}
  <div className="grid grid-cols-3 text-xs  text-gray-400 px-2 mt-2 mb-1">
    <div className='text-left'>Change</div>
    <div className='text-right'>Price</div>
    <div className='text-right'>Change</div>
  </div>

  {/* Data Rows */}
  {marketList.map((item, index) => (
    <div key={index} className="grid grid-cols-3 items-center  text-xs py-1 hover:bg-[#262626] transition">
      {/* Pair Column */}
      <div className="flex items-center text-left justify-center text-xs whitespace-nowrap gap-1">
  <Star size={26} className="text-white fill-white" />
  <span className='text-xs'>{item.pair}</span>
</div>


      {/* Price Column */}
      <div className={`text-right ${item.isPositive ? 'text-green-500' : 'text-red-500'}`}>
        {item.price}
      </div>

      {/* Change Column */}
      <div className={`text-xs text-right ${item.isPositive ? 'text-green-500' : 'text-red-500'}`}>
        {item.change}
      </div>
    </div>
  ))}
</div>


      {/* Trades Tabs */}
      <div className="flex mt-2 border-t border-[#333]">
        {['Market Trades', 'My Trades'].map((tab) => (
          <div
            key={tab}
            className={`px-3 py-2 cursor-pointer text-xs ${
              activeTab === tab
                ? 'border-b-2 border-green-500 text-white'
                : 'text-gray-400'
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </div>
        ))}
      </div>

      {/* Trades Table */}
      <div className="text-xs text-gray-400 grid grid-cols-3 px-2 mt-2 mb-1">
        <div>Price (USDT)</div>
        <div className='text-right'>Amount (BTC)</div>
        <div className="text-right">Time</div>
      </div>
      {tradeList.map((trade, idx) => (
        <div
          key={idx}
          className={`grid grid-cols-3 px-2 py-1 ${
            trade.isPositive ? 'text-green-400' : 'text-red-400'
          } hover:bg-[#262626]`}
        >
          <div>{trade.price}</div>
          <div className='text-right'>{trade.amount}</div>
          <div className='text-right'>{trade.time}</div>
        </div>
      ))}
       <TopMovers/>
    </div>
  );
};

export default TradePanel;
