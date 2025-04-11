import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import InfoDetails from './components/info'
import OrderBook from './components/orderbook';
import TradePanel from './components/TradePanel';
import TradingChart from './components/TradingChart';
import TradingForm from './components/buysell';
import OrderHistoryTable from './components/table';

const App = () => {
  return (
    <div className="bg-[#0d0d0d] text-white min-h-screen font-sans">
      <Header />

      <div className="px-2 md:px-4 lg:px-6">
        <InfoDetails />

        <div className="flex flex-col lg:flex-row gap-4 mt-4">
          {/* Left Side: Order Book */}
          <div className="lg:w-1/4 w-full">
            <OrderBook />
          </div>

          <div className="lg:w-2/4 w-full bg-[#0f0f0f] ] p-2 flex flex-col gap-2">
            <div className="lg:h-1/2 rounded-lg shadow-md border border-[#2a2a2a] ">
              <TradingChart />
            </div>
            <div className="lg:h-1/2 bg-[#1F1F1F] rounded-lg shadow-md border border-[#2a2a2a]">
              <TradingForm />
            </div>
          </div>
   
          {/* Right Side: Trades + Movers */}
          <div className="lg:w-1/4 w-full flex flex-col gap-4">
            {/* <MarketTrades />
            <TopMovers /> */}
                   <TradePanel />
          </div>
        </div>
      </div>
      <OrderHistoryTable/>
    </div>
  );
};

export default App;
