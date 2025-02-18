import React, { useState } from "react";
import {
    Select, 
    SelectTrigger,
    SelectValue, 
    SelectContent, 
    SelectItem
} from "@/components/ui/select";
import { Separator } from "./ui/separator";
import {CiSearch} from 'react-icons/ci'
import Data from "@/Shared/Data";
import { Link } from "react-router-dom";


const Search = () => {

  const [cars, setCars] = useState()
  const [maker, setMaker] = useState()
  const [price, setPrice] = useState()

  return (
    <div className="p-2 md:p-5 bg-white rounded-md md:rounded-full flex-col md:flex md:flex-row gap-10 px-5 items-center w-[60%]">

      <Select onValueChange={(value)=> setCars(value)} >
        <SelectTrigger className="outline-none md:border-none w-full shadow-none text-lg">
          <SelectValue placeholder="Cars" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="New">New</SelectItem>
          <SelectItem value="Used">Used</SelectItem>
          <SelectItem value="Certified Pre-Owned">Certified Pre-Owned</SelectItem>
        </SelectContent>
      </Select>

      <Separator orientation="vertical" className="hidden md:block" />

      <Select onValueChange={(value) => setMaker(value)} >
        <SelectTrigger className=" outline-none md:border-none w-full shadow-none text-lg">
          <SelectValue placeholder="Car Makers" />
        </SelectTrigger>
        <SelectContent>
          {
            Data.CarMakers.map((maker, index) => (
              <SelectItem 
              key={index}
              value={maker.name}
              >{maker.name}</SelectItem>
            ))
          }
        </SelectContent>
      </Select>

      <Separator 
      orientation="vertical"
      className="hidden md:block"
      />

      <Select onValueChange={(value) => setPrice(value)} >
        <SelectTrigger className=" outline-none md:border-none w-full shadow-none text-lg">
          <SelectValue placeholder="Pricing" />
        </SelectTrigger>
        <SelectContent>
          {
            Data.Pricing.map((price, index) => (
              <SelectItem 
              key={index}
              value={price.amount}>{price.amount}</SelectItem>
            ))
          }
        </SelectContent>
      </Select>

      <Link to={'/search?cars='+cars+"&maker="+maker+"&price="+price} >
        <CiSearch className="text-[50px] bg-[#405ef2] rounded-full p-3 text-white hover:scale-105 transition-all cursor-pointer animate-bounce"/>
      </Link>
    </div>
  );
};

export default Search;

// 49
