import React, { useEffect, useState } from "react";
import axios from "axios";
import { ChevronLeft, ChevronRight } from "lucide-react";

const OrderHistoryTable = () => {
  const [dataArray, setDataArray] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 3;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/comments?_limit=12");
        setDataArray(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = dataArray.slice(indexOfFirstRow, indexOfLastRow);
  const totalPages = Math.ceil(dataArray.length / rowsPerPage);

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-700">
          <thead className="bg-[#1A1A1A]">
            <tr>
              <th className="px-2 py-2 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">ID</th>
              <th className="px-2 py-2 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Post ID</th>
              <th className="px-2 py-2 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Name</th>
              <th className="px-2 py-2 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Email</th>
              <th className="px-2 py-2 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Comment</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-800">
            {currentRows.map((comment) => (
              <tr key={comment.id}>
                <td className="px-2 py-2 text-sm text-gray-400">{comment.id}</td>
                <td className="px-2 py-2 text-sm text-gray-400">{comment.postId}</td>
                <td className="px-2 py-2 text-sm text-gray-400">{comment.name}</td>
                <td className="px-2 py-2 text-sm text-gray-400">{comment.email}</td>
                <td className="px-2 py-2 text-sm text-gray-400">{comment.body}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-center items-center mt-4 space-x-4">
  <button
    onClick={handlePrev}
    className="text-white px-3 py-1 rounded disabled:opacity-50 flex items-center gap-1"
    disabled={currentPage === 1}
  >
    <ChevronLeft size={18} />
  </button>

  <span className="text-white text-sm">
  {currentPage} 
  </span>

  <button
    onClick={handleNext}
    className=" text-white px-3 py-1 rounded disabled:opacity-50 flex items-center gap-1"
    disabled={currentPage === totalPages}
  >
    <ChevronRight size={18} />
  </button>
</div>

    </div>
  );
};

export default OrderHistoryTable;
