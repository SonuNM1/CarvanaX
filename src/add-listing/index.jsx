import Header from '@/components/Header'
import React, { useState } from 'react'
import carDetails from "./../Shared/carDetails.json"
import InputField from './components/InputField'
import DropdownField from './components/DropdownField'
import { Separator } from '@/components/ui/separator'
import features from './../Shared/features.json'
import { Checkbox } from '@/components/ui/checkbox'
import { Button } from '@/components/ui/button'
import TextAreaField from './components/TextAreaField'
import { db } from './../../configs'
import { CarListing } from './../../configs/schema'
import IconField from './components/IconField'
import UploadImages from './components/UploadImages'

const AddListing = () => {

  const [formData, setFormData] = useState([])
  const [featuresData, setFeaturesData] = useState([])

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
    e.preventDefault() ; 

    console.log("form data: ",formData) ; 

    try {
      const result = await db.insert(CarListing).values({
        ...formData,
        features: featuresData
      }) ; 

    if(result){
      console.log('Data saved')
    }
    } catch (error) {
      console.log('Error in data listing: ', error)
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
                            /> 
                            : item.fieldType == 'dropdown' ? <DropdownField item={item} 
                             handleInputChange={handleInputChange}
                            />
                            : item.fieldType == 'textarea' ? <TextAreaField item={item}
                            handleInputChange={handleInputChange}
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
                      /> <h2>{item.label}</h2>
                    </div>
                  ))
                }
              </div>
            </div>

            {/* Car images */}

            <Separator className='my-6'/>
            
            

            <div className='mt-10 flex justify-end'>
              <Button 
              type="submit"
              onClick={(e) => onSubmit(e)}
              >Submit</Button>
            </div>

        </form>

        <UploadImages/>

      </div>
    </div>
  )
}

export default AddListing

// 1.51 - 2.30 - 2.50