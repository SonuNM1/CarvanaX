import { Button } from "@/components/ui/button";
import React from "react";

const OwnersDetail = ({ carDetail }) => {
  console.log("owner photo: ", carDetail?.userImageUrl);

  return (
    <div className="p-10 border rounded-xl shadow-md mt-7">
      <h2 className="font-medium text-2xl mb-3">Owner</h2>

      {/* Flex container for image and details */}
      <div className="flex items-center gap-4">
        {/* Owner Image */}
        <img
          src={carDetail?.userImageUrl}
          className="w-[70px] h-[70px] rounded-full"
          alt="Owner"
        />
        
        {/* Owner Details */}
        <div>
          <h2 className="font-bold text-xl">{carDetail?.userName}</h2>
          <h2 className="text-gray-500">{carDetail?.createdBy}</h2>
        </div>
      </div>

      {/* Message Button */}
      <Button className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white cursor-pointer">Message Owner</Button>
    </div>
  );
};

export default OwnersDetail;
