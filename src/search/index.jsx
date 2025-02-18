import Service from '@/Shared/Service';
import { db } from './../../configs';
import { CarImages, CarListing } from './../../configs/schema';
import { eq } from 'drizzle-orm';
import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import Header from '@/components/Header';
import Search from '@/components/Search';
import CarItem from '@/components/CarItem';

const SearchByOptions = () => {

    const [searchParams] = useSearchParams()
    const [carList, setCarList] = useState([])

    const condition = searchParams.get('cars') ; 
    const maker = searchParams.get('maker')
    const price = searchParams.get('price')

    console.log('Cars: ', condition, ' Maker: ', maker , 'Price: ', price) ; 

    useEffect(()=> {
        GetCarList()
    }, [])

    const GetCarList = async () => {

        const result = await db.select().from(CarListing)
            .innerJoin(CarImages, eq(CarListing.id , CarImages.carListingId))
            .where(condition!=undefined && eq(CarListing.condition, condition))
            .where(maker!=undefined && eq(CarListing.maker, maker))

        const resp = Service.FormatResult(result) ; 

        console.log('get car list: ', resp)

        setCarList(resp) ; 
    }

  return (
    <div>
      <Header/>

      <div className='p-16 bg-black flex justify-center'>
        <Search/>
      </div>
      <div className='p-10 md:px-20'>
        <h2 className='font-bold text-4xl '>Search Result</h2>

        {/* List of Cars */}

        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-10 gap-4'>
        {
            carList?.length > 0 ? carList.map((item, index) => (
                <div key={index}>
                    <CarItem car={item}/>
                </div>
            )) : 

            // skeleton loading

            [1,2,3,4,5,6].map((item, index) => (
                <div 
                className='h-[320px] rounded-xl bg-slate-200 animate-pulse'
                key={index}
                >
                </div>
            ))
        } 
        </div>

      </div>
    </div>
  )
}

export default SearchByOptions

// 4.30