import React from "react";
import { FaCheck } from "react-icons/fa";

const Features = ({ features }) => {
  return (
    <div className="mt-6">
      <div className="p-10 bg-white rounded-xl border shadow-md">
        <h2 className="font-medium text-2xl mb-7">Features</h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5 mt-3">
          {features &&
            Object.entries(features).map(([key, value], index) =>
              value ? (
                <div key={index} className="flex items-center gap-2">
                  <FaCheck className="text-lg p-1 rounded-full bg-blue-100 text-[#405ef2]"/>
                  <span className="text-gray-700">{key.replace(/([A-Z])/g, " $1").trim().replace(/^./, str => str.toUpperCase())
                  }</span>
                </div>
              ) : null
            )}
        </div>
      </div>
    </div>
  );
};

export default Features;



// grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4