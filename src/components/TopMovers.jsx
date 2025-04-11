import React from 'react';

function TopMovers() {
    
  const movers = [
    {
      pair: 'PHB/BTC',
      time: '12:51:02',
      change: '-6.64%',
      status: 'New 24hr Low',
      isPositive: false,
    },
    {
      pair: 'CVX/USDT',
      time: '12:51:02',
      change: '+6.64%',
      status: 'New 24hr High',
      isPositive: false,
    },
    {
      pair: 'PHB/BTC',
      time: '12:5102',
      change: '-6.64%',
      status: 'New 7day Low',
      isPositive: false,
    },
    {
      pair: 'PHB/BTC',
      time: '12:51:02',
      change: '-6.64%',
      status: 'New 7day Low',
      isPositive: false,
    },
    {
      pair: 'PHB/BTC',
      time: '12:51:02',
      change: '-6.64%',
      status: 'New 7day Low',
      isPositive: false,
    },
    {
      pair: 'PHB/BTC',
      time: '12:51:02',
      change: '-6.64%',
      status: 'New 7day Low',
      isPositive: false,
    },
  ];

  return (
    <div className="bg-[#1a1a1a] mt-2 border-t border-[#333] rounded-lg p-4">
      <div className="flex justify-between items-center mb-4">
        <div className="">
  <h2 className="text-sm font-semibold text-white inline-block border-b-2 border-green-500 pb-1">
  Top Movers
  </h2>
</div>
        <div className="flex space-x-2 pb-1">
          <button className="text-sm text-green-400">All</button>
          <button className="text-sm text-gray-400">New High</button>
          <button className="text-sm text-gray-400">New Low</button>
        </div>
      </div>

      <div className="space-y-2">
        {movers.map((mover, index) => (
          <div key={index} className="flex justify-between items-center">
            <div className="flex flex-col">
              <span className="text-sm">{mover.pair}</span>
              <span className="text-xs text-gray-400">{mover.time}</span>
            </div>
            <div className="flex items-cente ">
                <div className='flex flex-col items-center justify-center'>
              <span
                className={`text-sm ${
                  mover.isPositive ? 'text-green-400' : 'text-red-400'
                } mr-2`}
              >
                {mover.change}
              </span>
              <span className="text-xs text-gray-400 mr-2">{mover.status}</span>
              </div>
              <div
                className={`w-6 h-4 rounded-sm flex items-center justify-center ${
                  mover.isPositive ? 'bg-green-800' : 'bg-red-800'
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-3 w-3 ${
                    mover.isPositive ? 'text-green-400' : 'text-red-400'
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d={mover.isPositive ? 'M5 15l7-7 7 7' : 'M19 9l-7 7-7-7'}
                  />
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TopMovers;