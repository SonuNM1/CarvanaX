
import React, { useState } from 'react'
import {IoMdCloseCircle} from 'react-icons/io'
import imageCompression from 'browser-image-compression';
import { Button } from '@/components/ui/button';

const UploadImages = () => {

    const [selectedFileList, setSelectedFileList] = useState([])
    const [uploadedImages, setUploadedImages] = useState([]) ;
    
    const UPLOAD_PRESET = "CarvanaX";

    const onFileSelected = (e) => {
        const files = e.target.files ; 
        // console.log(files)

        if(!files){
            return ; // if the user cancels, then we get undefined value 
        }

        for(let i=0 ; i < files?.length ; i++){
            const file = files[i] ; 

            setSelectedFileList((prev) => [
                ...prev, 
                file
            ])

            // uploadImageToCloudinary(file) ; 
        }
    }

    // Upload image to cloudinary 

    const uploadImageToCloudinary = async (file) => {

        try {

        const formData = new FormData() ; 

        formData.append('file', file)
        formData.append('upload_preset', UPLOAD_PRESET)

        formData.append('cloud_name', 'dtbybby9o')

        const response = await fetch('https://api.cloudinary.com/v1_1/dtbybby9o/image/upload', {
                method: 'POST',
                body: formData
            })

            const uploadedImageURL = await response.json() ; 

            console.log('Uploaded        image URL: ', uploadedImageURL.url)

            return uploadedImageURL.secure_url ; 

        } catch (error) {
            console.error("Cloudinary upload error: ", error || error.message)

            alert('Image upload failed! Please try again.')
        }
    }

    const onImageRemove = (image, index) => {
        const result = selectedFileList.filter((item) => item!=image)

        setSelectedFileList(result) ; 
    }

    // const UploadImages = () => {
        
    // }

  return (
    <div>
        <h2 className='font-medium text-xl my-3'>Upload Car Images</h2>
      <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-5'>

        {
            selectedFileList.map((image, index) => (
                <div key={index}>
                    <IoMdCloseCircle className='absolute m-2 text-lg text-white'
                    onClick={()=> onImageRemove(image, index)}
                    />
                    <img 
                        src={URL.createObjectURL(image)}
                        className='w-full h-[130px] object-cover rounded-xl'
                    />
                </div>
            ))
        }

        <label htmlFor='upload-images'>
            <div className='border rounded-xl border-dotted border-[#405ef2] bg-blue-100 p-10 cursor-pointer hover:shadow-md'>
                <h2 className='text-lg text-center text-[#405ef2]'>+</h2>
            </div>
        </label>
        <input 
        type='file' 
        multiple={true} 
        id='upload-images'
        className='opacity-0'
        onChange={onFileSelected}
        />
      </div>
      <Button onClick={uploadImageToCloudinary}>Upload Images</Button>
    </div>
  )
}

export default UploadImages
