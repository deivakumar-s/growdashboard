import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import {
  Crosshair, Spline, WrapText, Brush, AlignEndHorizontal,
  ListCollapse, Type, Magnet, Slice, ZoomIn, PencilRuler,
  ChartNoAxesCombined, ChartColumnBig, ChartCandlestick,
  ChevronDown, LockKeyholeOpen, Eye, Camera, Settings, CirclePlus
} from "lucide-react";

const TradingChart = () => {
    const categories = [
        '07.00', '07.05', '07.10', '07.15', '07.20', '07.25',
        '07.30', '07.35', '07.40', '07.45', '07.50', '07.55'

        
      ];
    
      const sampleData = categories.map((time, index) => ({
        x: time,
        y: [
          0.00100 + Math.random() * 0.0001,  
          0.00105 + Math.random() * 0.0001,  
          0.00095 + Math.random() * 0.0001,  
          0.00100 + Math.random() * 0.0001,  
        ],
      }));
    
      const options = {
        chart: {
          type: 'candlestick',
          height: 400,
          background: '#0f0f0f',
          toolbar: { show: false },
        },
        xaxis: {
          type: 'category',
          categories: categories,
          labels: {
            style: { colors: '#fff' },
            rotate: -45,
          },
        },
        yaxis: {
          opposite: true,
          labels: {
            style: {
              colors: '#fff',
              fontSize: '12px',
            },
          },
          tooltip: { enabled: true },
        },
        theme: { mode: 'dark' },
        tooltip: {
          enabled: true,
        },
        responsive: [
          {
            breakpoint: 768, // Tablet and below
            options: {
              yaxis: {
                show: false, // 👈 Completely hide Y-axis on small screens
              },
            },
          },
        ],
      };
      
      


  return (
    <div className="flex   text-white">
      {/* Sidebar */}
      <div className="w-12 mt-2 lg:mt-10 flex flex-col items-center py-3 space-y-3 shadow-lg text-gray-400 ">
        {[Crosshair, Spline, WrapText, Brush, AlignEndHorizontal, ListCollapse, Type, Magnet, Slice, ZoomIn, PencilRuler, LockKeyholeOpen, Eye].map((Icon, idx) => (
          <Icon key={idx} size={18} className="hover:text-white cursor-pointer" />
        ))}
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Navbar */}
        <div className="w-full  h-10 flex items-center  lg:px-4 shadow-sm text-gray-300 text-xs">
          <ul className="flex items-center text-xs lg:text-sm gap-1 lg:gap-3 ">
            <li className="font-semibold text-white">BTC/USDT</li>
            <li className="hover:text-white cursor-pointer">1m</li>
            <li className="hover:text-white cursor-pointer">30m</li>
            <li className="flex items-center gap-1 hover:text-white cursor-pointer">
              <span>1h</span>
              <ChevronDown size={14} className="mt-[2px]" />
            </li>
            <li className="hover:text-white cursor-pointer"><ChartCandlestick size={16} /></li>
            <li className="hover:text-white cursor-pointer"><ChartNoAxesCombined size={16} /></li>
            <li className="hover:text-white cursor-pointer"><ChartColumnBig size={16} /></li>
            <li className="hover:text-white cursor-pointer">fx</li>
            <li className="hover:text-white cursor-pointer">Indicators</li>
            <li className="hover:text-white cursor-pointer"><CirclePlus size={16} /></li>
            <li className="hover:text-white cursor-pointer">Compare</li>
          </ul>

          {/* Right-aligned icons */}
          <ul className="flex items-center gap-3 ml-auto">
            <li className="hover:text-white cursor-pointer"><Camera size={16} /></li>
            <li className="hover:text-white cursor-pointer"><Settings size={16} /></li>
          </ul>
        </div>

        {/* Chart Area */}
        <div className="flex-1">
          <div className="bg-[#0f0f0f] lg:p-4 rounded-xl shadow-lg">
            {/* Controls */}
          

            {/* Chart */}
            <ReactApexChart
        options={options}
        series={[{ data: sampleData }]}
        type="candlestick"
        height={300}
      />
      {/* Time Range Buttons */}
<div className="flex justify-start gap-2 mt-2">
  {['1D', '5D', '1M', '3M', '6M', 'YTD', '1Y', '5Y', 'ALL'].map((range) => (
    <button
      key={range}
      className="text-xs text-white  px-3 py-1 "
    >
      {range}
    </button>
  ))}
</div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default TradingChart;
