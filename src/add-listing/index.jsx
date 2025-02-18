import Header from '@/components/Header'
import React, { useEffect, useState } from 'react'
import carDetails from "./../Shared/carDetails.json"
import InputField from './components/InputField'
import DropdownField from './components/DropdownField'
import { Separator } from '@/components/ui/separator'
import features from './../Shared/features.json'
import { Checkbox } from '@/components/ui/checkbox'
import { Button } from '@/components/ui/button'
import TextAreaField from './components/TextAreaField'
import { db } from './../../configs'
import { CarImages, CarListing } from './../../configs/schema'
import IconField from './components/IconField'
import UploadImages from './components/UploadImages'
import {BiLoaderAlt} from 'react-icons/bi'
import { toast } from 'sonner'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { useUser } from '@clerk/clerk-react'
import moment from 'moment'
import { eq } from 'drizzle-orm'
import Service from '@/Shared/Service'

const AddListing = () => {

  const [formData, setFormData] = useState([])
  const [featuresData, setFeaturesData] = useState([])
  const [triggerUploadImages, setTriggerUploadImages] = useState()
  const [loader, setLoader] = useState(false)
  const [carInfo, setCarInfo] = useState() ; 

  const [searchParams] = useSearchParams()

  const {user} = useUser() ; 

  const navigate = useNavigate()

  const mode = searchParams.get('mode')
  const recordId = searchParams.get('id')

  useEffect(()=> {
    if(mode == 'edit'){
      GetListingDetail()
    }
  }, [])

  const GetListingDetail = async () => {
      const result = await db.select().from(CarListing)
        .innerJoin(CarImages, eq(CarListing.id , CarImages.carListingId))
        .where(eq(CarListing.id, recordId))

      const resp = Service.FormatResult(result)
      
      setCarInfo(resp[0])
      setFormData(resp[0])
      setFeaturesData(resp[0].features)

  }

  /**
   * Used to capture user input from form
   * @param {*} name 
   * @param {*} value 
   */

  const handleInputChange = (name, value) => {
    setFormData((prevData) => ({
      ...prevData, 
      [name] : value
    }))
  }

  /**
   * Used to save selected feature list 
   * @param {*} name 
   * @param {*} value 
   */

  const handleFeaturesChange = (name, value) => {
    setFeaturesData((prevData) => ({
      ...prevData, 
      [name]: value
    }))

    console.log('Features data: ',featuresData)
  }

  const onSubmit = async (e) => {

    setLoader(true) ;
    e.preventDefault() ; 
    console.log("form data: ",formData) ; 

    toast('Please Wait...')

    if(mode == 'edit'){
      const result = await db.update(CarListing).set({
        ...formData,
          features: featuresData,
          createdBy: user?.primaryEmailAddress?.emailAddress,
          postedOn: moment().format('DD/MM/yyyy')
      }).where(eq(CarListing.id, recordId)).returning({id: CarListing.id}) ; 

      console.log(result)

      navigate('/profile')
      setLoader(false)
    }
    else{
      try {
        const result = await db.insert(CarListing).values({
          ...formData,
          features: featuresData,
          createdBy: user?.primaryEmailAddress?.emailAddress,
          userName: user?.fullName,
          userImageUrl: user?.imageUrl,
          postedOn: moment().format('DD/MM/yyyy')
        }
      ).returning({id:CarListing.id}) ; 
  
      if(result){
        console.log('Car listing saved with ID: ', result[0]?.id)
  
        setTriggerUploadImages(result[0]?.id)
  
        setLoader(false) ; 
      }
  
      } catch (error) {
        console.log('Error in data listing: ', error)
      }
    }    
  }

  return (
    <div>
      <Header/>
      <div className='px-10 md:px-20 my-10'>
        <h2 className='font-bold text-4xl'>Add New Listing</h2>

        <form className='p-10 border rounded-xl mt-10'>

            {/* Car Details */}

            <div>
                <h2 className='font-medium text-xl mb-6'>Car Details</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                    {
                        carDetails.carDetails.map((item, index) => (
                          <div key={index}>
                          <label
                            className='text-sm flex items-center gap-2 mb-1'
                          >
                          <IconField icon={item?.icon} />
                          {item?.label} {item.required && <span className='text-red-500'>*</span>} </label>
                            {item.fieldType == 'text' || item.fieldType == 'number' ? <InputField item={item}
                            handleInputChange={handleInputChange}
                            carInfo={carInfo}
                            /> 
                            : item.fieldType == 'dropdown' ? <DropdownField item={item} 
                             handleInputChange={handleInputChange}
                             carInfo={carInfo}
                            />
                            : item.fieldType == 'textarea' ? <TextAreaField item={item}
                            handleInputChange={handleInputChange}
                            carInfo={carInfo}
                            />  
                            : null }
                          </div>
                        ))
                    }
                </div>
            </div>

            <Separator className="my-6"/>

            {/* Features list */}

            <div>
              <h2 className='font-medium text-xl my-6'>Features</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                {
                  features.features.map((item, index) => (
                    <div 
                    className="flex gap-2 items-center"
                    key={index}>
                      <Checkbox 
                        onCheckedChange={(value) => handleFeaturesChange(item.name, value)}
                        checked={featuresData?.[item?.name]}
                      /> <h2>{item.label}</h2>
                    </div>
                  ))
                }
              </div>
            </div>

            {/* Car images */}

            <Separator className='my-6'/>
            
            <UploadImages
              triggerUploadImages={triggerUploadImages}

              carInfo={carInfo}
              mode={mode}

              setLoader={(v) => {
                setLoader(v) ; 
                navigate('/profile')
              }}
            />

            <div className='mt-10 flex justify-end'>
              <Button 
              type="submit"
              disabled={loader}
              onClick={(e) => onSubmit(e)}
              >
              {
                !loader ? "Submit" : <BiLoaderAlt className='animate-spin text-lg'/> 
              }
              Submit</Button>
            </div>

        </form>

      </div>
    </div>
  )
}

export default AddListing

// 1.51 - 2.30 - 3.02 - 3.12 - 3.58