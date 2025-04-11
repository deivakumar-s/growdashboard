
import React from "react";
import {useState,useEffect} from 'react';

const OrderHistoryTable= ()=> {
    const [dataArray, setDataArray] = useState([]); 

    // useEffect(() => {
    //   const fetchData = async () => {
    //     try {
    //       const response = await axios.get('https://api.example.com/data');
    //       setDataArray(response.data); 
    //     } catch (error) {
    //       console.error('Error fetching data:', error);
    //     }
    //   };
  
    //   fetchData(); 
    // }, []);
  
    useEffect(() => {
        // Static data for now (replace with your dynamic data later)
        const staticData = [
          {
            id: 1,
            date: '28-05-2024 12:26:44',
            pair: 'BNB/USDT',
            price: '601.80000000',
            side: 'Buy',
            orderType: 'Limit',
            amount: '187.2555562',
            total: '187651265',
          },
          {
            id: 2,
            date: '28-05-2024 12:26:44',
            pair: 'BNB/USDT',
            price: '601.80000000',
            side: 'Buy',
            orderType: 'Limit',
            amount: '187.2555562',
            total: '187651265',
          },
          {
            id: 3,
            date: '28-05-2024 12:26:44',
            pair: 'BNB/USDT',
            price: '601.80000000',
            side: 'Buy',
            orderType: 'Limit',
            amount: '187.2555562',
            total: '187651265',
          },
        ];
    
        setDataArray(staticData);
      }, []);
  return (
    <div className="rounded-md text-sm border border-[#2a2a2a] p-2 mt-4"> 
    <div className="rounded-lg p-4">
      {/* Navigation Tabs */}
      <div className="flex space-x-4 mb-4">
        <button className="text-green-500">Open Orders (3)</button>
        <button>Order History</button>
        <button>Cancel History</button>
      </div>
    </div>
  
    {/* 👇 Make table scrollable on small screens */}
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-700">
        <thead className="bg-[#1A1A1A]">
          <tr>
            {/* Table Headers */}
            <th className="px-2 py-2 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Date</th>
            <th className="px-2 py-2 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Pair</th>
            <th className="px-2 py-2 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Price</th>
            <th className="px-2 py-2 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Side</th>
            <th className="px-2 py-2 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Order Type</th>
            <th className="px-2 py-2 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Amount</th>
            <th className="px-2 py-2 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Total</th>
            <th className="px-2 py-2 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Action</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-800">
          {dataArray.map((order) => (
            <tr key={order.id}>
              <td className="px-2 py-2 whitespace-nowrap text-sm text-gray-400">{order.date}</td>
              <td className="px-2 py-2 whitespace-nowrap text-sm text-gray-400">{order.pair}</td>
              <td className="px-2 py-2 whitespace-nowrap text-sm text-gray-400">{order.price}</td>
              <td className="px-2 py-2 whitespace-nowrap text-sm text-teal-500">{order.side}</td>
              <td className="px-2 py-2 whitespace-nowrap text-sm text-gray-400">{order.orderType}</td>
              <td className="px-2 py-2 whitespace-nowrap text-sm text-gray-400">{order.amount}</td>
              <td className="px-2 py-2 whitespace-nowrap text-sm text-gray-400">{order.total}</td>
              <td className="px-2 py-2 whitespace-nowrap text-sm text-red-400">Cancel</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
  
  );
}

export default OrderHistoryTable;