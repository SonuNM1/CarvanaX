import { db } from "./../../../configs";
import { CarImages } from "./../../../configs/schema";
import React, { useEffect, useState } from "react";
import { IoMdCloseCircle } from "react-icons/io";

const UploadImages = ({triggerUploadImages, setLoader}) => {

  const [selectedFileList, setSelectedFileList] = useState([]);
  const [uploadedImages, setUploadedImages] = useState([]);

  useEffect(()=> {

    if(triggerUploadImages){
      selectedFileList.forEach(async (file) => {
        await UploadImageToServer(file, triggerUploadImages)
      })

      setSelectedFileList([]) ; // clear selected files after upload
    }
  }, [triggerUploadImages])

  const UPLOAD_PRESET = "CarvanaX";
  const CLOUD_NAME = "dtbybby9o";

  // Handle file selection
  const onFileSelected = (e) => {
    const files = Array.from(e.target.files);
    if (!files.length) return; // If user cancels file selection, return

    setSelectedFileList((prev) => [...prev, ...files]);
  };

  // Upload all selected images
  const uploadImages = async () => {
    if (selectedFileList.length === 0) {
      alert("No images selected to upload.");
      return;
    }

    const uploadedURLs = [];

    for (const file of selectedFileList) {
      const url = await UploadImageToServer(file);
      if (url) uploadedURLs.push(url); // Store successful uploads
    }

    setUploadedImages(uploadedURLs);
    setSelectedFileList([]); // Clear selection after upload
  };

  // Upload a single image to Cloudinary
  
  const UploadImageToServer = async (file, carListingId) => {

    setLoader(true)

    try {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", UPLOAD_PRESET);

      const response = await fetch(
        `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
        {
          method: "POST",
          body: formData,
        }
      );

      const uploadedImage = await response.json();

      if (!uploadedImage.secure_url) throw new Error("Upload failed");

      console.log("Uploaded Image URL:", uploadedImage.secure_url);

      // save image url to database 

      await db.insert(CarImages).values({
        imageUrl: uploadedImage.secure_url,
        carListingId
      })

      return uploadedImage.secure_url

      setLoader(false)

    } catch (error) {
      console.error("Cloudinary upload error:", error.message);
      alert("Image upload failed! Please try again.");
      return null;
    }
  };

  // Remove an image from the selected list
  const onImageRemove = (image) => {
    setSelectedFileList((prev) => prev.filter((item) => item !== image));
  };

  return (
    <div>
      <h2 className="font-medium text-xl my-3">Upload Images</h2>
      
      {/* Image Preview Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-5">
        {selectedFileList.map((image, index) => (
          <div key={index} className="relative">
            <IoMdCloseCircle
              className="absolute m-2 text-lg text-white cursor-pointer"
              onClick={() => onImageRemove(image)}
            />
            <img
              src={URL.createObjectURL(image)}
              className="w-full h-[130px] object-cover rounded-xl"
              alt="preview"
            />
          </div>
        ))}

        {/* File Upload Button */}
        <label htmlFor="upload-images">
          <div className="border rounded-xl border-dotted border-[#405ef2] bg-blue-100 p-10 cursor-pointer hover:shadow-md">
            <h2 className="text-lg text-center text-[#405ef2]">+</h2>
          </div>
        </label>

        {/* Hidden File Input */}
        <input
          type="file"
          multiple
          id="upload-images"
          className="opacity-0 absolute"
          onChange={onFileSelected}
        />
      </div>

    </div>
  );
};

export default UploadImages;
