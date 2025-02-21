# 🚗 CarvanaX (Car Marketplace)  

A modern and responsive car listing platform where users can add, browse, and manage car listings with ease.  

## ✨ Features  

- ✅ **User Authentication** (including social auth like **Continue with Google**)  
- 🔍 **Search Functionality** for finding specific cars easily  
- ✉️ **Send Messages** directly to the car owner  
- ➕ **Add New Car Listings** with detailed specifications  
- 🏦 **Financial Calculator** to estimate monthly payments  
- 🛠️ **Edit & Delete** existing car listings  
- 🔄 **Filter by Category** (SUV, Sedan, Hybrid, Convertible, etc.)  
- 📋 **Detailed Car Specifications and Features**  
- 🚀 **Smooth Navigation and User-Friendly Interface**  

## 📸 Project Preview  

<table>
  <tr>
    <td><img src="./public/1.png" alt="Collage 1" width="400"/></td>
    <td><img src="./public/2.png" alt="Collage 2" width="400"/></td>
  </tr>
</table>

---

## 🚀 Getting Started  

### Clone the Repository  
```sh
git clone https://github.com/your-username/car-listing-platform.git
cd car-listing-platform




- npx shadcn@canary add select

- npm install @faker-js/faker --save-dev

- npm i moments 

- You can provide a way better UX than this when your app throws errors by providing your own ErrorBoundary or errorElement prop on your route.

- Drizzle ORM (Object Relation Mapping) and Neon 

- useSearchParams()

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




// await db.insert(CarImages).values({
      //   imageUrl: getDownloadURL, 
      //   carListingId: triggerUploadImages
      // })