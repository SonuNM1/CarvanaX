import React from "react";
import { Separator } from "./ui/separator";
import { LuFuel } from "react-icons/lu";
import { TbBrandSpeedtest } from "react-icons/tb";
import { GiGearStickPattern } from "react-icons/gi";
import { MdOpenInNew } from "react-icons/md";
import { Link } from "react-router-dom";

const CarItem = ({ car }) => {

  return (

    // <div className='rounded-xl bg-white border hover:shadow-md cursor-pointer'>

    // <h2 className='absolute m-2 bg-green-500 px-2 rounded-full text-sm text-white'>New</h2>

    //   <img
    //     src={car?.images?.[0]}
    //     width={'100%'}
    //     height={250}
    //     className='rounded-t-xl h-[180px] object-cover'
    //     alt={car?.listingTitle}
    //   />

    //   <div className='p-4'>
    //     <h2 className='font-bold text-black text-lg mb-2'>{car?.listingTitle}</h2>
    //     <Separator/>

    //     <div className='grid grid-cols-3 mt-5'>
    //         <div className='flex flex-col items-center text-center'>
    //             <LuFuel className='text-lg mb-2' />
    //             <h2 className='text-sm font-medium'>{car?.mileage} Miles</h2>
    //         </div>
    //         <div className='flex flex-col items-center'>
    //             <TbBrandSpeedtest
    //                 className='text-lg mb-2'
    //             />
    //             <h2>{car?.fuelType}</h2>
    //         </div>
    //         <div className='flex flex-col items-center'>
    //             <GiGearStickPattern
    //                 className='text-lg mb-2'
    //             />
    //             <h2>{car?.transmission}</h2>
    //         </div>
    //     </div>

    //     <Separator
    //         className='my-2'
    //     />

    //     <div className='flex items-center justify-between'>
    //         <h2 className='font-bold text-xl'>{car?.sellingPrice || 'N/A'}</h2>
    //         <h2 className='text-[#405ef2] text-sm flex gap-2 items-center'>
    //         View Details  <MdOpenInNew/>
    //         </h2>
    //     </div>
    //   </div>
    // </div>

    <div className="rounded-xl bg-white border hover:shadow-md cursor-pointer">
      <Link to={"/listing-details/" + car?.id} className="block">
        <h2 className="absolute m-2 bg-green-500 px-2 rounded-full text-sm text-white">
          New
        </h2>

        <img
          src={car?.images?.[0]}
          width={"100%"}
          height={250}
          className="rounded-t-xl h-[180px] object-cover"
          alt={car?.listingTitle}
        />
      </Link>

      <div className="p-4">
        <h2 className="font-bold text-black text-lg mb-2">
          {car?.listingTitle}
        </h2>
        <Separator />

        <div className="grid grid-cols-3 mt-5">
          <div className="flex flex-col items-center text-center">
            <LuFuel className="text-lg mb-2" />
            <h2 className="text-sm font-medium">{car?.mileage} Miles</h2>
          </div>
          <div className="flex flex-col items-center">
            <TbBrandSpeedtest className="text-lg mb-2" />
            <h2>{car?.fuelType}</h2>
          </div>
          <div className="flex flex-col items-center">
            <GiGearStickPattern className="text-lg mb-2" />
            <h2>{car?.transmission}</h2>
          </div>
        </div>

        <Separator className="my-2" />

        <div className="flex items-center justify-between">
          <h2 className="font-bold text-xl">{car?.sellingPrice || "N/A"}</h2>
          <Link
            to={"/listing-details/" + car?.id}
            className="text-[#405ef2] hover:text-purple-800 text-sm flex gap-2 items-center"
          >
            View Details <MdOpenInNew />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CarItem;

// 3.31
