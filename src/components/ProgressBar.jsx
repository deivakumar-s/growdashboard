import React from 'react';

function CompactProgressBar() {
  return (
    <div className="p-2 px-3 py-2 rounded-lg flex items-center relative"> 

      <div className="flex flex-col items-center relative z-10">
        <div className="w-2 h-2 rounded-sm border border-teal-400 bg-teal-400 transform rotate-45"></div>
        <span className="text-teal-400 text-xs mt-1">0%</span> 
      </div>

      <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-full h-0.5 bg-gray-600 z-0"></div> 

      <div className="flex flex-col items-center relative z-10 ml-2 md:ml-4 lg:ml-6"> 
        <div className="w-2 h-2 rounded-sm border border-gray-600 transform rotate-45"></div> 
        <span className="text-teal-400 text-xs mt-1">25%</span> 
      </div>

      <div className="flex flex-col items-center relative z-10 ml-2 md:ml-4 lg:ml-6">
        <div className="w-2 h-2 rounded-sm border border-gray-600 transform rotate-45"></div>
        <span className="text-teal-400 text-xs mt-1">50%</span>
      </div>

      <div className="flex flex-col items-center relative z-10 ml-2 md:ml-4 lg:ml-6">
        <div className="w-2 h-2 rounded-sm border border-gray-600 transform rotate-45"></div>
        <span className="text-teal-400 text-xs mt-1">75%</span>
      </div>

      <div className="flex flex-col items-center relative z-10 ml-2 md:ml-4 lg:ml-6">
        <div className="w-2 h-2 rounded-sm border border-gray-600 transform rotate-45"></div>
        <span className="text-teal-400 text-xs mt-1">100%</span>
      </div>
    </div>
  );
}

export default CompactProgressBar;