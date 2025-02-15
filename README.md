
- npx shadcn@canary add select

- npm install @faker-js/faker --save-dev  

- Drizzle ORM (Object Relation Mapping) and Neon 

- Drizzle studio 

        "db:push": "drizzle-kit push",
        "db:studio": "drizzle-kit studio"


### Upload Image Code 


```js
import React, { useState } from 'react';

const UploadImages = () => {
    const [selectedFileList, setSelectedFileList] = useState([]); // Store selected images

    const onFileSelected = (e) => {
        const files = e.target.files;

        for (let i = 0; i < files?.length; i++) {
            const file = files[i];

            setSelectedFileList((prev) => [...prev, file]); // Append new images
        }
    };

    return (
        <div>
            <h2 className='font-medium text-xl my-3'>Upload Car Images</h2>

            {/* Image Display Grid */}
            <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-5'>

                {/* Show Selected Images */}
                {selectedFileList.map((image, index) => (
                    <div key={index}>
                        <img 
                            src={URL.createObjectURL(image)}
                            className='w-full h-[130px] object-cover rounded-xl'
                        />
                    </div>
                ))}

                {/* Upload Button */}
                <label htmlFor='upload-images'>
                    <div className='border rounded-xl border-dotted border-[#405ef2] bg-blue-100 p-10 cursor-pointer hover:shadow-md'>
                        <h2 className='text-lg text-center text-[#405ef2]'>+</h2>
                    </div>
                </label>

                {/* Hidden File Input */}
                <input 
                    type='file' 
                    multiple={true} 
                    id='upload-images'
                    className='opacity-0'
                    onChange={onFileSelected}
                />
            </div>
        </div>
    );
};

export default UploadImages;
